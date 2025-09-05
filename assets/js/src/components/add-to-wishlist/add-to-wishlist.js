import AddToWishlistButton from './sub-components/add-to-wishlist-button';
import { useComponentsExtension } from '../../utils';
import Feedback from './sub-components/feedback';

const AddToWishlist = () => {
	const BeforeButton = useComponentsExtension( 'beforeAddToWishlistButton' );
	const AfterButton = useComponentsExtension( 'afterAddToWishlistButton' );
	const ButtonChildren = useComponentsExtension( 'addToWishlistButtonChildren' );

	return <>
		{ BeforeButton && <BeforeButton/> }
		<AddToWishlistButton>
			<ButtonChildren/>
		</AddToWishlistButton>
		{ AfterButton && <AfterButton/> }
		<Feedback/>
	</>
};

export default AddToWishlist;
