/* globals yithWcwlAddToWishlist */

import { StrictMode } from 'react'
import { createPortal } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { addAction } from '@wordpress/hooks'
import store from '../../app/store'

import { ButtonDataProvider } from '../../utils/'
import AddToWishlist from './add-to-wishlist'

const initApp = () => {
	jQuery( document ).on( 'yith_wcwl_fragments_replaced', ( event, { data } ) => {
		if ( ! data?.avoidDataInvalidation ) {
			store.dispatch( { type: 'FORCE_INVALIDATION' } )
		}
	} )
	initAddToWishlistButtons();
}

const initAddToWishlistButtons = () => {

	const buttons = document.querySelectorAll(
		'.yith-add-to-wishlist-button-block:not(.yith-add-to-wishlist-button-block--initialized)'
	);

	if ( buttons ) {
		buttons.forEach( initAddToWishlistButton )
	}
}

const initAddToWishlistButton = container => {
	const productId = container.getAttribute( 'data-product-id' );
	const buttonId = Date.now() + '' + productId;
	const attributes = { productId, buttonId, ...JSON.parse( container.getAttribute( 'data-attributes' ) ) };
	let portalContainer = false;

	if ( 'before_image' === yithWcwlAddToWishlist.globalOptions?.loop_position ) {
		portalContainer = container
			.closest( yithWcwlAddToWishlist.containerSelectors.productContainer.join( ', ' ) )
			?.querySelector( yithWcwlAddToWishlist.containerSelectors.thumbnailContainer.join( ', ' ) );

		if ( portalContainer ) {
			attributes.isOverProductImage = true;
		}
	}

	const appComponent = <Provider store={ store }>
		<StrictMode>
			<ButtonDataProvider attributes={ attributes }>
				<AddToWishlist/>
			</ButtonDataProvider>
		</StrictMode>
	</Provider>;

	if ( portalContainer ) {
		createRoot( container ).render( createPortal( appComponent, portalContainer ) );
	} else {
		createRoot( container ).render( appComponent );
	}

	container.classList.add( 'yith-add-to-wishlist-button-block--initialized' )
}

document.addEventListener( 'DOMContentLoaded', initApp );
addAction( 'yith_wcwl_init_add_to_wishlist_components', 'yith-woocommerce-wishlist', initAddToWishlistButtons );