import { fetchProductsDataAsync } from './products-data-actions';
import { fetchWishlists } from '../wishlists/wishlists-actions';

const INVALIDATION_INTERVAL = 30000;

const createInvalidateMiddleware = () => {
	let lastChecked = Date.now();

	return ( store ) => ( next ) => ( action ) => {
		const forceInvalidation = 'FORCE_INVALIDATION' === action?.type;
		if ( forceInvalidation || Date.now() - lastChecked >= INVALIDATION_INTERVAL ) {
			lastChecked = Date.now();
			const state = store.getState();
			const { products } = state.productsData;

			store.dispatch( fetchProductsDataAsync( Object.keys( products ) ) );
			store.dispatch( fetchWishlists() );
		}

		return next( action );
	};
};

export default createInvalidateMiddleware;