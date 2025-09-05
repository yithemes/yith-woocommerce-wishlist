jQuery( $ => {
	const reactPreviewToggle = {
		toggle: function ( event ) {
			if ( 'click' === event?.type || ('keydown' === event?.type && 13 === event?.keyCode) ) {
				const $wrapper = $( this ).closest( '.yith-wcwl-react-preview-toggle__wrapper' ),
					$content = $wrapper.find( '.yith-wcwl-react-preview-toggle__content' );
				$wrapper.toggleClass( 'collapsed' );
				$content.slideToggle( 300 );
			}
		}
	}

	$( document ).on( 'click keydown', '.yith-wcwl-react-preview-toggle__header-toggle-button', reactPreviewToggle.toggle )
} )