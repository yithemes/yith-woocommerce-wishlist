<?php
/**
 * Wishlist Page settings
 *
 * @author  Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

return apply_filters( 'yith_wcwl_wishlist_page_options', array(
	'wishlist_page' => array(
		'manage_section_start' => array(
			'name' => __( 'List of wishlists', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_manage_settings'
		),

		'wishlist_page' => array(
			'name'     => __( 'Wishlist Page', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'Select a page for your wishlist page; make sure to add <span class="code"><code>[yith_wcwl_wishlist]</code></span> shortcode to page content', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_wishlist_page_id',
			'type'     => 'single_select_page',
			'default'  => '',
			'class'    => 'chosen_select_nostd',
		),

		'manage_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_manage_settings'
		),

		'wishlist_section_start' => array(
			'name' => __( 'Wishlist Detail Page', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_wishlist_settings'
		),

		'show_unit_price' => array(
			'name'     => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'Product price', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_price_show',
			'type'     => 'checkbox',
			'default'  => '',
			'checkboxgroup' => 'start'
		),

		'show_stock_status' => array(
			'name'     => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'Product stock (to show if product is available or not)', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_stock_show',
			'type'     => 'checkbox',
			'default'  => '',
			'checkboxgroup' => 'wishlist_info'
		),

		'show_dateadded' => array(
			'name'     => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'Date on which product was added to the wishlist', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_show_dateadded',
			'type'     => 'checkbox',
			'default'  => '',
			'checkboxgroup' => 'wishlist_info'
		),

		'show_add_to_cart' => array(
			'name'     => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'Add to Cart option for each product', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_add_to_cart_show',
			'type'     => 'checkbox',
			'default'  => '',
			'checkboxgroup' => 'wishlist_info'
		),

		'show_remove_button' => array(
			'name'     => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'Option to remove product from the wishlist', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_show_remove',
			'type'     => 'checkbox',
			'default'  => 'yes',
			'checkboxgroup' => 'wishlist_info'
		),

		'repeat_remove_button' => array(
			'name'     => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'A second option to remove product in last column of the table', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_repeat_remove_button',
			'type'     => 'checkbox',
			'default'  => '',
			'checkboxgroup' => 'end'
		),

		'redirect_to_cart' => array(
			'name'      => __( 'Redirect to cart', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Redirect to cart page after adding product to cart from wishlist page', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_redirect_cart',
			'default'   => 'no',
			'type'      => 'yith-field',
			'yith-type' => 'onoff'
		),

		'remove_after_add_to_cart' => array(
			'name'      => __( 'Remove if added to the cart', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Remove product from the wishlist after customer addes it to cart', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_remove_after_add_to_cart',
			'default'   => 'yes',
			'type'      => 'yith-field',
			'yith-type' => 'onoff'
		),

		'enable_wishlist_share' => array(
			'name'      => __( 'Share wishlist', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Enable to allow users to share wishlist in socials', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_enable_share',
			'type'      => 'yith-field',
			'yith-type' => 'onoff',
			'default'   => 'yes',
		),

		'share_on_facebook' => array(
			'name'    => __( 'Share socials', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Share on Facebook', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_share_fb',
			'default' => 'yes',
			'type'    => 'checkbox',
			'checkboxgroup' => 'start'
		),

		'share_on_twitter' => array(
			'name'    => __( 'Share socials', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Tweet on Twitter', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_share_twitter',
			'default' => 'yes',
			'type'    => 'checkbox',
			'checkboxgroup' => 'wishlist_share'
		),

		'share_on_pinterest' => array(
			'name'    => __( 'Share socials', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Pin on Pinterest', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_share_pinterest',
			'default' => 'yes',
			'type'    => 'checkbox',
			'checkboxgroup' => 'wishlist_share'
		),

		'share_by_email' => array(
			'name'    => __( 'Share socials', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Share by Email', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_share_email',
			'default' => 'yes',
			'type'    => 'checkbox',
			'checkboxgroup' => 'wishlist_share'
		),

		'share_by_whatsapp' => array(
			'name'    => __( 'Share socials', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Share by WhatsApp', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_share_whatsapp',
			'default' => 'yes',
			'type'    => 'checkbox',
			'checkboxgroup' => 'wishlist_share'
		),

		'share_by_url' => array(
			'name'    => __( 'Share by Url', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Show "Share Url" field on wishlist page', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_share_url',
			'default' => 'no',
			'type'    => 'checkbox',
			'checkboxgroup' => 'end'
		),

		'socials_title' => array(
			'name'    => __( 'Sharing title', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Title to use during sharing (only used on Twitter and Pinterest)', 'yith-woocommerce' ),
			'id'      => 'yith_wcwl_socials_title',
			'default' => sprintf( __( 'My wishlist on %s', 'yith-woocommerce-wishlist' ), get_bloginfo( 'name' ) ),
			'type'    => 'text',
		),

		'socials_text' =>  array(
			'name'    => __( 'Social text', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Type the message you want to publish when you share your wishlist in Twitter and Pinterest', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_socials_text',
			'default' => '',
			'type'    => 'yith-field',
			'yith-type' => 'textarea'
		),

		'socials_image' => array(
			'name'    => __( 'Social image URL', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'It will be used to pin wishlist on Pinterest.', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_socials_image_url',
			'default' => '',
			'type'    => 'text',
		),

		'wishlist_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_wishlist_settings',
		),

		'text_section_start' => array(
			'name' => __( 'Text customization', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_text_section_settings'
		),

		'default_wishlist_title' => array(
			'name'    => __( 'Default wishlist name', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Enter a name for the default wishlist of your site. This is the wishlist that users will use automatically if they not create  a custom wishlist', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_wishlist_title',
			'default' => sprintf( __( 'My wishlist on %s', 'yith-woocommerce-wishlist' ), get_bloginfo( 'name' ) ), // for woocommerce >= 2.0
			'type'    => 'text',
		),

		'add_to_cart_text' => array(
			'name'    => __( '"Add to Cart" text', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Enter a text for "Add to Cart" button', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_add_to_cart_text',
			'default' => __( 'Add to Cart', 'yith-woocommerce-wishlist' ),
			'type'    => 'text',
		),

		'text_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_text_section_settings'
		),

		'style_section_start' => array(
			'name' => __( 'Style & Color customization', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_style_section_settings'
		),

		'use_buttons' => array(
			'name'      => __( 'Style of "Add to Cart"', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Choose if you want to show a textual "Add to Cart" link or a button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_add_to_cart_style',
			'options'   => array(
				'link'           => __( 'Textual (anchor)', 'yith-woocommerce-wishlist' ),
				'button_default' => __( 'Button with theme style', 'yith-woocommerce-wishlist' ),
				'button_custom'  => __( 'Button with custom style', 'yith-woocommerce-wishlist' )
			),
			'default'   => 'link',
			'type'      => 'yith-field',
			'yith-type' => 'radio'
		),

		'add_to_cart_colors' => array(
			'name'         => __( '"Add to Cart" button style', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_add_to_cart',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'desc' => __( 'Choose colors to apply to "Add to Cart" button', 'yith-woocommerce-wishlist' ),
					array(
						'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
						'id'   => 'background',
						'default' => '#333333'
					),
					array(
						'name' => __( 'Text', 'yith-woocommerce-wishlist' ),
						'id'   => 'text',
						'default' => '#FFFFFF'
					),
					array(
						'name' => __( 'Border', 'yith-woocommerce-wishlist' ),
						'id'   => 'border',
						'default' => '#333333'
					),
				),
				array(
					'desc' => __( 'Choose colors to apply to "Add to Cart" button when on hover state', 'yith-woocommerce-wishlist' ),
					array(
						'name' => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'background_hover',
						'default' => '#4F4F4F'
					),
					array(
						'name' => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'text_hover',
						'default' => '#FFFFFF'
					),
					array(
						'name' => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'border_hover',
						'default' => '#4F4F4F'
					),
				)
			),
			'deps' => array(
				'id' => 'yith_wcwl_add_to_cart_style',
				'value' => 'button_custom',
				'type' => 'disable'
			)
		),

		'rounded_buttons_radius' => array(
			'name'      => __( 'Border radius', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Choose radius to apply to "Add to Cart" button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_add_to_cart_rounded_corners_radius',
			'default'   => 16,
			'type'      => 'yith-field',
			'yith-type' => 'slider',
			'min'       => 1,
			'max'       => 100,
			'deps' => array(
				'id' => 'yith_wcwl_add_to_cart_style',
				'value' => 'button_custom',
				'type' => 'disable'
			)
		),

		'add_to_cart_icon' => array(
			'name'      => __( '"Add to Cart" icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the "Add to Cart" button (optional)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_add_to_cart_icon',
			'default'   => apply_filters( 'yith_wcwl_add_to_cart_std_icon', 'fa-shopping-cart' ),
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'icon-select',
			'options'   => yith_wcwl_get_plugin_icons(),
			'deps' => array(
				'id' => 'yith_wcwl_add_to_cart_style',
				'value' => 'button_custom',
				'type' => 'disable'
			)

		),

		'add_to_cart_custom_icon' => array(
			'name'      => __( '"Add to Cart" custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for "Add to Cart" button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_add_to_cart_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload'
		),

		'style_1_button_colors' => array(
			'name'         => __( 'Primary button style', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_button_style_1',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'desc' => __( 'Choose colors to apply to Primary button<br/><small>This style will be applied to "Edit title" button on wishlist view, "Submit Changes" button on manage view and "Search wishlist" button on search view</small>', 'yith-woocommerce-wishlist' ),
					array(
						'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
						'id'   => 'background',
						'default' => '#333333'
					),
					array(
						'name' => __( 'Text', 'yith-woocommerce-wishlist' ),
						'id'   => 'text',
						'default' => '#FFFFFF'
					),
					array(
						'name' => __( 'Border', 'yith-woocommerce-wishlist' ),
						'id'   => 'border',
						'default' => '#333333'
					),
				),
				array(
					'desc' => __( 'Choose colors to apply to Primary button when on hover state<br/><small>This style will be applied to "Edit title" button on wishlist view, "Submit Changes" button on manage view and "Search wishlist" button on search view</small>', 'yith-woocommerce-wishlist' ),
					array(
						'name' => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'background_hover',
						'default' => '#4F4F4F'
					),
					array(
						'name' => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'text_hover',
						'default' => '#FFFFFF'
					),
					array(
						'name' => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'border_hover',
						'default' => '#4F4F4F'
					),
				)
			),
			'deps' => array(
				'id' => 'yith_wcwl_add_to_cart_style',
				'value' => 'button_custom',
				'type' => 'disable'
			)
		),

		'style_2_button_colors' => array(
			'name'         => __( 'Secondary button style', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_button_style_2',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'desc' => __( 'Choose colors to apply to Secondary button<br/><small>This style will be applied to "Show title form" and "Hide title form" buttons on wishlist view and "Create new Wishlist" button on manage view</small>', 'yith-woocommerce-wishlist' ),
					array(
						'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
						'id'   => 'background',
						'default' => '#333333'
					),
					array(
						'name' => __( 'Text', 'yith-woocommerce-wishlist' ),
						'id'   => 'text',
						'default' => '#FFFFFF'
					),
					array(
						'name' => __( 'Border', 'yith-woocommerce-wishlist' ),
						'id'   => 'border',
						'default' => '#333333'
					),
				),
				array(
					'desc' => __( 'Choose colors to apply to Secondary button when on hover state<br/><small>This style will be applied to "Show title form" and "Hide title form" buttons on wishlist view and "Create new Wishlist" button on manage view</small>', 'yith-woocommerce-wishlist' ),
					array(
						'name' => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'background_hover',
						'default' => '#4F4F4F'
					),
					array(
						'name' => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'text_hover',
						'default' => '#FFFFFF'
					),
					array(
						'name' => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'border_hover',
						'default' => '#4F4F4F'
					),
				)
			),
			'deps' => array(
				'id' => 'yith_wcwl_add_to_cart_style',
				'value' => 'button_custom',
				'type' => 'disable'
			)
		),

		'wishlist_table_style' => array(
			'name'         => __( 'Wishlist table style', 'yith-woocommerce-wishlist' ),
			'desc'         => __( 'Choose colors to apply to wishlist table (when using "Traditional" layout)', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_wishlist_table',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'   => 'background',
					'default' => '#FFFFFF'
				),
				array(
					'name' => __( 'Text', 'yith-woocommerce-wishlist' ),
					'id'   => 'text',
					'default' => '#6d6c6c'
				),
				array(
					'name' => __( 'Border', 'yith-woocommerce-wishlist' ),
					'id'   => 'border',
					'default' => '#FFFFFF'
				),
			),
			'deps' => array(
				'id' => 'yith_wcwl_add_to_cart_style',
				'value' => 'button_custom',
				'type' => 'disable'
			)
		),

		'headings_style' => array(
			'name'         => __( 'Highlight color', 'yith-woocommerce-wishlist' ),
			'desc'         => __( 'Choose color to apply to all sections with background<br/><small>This color will be used as background for wishlist table heading and footer (when using "Traditional" layout), and for various form across wishlist views</small>', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_headers_background',
			'type'         => 'yith-field',
			'yith-type'    => 'colorpicker',
			'default'      => '#F4F4F4',
			'deps' => array(
				'id' => 'yith_wcwl_add_to_cart_style',
				'value' => 'button_custom',
				'type' => 'disable'
			)
		),

		'fb_button_icon' => array(
			'name'      => __( 'Facebook share button icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the Facebook share button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_fb_button_icon',
			'default'   => 'fa-facebook',
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'icon-select',
			'options'   => yith_wcwl_get_plugin_icons()
		),

		'fb_button_custom_icon' => array(
			'name'      => __( 'Facebook share button custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for Facebook share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_fb_button_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload'
		),

		'fb_button_colors' => array(
			'name'         => __( 'Facebook share button style', 'yith-woocommerce-wishlist' ),
			'desc'         => __( 'Choose colors to apply to Facebook share button', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_fb_button',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'   => 'background',
					'default' => '#39599E'
				),
				array(
					'name' => __( 'Background hover', 'yith-woocommerce-wishlist' ),
					'id'   => 'background_hover',
					'default' => '#595A5A'
				),
			),
		),

		'tw_button_icon' => array(
			'name'      => __( 'Twitter share button icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the Twitter share button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_tw_button_icon',
			'default'   => 'fa-twitter',
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'icon-select',
			'options'   => yith_wcwl_get_plugin_icons()
		),

		'tw_button_custom_icon' => array(
			'name'      => __( 'Twitter share button custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for Twitter share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_tw_button_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload'
		),

		'tw_button_colors' => array(
			'name'         => __( 'Twitter share button style', 'yith-woocommerce-wishlist' ),
			'desc'         => __( 'Choose colors to apply to Twitter share button', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_tw_button',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'   => 'background',
					'default' => '#45AFE2'
				),
				array(
					'name' => __( 'Background hover', 'yith-woocommerce-wishlist' ),
					'id'   => 'background_hover',
					'default' => '#595A5A'
				),
			),
		),

		'pr_button_icon' => array(
			'name'      => __( 'Pinterest share button icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the Pinterest share button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_pr_button_icon',
			'default'   => 'fa-pinterest',
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'icon-select',
			'options'   => yith_wcwl_get_plugin_icons()
		),

		'pr_button_custom_icon' => array(
			'name'      => __( 'Pinterest share button custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for Pinterest share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_pr_button_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload'
		),

		'pr_button_colors' => array(
			'name'         => __( 'Pinterest share button style', 'yith-woocommerce-wishlist' ),
			'desc'         => __( 'Choose colors to apply to Pinterest share button', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_pr_button',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'   => 'background',
					'default' => '#AB2E31'
				),
				array(
					'name' => __( 'Background hover', 'yith-woocommerce-wishlist' ),
					'id'   => 'background_hover',
					'default' => '#595A5A'
				),
			),
		),

		'em_button_icon' => array(
			'name'      => __( 'Email share button icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the Email share button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_em_button_icon',
			'default'   => 'fa-envelope-o',
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'icon-select',
			'options'   => yith_wcwl_get_plugin_icons()
		),

		'em_button_custom_icon' => array(
			'name'      => __( 'Email share button custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for Email share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_em_button_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload'
		),

		'em_button_colors' => array(
			'name'         => __( 'Email share button style', 'yith-woocommerce-wishlist' ),
			'desc'         => __( 'Choose colors to apply to Email share button', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_em_button',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'   => 'background',
					'default' => '#FBB102'
				),
				array(
					'name' => __( 'Background hover', 'yith-woocommerce-wishlist' ),
					'id'   => 'background_hover',
					'default' => '#595A5A'
				),
			),
		),

		'wa_button_icon' => array(
			'name'      => __( 'WhatsApp share button icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the WhatsApp share button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_wa_button_icon',
			'default'   => 'fa-whatsapp',
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'icon-select',
			'options'   => yith_wcwl_get_plugin_icons()
		),

		'wa_button_custom_icon' => array(
			'name'      => __( 'WhatsApp share button custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for WhatsApp share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_wa_button_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload'
		),

		'wa_button_colors' => array(
			'name'         => __( 'WhatsApp share button style', 'yith-woocommerce-wishlist' ),
			'desc'         => __( 'Choose colors to apply to WhatsApp share button', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_wa_button',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'name' => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'   => 'background',
					'default' => '#00A901'
				),
				array(
					'name' => __( 'Background hover', 'yith-woocommerce-wishlist' ),
					'id'   => 'background_hover',
					'default' => '#595A5A'
				),
			),
		),

		'style_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_style_section_settings'
		),
	)
) );