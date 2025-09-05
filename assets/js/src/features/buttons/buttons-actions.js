import {
	openDropdown,
	closeDropdown,
	toggleDropdown,
	closeAllDropdowns
} from './buttons-reducer';

export const openButtonDropdown = ( id ) => async ( dispatch ) => {
	dispatch( closeAllDropdowns( { id } ) );
	dispatch( openDropdown( { id } ) );
};
export const closeButtonDropdown = ( id ) => async ( dispatch ) => {
	dispatch( closeDropdown( { id } ) );
};
export const toggleButtonDropdown = ( id ) => async ( dispatch ) => {
	dispatch( closeAllDropdowns( { id } ) );
	dispatch( toggleDropdown( { id } ) );
};
export const closeAllButtonDropdowns = ( id ) => async ( dispatch ) => {
	dispatch( closeAllDropdowns( { id } ) );
};
