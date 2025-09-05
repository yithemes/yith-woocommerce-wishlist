import { useComponentsExtension, useButtonData } from '../../../../../../utils';
import Icon from '../../../../../icon'
import { useAddToWishlistButtonData } from '../../../../../../utils/button-data-context';

const AddToWishlistButton = ( { children } ) => {
	const {
		ref,
		href,
		icon,
		label,
		onClick,
		className,
	} = useAddToWishlistButtonData();

	const ButtonContentStart = useComponentsExtension( 'buttonContentStart' );
	const ButtonContentEnd = useComponentsExtension( 'buttonContentEnd' );

	const Button = () => <button { ...{ className, onClick, ref } }>
		<ButtonContentStart/>
		<Icon iconName={ icon } wrapper={ 'div' } className={ 'yith-wcwl-add-to-wishlist-button-icon' }/>
		<span className={ 'yith-wcwl-add-to-wishlist-button__label' }>{ label }</span>
		{ children }
		<ButtonContentEnd/>
	</button>;

	return <>
		{
			href ?
				<a href={ href } className={ 'yith-wcwl-add-to-wishlist-button-anchor-wrapper' }>
					<Button/>
				</a> :
				<Button/>
		}
	</>;
}

export default AddToWishlistButton;