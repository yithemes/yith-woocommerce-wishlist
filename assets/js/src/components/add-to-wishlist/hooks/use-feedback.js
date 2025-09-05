/* globals yithWcwlAddToWishlist */

import React, { useEffect, useState } from 'react';
import { useWishlistData } from '../../../hooks/use-wishlist-data';
import { reactMultipleStringReplace } from '../../../utils';
import useProductData from './use-product-data';

const useFeedback = ( productId, attributes, isPerformingAction ) => {
	const [ showFeedback, setShowFeedback ] = useState( false );
	const [ feedbackAnimation, setFeedbackAnimation ] = useState( true );
	const [ feedbackMessage, setFeedbackMessage ] = useState( '' );
	const [ feedbackType, setFeedbackType ] = useState( 'info' );
	const [ feedbackDuration, setFeedbackDuration ] = useState( yithWcwlAddToWishlist.feedback_duration );

	const {
		feedback_type,
		modal_close_behaviour,
	} = attributes;
	const {
		error,
		productData,
		hasDataLoaded,
	} = useProductData( productId, attributes );

	const clearFeedback = () => {
		setShowFeedback( false );
		setFeedbackMessage( '' );
		setFeedbackType( 'info' );
		setFeedbackDuration( yithWcwlAddToWishlist.feedback_duration );
	}
	const addFeedback = ( { message, type, duration } ) => {
		if ( message ) {
			type && setFeedbackType( type );
			duration && setFeedbackDuration( duration );
			setFeedbackMessage( message );
			setShowFeedback( true );
		}
	};

	useEffect( () => {
		if ( feedbackMessage ) {
			setShowFeedback( true );
			if ( 'modal' !== feedback_type || 'close' === modal_close_behaviour ) {
				const FeedbackVisibilityTimer = setTimeout( clearFeedback, feedbackDuration );

				return () => clearTimeout( FeedbackVisibilityTimer );
			}
		}
	}, [ feedbackMessage ] );

	useEffect( () => {
		if ( error ) addFeedback( { message: error, type: 'error' } );
	}, [ error ] );

	const addedToWishlist = useWishlistData( productData?.added_to );
	const removedFromWishlist = useWishlistData( productData?.removed_from );

	useEffect( () => {
		if ( isPerformingAction && hasDataLoaded && productData?.removed_from ) {
			const wishlist = removedFromWishlist;

			addFeedback( {
				message: reactMultipleStringReplace(
					yithWcwlAddToWishlist.i18n.feedbacks.removed,
					[
						{
							search: '{{product_name}}',
							replace: ( match, i ) => <strong key={ match + i } className={ 'yith-wcwl-feedback__product-name' }>"{ productData?.name }"</strong>
						},
						{
							search: '{{wishlist_name}}',
							replace: ( match, i ) => (wishlist ? <strong key={ match + i } className={ 'yith-wcwl-feedback__wishlist-name' }>"{ wishlist?.name }"</strong> : '')
						}
					]
				),
				type: 'product_removed'
			} );
		}
	}, [ productData?.removed_from ] );

	useEffect( () => {
		if ( isPerformingAction && hasDataLoaded && productData?.added_to ) {
			const wishlist = addedToWishlist;

			addFeedback( {
				message: reactMultipleStringReplace(
					yithWcwlAddToWishlist.i18n.feedbacks.added,
					[
						{
							search: '{{product_name}}',
							replace: ( match, i ) => <strong key={ match + i } className={ 'yith-wcwl-feedback__product-name' }>"{ productData?.name }"</strong>
						},
						{
							search: '{{wishlist_name}}',
							replace: ( match, i ) => (wishlist ? <strong key={ match + i } className={ 'yith-wcwl-feedback__wishlist-name' }>"{ wishlist?.name }"</strong> : '')
						}
					]
				),
				type: 'product_added'
			} );
		}
	}, [ productData?.added_to ] );

	useEffect( () => {
		if ( ! showFeedback ) {
			setFeedbackAnimation( true );
		}
	}, [ showFeedback ] );

	return {
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
	};
}

export default useFeedback;