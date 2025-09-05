<?php // phpcs:ignore WordPress.Files.FileName.NotHyphenatedLowercase
/**
 * Wishlist Page settings
 *
 * @author YITH <plugins@yithemes.com>
 * @package YITH\Wishlist\Options
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

/**
 * APPLY_FILTERS: yith_wcwl_wishlist_page_options
 *
 * Filter the options available in the 'Wishlist page options' tab.
 *
 * @param array $options Array of options
 *
 * @return array
 */
return apply_filters(
	'yith_wcwl_wishlist_page_options',
	array(
		'settings-wishlist_page' => array(
			'manage_section_start'     => array(
				'name' => __( 'Wishlist page', 'yith-woocommerce-wishlist' ),
				'type' => 'title',
				'desc' => '',
				'id'   => 'yith_wcwl_manage_settings',
			),

			'wishlist_page'            => array(
				'name'    => __( 'Wishlist page', 'yith-woocommerce-wishlist' ),
				'desc'    => __( 'Pick a page as the main Wishlist page; make sure you add the <span class="code"><code>[yith_wcwl_wishlist]</code></span> shortcode into the page content', 'yith-woocommerce-wishlist' ),
				'id'      => 'yith_wcwl_wishlist_page_id',
				'type'    => 'single_select_page',
				'default' => '',
				'class'   => 'chosen_select_nostd',
			),

			'manage_section_end'       => array(
				'type' => 'sectionend',
				'id'   => 'yith_wcwl_manage_settings',
			),

			'wishlist_section_start'   => array(
				'name' => __( 'Wishlist detail page', 'yith-woocommerce-wishlist' ),
				'type' => 'title',
				'desc' => '',
				'id'   => 'yith_wcwl_wishlist_settings',
			),

			'show_product_variation'   => array(
				'name'          => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Product variations selected by the user (example: size or color)', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_variation_show',
				'type'          => 'checkbox',
				'default'       => '',
				'checkboxgroup' => 'start',
			),

			'show_unit_price'          => array(
				'name'          => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Product price', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_price_show',
				'type'          => 'checkbox',
				'default'       => 'yes',
				'checkboxgroup' => 'wishlist_info',
			),

			'show_stock_status'        => array(
				'name'          => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Product stock (show if the product is available or not)', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_stock_show',
				'type'          => 'checkbox',
				'default'       => 'yes',
				'checkboxgroup' => 'wishlist_info',
			),

			'show_dateadded'           => array(
				'name'          => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Date on which the product was added to the wishlist', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_show_dateadded',
				'type'          => 'checkbox',
				'default'       => '',
				'checkboxgroup' => 'wishlist_info',
			),

			'show_add_to_cart'         => array(
				'name'          => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Add to cart option for each product', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_add_to_cart_show',
				'type'          => 'checkbox',
				'default'       => 'yes',
				'checkboxgroup' => 'wishlist_info',
			),

			'show_remove_button'       => array(
				'name'          => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Icon to remove the product from the wishlist - to the left of the product', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_show_remove',
				'type'          => 'checkbox',
				'default'       => 'yes',
				'checkboxgroup' => 'wishlist_info',
			),

			'repeat_remove_button'     => array(
				'name'          => __( 'In wishlist table show', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Button to remove the product from the wishlist - to the right of the product', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_repeat_remove_button',
				'type'          => 'checkbox',
				'default'       => '',
				'checkboxgroup' => 'end',
			),

			'redirect_to_cart'         => array(
				'name'      => __( 'Redirect to cart', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Redirect users to the cart page when they add a product to the cart from the wishlist page', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_redirect_cart',
				'default'   => 'no',
				'type'      => 'yith-field',
				'yith-type' => 'onoff',
			),

			'remove_after_add_to_cart' => array(
				'name'      => __( 'Remove items when added to the cart', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Remove the product from the wishlist after it has been added to the cart', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_remove_after_add_to_cart',
				'default'   => 'yes',
				'type'      => 'yith-field',
				'yith-type' => 'onoff',
			),

			'enable_wishlist_share'    => array(
				'name'      => __( 'Share wishlist', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Enable this option to let users share their wishlist on social media', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_enable_share',
				'type'      => 'yith-field',
				'yith-type' => 'onoff',
				'default'   => 'yes',
			),

			'share_on_facebook'        => array(
				'name'          => __( 'Share on social media', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Share on Facebook', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_share_fb',
				'default'       => 'yes',
				'type'          => 'checkbox',
				'checkboxgroup' => 'start',
			),

			'share_on_twitter'         => array(
				'name'          => __( 'Share on social media', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Tweet on Twitter (X)', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_share_twitter',
				'default'       => 'yes',
				'type'          => 'checkbox',
				'checkboxgroup' => 'wishlist_share',
			),

			'share_on_pinterest'       => array(
				'name'          => __( 'Share on social media', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Pin on Pinterest', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_share_pinterest',
				'default'       => 'yes',
				'type'          => 'checkbox',
				'checkboxgroup' => 'wishlist_share',
			),

			'share_by_email'           => array(
				'name'          => __( 'Share on social media', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Share by email', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_share_email',
				'default'       => 'yes',
				'type'          => 'checkbox',
				'checkboxgroup' => 'wishlist_share',
			),

			'share_by_whatsapp'        => array(
				'name'          => __( 'Share on social media', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Share on WhatsApp', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_share_whatsapp',
				'default'       => 'yes',
				'type'          => 'checkbox',
				'checkboxgroup' => 'wishlist_share',
			),

			'share_by_url'             => array(
				'name'          => __( 'Share by URL', 'yith-woocommerce-wishlist' ),
				'desc'          => __( 'Show "Share URL" field on wishlist page', 'yith-woocommerce-wishlist' ),
				'id'            => 'yith_wcwl_share_url',
				'default'       => 'no',
				'type'          => 'checkbox',
				'checkboxgroup' => 'end',
			),

			'wishlist_section_end'     => array(
				'type' => 'sectionend',
				'id'   => 'yith_wcwl_wishlist_settings',
			),
		),
	)
);
