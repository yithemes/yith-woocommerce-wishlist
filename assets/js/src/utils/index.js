/* globals yithWcwlAddToWishlist */

import wishlistApi from './wishlist-api'
import addToWishlistApi from './add-to-wishlist-api'
import {
	useButtonData,
	ButtonDataProvider,
	useButtonAttributes,
} from './button-data-context'

import {
	useComponentsExtension,
	ComponentsExtensionProvider,
} from './components-extension-context'
import { __ } from '@wordpress/i18n';
import reactStringReplace from 'react-string-replace';

const formatOptions = ( list, labelKey ) => {
	let options = [];
	Object.keys( list ).forEach( key => {
		let label = labelKey ? list[ key ][ labelKey ] : list[ key ];
		options.push( {
			value: isNaN( key ) ? key : Number( key ),
			label
		} );
	} );

	return options;
}

const formatPascalCaseString = ( str ) => str.split( '-' ).map( substr => substr[ 0 ].toUpperCase() + substr.slice( 1 ) ).join( '' )

const getPrivacyOptions = ( withDescription ) => {
	const options = formatOptions( yithWcwlAddToWishlist.privacy_options );

	withDescription && options.forEach( ( option ) => options[ option.value ][ 'label' ] = <><b>{ options[ option.value ][ 'label' ] }</b> - { yithWcwlAddToWishlist.privacy_options_descriptions[ option.value ] }</> );

	return options;
}

const isValidHttpUrl = string => {
	let url;

	try {
		url = new URL( string );
	} catch ( e ) {
		return false;
	}

	return url.protocol === 'http:' || url.protocol === 'https:';
}

const getProductFreeListsOptions = ( addCreateOption ) => {
	let { availableLists, wishlists } = useButtonData();

	if ( ! Object.keys( wishlists ).length ) {
		wishlists = {
			default: {
				id: 'default',
				name: yithWcwlAddToWishlist?.default_wishlist_name
			}
		};
		availableLists.push( 'default' );
	}
	let options = formatOptions( Object.keys( wishlists )
		.filter( key => availableLists.includes( key ) )
		.reduce( ( obj, key ) => {
			obj[ key ] = wishlists[ key ];
			return obj;
		}, {} ), 'name' );

	if ( addCreateOption ) {
		options.push( {
			value: 'create',
			label: __( 'Create a new list', 'yith-woocommerce-wishlist' ),
			className: 'yith-wcwl-modal__wishlist-select__create-option'
		} );
	}
	return options;
};

const reactMultipleStringReplace = ( string, replacements ) => {
	replacements.forEach( ( { search, replace } ) => string = reactStringReplace( string, search, replace ) )

	return string;
}

export {
	formatOptions,
	isValidHttpUrl,
	formatPascalCaseString,
	reactMultipleStringReplace,

	getPrivacyOptions,
	getProductFreeListsOptions,

	useButtonData,
	ButtonDataProvider,
	useButtonAttributes,

	useComponentsExtension,
	ComponentsExtensionProvider,

	wishlistApi,
	addToWishlistApi,
};