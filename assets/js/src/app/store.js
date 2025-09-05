import { configureStore } from '@reduxjs/toolkit'
import productsDataReducer from '../features/products-data/products-data-reducer'
import wishlistsReducer from '../features/wishlists/wishlists-reducer'
import buttonsReducer from '../features/buttons/buttons-reducer'
import createInvalidateMiddleware from '../features/products-data/invalidate-middleware';

import { fetchWishlists } from '../features/wishlists/wishlists-actions';

let store = configureStore( {
	reducer: {
		productsData: productsDataReducer,
		wishlists: wishlistsReducer,
		buttons: buttonsReducer,
	},
	middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( createInvalidateMiddleware() )
} )

store.dispatch( fetchWishlists() );

export default store;
