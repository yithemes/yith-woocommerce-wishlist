import { useComponentsExtension, useButtonData } from '../../../../../utils';
import Icon from '../../../../icon'
import { useAddToWishlistButtonData } from '../../../../../utils/button-data-context';

const AddToWishlistIconButton = ( { children } ) => {
	const {
		ref,
		href,
		icon,
		onClick,
		className,
	} = useAddToWishlistButtonData();

	const ButtonContentStart = useComponentsExtension( 'buttonContentStart' );
	const ButtonContentEnd = useComponentsExtension( 'buttonContentEnd' );

	const IconButton = <button { ...{ className, onClick, ref } }>
		<ButtonContentStart/>
		<Icon iconName={ icon } className={ 'yith-wcwl-add-to-wishlist-button-icon' }/>
		<ButtonContentEnd/>
		{ children }
	</button>;

	return <>
		{
			href ?
				<a href={ href }>
					{ IconButton }
				</a>
				:
				IconButton
		}
	</>;
}

export default AddToWishlistIconButton;