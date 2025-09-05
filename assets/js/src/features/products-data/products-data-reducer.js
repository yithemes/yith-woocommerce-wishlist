import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: {},
};

const productsDataSlice = createSlice( {
	name: 'productsData',
	initialState,
	reducers: {
		fetchProductDataStart( state, action ) {
			const { productId } = action.payload;
			state.products[ productId ] = { ...state.products[ productId ], loading: true, error: null, added_to: false, removed_from: false, moved_to: false, moved_from: false };
		},
		fetchProductDataSuccess( state, action ) {
			const { productId, data } = action.payload;
			state.products[ productId ] = { ...state.products[ productId ], ...data, loading: false };
		},
		fetchProductDataFailure( state, action ) {
			const { productId, error } = action.payload;
			state.products[ productId ] = { ...state.products[ productId ], loading: false, added_to: false, removed_from: false, error, moved_to: false, moved_from: false };
		},
		fetchProductsDataStart( state, action ) {
			const { productIds } = action.payload;
			productIds.forEach( productId => {
				state.products[ productId ] = { ...state.products[ productId ], loading: true, error: null, added_to: false, removed_from: false, moved_to: false, moved_from: false };
			} )
		},
		fetchProductsDataSuccess( state, action ) {
			const { productIds, data } = action.payload;
			productIds.forEach( productId => {
				const productData = data[ productId ];
				state.products[ productId ] = { ...state.products[ productId ], ...productData, loading: false };
			} )
		},
		fetchProductsDataFailure( state, action ) {
			const { productIds, error } = action.payload;
			productIds.forEach( productId => {
				state.products[ productId ] = { ...state.products[ productId ], loading: false, added_to: false, removed_from: false, moved_to: false, moved_from: false };
			} )
		},
	},
} );

const { actions, reducer } = productsDataSlice;

export const {
	fetchProductDataStart,
	fetchProductDataSuccess,
	fetchProductDataFailure,
	fetchProductsDataStart,
	fetchProductsDataSuccess,
	fetchProductsDataFailure,
} = actions;

export default reducer;