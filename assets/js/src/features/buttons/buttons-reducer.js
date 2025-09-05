import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	buttons: {},
};

const buttonsSlice = createSlice( {
	name: 'buttons',
	initialState,
	reducers: {
		closeDropdown: ( state, action ) => {
			const { id } = action.payload;
			state.buttons[ id ] = { ...state.buttons[ id ], isDropdownOpen: false };
		},
		openDropdown: ( state, action ) => {
			const { id } = action.payload;
			state.buttons[ id ] = { ...state.buttons[ id ], isDropdownOpen: true };
		},
		toggleDropdown: ( state, action ) => {
			const { id } = action.payload;
			state.buttons[ id ] = { ...state.buttons[ id ], isDropdownOpen: ! state.buttons[ id ]?.isDropdownOpen };
		},
		closeAllDropdowns: ( state, action ) => {
			const idToExclude = action?.payload?.id;
			Object.keys( state.buttons ).forEach( id => {
				if ( idToExclude !== id ) {
					state.buttons[ id ].isDropdownOpen = false
				}
			} );
		},
	},
} );

const { actions, reducer } = buttonsSlice;

export const {
	openDropdown,
	closeDropdown,
	toggleDropdown,
	closeAllDropdowns,
} = actions;

export default reducer;