import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wishlists: {},
	loading: false,
	error: null,
	creation: {
		loading: false,
		error: null
	}
};

const wishlistsSlice = createSlice( {
	name: 'wishlists',
	initialState,
	reducers: {
		fetchWishlistsStart( state, action ) {
			state.loading = true;
			state.error = null;
		},
		fetchWishlistsSuccess( state, action ) {
			const { lists } = action.payload;
			state.wishlists = { ...state.wishlists, ...lists };
			state.loading = false
		},
		fetchWishlistsFailure( state, action ) {
			const { error } = action.payload;
			state.loading = false;
			state.error = error;
		},
		createWishlistsStart( state, action ) {
			state.creation.loading = true;
			state.creation.error = null;
		},
		createWishlistsSuccess( state, action ) {
			const { data, data: { id } } = action.payload;
			state.wishlists = { ...state.wishlists, [id]: { ...data } };
			state.creation.loading = false;
			state.creation.lastCreatedId = id;
		},
		createWishlistsFailure( state, action ) {
			const { error } = action.payload;
			state.creation.loading = false;
			state.creation.error = error;
		},
	},
} );

const { actions, reducer } = wishlistsSlice;

export const {
	fetchWishlistsStart,
	fetchWishlistsSuccess,
	fetchWishlistsFailure,
	createWishlistsStart,
	createWishlistsSuccess,
	createWishlistsFailure,
} = actions;

export default reducer;