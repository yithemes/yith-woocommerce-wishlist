import { useButtonData, useComponentsExtension } from '../../../../../utils';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default () => {
	const {
		feedbackMessage,
		feedbackType,
		showFeedback,
		buttonRef,
		isOverProductImage,
		richAttributes: { feedback_type },
		feedbackDuration
	} = useButtonData();

	const [ feedbackFadeOut, setFeedbackFadeOut ] = useState( false );

	const container = 'error' !== feedbackType && isOverProductImage && buttonRef?.current ?
		buttonRef?.current.closest( yithWcwlAddToWishlist.containerSelectors.productContainer.join( ', ' ) ).querySelector( yithWcwlAddToWishlist.containerSelectors.thumbnailContainer.join( ', ' ) )
		: false;

	let feedbacksContainer = document.querySelector( 'div.yith-wcwl-feedback-messages-container' );
	if ( ! container && ! feedbacksContainer ) {
		feedbacksContainer = document.body.appendChild( document.createElement( 'div' ) );
		feedbacksContainer.classList.add( 'yith-wcwl-feedback-messages-container' );
	}
	const RenderFeedback = useComponentsExtension( 'renderFeedback' );

	const className = classNames( [
		'yith-wcwl-add-to-wishlist__feedback',
		'yith-wcwl-add-to-wishlist__feedback--' + feedbackType,
		{
			'yith-wcwl-add-to-wishlist__feedback-on-product-image': !! container,
			'yith-wcwl-fade-out': feedbackFadeOut,
		}
	] );

	useEffect( () => {
		if ( feedbackMessage && 'modal' !== feedback_type ) {
			setFeedbackFadeOut( false );
			const fadeOutTimer = setTimeout( () => {
				setFeedbackFadeOut( true );
			}, feedbackDuration - 500 );
			return () => clearTimeout( fadeOutTimer );
		}
	}, [ feedbackMessage ] );

	return {
		className,
		showFeedback,
		RenderFeedback,
		feedbackMessage,
		container: container ? container : feedbacksContainer,
	}
};
