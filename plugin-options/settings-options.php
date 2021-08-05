<?php
/**
 * General settings page
 *
 * @author YITH
 * @package YITH\Wishlist\Options
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

$yith_wfbt_installed = ( defined( 'YITH_WFBT' ) && YITH_WFBT );
$yith_wfbt_landing   = 'https://yithemes.com/themes/plugins/yith-woocommerce-frequently-bought-together/';
$yith_wfbt_thickbox  = YITH_WCWL_URL . 'assets/images/landing/yith-wfbt-slider.jpg';

// translators: 1. Anchor to Frequently Bought Together landing page on yithemes.com.
$yith_wfbt_promo = sprintf( __( 'If you want to take advantage of this feature, you could consider purchasing the %s.', 'yith-woocommerce-wishlist' ), '<a href="' . $yith_wfbt_landing . '">YITH WooCommerce Frequently Bought Together Plugin</a>' );

return apply_filters(
	'yith_wcwl_settings_options',
	array(
		'settings' => array(

			'general_section_start'        => array(
				'name' => __( 'General Settings', 'yith-woocommerce-wishlist' ),
				'type' => 'title',
				'desc' => '',
				'id'   => 'yith_wcwl_general_settings',
			),

			'enable_ajax_loading'          => array(
				'name'      => __( 'Enable AJAX loading', 'yith-woocommerce-wishlist' ),
				'desc'      => __( 'Load any cacheable wishlist item via AJAX', 'yith-woocommerce-wishlist' ),
				'id'        => 'yith_wcwl_ajax_enable',
				'default'   => 'no',
				'type'      => 'yith-field',
				'yith-type' => 'onoff',
			),

			'general_section_end'          => array(
				'type' => 'sectionend',
				'id'   => 'yith_wcwl_general_settings',
			),

			'yith_wfbt_start'              => array(
				'name' => __( 'YITH WooCommerce Frequently Bought Together Integration', 'yith-woocommerce-wishlist' ),
				'type' => 'title',
				// translators: 1. Url to Frequently Bought Together landing page on yithemes.com.
				'desc' => ! $yith_wfbt_installed ? sprintf( __( 'In order to use this integration you have to install and activate YITH WooCommerce Frequently Bought Together. <a href="%s">Learn more</a>', 'yith-woocommerce-wishlist' ), $yith_wfbt_landing ) : '',
				'id'   => 'yith_wcwl_yith_wfbt',
			),

			'yith_wfbt_enable_integration' => array(
				'name'      => __( 'Enable slider in wishlist', 'yith-woocommerce-wishlist' ),
				// translators: 1. Example image of the integration. 2. CTA to buy Frequently Bought Together.
				'desc'      => sprintf( __( 'Enable the slider with linked products on the Wishlist page (<a href="%1$s" class="thickbox">Example</a>). %2$s', 'yith-woocommerce-wishlist' ), $yith_wfbt_thickbox, ( ! ( defined( 'YITH_WFBT' ) && YITH_WFBT ) ) ? $yith_wfbt_promo : '' ),
				'id'        => 'yith_wfbt_enable_integration',
				'default'   => 'yes',
				'type'      => 'yith-field',
				'yith-type' => 'onoff',
			),

			'yith_wfbt_end'                => array(
				'type' => 'sectionend',
				'id'   => 'yith_wcwl_yith_wfbt',
			),
		),
	)
);
