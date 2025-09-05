import {
	fetchProductDataStart as fetchProductStart,
	fetchProductDataSuccess as fetchProductSuccess,
	fetchProductDataFailure as fetchProductFailure,
	fetchProductsDataStart as fetchProductsStart,
	fetchProductsDataSuccess as fetchProductsSuccess,
	fetchProductsDataFailure as fetchProductsFailure,
} from './products-data-reducer';

import {
	createWishlistsStart,
	createWishlistsSuccess,
	createWishlistsFailure,
} from '../wishlists/wishlists-reducer';

import addToWishlistApi from '../../utils/add-to-wishlist-api'
import wishlistApi from '../../utils/wishlist-api'

const fetchProductDataAsync = ( productId ) => async ( dispatch ) => {
	dispatch( fetchProductStart( { productId } ) );

	try {
		const product = await addToWishlistApi.fetchProductDataDebounced( productId );
		dispatch( fetchProductSuccess( { productId, data: product } ) );
	} catch ( error ) {
		dispatch( fetchProductFailure( { productId, error: error.message } ) );
	}
};
const fetchProductsDataAsync = ( productIds ) => async ( dispatch ) => {
	dispatch( fetchProductsStart( { productIds } ) );

	try {
		const products = await addToWishlistApi.fetchProductsData( productIds );
		dispatch( fetchProductsSuccess( { productIds, data: products } ) );
	} catch ( error ) {
		dispatch( fetchProductsFailure( { productIds, error: error.message } ) );
	}
};

const addProductToWishlist = ( productId, args = {} ) => async ( dispatch ) => {
	const isCreatingWishlist = 'default' === args?.wishlist_id
	dispatch( fetchProductStart( { productId } ) );
	isCreatingWishlist && dispatch( createWishlistsStart() );

	try {
		const { product_data, wishlist_data } = await addToWishlistApi.addToWishlist( { product_id: productId, ...args } )
		dispatch( fetchProductSuccess( { productId, data: product_data } ) );
		isCreatingWishlist && dispatch( createWishlistsSuccess( { data: wishlist_data } ) );
	} catch ( error ) {
		dispatch( fetchProductFailure( { productId, error: error.message } ) );
		isCreatingWishlist && dispatch( createWishlistsFailure() );
	}
}

const removeProductFromWishlist = ( productId, args ) => async ( dispatch ) => {
	dispatch( fetchProductStart( { productId } ) );

	try {
		const { product_data: data } = await addToWishlistApi.removeFromWishlist( { product_id: productId, ...args } )
		dispatch( fetchProductSuccess( { productId, data } ) );
	} catch ( error ) {
		dispatch( fetchProductFailure( { productId, error: error.message } ) );
	}
}

const moveProductToAnotherWishlist = ( productId, args ) => async ( dispatch ) => {
	dispatch( fetchProductStart( { productId } ) );
	const isCreatingWishlist = 'new' === args?.destination_wishlist;
	isCreatingWishlist && dispatch( createWishlistsStart() );

	try {
		const { product_data, destination_wishlist } = await addToWishlistApi.moveToAnotherWishlist( { product_id: productId, ...args } )
		dispatch( fetchProductSuccess( { productId, data: product_data } ) );
		isCreatingWishlist && dispatch( createWishlistsSuccess( { data: destination_wishlist } ) );
	} catch ( error ) {
		dispatch( fetchProductFailure( { productId, error: error.message } ) );
		isCreatingWishlist && dispatch( createWishlistsFailure() );
	}
}

const createWishlistAndAddProduct = ( wishlistData, productId ) => async ( dispatch ) => {
	dispatch( createWishlistsStart() );
	try {
		const { wishlist_data, wishlist_data: { id: wishlistId } } = await wishlistApi.createWishlists( wishlistData );
		dispatch( createWishlistsSuccess( { data: wishlist_data } ) )
		await dispatch( addProductToWishlist( productId, { wishlist_id: wishlistId } ) );
	} catch ( error ) {
		dispatch( createWishlistsFailure( { error: error.message } ) );
	}

}

export {
	addProductToWishlist,
	fetchProductDataAsync,
	fetchProductsDataAsync,
	removeProductFromWishlist,
	createWishlistAndAddProduct,
	moveProductToAnotherWishlist,
};
