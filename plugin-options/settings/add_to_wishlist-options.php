<?php // phpcs:ignore WordPress.Files.FileName.NotHyphenatedLowercase
/**
 * Add to Wishlist settings
 *
 * @author  YITH <plugins@yithemes.com>
 * @package YITH\Wishlist\Options
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

/**
 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_options
 *
 * Filter the options available in the 'Add to wishlist options' tab.
 *
 * @param array $options Array of options
 *
 * @return array
 */
return apply_filters(
	'yith_wcwl_add_to_wishlist_options',
	array(
		'settings-add_to_wishlist' => array(

			'general_section_start' => array(
				'name' => __( 'General settings', 'yith-woocommerce-wishlist' ),
				'type' => 'title',
				'desc' => '',
				'id'   => 'yith_wcwl_general_settings',
			),

			'after_add_to_wishlist_behaviour' => array(
				'name'      => __( 'After product is added to wishlist', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Choose the look of the Wishlist button when the product has already been added to a wishlist', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_after_add_to_wishlist_behaviour',
				'options'   => array(
					'add'    => __( 'Show "Add to wishlist" button', 'yith-woocommerce-wishlist' ),
					'view'   => __( 'Show "View wishlist" link', 'yith-woocommerce-wishlist' ),
					'remove' => __( 'Show "Remove from list" link', 'yith-woocommerce-wishlist' ),
				),
				'default'   => 'view',
				'type'      => 'yith-field',
				'yith-type' => 'radio',
			),

			'general_section_end' => array(
				'type' => 'sectionend',
				'id'   => 'yith_wcwl_general_settings',
			),

			'shop_page_section_start' => array(
				'name' => __( 'Loop settings', 'yith-woocommerce-wishlist' ),
				'type' => 'title',
				'desc' => __( 'Loop options will be visible on Shop page, category pages, product shortcodes, products sliders, and all the other places where the WooCommerce products\' loop is used', 'yith-woocommerce-wishlist' ),
				'id'   => 'yith_wcwl_shop_page_settings',
			),

			'show_on_loop' => array(
				'name'      => __( 'Show "Add to wishlist" in loop', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Enable the "Add to wishlist" feature in WooCommerce products\' loop', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_show_on_loop',
				'default'   => 'no',
				'type'      => 'yith-field',
				'yith-type' => 'onoff',
			),

			'loop_position' => array(
				'name'      => __( 'Position of "Add to wishlist" in loop', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Choose where to show "Add to wishlist" button or link in WooCommerce products\' loop. <span class="addon">Copy this shortcode <span class="code"><code>[yith_wcwl_add_to_wishlist]</code></span> and paste it where you want to show the "Add to wishlist" link or button</span>', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_loop_position',
				'default'   => 'after_add_to_cart',
				'type'      => 'yith-field',
				'yith-type' => 'select',
				'class'     => 'wc-enhanced-select',
				'options'   => array(
					'before_image'       => __( 'On top of the image', 'yith-woocommerce-wishlist' ),
					'before_add_to_cart' => __( 'Before "Add to cart" button', 'yith-woocommerce-wishlist' ),
					'after_add_to_cart'  => __( 'After "Add to cart" button', 'yith-woocommerce-wishlist' ),
					'shortcode'          => __( 'Use shortcode', 'yith-woocommerce-wishlist' ),
				),
				'deps'      => array(
					'id'    => 'yith_wcwl_show_on_loop',
					'value' => 'yes',
				),
			),

			'shop_page_section_end' => array(
				'type' => 'sectionend',
				'id'   => 'yith_wcwl_shop_page_settings',
			),

			'product_page_section_start' => array(
				'name' => __( 'Product page settings', 'yith-woocommerce-wishlist' ),
				'type' => 'title',
				'desc' => '',
				'id'   => 'yith_wcwl_product_page_settings',
			),

			'add_to_wishlist_position' => array(
				'name'      => __( 'Position of "Add to wishlist" on product page', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Choose where to show "Add to wishlist" button or link on the product page. <span class="addon">Copy this shortcode <span class="code"><code>[yith_wcwl_add_to_wishlist]</code></span> and paste it where you want to show the "Add to wishlist" link or button</span>', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_button_position',
				'default'   => 'after_add_to_cart',
				'type'      => 'yith-field',
				'yith-type' => 'select',
				'class'     => 'wc-enhanced-select',
				'options'   => array(
					'add-to-cart' => __( 'After "Add to cart"', 'yith-woocommerce-wishlist' ),
					'thumbnails'  => __( 'After thumbnails', 'yith-woocommerce-wishlist' ),
					'summary'     => __( 'After summary', 'yith-woocommerce-wishlist' ),
					'shortcode'   => __( 'Use shortcode', 'yith-woocommerce-wishlist' ),
				),
			),

			'product_page_section_end' => array(
				'type' => 'sectionend',
				'id'   => 'yith_wcwl_product_page_settings',
			),
		),
	)
);
