import { useSelector } from 'react-redux';
import { selectWishlistById } from '../features/wishlists/wishlists-selectors';

export const useWishlistData = wishlistId => {
	const wishlistData = useSelector( state => selectWishlistById( state, wishlistId ) );
	const {
		name,
		slug,
		privacy,
		token,
		is_default: isDefault,
	} = wishlistData ? wishlistData: {};

	return {
		wishlistData,

		name,
		slug,
		token,
		privacy,
		isDefault,
	}
}
