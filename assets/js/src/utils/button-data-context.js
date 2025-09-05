/* globals yithWcwlAddToWishlist */

import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeProvider } from '@lapilli-ui/styles';
import { createContext, useContextSelector } from 'use-context-selector';
import useProductData from '../components/add-to-wishlist/hooks/use-product-data';
import { useDispatch } from 'react-redux';
import { addProductToWishlist, removeProductFromWishlist } from '../features/products-data/products-data-actions';
import classNames from 'classnames';
import { ComponentsExtensionProvider } from './index'
import useFeedback from '../components/add-to-wishlist/hooks/use-feedback';

const ButtonDataContext = createContext( {} );

export const useButtonAttributes = ( mergeWithGlobalOptions = true ) => mergeWithGlobalOptions ? { ...yithWcwlAddToWishlist.globalOptions, ...(useContext( ButtonDataContext ).attributes) } : useContext( ButtonDataContext ).attributes;
export const useButtonData = () => useContextSelector( ButtonDataContext, v => v );
export const useButtonStyle = () => {
	return useContextSelector( ButtonDataContext, ( v ) => v?.style );
}
export const useAddToWishlistButtonData = () => useContextSelector(
	ButtonDataContext, ( { href, icon, buttonRef: ref, className, onButtonClick: onClick, label } ) => {
		return {
			label,
			href,
			icon,
			ref,
			className,
			onClick
		}
	}
);
export const useButtonTooltipData = () => useContextSelector(
	ButtonDataContext,
	( state ) => {
		return {
			hasDataLoaded: state?.hasDataLoaded,
			add_label: state?.add_label,
			remove_label: state?.remove_label,
			browse_label: state?.browse_label,
			move_label: state?.move_label,

			isAdded: state?.isAdded,
			behaviour: state?.behaviour,
			buttonRef: state?.buttonRef,
			isDropdownOpen: state?.isDropdownOpen,
			tooltipEnabled: state?.tooltipEnabled,
		}
	}
)
export const useButtonDropdownData = () => useContextSelector(
	ButtonDataContext,
	( state ) => {
		return {
			buttonRef: state?.buttonRef,
			availableLists: state?.availableLists,
			isDropdownOpen: state?.isDropdownOpen,
			handleCloseDropdown: state?.handleCloseDropdown,
			wishlists: state?.wishlists,
		}
	}
)


export const ButtonDataProvider = ( { children, attributes, dataExtensions, componentsExtensions } ) => {
	const [ isPerformingAction, setIsPerformingAction ] = useState( false );
	const richAttributes = { ...yithWcwlAddToWishlist.globalOptions, ...attributes };

	const {
		buttonId,
		productId: productIdAttribute,
		style,
		isOverProductImage,

		add_label,
		added_label,
		remove_label,
		browse_label,

		icon,
		icon_type,
		custom_icon,

		added_icon: added_icon_attribute,
		added_icon_type,
		custom_added_icon,

		is_single,
		loop_position,
		button_over_image_style,
		position_over_image_in_loop,
		behaviour: attribute_behaviour,
	} = richAttributes;

	const [ productId, setProductId ] = useState( productIdAttribute )

	const {
		isAdded,
		isLoading,
		alreadyIn,
		productData,
		hasDataLoaded,
	} = useProductData( productId, attributes );

	const {
		feedbackType,
		showFeedback,
		feedbackMessage,
		feedbackDuration,
		setFeedbackType,
		setShowFeedback,
		setFeedbackMessage,
		setFeedbackDuration,
		addFeedback,
		clearFeedback,
		feedbackAnimation,
		setFeedbackAnimation,
	} = useFeedback( productId, richAttributes, isPerformingAction );

	const buttonRef = useRef();
	const dispatch = useDispatch();
	const add_icon = (() => {
		if ( 'custom' === icon_type ) {
			return custom_icon;
		}

		return icon;
	})();
	const added_icon = (() => {
		if ( added_icon_type === 'same' ) {
			return add_icon;
		}

		if ( 'custom' === added_icon_type ) {
			return custom_added_icon;
		}

		return added_icon_attribute;
	})();
	const iconToDisplay = isAdded ? added_icon : add_icon;

	const behaviour = (() => {
		if ( ! yithWcwlAddToWishlist.isUserLoggedIn && 'yes' === yithWcwlAddToWishlist.globalOptions.wishlist_disabled_for_unauthenticated_users ) {
			return 'view';
		}
		return [ 'add', 'remove' ].includes( attribute_behaviour ) ? attribute_behaviour : 'view'
	})();
	const href = (() => {
		if ( ! yithWcwlAddToWishlist.isUserLoggedIn && 'yes' === yithWcwlAddToWishlist.globalOptions.wishlist_disabled_for_unauthenticated_users ) {
			return yithWcwlAddToWishlist.login_wishlist_url.replace( '%product_id%', productId );
		}
		return 'view' === behaviour && isAdded ? yithWcwlAddToWishlist.wishlist_url : null
	})();

	const handleActionCallback = callback => () => {
		setIsPerformingAction( false );
		jQuery( document ).trigger( 'yith_wcwl_reload_fragments', { firstLoad: false, avoidDataInvalidation: true } );
		'function' === typeof callback && callback();
	}
	const handleButtonAction = ( action, callback ) => {
		if ( 'function' === typeof action ) {
			setIsPerformingAction( true )
			action().then( handleActionCallback( callback ) )
		}
	}
	const handleAddToWishlist = ( callback ) => handleButtonAction( async () => {
		await dispatch( addProductToWishlist( productId ) );
	}, callback );
	const handleRemoveFromWishlist = ( callback ) => handleButtonAction( async () => {
		await dispatch( removeProductFromWishlist( productId ) );
	}, callback );
	const onButtonClick = ( event) => {
		if ( href ) return false;
		event?.preventDefault();
		event?.stopPropagation();
		if ( ! hasDataLoaded || isLoading ) return false;

		if ( isAdded && behaviour !== 'add' ) {
			if ( behaviour === 'remove' ) {
				handleRemoveFromWishlist();
			} else {
				window.location = yithWcwlAddToWishlist.wishlist_url
			}
		} else {
			handleAddToWishlist();
		}
	}

	const getStyle = () => {
		if ( ! is_single && loop_position === 'before_image' && isOverProductImage ) return 'icon-button';
		if ( style === 'link' ) return 'anchor';
		return style === 'button_default' ? 'themed-button' : 'custom-button';
	}
	const getLabel = () => {
		if ( isAdded ) {
			if ( behaviour === 'add' && ! alreadyIn ) return added_label;
			if ( behaviour === 'remove' ) return remove_label;
			if ( behaviour === 'view' ) return browse_label;
		}
		return add_label;
	}

	const getClasses = () => classNames( {
		'yith-wcwl-add-to-wishlist-button': true,
		[ `yith-wcwl-add-to-wishlist-button--${ getStyle() }` ]: true,
		'yith-wcwl-add-to-wishlist-button--loading': isLoading,
		'yith-wcwl-add-to-wishlist-button--first-loading': isLoading && productData?.isAdded === undefined,
		'yith-wcwl-add-to-wishlist-button--added': isAdded,
		'yith-wcwl-add-to-wishlist-button--single': is_single,
		'yith-wcwl-add-to-wishlist-button-over-image': isOverProductImage,
		[ `yith-wcwl-add-to-wishlist-button-over-image--${ position_over_image_in_loop || 'top-left' }` ]: isOverProductImage && loop_position === 'before_image',
		'yith-wcwl-add-to-wishlist-button-over-image--hover': isOverProductImage && loop_position === 'before_image' && button_over_image_style === 'hover' && ! isAdded,
		[ yithWcwlAddToWishlist?.buttonClasses + ' yith-wcwl-theme-button-style' ]: getStyle() === 'themed-button',
	} );

	useEffect( () => {
		if ( is_single ) {
			const handleFoundVariation = ( e, variation ) => {
				const form = e.target;
				const parentId = form?.getAttribute( 'data-product_id' )
				if ( parentId === attributes?.productId ) {
					setProductId( variation.variation_id )
				}
			};
			const handleResetVariation = () => setProductId( productIdAttribute );

			jQuery( document ).on( 'found_variation', handleFoundVariation );
			jQuery( document ).on( 'reset_data', handleResetVariation );

			return () => {
				jQuery( document ).off( 'found_variation', handleFoundVariation );
				jQuery( document ).off( 'reset_data', handleResetVariation );
			}
		}
	}, [] );

	let value = {
		buttonId,
		productId,
		attributes,
		productData,
		hasDataLoaded,
		richAttributes,
		isOverProductImage,

		isPerformingAction,
		setIsPerformingAction,

		icon: iconToDisplay,
		added_icon,
		add_icon,

		add_label,
		added_label,
		remove_label,
		browse_label,

		href,
		isAdded,
		is_single,
		isLoading,
		buttonRef,
		behaviour,
		style: getStyle(),
		label: getLabel(),
		className: getClasses(),

		feedbackType,
		showFeedback,
		feedbackMessage,
		feedbackDuration,
		feedbackAnimation,

		setFeedbackType,
		setShowFeedback,
		setFeedbackMessage,
		setFeedbackDuration,
		setFeedbackAnimation,

		addFeedback,
		clearFeedback,

		onButtonClick,
		handleButtonAction,
		handleAddToWishlist,
		handleRemoveFromWishlist,
	}

	if ( 'function' === typeof dataExtensions ) {
		value = {
			...value,
			...dataExtensions( value )
		}
	}

	return <ButtonDataContext.Provider value={ value }>
		<ComponentsExtensionProvider extensions={ componentsExtensions }>
			<ThemeProvider>
				{ children }
			</ThemeProvider>
		</ComponentsExtensionProvider>
	</ButtonDataContext.Provider>
};