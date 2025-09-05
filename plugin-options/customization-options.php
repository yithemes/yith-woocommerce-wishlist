<?php
/**
 * Customization options
 *
 * @package YITH\Wishlist\PluginOptions
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

$sub_tabs = array(
	'customization-style'  => array(
		'title'       => _x( 'Customization', 'Tab title in plugin settings panel', 'yith-woocommerce-wishlist' ),
		'description' => __( 'Customize the style of the whole plugin.', 'yith-woocommerce-wishlist' ),
	),
	'customization-labels' => array(
		'title'       => _x( 'Labels', 'Tab title in plugin settings panel', 'yith-woocommerce-wishlist' ),
		'description' => _x( 'Customize the labels of the whole plugin.', 'Tab description in plugin settings panel', 'yith-woocommerce-wishlist' ),
	),
);

$options = array(
	'customization' => array(
		'customization-tabs' => array(
			'nav-layout' => 'horizontal',
			'type'       => 'multi_tab',
			'sub-tabs'   => $sub_tabs,
		),
	),
);

return apply_filters( 'yith_wcwl_panel_customization_options', $options );
