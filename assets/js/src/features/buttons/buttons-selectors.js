export const selectButtonData = ( state, id ) => state.buttons.buttons[ id ];

export const selectButtonDropdown = ( state, id ) => state.buttons.buttons[ id ]?.isDropdownOpen;
