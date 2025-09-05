<?php
/**
 * Style subtab of customization settings
 *
 * @package YITH\Wishlist\Options
 * @author  YITH <plugins@yithemes.com>
 * @since   4.0.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly

$share_enabled = wc_string_to_bool( get_option( 'yith_wcwl_enable_share', 'yes' ) );

$share_on = array(
	'facebook'  => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_fb' ) ),
	'pinterest' => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_pinterest' ) ),
	'twitter'   => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_twitter' ) ),
	'email'     => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_email' ) ),
	'url'       => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_url' ) ),
	'whatsapp'  => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_whatsapp' ) ),
);

$add_to_wishlist = array(
	'add_to_wishlist_start' => array(
		'name' => __( 'Add to wishlist', 'yith-woocommerce-wishlist' ),
		'type' => 'title',
		'desc' => '',
	),

	'use_buttons' => array(
		'name'      => __( 'Style of "Add to wishlist"', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Choose if you want to show a textual "Add to wishlist" link or a button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_wishlist_style',
		'options'   => array(
			'link'           => __( 'Textual (anchor)', 'yith-woocommerce-wishlist' ),
			'button_default' => __( 'Button with theme style', 'yith-woocommerce-wishlist' ),
			'button_custom'  => __( 'Button with custom style', 'yith-woocommerce-wishlist' ),
		),
		'default'   => 'link',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
	),

	'add_to_wishlist_colors' => array(
		'name'         => __( '"Add to wishlist" button style', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_add_to_wishlist',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				array(
					'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'      => 'background',
					'default' => '#333333',
				),
				array(
					'name'    => __( 'Text', 'yith-woocommerce-wishlist' ),
					'id'      => 'text',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border', 'yith-woocommerce-wishlist' ),
					'id'      => 'border',
					'default' => '#333333',
				),
			),
			array(
				array(
					'name'    => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'background_hover',
					'default' => '#333333',
				),
				array(
					'name'    => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'text_hover',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'border_hover',
					'default' => '#333333',
				),
			),
		),
		'deps'         => array(
			'id'    => 'yith_wcwl_add_to_wishlist_style',
			'value' => 'button_custom',
		),
	),

	'add_to_wishlist_rounded_buttons_radius' => array(
		'name'      => __( 'Border radius', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Choose radius for the "Add to wishlist" button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_rounded_corners_radius',
		'default'   => 16,
		'type'      => 'yith-field',
		'yith-type' => 'slider',
		'min'       => 1,
		'max'       => 100,
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_wishlist_style',
			'value' => 'button_custom',
		),
	),

	'add_to_wishlist_icon_type' => array(
		'name'      => __( '"Add to wishlist" icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Choose whether to use one of the default icons or a custom one', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_wishlist_icon_type',
		'default'   => 'default',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
		'options'   => array(
			'default' => __( 'Use default icon', 'yith-woocommerce-wishlist' ),
			'custom'  => __( 'Upload a custom icon', 'yith-woocommerce-wishlist' ),
		),
	),

	'add_to_wishlist_icon' => array(
		'name'      => __( '"Add to wishlist" icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the "Add to wishlist" button (optional)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_wishlist_icon',
		/**
		 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_std_icon
		 *
		 * Filter the default 'Add to wishlist' icon.
		 *
		 * @param string $icon Default icon
		 *
		 * @return array
		 */
		'default'   => apply_filters( 'yith_wcwl_add_to_wishlist_std_icon', 'heart-outline', 'yith_wcwl_add_to_wishlist_icon' ),
		'type'      => 'yith-field',
		'class'     => 'icon-select',
		'yith-type' => 'select',
		'options'   => yith_wcwl_get_plugin_icons_options( 'add-to-wishlist' ),
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_wishlist_icon_type',
			'value' => 'default',
		),
	),

	'add_to_wishlist_icon_color' => array(
		'name'      => __( 'Icon color', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_wishlist_icon_color',
		'type'      => 'yith-field',
		'yith-type' => 'colorpicker',
		'default'   => '#000000',
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_wishlist_icon_type',
			'value' => 'default',
		),
	),

	'add_to_wishlist_custom_icon' => array(
		'name'      => __( '"Add to wishlist" custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for "Add to wishlist" button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_wishlist_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_wishlist_icon_type',
			'value' => 'custom',
		),
	),

	'added_to_wishlist_icon_type' => array(
		'name'      => __( '"Added to wishlist" icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the "Added to wishlist" button (optional)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_added_to_wishlist_icon_type',
		'default'   => 'default',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
		'options'   => array(
			'same'    => __( 'Same used for Add to wishlist', 'yith-woocommerce-wishlist' ),
			'default' => __( 'Use default icon', 'yith-woocommerce-wishlist' ),
			'custom'  => __( 'Upload a custom icon', 'yith-woocommerce-wishlist' ),
		),
	),

	'added_to_wishlist_icon' => array(
		'name'      => __( '"Added to wishlist" icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the "Added to wishlist" button (optional)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_added_to_wishlist_icon',
		/**
		 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_std_icon
		 *
		 * Filter the default 'Added to wishlist' icon.
		 *
		 * @param string $icon Default icon
		 *
		 * @return array
		 */
		'default'   => apply_filters( 'yith_wcwl_add_to_wishlist_std_icon', 'heart', 'yith_wcwl_added_to_wishlist_icon' ),
		'type'      => 'yith-field',
		'class'     => 'icon-select',
		'yith-type' => 'select',
		'options'   => yith_wcwl_get_plugin_icons_options( 'added-to-wishlist' ),
		'deps'      => array(
			'id'    => 'yith_wcwl_added_to_wishlist_icon_type',
			'value' => 'default',
		),
	),

	'added_to_wishlist_custom_icon' => array(
		'name'      => __( '"Added to wishlist" custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for "Add to wishlist" button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_added_to_wishlist_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_added_to_wishlist_icon_type',
			'value' => 'custom',
		),
	),

	'added_to_wishlist_icon_color' => array(
		'name'      => __( 'Icon color', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_added_to_wishlist_icon_color',
		'type'      => 'yith-field',
		'yith-type' => 'colorpicker',
		'default'   => '#000000',
	),

	'custom_css' => array(
		'name'      => __( 'Custom CSS', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Enter custom CSS to be applied to Wishlist elements (optional)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_custom_css',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'textarea',
	),

	'add_to_wishlist_end' => array(
		'type' => 'sectionend',
	),
);

$wishlist_page = array(
	'wishlist_page_start' => array(
		'title' => __( 'Wishlist page', 'yith-woocommerce-wishlist' ),
		'type'  => 'title',
	),

	'wishlist_use_buttons' => array(
		'name'      => __( 'Style of "Add to cart"', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Choose whether to show a textual "Add to cart" link or a button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_cart_style',
		'options'   => array(
			'link'           => __( 'Textual (anchor)', 'yith-woocommerce-wishlist' ),
			'button_default' => __( 'Button with theme style', 'yith-woocommerce-wishlist' ),
			'button_custom'  => __( 'Button with custom style', 'yith-woocommerce-wishlist' ),
		),
		'default'   => 'link',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
	),

	'add_to_cart_colors' => array(
		'name'         => __( '"Add to cart" button style', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_add_to_cart',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'desc' => '<br>' . __( 'Choose the colors for the "Add to cart" button', 'yith-woocommerce-wishlist' ),
				array(
					'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'      => 'background',
					'default' => '#333333',
				),
				array(
					'name'    => __( 'Text', 'yith-woocommerce-wishlist' ),
					'id'      => 'text',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border', 'yith-woocommerce-wishlist' ),
					'id'      => 'border',
					'default' => '#333333',
				),
			),
			array(
				'desc' => '<br>' . __( 'Choose colors for the "Add to cart" button on hover state', 'yith-woocommerce-wishlist' ),
				array(
					'name'    => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'background_hover',
					'default' => '#4F4F4F',
				),
				array(
					'name'    => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'text_hover',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'border_hover',
					'default' => '#4F4F4F',
				),
			),
		),
		'deps'         => array(
			'id'    => 'yith_wcwl_add_to_cart_style',
			'value' => 'button_custom',
		),
	),

	'wishlist_page_rounded_buttons_radius' => array(
		'name'      => __( 'Border radius', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Set the radius for the "Add to cart" button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_cart_rounded_corners_radius',
		'default'   => 16,
		'type'      => 'yith-field',
		'yith-type' => 'slider',
		'min'       => 1,
		'max'       => 100,
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_cart_style',
			'value' => 'button_custom',
		),
	),

	'add_to_cart_icon' => array(
		'name'      => __( '"Add to cart" icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the "Add to cart" button (optional)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_cart_icon',
		/**
		 * APPLY_FILTERS: yith_wcwl_add_to_cart_std_icon
		 *
		 * Filter the default 'Add to cart' icon in the Wishlist page.
		 *
		 * @param string $icon Default icon
		 *
		 * @return string
		 */
		'default'   => apply_filters( 'yith_wcwl_add_to_cart_std_icon', 'fa-shopping-cart' ),
		'type'      => 'yith-field',
		'yith-type' => 'select',
		'class'     => 'icon-select',
		'options'   => yith_wcwl_get_plugin_icons_options( 'add-to-cart' ),
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_cart_style',
			'value' => 'button_custom',
		),

	),

	'add_to_cart_custom_icon' => array(
		'name'      => __( '"Add to cart" custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for the "Add to cart" button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_add_to_cart_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_cart_icon', // TODO: handle the double dependency for 'yith_wcwl_add_to_cart_icon' and 'yith_wcwl_add_to_cart_style'
			'value' => 'custom',
		),
	),

	'style_1_button_colors' => array(
		'name'         => __( 'Primary button style', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_button_style_1',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'desc' => '<br>' . __( 'Choose colors for the primary button<br/><small>This style will be applied to "Edit title" button on Wishlist view, "Submit Changes" button on Manage view and "Search wishlist" button on Search view</small>', 'yith-woocommerce-wishlist' ),
				array(
					'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'      => 'background',
					'default' => '#333333',
				),
				array(
					'name'    => __( 'Text', 'yith-woocommerce-wishlist' ),
					'id'      => 'text',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border', 'yith-woocommerce-wishlist' ),
					'id'      => 'border',
					'default' => '#333333',
				),
			),
			array(
				'desc' => '<br>' . __( 'Choose colors for the primary button on hover state<br/><small>This style will be applied to "Edit title" button on Wishlist view, "Submit Changes" button on Manage view and "Search wishlist" button on Search view</small>', 'yith-woocommerce-wishlist' ),
				array(
					'name'    => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'background_hover',
					'default' => '#4F4F4F',
				),
				array(
					'name'    => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'text_hover',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'border_hover',
					'default' => '#4F4F4F',
				),
			),
		),
		'deps'         => array(
			'id'    => 'yith_wcwl_add_to_cart_style',
			'value' => 'button_custom',
		),
	),

	'style_2_button_colors' => array(
		'name'         => __( 'Secondary button style', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_button_style_2',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'desc' => '<br>' . __( 'Choose colors of the secondary button<br/><small>This style will be applied to the buttons that allow showing and hiding the Edit title form on Wishlist view and "Create new Wishlist" button on Manage view</small>', 'yith-woocommerce-wishlist' ),
				array(
					'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
					'id'      => 'background',
					'default' => '#333333',
				),
				array(
					'name'    => __( 'Text', 'yith-woocommerce-wishlist' ),
					'id'      => 'text',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border', 'yith-woocommerce-wishlist' ),
					'id'      => 'border',
					'default' => '#333333',
				),
			),
			array(
				'desc' => '<br>' . __( 'Choose colors of the secondary button<br/><small>This style will be applied to the buttons that allow showing and hiding the Edit title form on Wishlist view and "Create new Wishlist" button on Manage view</small>', 'yith-woocommerce-wishlist' ),
				array(
					'name'    => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'background_hover',
					'default' => '#4F4F4F',
				),
				array(
					'name'    => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'text_hover',
					'default' => '#FFFFFF',
				),
				array(
					'name'    => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
					'id'      => 'border_hover',
					'default' => '#4F4F4F',
				),
			),
		),
		'deps'         => array(
			'id'    => 'yith_wcwl_add_to_cart_style',
			'value' => 'button_custom',
		),
	),

	'wishlist_table_style' => array(
		'name'         => __( 'Wishlist table style', 'yith-woocommerce-wishlist' ),
		'desc'         => __( 'Choose the colors for the wishlist table (when set to "Traditional" layout)', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_wishlist_table',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
				'id'      => 'background',
				'default' => '#ffffff',
			),
			array(
				'name'    => __( 'Text', 'yith-woocommerce-wishlist' ),
				'id'      => 'text',
				'default' => '#6d6c6c',
			),
			array(
				'name'    => __( 'Border', 'yith-woocommerce-wishlist' ),
				'id'      => 'border',
				'default' => '#cccccc',
			),
		),
		'deps'         => array(
			'id'    => 'yith_wcwl_add_to_cart_style',
			'value' => 'button_custom',
		),
	),

	'headings_style' => array(
		'name'      => __( 'Highlight color', 'yith-woocommerce-wishlist' ),
		'desc'      => '<br>' . __( 'Choose the color for all sections with background<br/><small>This color will be used as background for the wishlist table heading and footer (when set to "Traditional" layout), and for various form across wishlist views</small>', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_color_headers_background',
		'type'      => 'yith-field',
		'yith-type' => 'colorpicker',
		'default'   => '#F4F4F4',
		'deps'      => array(
			'id'    => 'yith_wcwl_add_to_cart_style',
			'value' => 'button_custom',
		),
	),

	'share_colors' => $share_enabled ? array(
		'name'         => __( 'Share button text color', 'yith-woocommerce-wishlist' ),
		'desc'         => __( 'Choose colors for share buttons text', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_share_button',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'name'    => __( 'Text', 'yith-woocommerce-wishlist' ),
				'id'      => 'color',
				'default' => '#FFFFFF',
			),
			array(
				'name'    => __( 'Text hover', 'yith-woocommerce-wishlist' ),
				'id'      => 'color_hover',
				'default' => '#FFFFFF',
			),
		),
	) : false,

	'fb_button_icon' => $share_on[ 'facebook' ] ? array(
		'name'      => __( 'Facebook share button icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the Facebook share button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_fb_button_icon',
		'default'   => 'default',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
		'options'   => array(
			'none'    => __( 'Show social label without icon', 'yith-woocommerce-wishlist' ),
			'default' => __( 'Social default icon', 'yith-woocommerce-wishlist' ),
			'custom'  => __( 'Upload a custom icon', 'yith-woocommerce-wishlist' ),
		),
	) : false,

	'fb_button_custom_icon' => $share_on[ 'facebook' ] ? array(
		'name'      => __( 'Facebook share button custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for Facebook share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_fb_button_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_fb_button_icon',
			'value' => 'custom',
		),
	) : false,

	'fb_button_colors' => $share_on[ 'facebook' ] ? array(
		'name'         => __( 'Facebook share button style', 'yith-woocommerce-wishlist' ),
		'desc'         => __( 'Choose colors for Facebook share button', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_fb_button',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
				'id'      => 'background',
				'default' => '#39599E',
			),
			array(
				'name'    => __( 'Background hover', 'yith-woocommerce-wishlist' ),
				'id'      => 'background_hover',
				'default' => '#595A5A',
			),
		),
	) : false,

	'tw_button_icon' => $share_on[ 'twitter' ] ? array(
		'name'      => __( 'Twitter (X) share button icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the Twitter (X) share button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_tw_button_icon',
		'default'   => 'default',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
		'options'   => array(
			'none'    => __( 'Show social label without icon', 'yith-woocommerce-wishlist' ),
			'default' => __( 'Social default icon', 'yith-woocommerce-wishlist' ),
			'custom'  => __( 'Upload a custom icon', 'yith-woocommerce-wishlist' ),
		),
	) : false,

	'tw_button_custom_icon' => $share_on[ 'twitter' ] ? array(
		'name'      => __( 'Twitter (X) share button custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for Twitter (X) share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_tw_button_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_tw_button_icon',
			'value' => 'custom',
		),
	) : false,

	'tw_button_colors' => $share_on[ 'twitter' ] ? array(
		'name'         => __( 'Twitter (X) share button style', 'yith-woocommerce-wishlist' ),
		'desc'         => __( 'Choose colors for Twitter (X) share button', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_tw_button',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
				'id'      => 'background',
				'default' => '#45AFE2',
			),
			array(
				'name'    => __( 'Background hover', 'yith-woocommerce-wishlist' ),
				'id'      => 'background_hover',
				'default' => '#595A5A',
			),
		),
	) : false,

	'socials_image' => array(
		'name'    => __( 'Pinterest image', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Set an image to share the list on Pinterest', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_socials_image_url',
		'default' => '',
		'type'    => 'text', // TODO: transform into an upload field.
	),

	'pr_button_icon' => $share_on[ 'pinterest' ] ? array(
		'name'      => __( 'Pinterest share button icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the Pinterest share button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_pr_button_icon',
		'default'   => 'default',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
		'options'   => array(
			'none'    => __( 'Show social label without icon', 'yith-woocommerce-wishlist' ),
			'default' => __( 'Social default icon', 'yith-woocommerce-wishlist' ),
			'custom'  => __( 'Upload a custom icon', 'yith-woocommerce-wishlist' ),
		),
	) : false,

	'pr_button_custom_icon' => $share_on[ 'pinterest' ] ? array(
		'name'      => __( 'Pinterest share button custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for Pinterest share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_pr_button_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_pr_button_icon',
			'value' => 'custom',
		),
	) : false,

	'pr_button_colors' => $share_on[ 'pinterest' ] ? array(
		'name'         => __( 'Pinterest share button style', 'yith-woocommerce-wishlist' ),
		'desc'         => __( 'Choose colors for Pinterest share button', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_pr_button',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
				'id'      => 'background',
				'default' => '#AB2E31',
			),
			array(
				'name'    => __( 'Background hover', 'yith-woocommerce-wishlist' ),
				'id'      => 'background_hover',
				'default' => '#595A5A',
			),
		),
	) : false,

	'em_button_icon' => $share_on[ 'email' ] ? array(
		'name'      => __( 'Email share button icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the Email share button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_em_button_icon',
		'default'   => 'default',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
		'options'   => array(
			'none'    => __( 'Show email label without icon', 'yith-woocommerce-wishlist' ),
			'default' => __( 'Email default icon', 'yith-woocommerce-wishlist' ),
			'custom'  => __( 'Upload a custom icon', 'yith-woocommerce-wishlist' ),
		),
	) : false,

	'em_button_custom_icon' => $share_on[ 'email' ] ? array(
		'name'      => __( 'Email share button custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for the Email share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_em_button_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_em_button_icon',
			'value' => 'custom',
		),
	) : false,

	'em_button_colors' => $share_on[ 'email' ] ? array(
		'name'         => __( 'Email share button style', 'yith-woocommerce-wishlist' ),
		'desc'         => __( 'Choose colors for the Email share button', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_em_button',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
				'id'      => 'background',
				'default' => '#FBB102',
			),
			array(
				'name'    => __( 'Background hover', 'yith-woocommerce-wishlist' ),
				'id'      => 'background_hover',
				'default' => '#595A5A',
			),
		),
	) : false,

	'wa_button_icon' => $share_on[ 'whatsapp' ] ? array(
		'name'      => __( 'WhatsApp share button icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Select an icon for the WhatsApp share button', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_wa_button_icon',
		'default'   => 'default',
		'type'      => 'yith-field',
		'yith-type' => 'radio',
		'options'   => array(
			'none'    => __( 'Show social label without icon', 'yith-woocommerce-wishlist' ),
			'default' => __( 'Social default icon', 'yith-woocommerce-wishlist' ),
			'custom'  => __( 'Upload a custom icon', 'yith-woocommerce-wishlist' ),
		),
	) : false,

	'wa_button_custom_icon' => $share_on[ 'whatsapp' ] ? array(
		'name'      => __( 'WhatsApp share button custom icon', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Upload an icon you\'d like to use for WhatsApp share button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_wa_button_custom_icon',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'media',
		'deps'      => array(
			'id'    => 'yith_wcwl_wa_button_icon',
			'value' => 'custom',
		),
	) : false,

	'wa_button_colors' => $share_on[ 'whatsapp' ] ? array(
		'name'         => __( 'WhatsApp share button style', 'yith-woocommerce-wishlist' ),
		'desc'         => __( 'Choose colors for WhatsApp share button', 'yith-woocommerce-wishlist' ),
		'id'           => 'yith_wcwl_color_wa_button',
		'type'         => 'yith-field',
		'yith-type'    => 'multi-colorpicker',
		'colorpickers' => array(
			array(
				'name'    => __( 'Background', 'yith-woocommerce-wishlist' ),
				'id'      => 'background',
				'default' => '#00A901',
			),
			array(
				'name'    => __( 'Background hover', 'yith-woocommerce-wishlist' ),
				'id'      => 'background_hover',
				'default' => '#595A5A',
			),
		),
	) : false,

	'wishlist_page_end' => array(
		'type' => 'sectionend',
	),
);

/**
 * APPLY_FILTERS: yith_wcwl_customization_style_options
 *
 * Filter the options available in the 'Customization > Customization' tab.
 *
 * @param array $options Array of options
 *
 * @return array
 */
return apply_filters(
	'yith_wcwl_customization_style_options',
	array(
		'customization-style' => array_merge(
			$add_to_wishlist,
			$wishlist_page
		),
	)
);
