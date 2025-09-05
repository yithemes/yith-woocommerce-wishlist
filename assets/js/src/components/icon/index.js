import classnames from 'classnames';
import { isValidHttpUrl } from '../../utils';

import ArrowDown from '../../../../images/icons/arrow-down.svg';
import Bookmark from '../../../../images/icons/bookmark.svg';
import BookmarkOutline from '../../../../images/icons/bookmark-outline.svg';
import Calculator from '../../../../images/icons/calculator.svg';
import CalculatorOutline from '../../../../images/icons/calculator-outline.svg';
import ChatBubbleLeftEllipsis from '../../../../images/icons/chat-bubble-left-ellipsis.svg';
import ChatBubbleLeftEllipsisOutline from '../../../../images/icons/chat-bubble-left-ellipsis-outline.svg';
import DocumentArrowUp from '../../../../images/icons/document-arrow-up.svg';
import DocumentArrowUpOutline from '../../../../images/icons/document-arrow-up-outline.svg';
import DocumentChartBar from '../../../../images/icons/document-chart-bar.svg';
import DocumentChartBarOutline from '../../../../images/icons/document-chart-bar-outline.svg';
import DocumentText from '../../../../images/icons/document-text.svg';
import DocumentTextOutline from '../../../../images/icons/document-text-outline.svg';
import Envelope from '../../../../images/icons/envelope.svg';
import EnvelopeOutline from '../../../../images/icons/envelope-outline.svg';
import Eye from '../../../../images/icons/eye.svg';
import Facebook from '../../../../images/icons/facebook.svg';
import Heart from '../../../../images/icons/heart.svg';
import HeartArrows from '../../../../images/icons/heart-arrows.svg';
import HeartArrowsLight from '../../../../images/icons/heart-arrows-light.svg';
import HeartCheck from '../../../../images/icons/heart-check.svg';
import HeartCheckLight from '../../../../images/icons/heart-check-light.svg';
import HeartLight from '../../../../images/icons/heart-light.svg';
import HeartOutline from '../../../../images/icons/heart-outline.svg';
import HeartRemove from '../../../../images/icons/heart-remove.svg';
import HeartRemoveLight from '../../../../images/icons/heart-remove-light.svg';
import Pinterest from '../../../../images/icons/pinterest.svg';
import Plus from '../../../../images/icons/plus.svg';
import PlusCircle from '../../../../images/icons/plus-circle.svg';
import PlusCircleOutline from '../../../../images/icons/plus-circle-outline.svg';
import QuestionMarkCircle from '../../../../images/icons/question-mark-circle.svg';
import QuestionMarkCircleOutline from '../../../../images/icons/question-mark-circle-outline.svg';
import ReceiptPercent from '../../../../images/icons/receipt-percent.svg';
import ReceiptPercentOutline from '../../../../images/icons/receipt-percent-outline.svg';
import ShoppingBag from '../../../../images/icons/shopping-bag.svg';
import ShoppingBagOutline from '../../../../images/icons/shopping-bag-outline.svg';
import ShoppingCart from '../../../../images/icons/shopping-cart.svg';
import ShoppingCartOutline from '../../../../images/icons/shopping-cart-outline.svg';
import Star from '../../../../images/icons/star.svg';
import StarOutline from '../../../../images/icons/star-outline.svg';
import Trash from '../../../../images/icons/trash.svg';
import WarningTriangle from '../../../../images/icons/warning-triangle.svg';
import Whatsapp from '../../../../images/icons/whatsapp.svg';
import XTwitter from '../../../../images/icons/x-twitter.svg';

const iconMap = {
	'arrow-down': ArrowDown,
	'bookmark': Bookmark,
	'bookmark-outline': BookmarkOutline,
	'calculator': Calculator,
	'calculator-outline': CalculatorOutline,
	'chat-bubble-left-ellipsis': ChatBubbleLeftEllipsis,
	'chat-bubble-left-ellipsis-outline': ChatBubbleLeftEllipsisOutline,
	'document-arrow-up': DocumentArrowUp,
	'document-arrow-up-outline': DocumentArrowUpOutline,
	'document-chart-bar': DocumentChartBar,
	'document-chart-bar-outline': DocumentChartBarOutline,
	'document-text': DocumentText,
	'document-text-outline': DocumentTextOutline,
	'envelope': Envelope,
	'envelope-outline': EnvelopeOutline,
	'eye': Eye,
	'facebook': Facebook,
	'heart': Heart,
	'heart-arrows': HeartArrows,
	'heart-arrows-light': HeartArrowsLight,
	'heart-check': HeartCheck,
	'heart-check-light': HeartCheckLight,
	'heart-light': HeartLight,
	'heart-outline': HeartOutline,
	'heart-remove': HeartRemove,
	'heart-remove-light': HeartRemoveLight,
	'pinterest': Pinterest,
	'plus': Plus,
	'plus-circle': PlusCircle,
	'plus-circle-outline': PlusCircleOutline,
	'question-mark-circle': QuestionMarkCircle,
	'question-mark-circle-outline': QuestionMarkCircleOutline,
	'receipt-percent': ReceiptPercent,
	'receipt-percent-outline': ReceiptPercentOutline,
	'shopping-bag': ShoppingBag,
	'shopping-bag-outline': ShoppingBagOutline,
	'shopping-cart': ShoppingCart,
	'shopping-cart-outline': ShoppingCartOutline,
	'star': Star,
	'star-outline': StarOutline,
	'trash': Trash,
	'warning-triangle': WarningTriangle,
	'whatsapp': Whatsapp,
	'x-twitter': XTwitter
};

function Icon( { iconName, wrapper = 'none', height, width, className, ...props } ) {
	if ( height || width ) {
		if ( ! props?.style ) {
			props.style = {};
		}

		height && (props.style.height = height);
		width && (props.style.width = width);
	}

	const SelectedIcon = iconMap[ iconName ];

	if ( ! SelectedIcon && ! isValidHttpUrl( iconName ) ) {
		return null;
	}

	props.className = classnames(
		'yith-wcwl-icon',
		{
			'yith-wcwl-icon-svg--light': iconName.endsWith( '-light' ),
			'yith-wcwl-icon-svg': !! SelectedIcon,
			'yith-wcwl-custom-icon': ! SelectedIcon,
		},
		className,
	);

	const iconElement = SelectedIcon ? <SelectedIcon { ...props } /> : <img src={ iconName } alt="Add to wishlist icon" { ...props } />;

	return (
		<>
			{ wrapper === 'div' && <div className="yith-wcwl-icon-svg__wrapper">{ iconElement }</div> }
			{ wrapper === 'span' && <span className="yith-wcwl-icon-svg__wrapper">{ iconElement }</span> }
			{ wrapper === 'none' && iconElement }
		</>
	);
}

export default Icon;