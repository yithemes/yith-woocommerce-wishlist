import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDataAsync } from '../../../features/products-data/products-data-actions';
import { selectProductDataById, selectError } from '../../../features/products-data/products-data-selectors';

const useProductData = ( productId, attributes = {} ) => {
	const dispatch = useDispatch();
	const productData = useSelector( state => selectProductDataById( state, productId ) );
	const error = useSelector( state => selectError( state, productId ) );
	const [ alreadyIn, setAlreadyIn ] = useState( attributes?.exists );
	const hasDataLoaded = undefined !== productData?.isAdded;
	const isAdded = !! (undefined !== productData?.isAdded ? productData?.isAdded : attributes?.exists)

	useEffect( () => {
		if ( ! productData ) dispatch( fetchProductDataAsync( productId ) )
	}, [ dispatch, productId ] );

	useEffect( () => {
		if ( hasDataLoaded && ! isAdded ) {
			setAlreadyIn( false );
		}
	}, [ isAdded ] );

	return {
		productData,
		error,
		isLoading: productData?.loading,
		count: productData?.count,
		lists: productData?.wishlists,
		isAdded,
		alreadyIn,
		hasDataLoaded,
	};
};

export default useProductData;
