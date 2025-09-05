/**
 * Admin YITH WooCommerce Wishlist JS
 *
 * @author YITH <plugins@yithemes.com>
 * @package YITH WooCommerce Wishlist
 * @version 3.0.0
 *
 * global yith_wcwl_admin
 */

jQuery( function ( $ ) {

	/* === CUSTOM DEPENDENCIES HANDLER === */

	$.fn.dependency = function ( deps, test, complete, args ) {
		var t = $( this );

		t.on( 'change', function () {
			var val = test( t );

			$.each( deps, function ( i, v ) {
				var elem = $( v );

				if ( ! elem.length ) {
					return;
				}

				var target = elem.closest( '.yith-plugin-fw__panel__option' );

				if ( ! target.length ) {
					return;
				}

				if ( val ) {
					target.show();
				} else {
					target.hide();
				}
			} );

			if ( typeof complete !== 'undefined' ) {
				complete( t, args );
			}
		} ).change();
	};

	/* === UTILITY FUNCTIONS === */

	var getRadioValue = function ( t ) {
			if ( ! t.is( 'input[type="radio"]' ) ) {
				t = t.find( 'input[type="radio"]:checked' );
			}

			return t?.val();
		},
		isRadioYes = function ( t ) {
			return getRadioValue( t ) === 'yes';
		},
		isRadioNo = function ( t ) {
			return getRadioValue( t ) === 'no';
		},
		isChecked = function ( t ) {
			return t.is( ':checked' );
		};

	/* === SETTINGS HANDLING === */

	var disable_wishlist_for_unauth_users = $( '#yith_wcwl_disable_wishlist_for_unauthenticated_users' ),
		multi_wishlist_enable = $( '#yith_wcwl_multi_wishlist_enable' ),
		modal_enable = $( '#yith_wcwl_modal_enable' ),
		loop_position = $( '#yith_wcwl_loop_position' ),
		icon_select = $( '.icon-select' ),
		ask_an_estimate_style = $( '[name="yith_wcwl_ask_an_estimate_style"]' ),
		ask_an_estimate_icon = $( '#yith_wcwl_ask_an_estimate_icon' ),
		enable_share = $( '#yith_wcwl_enable_share' ),
		share_facebook = $( '#yith_wcwl_share_fb' ),
		share_facebook_icon = $( '#yith_wcwl_fb_button_icon' ),
		share_twitter = $( '#yith_wcwl_share_twitter' ),
		share_twitter_icon = $( '#yith_wcwl_tw_button_icon' ),
		share_pinterest = $( '#yith_wcwl_share_pinterest' ),
		share_pinterest_icon = $( '#yith_wcwl_pr_button_icon' ),
		share_email = $( '#yith_wcwl_share_email' ),
		share_email_icon = $( '#yith_wcwl_em_button_icon' ),
		share_whatsapp = $( '#yith_wcwl_share_whatsapp' ),
		share_whatsapp_icon = $( '#yith_wcwl_wa_button_icon' ),
		show_estimate_button = $( '#yith_wcwl_show_estimate_button' ),
		show_additional_info_textarea = $( '#yith_wcwl_show_additional_info_textarea' ),
		ask_an_estimate_fields = $( '#yith_wcwl_ask_an_estimate_fields' ),
		promotion_mail_type = $( '#woocommerce_promotion_mail_settings\\[email_type\\]' ),
		back_in_stock_mail_enabled = $( '#woocommerce_yith_wcwl_back_in_stock_settings\\[enabled\\]' ),
		back_in_stock_mail_type = $( '#woocommerce_yith_wcwl_back_in_stock_settings\\[email_type\\]' ),
		on_sale_item_mail_enabled = $( '#woocommerce_yith_wcwl_on_sale_item_settings\\[enabled\\]' ),
		on_sale_item_mail_type = $( '#woocommerce_yith_wcwl_on_sale_item_settings\\[email_type\\]' ),
		ask_an_estimate_type = $( '[id^="type_"]' ),
		add_to_wishlist_icon_types = $( '#yith_wcwl_add_to_wishlist_icon_type, #yith_wcwl_added_to_wishlist_icon_type' ),
		show_add_to_wishlist_in_loop = $( '#yith_wcwl_show_on_loop' );

	loop_position.add( 'select#yith_wcwl_button_position' ).on( 'change', function () {
		var t = $( this ),
			v = t.val();

		if ( 'shortcode' === v ) {
			t.parent().parent().next().find( '.addon' ).show();
		} else {
			t.parent().parent().next().find( '.addon' ).hide();
		}
	} ).change();

	ask_an_estimate_type.on( 'change', function () {
		var t = $( this ),
			v = t.val(),
			options_field = t.closest( '.yith-toggle-content-row' ).next();

		if ( v === 'radio' || v === 'select' ) {
			options_field.show().fadeTo( 'slow', 1 );
		} else {
			options_field.is( ':visible' ) ? options_field.fadeTo( 'slow', 0, function () {
				options_field.hide();
			} ) : options_field.css( 'opacity', 0 ).hide();
		}
	} ).change();

	ask_an_estimate_style.on( 'change', function () {
		ask_an_estimate_icon.change();
	} );

	icon_select.each( function () {
		var t = $( this ),
			renderOption = function ( state ) {
				if ( ! state.id ) {
					return state.text;
				}
				return $(
					'<span class="yith-wcwl-icon-option-container">' + yith_wcwl_admin.plugin_icons[ state.element.value.toLowerCase() ] + state.text + '</span>'
				);
			};

		t.select2( {
			templateResult: renderOption
		} );
	} );

	disable_wishlist_for_unauth_users.dependency( [
		'#yith_wcwl_enable_multi_wishlist_for_unauthenticated_users',
	], function () {
		return isChecked( multi_wishlist_enable ) && 'no' === getRadioValue(disable_wishlist_for_unauth_users);
	} );

	modal_enable.dependency( [
		'#yith_wcwl_show_exists_in_a_wishlist'
	], function () {
		var res = modal_enable.find( ':checked' ).val() !== 'default';

		if ( ! res ) {
			$( '#yith_wcwl_show_exists_in_a_wishlist' ).prop( 'checked', true );
		}

		return res;
	} );

	ask_an_estimate_icon.dependency( [
		'#yith_wcwl_ask_an_estimate_custom_icon'
	], function () {
		return 'custom' === ask_an_estimate_icon.val() && 'button_custom' === ask_an_estimate_style.filter( ':checked' ).val();
	} );

	enable_share.dependency( [
		'#yith_wcwl_share_fb'
	], isChecked, function () {
		share_facebook.change();
		share_facebook_icon.change();
		share_twitter.change();
		share_twitter_icon.change();
		share_pinterest.change();
		share_pinterest_icon.change();
		share_email.change();
		share_email_icon.change();
		share_whatsapp.change();
		share_whatsapp_icon.change();
	} );

	show_estimate_button.dependency( [
		'#yith_wcwl_show_additional_info_textarea'
	], isChecked, function () {
		show_additional_info_textarea.change();
	} );

	show_estimate_button.on( 'change', function () {
		show_additional_info_textarea.change();
	} );

	show_additional_info_textarea.dependency( [
		'#yith_wcwl_additional_info_textarea_label'
	], function () {
		return isChecked( show_estimate_button ) && isChecked( show_additional_info_textarea );
	} );

	show_additional_info_textarea.on( 'change', function () {
		var t = $( this );

		if ( t.is( ':checked' ) && show_estimate_button.is( ':checked' ) ) {
			ask_an_estimate_fields.removeClass( 'yith-disabled' );
		} else {
			ask_an_estimate_fields.addClass( 'yith-disabled' );
		}
	} );

	promotion_mail_type.dependency( [
		'#woocommerce_promotion_mail_settings\\[content_html\\]'
	], function () {
		return 'multipart' === promotion_mail_type.val() || 'html' === promotion_mail_type.val();
	} );

	promotion_mail_type.dependency( [
		'#woocommerce_promotion_mail_settings\\[content_text\\]'
	], function () {
		return 'multipart' === promotion_mail_type.val() || 'plain' === promotion_mail_type.val();
	} );

	back_in_stock_mail_enabled.dependency( [
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[product_exclusions\\]',
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[category_exclusions\\]',
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[email_type\\]',
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[heading\\]',
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[subject\\]',
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[content_html\\]',
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[content_text\\]'
	], function () {
		return isChecked( back_in_stock_mail_enabled );
	}, function () {
		back_in_stock_mail_type.change();
	} );

	back_in_stock_mail_type.dependency( [
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[content_html\\]'
	], function () {
		return ('multipart' === back_in_stock_mail_type.val() || 'html' === back_in_stock_mail_type.val()) && isChecked( back_in_stock_mail_enabled );
	} );

	back_in_stock_mail_type.dependency( [
		'#woocommerce_yith_wcwl_back_in_stock_settings\\[content_text\\]'
	], function () {
		return ('multipart' === back_in_stock_mail_type.val() || 'plain' === back_in_stock_mail_type.val()) && isChecked( back_in_stock_mail_enabled );
	} );

	on_sale_item_mail_enabled.dependency( [
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[product_exclusions\\]',
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[category_exclusions\\]',
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[email_type\\]',
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[heading\\]',
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[subject\\]',
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[content_html\\]',
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[content_text\\]'
	], function () {
		return isChecked( on_sale_item_mail_enabled );
	}, function () {
		on_sale_item_mail_type.change();
	} );

	on_sale_item_mail_type.dependency( [
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[content_html\\]'
	], function () {
		return ('multipart' === on_sale_item_mail_type.val() || 'html' === on_sale_item_mail_type.val()) && isChecked( on_sale_item_mail_enabled );
	} );

	on_sale_item_mail_type.dependency( [
		'#woocommerce_yith_wcwl_on_sale_item_settings\\[content_text\\]'
	], function () {
		return ('multipart' === on_sale_item_mail_type.val() || 'plain' === on_sale_item_mail_type.val()) && isChecked( on_sale_item_mail_enabled );
	} );

	add_to_wishlist_icon_types.dependency(
		[ '#yith_wcwl_added_to_wishlist_icon_color' ],
		function () {
			const addType = getRadioValue( $( '#yith_wcwl_add_to_wishlist_icon_type' ) ),
				addedType = getRadioValue( $( '#yith_wcwl_added_to_wishlist_icon_type' ) );

			return 'default' === addedType || ('same' === addedType && 'default' === addType);
		}
	);

	show_add_to_wishlist_in_loop.dependency(
		[ '#yith_wcwl_position_over_image_in_loop', '#yith_wcwl_button_over_image_style' ],
		function () {
			const showAddToWishlistInLoop = $( '#yith_wcwl_show_on_loop' ).val();
			const loopPosition = $( '#yith_wcwl_loop_position' ).val();

			return 'yes' === showAddToWishlistInLoop && 'before_image' === loopPosition;
		}
	);

	ask_an_estimate_style.dependency(
		[ '#yith_wcwl_ask_an_estimate_custom_icon' ],
		function () {
			const askAnEstimateButtonStyle = $( '#yith_wcwl_ask_an_estimate_style' ).val();
			const iconType = $('#yith_wcwl_ask_an_estimate_icon_type').val();

			return 'button_custom' === askAnEstimateButtonStyle && 'custom' === iconType;
		}
	);

	ask_an_estimate_style.dependency(
		[ '#yith_wcwl_ask_an_estimate_icon' ],
		function () {
			const askAnEstimateButtonStyle = $( '#yith_wcwl_ask_an_estimate_style' ).val();
			const iconType = $('#yith_wcwl_ask_an_estimate_icon_type').val();

			return 'button_custom' === askAnEstimateButtonStyle && 'default' === iconType;
		}
	);

	/* === DATEPICKER === */

	// commissions filter
	$( '.date-picker-field, .date-picker' ).datepicker( {
		dateFormat: 'yy-mm-dd',
		numberOfMonths: 1,
		showButtonPanel: true
	} );

	/* === TOGGLE BOX HANDLING === */

	$( document ).on( 'yith-add-box-button-toggle', function () {
		var ask_an_estimate_type_new = $( '#new_type' ),
			ask_an_estimate_options_new = $( '#new_options' ),
			target = ask_an_estimate_options_new.closest( '.yith-add-box-row' );

		ask_an_estimate_type_new.on( 'change', function () {
			var v = ask_an_estimate_type_new.val();

			if ( v === 'radio' || v === 'select' ) {
				target.show().fadeTo( 'slow', 1 );
			} else {
				target.is( ':visible' ) ? target.fadeTo( 'slow', 0, function () {
					$( this ).hide()
				} ) : target.css( 'opacity', 0 ).hide();
			}
		} ).change();
	} );

	// Email settings actions
	$( document ).on( 'click', '.toggle-settings', function ( e ) {
		e.preventDefault();
		$( this ).closest( '.yith-wcwl-row' ).toggleClass( 'active' );
		const target = $( this ).data( 'target' );
		$( '#' + target ).slideToggle();
	} );

	$( document ).on( 'click', '.yith-wcwl-save-settings', function ( e ) {
		e.preventDefault();
		$( this ).closest( 'form' ).find( '.wp-switch-editor.switch-html' ).trigger( 'click' );
		const email_key = $( this.closest( '.email-settings' ) ).attr( 'id' );
		const data = {
			'action': 'yith_wcwl_save_email_settings',
			'params': $( this ).closest( 'form' ).serialize(),
			'email_key': email_key,
		};
		$.ajax( {
			type: 'POST',
			data: data,
			url: ajaxurl,
			success: function () {
				const row_active = $( '.yith-wcwl-row.active' );
				row_active.find( '.email-settings' ).slideToggle();
				row_active.toggleClass( 'active' );
			},
		} );
	} );

	$( document ).on( 'change', '#yith-wcwl-email-status', function () {

		const data = {
			'action': 'yith_wcwl_save_mail_status',
			'enabled': $( this ).val(),
			'email_key': $( this ).closest( '.yith-plugin-fw-onoff-container ' ).data( 'email_key' ),
		};

		$.ajax( {
			type: 'POST',
			data: data,
			url: ajaxurl,
			success: function () {
				console.log( 'Email status updated' );
			}
		} );

	} );

	$( '#popular-filter .tablenav #post-query-submit' ).on( 'click', function () {
		window.onbeforeunload = null;
	} );

	$( document ).on( 'click', '#wishlist-filter table.wishlists .yith-plugin-fw__action-button--delete-action a', function ( e ) {
		e.preventDefault();
		e.stopPropagation();

		var url = $( this ).attr( 'href' ),
			wishlistName = $( this ).closest( 'tr' ).find( 'td.name a' ).text();

		yith.ui.confirm( {
			title: yith_wcwl_admin.i18n.deleteWishlistConfirmModal.title,
			message: yith_wcwl_admin.i18n.deleteWishlistConfirmModal.message.replace( '%s', `<b>"${ wishlistName }"</b>` ),
			confirmButtonType: 'delete',
			confirmButton: yith_wcwl_admin.i18n.deleteWishlistConfirmModal.confirmButton,
			closeAfterConfirm: false,
			onConfirm: function () {
				window.location.href = url;
			},
			closeWhenClickingOnOverlay: true,
		} );
	} );
} );
