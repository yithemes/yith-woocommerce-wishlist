import { debounce } from 'lodash';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

class AddToWishlistApiHandler {
	constructor() {
		this.pendingRequests = new Map();
		this.handleDebouncedRequests = this.handleDebouncedRequests.bind( this );
		this.handleDebouncedRequestsDebounced = debounce( this.handleDebouncedRequests, 200 );
	}

	async handleDebouncedRequests() {
		const productIds = Array.from( this.pendingRequests.keys() );
		const productsData = await this.fetchProductsData( productIds );

		for ( const productId of productIds ) {
			const resolve = this.pendingRequests.get( productId );
			resolve && resolve( productsData[ productId ] );
			this.pendingRequests.delete( productId );
		}
	}

	async fetchProductDataDebounced( productId ) {
		return new Promise( ( resolve ) => {
			this.pendingRequests.set( productId, resolve );
			this.handleDebouncedRequestsDebounced();
		} );
	}

	async fetchProductsData( productIds ) {
		return await apiFetch( {
			path: addQueryArgs( '/yith/wishlist/v1/products/', { product_ids: productIds } ),
		} );
	}

	async fetchProductData( productId ) {
		return await apiFetch( {
			path: '/yith/wishlist/v1/products/' + productId,
		} );
	}

	/**
	 * Add products to wishlist
	 *
	 *
	 * @param data
	 * @return {Promise<*>}
	 */
	async addToWishlist( data ) {
		const response = await apiFetch( {
			path: 'yith/wishlist/v1/items',
			method: 'POST',
			data,
		} );

		if ( false === response?.success ) {
			throw new Error( response?.message );
		}

		return response;
	}

	/**
	 * Remove product from wishlist
	 *
	 * @param data
	 * @return {Promise<*>}
	 */
	async removeFromWishlist( data ) {
		const response = await apiFetch( {
			path: 'yith/wishlist/v1/items',
			method: 'DELETE',
			data,
		} );

		if ( false === response?.success ) {
			throw new Error( response?.message );
		}

		return response;
	}

	/**
	 * Move a product from a wishlist to another
	 *
	 * @param data
	 * @return {Promise<*>}
	 */
	async moveToAnotherWishlist( data ) {
		const response = await apiFetch( {
			path: 'yith/wishlist/v1/items/move',
			method: 'POST',
			data,
		} );

		if ( false === response?.success ) {
			throw new Error( response?.message );
		}

		return response;
	}
}

export default new AddToWishlistApiHandler();