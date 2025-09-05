import { useComponentsExtension, formatPascalCaseString } from '../../../../utils';

import IconButtonStyle from './variants/add-to-wishlist-icon-button';
import ButtonStyle from './variants/add-to-wishlist-button';
import AnchorStyle from './variants/add-to-wishlist-anchor';
import { useButtonStyle } from '../../../../utils/button-data-context';

const AddToWishlistButton = ( props ) => {
	const style = useButtonStyle();

	let Button = false;
	if ( style === 'icon-button' ) {
		Button = props => <IconButtonStyle { ...props }/>;
	}

	if ( style === 'anchor' ) {
		Button = props => <AnchorStyle { ...props }/>;
	}

	if ( ! Button ) {
		Button = useComponentsExtension( 'buttonStyle' + formatPascalCaseString( style ) );
	}

	if ( ! Button || Button?.isEmpty ) {
		Button = props => <ButtonStyle { ...props }/>;
	}

	return <Button { ...props }/>;
};

export default AddToWishlistButton;
