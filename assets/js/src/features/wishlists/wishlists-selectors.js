const selectWishlists = ( state ) => state.wishlists.wishlists;

const selectWishlistById = ( state, id ) => state.wishlists.wishlists[ id ];

const selectWishlistsLoading = ( state ) => state.wishlists.loading;

const selectWishlistsError = ( state ) => state.wishlists.error;

const selectWishlistsCreation = ( state ) => state.wishlists.creation;

const selectWishlistsCreationLoading = ( state ) => state.wishlists.creation.loading;

const selectWishlistsCreationError = ( state ) => state.wishlists.creation.error;

export {
	selectWishlists,
	selectWishlistById,
	selectWishlistsLoading,
	selectWishlistsError,
	selectWishlistsCreation,
	selectWishlistsCreationLoading,
	selectWishlistsCreationError,
}