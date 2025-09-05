jQuery( $ => {
	const Modal = {
			instance: false,
			handleClick: ( e ) => {
				e.preventDefault();
				Modal.open();
			},
			open: ( options = {} ) => {
				Modal.instance = yith.ui.modal( {
					...yithWcwlRenderingMethods.modals.updateRenderingMethod,
					classes: {
						main: 'yith-wcwl-rendering-methods-modal',
						title: 'yith-wcwl-rendering-methods-modal__title',
						content: 'yith-wcwl-rendering-methods-modal__content',
						footer: 'yith-wcwl-rendering-methods-modal__footer',
					},
					onClose: () => (Modal.instance = false),
					...options
				} )
			},
			close: () => {
				Modal?.instance?.close();
				Modal.instance = false;
			},
			openFromReactOnlyOptionNotice: () => {
				Modal.open( {
					title: yithWcwlRenderingMethods.i18n.reactOnlyOptionModalTitle
				} )
			}
		},
		initReactOnlyOptionsButtons = () => {
			$( '.yith-plugin-fw__panel__option.yith-wcwl-react-only-option' ).each( ( i, el ) => {
				const $optionRow = $( el );
				if ( ! $optionRow?.next()?.hasClass( 'yith-wcwl-react-only-option' ) ) {
					$optionRow.append( yithWcwlRenderingMethods.templates.reactOnlyOptionNotice );
				}
			} )
		}

	$( document ).on( 'click', 'a#yith-wcwl-open-rendering-methods-modal', Modal.open );
	$( document ).on( 'click', 'a#yith-wcwl-rendering-method-close-modal', Modal.close );
	$( document ).on( 'click', '.yith-wcwl-react-only-option__notice a', Modal.openFromReactOnlyOptionNotice );
	initReactOnlyOptionsButtons();
} );