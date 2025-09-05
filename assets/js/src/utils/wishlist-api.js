import apiFetch from '@wordpress/api-fetch';

class WishlistApiHandler {
	async fetchWishlists() {
		return await apiFetch( {
			path: '/yith/wishlist/v1/lists/',
		} );
	}

	async createWishlists( data ) {
		const response = await apiFetch( {
			path: '/yith/wishlist/v1/lists/',
			method: 'POST',
			data
		} );

		if ( false === response?.success ) {
			throw new Error( response?.message );
		}

		return response;
	}
}

export default new WishlistApiHandler();