import {
	fetchWishlistsStart as fetchStart,
	fetchWishlistsSuccess as fetchSuccess,
	fetchWishlistsFailure as fetchFailure,
	createWishlistsStart as createStart,
	createWishlistsSuccess as createSuccess,
	createWishlistsFailure as createFailure,
} from './wishlists-reducer';
import wishlistApi from '../../utils/wishlist-api'

export const fetchWishlists = () => async ( dispatch ) => {
	dispatch( fetchStart() );

	try {
		const { lists } = await wishlistApi.fetchWishlists();
		dispatch( fetchSuccess( { lists } ) );
	} catch ( error ) {
		dispatch( fetchFailure( { error: error.message } ) );
	}
};

export const createWishlist = ( args ) => async ( dispatch ) => {
	dispatch( createStart() );
	try {
		const { wishlist_data: data } = await wishlistApi.createWishlists( args );
		dispatch( createSuccess( { data } ) );
	} catch ( error ) {
		dispatch( createFailure( { error: error.message } ) );
	}
};
