import { useButtonData, useComponentsExtension } from '../../../../../../utils';
import Icon from '../../../../../icon'
import { useAddToWishlistButtonData } from '../../../../../../utils/button-data-context';

const AddToWishlistAnchor = ( { children } ) => {
	const ButtonContentStart = useComponentsExtension( 'buttonContentStart' );
	const ButtonContentEnd = useComponentsExtension( 'buttonContentEnd' );

	const {
		ref,
		href,
		icon,
		label,
		onClick,
		className,
	} = useAddToWishlistButtonData();

	return (
		<a { ...{ className, onClick, ref, href } }>
			<ButtonContentStart/>
			<Icon iconName={ icon } className={'yith-wcwl-add-to-wishlist-button-icon'}/>
			<span className={ 'yith-wcwl-add-to-wishlist-button__label' }>{ label }</span>
			{ children }
			<ButtonContentEnd/>
		</a>
	);
}

export default AddToWishlistAnchor;