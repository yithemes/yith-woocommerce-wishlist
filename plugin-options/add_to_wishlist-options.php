<?php
/**
 * Add to Wishlist settings
 *
 * @author  Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

return apply_filters( 'yith_wcwl_add_to_wishlist_options', array(
	'add_to_wishlist' => array(

		'general_section_start' => array(
			'name' => __( 'General Settings', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_general_settings'
		),

		'after_add_to_wishlist_behaviour' => array(
			'name'      => __( 'When product is added to wishlist', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Choose how "Add to Wishlist" button should appear when product is already in wishlist', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_after_add_to_wishlist_behaviour',
			'options'   => array_merge(
				array(
					'add'    => __( 'Show "Add to Wishilist" button', 'yith-woocommerce-wishlist' ),
					'view'   => __( 'Show "View wishlist" link', 'yith-woocommerce-wishlist' ),
					'remove' => __( 'Show "Remove from list" link', 'yith-woocommerce-wishlist' ),
				)
			) ,
			'default'   => 'view',
			'type'      => 'yith-field',
			'yith-type' => 'radio'
		),

		'general_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_general_settings'
		),

		'shop_page_section_start' => array(
			'name' => __( 'Loop settings', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => __( 'Options of "loop" will be active in shop page, category pages, shortcodes of products, products sliders.. in all places where is used the WooCommerce "loop"', 'yith-woocommerce-wishlist' ),
			'id' => 'yith_wcwl_shop_page_settings'
		),

		'show_on_loop' => array(
			'name'      => __( 'Show "Add to Wishlist" on loop', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Enable the "Add to Wishlist" feature in loop', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_show_on_loop',
			'default'   => 'no',
			'type'      => 'yith-field',
			'yith-type' => 'onoff'
		),

		'loop_position' => array(
			'name'      => __( 'Position of "Add to Wishlist" in loop', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Choose where to show "Add to Wishlist" button or link in loop. <span class="addon">Copy this shortcode <span class="code"><code>[yith_wcwl_add_to_wishlist]</code></span> and paste it where you want to show the "Add to Wishlist" link or button</span>', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_loop_position',
			'default'   => 'after_add_to_cart',
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'wc-enhanced-select',
			'options'   => array(
				'before_image' => __( 'On top of the image', 'yith-woocommerce-wishlist' ),
				'before_add_to_cart' => __( 'Before "Add to Cart" button', 'yith-woocommerce-wishlist' ),
				'after_add_to_cart' => __( 'After "Add to Cart" button', 'yith-woocommerce-wishlist' ),
				'shortcode' => __( 'Use shortcode', 'yith-woocommerce-wishlist' )
			),
			'deps'      => array(
				'id'    => 'yith_wcwl_show_on_loop',
				'value' => 'yes',
				'type'  => 'disable'
			)
		),

		'shop_page_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_shop_page_settings'
		),

		'product_page_section_start' => array(
			'name' => __( 'Product page settings', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_product_page_settings'
		),

		'add_to_wishlist_position' => array(
			'name'      => __( 'Position of "Add to Wishlist" in product page', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Choose where to show "Add to Wishlist" button or link in product page. <span class="addon">Copy this shortcode <span class="code"><code>[yith_wcwl_add_to_wishlist]</code></span> and paste it where you want to show the "Add to Wishlist" link or button</span>', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_button_position',
			'default'   => 'after_add_to_cart',
			'type'      => 'yith-field',
			'yith-type' => 'select',
			'class'     => 'wc-enhanced-select',
			'options'   => array(
				'add-to-cart' => __( 'After "Add to cart"', 'yith-woocommerce-wishlist' ),
				'thumbnails'  => __( 'After thumbnails', 'yith-woocommerce-wishlist' ),
				'summary'     => __( 'After summary', 'yith-woocommerce-wishlist' ),
				'shortcode'   => __( 'Use shortcode', 'yith-woocommerce-wishlist' )
			),
		),

		'product_page_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_product_page_settings'
		),

		'text_section_start' => array(
			'name' => __( 'Text customization', 'yith-woocommerce-wishlist' ),
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_text_section_settings'
		),

		'add_to_wishlist_text' => array(
			'name'    => __( '"Add to Wishlist" text', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Enter a text for "Add to Wishlist" button', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_add_to_wishlist_text',
			'default' => __( 'Add to Wishlist', 'yith-woocommerce-wishlist' ),
			'type'    => 'text',
		),

		'product_added_text' => array(
			'name'    => __( '"Product added" text', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Enter a text for "Product added" message when user add a product in wishlist', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_product_added_text',
			'default' => __( 'Product added!', 'yith-woocommerce-wishlist' ),
			'type'    => 'text',
		),

		'browse_wishlist_text' => array(
			'name'    => __( '"Browse wishlist" text', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Enter a text for "Browse wishlist" text in product page', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_browse_wishlist_text',
			'default' => __( 'Browse Wishlist', 'yith-woocommerce-wishlist' ),
			'type'    => 'text',
		),

		'already_in_wishlist_text' => array(
			'name'    => __( '"Product already in wishlist" text', 'yith-woocommerce-wishlist' ),
			'desc'    => __( 'Enter a text for "Product already in wishlist" message when user view a product already in his list', 'yith-woocommerce-wishlist' ),
			'id'      => 'yith_wcwl_already_in_wishlist_text',
			'default' => __( 'The product is already in the wishlist!', 'yith-woocommerce-wishlist' ),
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
			'name'      => __( 'Style of "Add to Wishlist"', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Choose if you want to show a textual "Add to Wishlist" link or a button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_add_to_wishlist_style',
			'options'   => array(
				'link'           => __( 'Textual (anchor)', 'yith-woocommerce-wishlist' ),
				'button_default' => __( 'Button with theme style', 'yith-woocommerce-wishlist' ),
				'button_custom'  => __( 'Button with custom style', 'yith-woocommerce-wishlist' )
			),
			'default'   => 'link',
			'type'      => 'yith-field',
			'yith-type' => 'radio'
		),

		'add_to_wishlist_colors' => array(
			'name'         => __( '"Add to Wishlist" button style', 'yith-woocommerce-wishlist' ),
			'id'           => 'yith_wcwl_color_add_to_wishlist',
			'type'         => 'yith-field',
			'yith-type'    => 'multi-colorpicker',
			'colorpickers' => array(
				array(
					'desc' => __( 'Choose colors to apply to "Add to Wishlist" button', 'yith-woocommerce-wishlist' ),
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
					'desc' => __( 'Choose colors to apply to "Add to Wishlist" button when on hover state', 'yith-woocommerce-wishlist' ),
					array(
						'name' => __( 'Background Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'background_hover',
						'default' => '#333333'
					),
					array(
						'name' => __( 'Text Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'text_hover',
						'default' => '#FFFFFF'
					),
					array(
						'name' => __( 'Border Hover', 'yith-woocommerce-wishlist' ),
						'id'   => 'border_hover',
						'default' => '#333333'
					),
				)
			),
			'deps' => array(
				'id'    => 'yith_wcwl_add_to_wishlist_style',
				'value' => 'button_custom',
				'type'  => 'disable'
			)
		),

		'rounded_buttons_radius' => array(
			'name'      => __( 'Border radius', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Choose radius to apply to "Add to Wishlist" button', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_rounded_corners_radius',
			'default'   => 16,
			'type'      => 'yith-field',
			'yith-type' => 'slider',
			'min'       => 1,
			'max'       => 100,
			'deps' => array(
				'id'    => 'yith_wcwl_add_to_wishlist_style',
				'value' => 'button_custom',
				'type'  => 'disable'
			)
		),

		'add_to_wishlist_icon' => array(
			'name'      => __( '"Add to Wishlist" icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the "Add to Wishlist" button (optional)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_add_to_wishlist_icon',
			'default'   => apply_filters( 'yith_wcwl_add_to_wishlist_std_icon', '' ),
			'type'      => 'yith-field',
			'class'     => 'icon-select',
			'yith-type' => 'select',
			'options'   => yith_wcwl_get_plugin_icons()
		),

		'add_to_wishlist_custom_icon' => array(
			'name'      => __( '"Add to Wishlist" custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for "Add to Wishlist" button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_add_to_wishlist_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload',
			'deps'      => array(
				'id'    => 'yith_wcwl_add_to_wishlist_icon',
				'value' => 'custom',
				'type'  => 'disable'
			)
		),

		'added_to_wishlist_icon' => array(
			'name'      => __( '"Added to Wishlist" icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Select an icon for the "Add to Wishlist" button (optional)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_added_to_wishlist_icon',
			'default'   => apply_filters( 'yith_wcwl_add_to_wishlist_std_icon', '' ),
			'type'      => 'yith-field',
			'class'     => 'icon-select',
			'yith-type' => 'select',
			'options'   => yith_wcwl_get_plugin_icons( __( 'Same used for Add to Wishlist', 'yith-woocommerce-wishlist' ) )
		),

		'added_to_wishlist_custom_icon' => array(
			'name'      => __( '"Added to Wishlist" custom icon', 'yith-woocommerce-wishlist' ),
			'desc'      => __( 'Upload an icon you\'d like to use for "Add to Wishlist" button (suggested 32px x 32px)', 'yith-woocommerce-wishlist' ),
			'id'        => 'yith_wcwl_added_to_wishlist_custom_icon',
			'default'   => '',
			'type'      => 'yith-field',
			'yith-type' => 'upload',
			'deps'      => array(
				'id'    => 'yith_wcwl_added_to_wishlist_icon',
				'value' => 'custom',
				'type'  => 'disable'
			)
		),

		'custom_css' => array(
			'name'     => __( 'Custom CSS', 'yith-woocommerce-wishlist' ),
			'desc'     => __( 'Enter custom CSS to be applied to Wishlist elements (optional)', 'yith-woocommerce-wishlist' ),
			'id'       => 'yith_wcwl_custom_css',
			'default'  => '',
			'type'     => 'yith-field',
			'yith-type' => 'textarea',
		),

		'style_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_style_section_settings'
		),

	),
) );