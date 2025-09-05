import { useComponentsExtension } from '../../../../../utils';

import Icon from '../../../../icon';
import classnames from 'classnames';
import { useAddToWishlistButtonData } from '../../../../../utils/button-data-context';

const AddToWishlistPillowButton = ( { children } ) => {
	const {
		ref,
		href,
		icon,
		onClick,
		className,
	} = useAddToWishlistButtonData();

	const ButtonContentStart = useComponentsExtension( 'buttonContentStart' );
	const ButtonContentEnd = useComponentsExtension( 'buttonContentEnd' );

	const PillowButton = () => <button { ...{ className: classnames( className, 'yith-wcwl-add-to-wishlist-button--pillow' ), onClick, ref } }>
		<ButtonContentStart/>
		<Icon iconName={ icon } className={'yith-wcwl-add-to-wishlist-button-icon'}/>
		<ButtonContentEnd/>
		{ children }
	</button>;

	return (
		href ?
			<a href={ href } role={ 'button' } className={ 'yith-wcwl-add-to-wishlist-button__wrapper' }>
				<PillowButton/>
			</a>
			:
			<PillowButton/>
	);
}

export default AddToWishlistPillowButton;