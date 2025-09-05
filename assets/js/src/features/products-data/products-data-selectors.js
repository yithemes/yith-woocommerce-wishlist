export const selectProductsData = ( state ) => state.productsData;
export const selectProductDataById = ( state, productId ) => {
	return state.productsData.products[ productId ];
};

export const selectError = ( state, productId ) => state.productsData.products[ productId ]?.error;

export const selectLoading = ( state, productId ) => state.productsData.products[ productId ]?.loading;
