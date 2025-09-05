<?php
/**
 * YITH WishList Updates
 *
 * Functions for updating data, used by the background updater.
 *
 * Please note that these functions are invoked when the plugin is updated from a previous version,
 * but NOT when is newly installed.
 *
 * @package YITH\Wishlist\Functions
 * @version 4.0.0
 */

if ( ! function_exists( 'yith_wcwl_update_100' ) ) {
	/**
	 * Update from 0.x to 1.0
	 */
	function yith_wcwl_update_100() {
		flush_rewrite_rules();
	}
}

if ( ! function_exists( 'yith_wcwl_update_300' ) ) {
	/**
	 * Update from version 2.0 to 3.0
	 *
	 * @since 3.0.0
	 */
	function yith_wcwl_update_300() {
		// update color options.
		$options = array(
			'color_add_to_wishlist',
			'color_add_to_cart',
			'color_button_style_1',
			'color_button_style_2',
			'color_wishlist_table',
		);

		foreach ( $options as $option ) {
			$base_option_name = "yith_wcwl_{$option}";

			$background = get_option( "{$base_option_name}_background" );
			$color      = get_option( "{$base_option_name}_color" );
			$border     = get_option( "{$base_option_name}_border_color" );

			if ( 'color_wishlist_table' !== $option ) {
				$background_hover = get_option( "{$base_option_name}_hover_background" );
				$color_hover      = get_option( "{$base_option_name}_hover_color" );
				$border_hover     = get_option( "{$base_option_name}_hover_border_color" );
			}

			update_option(
				$base_option_name,
				array_merge(
					! empty( $background ) ? array( 'background' => $background ) : array(),
					! empty( $color ) ? array( 'text' => $color ) : array(),
					! empty( $border ) ? array( 'border' => $border ) : array(),
					! empty( $background_hover ) ? array( 'background_hover' => $background_hover ) : array(),
					! empty( $color_hover ) ? array( 'text_hover' => $color_hover ) : array(),
					! empty( $border_hover ) ? array( 'border_hover' => $border_hover ) : array()
				)
			);
		}

		// duplicate options.
		$options = array(
			'yith_wcwl_color_button_style_1'       => array(
				'yith_wcwl_color_ask_an_estimate',
			),
			'yith_wcwl_color_button_style_1_hover' => array(
				'yith_wcwl_color_ask_an_estimate_hover',
			),
			'woocommerce_promotion_mail_settings'  => array(
				'woocommerce_yith_wcwl_promotion_mail_settings',
			),
		);

		foreach ( $options as $original_option => $destinations ) {
			$option_value = get_option( $option );

			if ( $option_value ) {
				foreach ( $destinations as $destination ) {
					update_option( $destination, $option_value );
				}
			}
		}

		// button style options.
		$use_buttons     = get_option( 'yith_wcwl_use_button' );
		$use_theme_style = get_option( 'yith_wcwl_frontend_css' );

		if ( 'yes' === $use_buttons && 'no' === $use_theme_style ) {
			$destination_value = 'button_custom';
		} elseif ( 'yes' === $use_buttons ) {
			$destination_value = 'button_default';
		} else {
			$destination_value = 'link';
		}

		update_option( 'yith_wcwl_add_to_wishlist_style', $destination_value );
		update_option( 'yith_wcwl_add_to_cart_style', $destination_value );
		update_option( 'yith_wcwl_ask_an_estimate_style', $destination_value );

		// rounded corners options.
		$rounded_corners = get_option( 'yith_wcwl_rounded_corners' );
		$radius_value    = 'yes' === $rounded_corners ? 16 : 0;

		update_option( 'yith_wcwl_rounded_corners_radius', $radius_value );
		update_option( 'yith_wcwl_add_to_cart_rounded_corners_radius', $radius_value );
		update_option( 'yith_wcwl_ask_an_estimate_rounded_corners_radius', $radius_value );
	}
}

if ( ! function_exists( 'yith_wcwl_update_400' ) ) {
	/**
	 * Run the plugin options updates for the 4.0.0 version
	 */
	function yith_wcwl_update_400() {
		update_option( 'yith_wcwl_rendering_method', 'php-templates' );

		$icon = get_option( 'yith_wcwl_add_to_wishlist_icon', false );
		if ( 'custom' === $icon ) {
			update_option( 'yith_wcwl_add_to_wishlist_icon_type', 'custom' );
			delete_option( 'yith_wcwl_add_to_wishlist_icon' );
		}

		// Icon options mapping.
		$fa_icon_mapping = array(
			'fa-heart'           => 'heart',
			'fa-heart-o'         => 'heart-outline',
			'fa-bookmark'        => 'bookmark',
			'fa-bookmark-o'      => 'bookmark-outline',
			'fa-star'            => 'star',
			'fa-star-o'          => 'star-outline',
			'fa-shopping-cart'   => 'shopping-cart',
			'fa-cart-plus'       => 'shopping-cart',
			'fa-cart-arrow-down' => 'shopping-cart',
			'fa-opencart'        => 'shopping-cart',
			'fa-shopping-basket' => 'shopping-bag',
			'fa-shopping-bag'    => 'shopping-bag',
			'fa-envelope'        => 'envelope',
			'fa-envelope-o'      => 'envelope-outline',
		);
		$icon_options    = array(
			'yith_wcwl_add_to_wishlist_icon',
			'yith_wcwl_added_to_wishlist_icon',
			'yith_wcwl_ask_an_estimate_icon',
			'yith_wcwl_add_to_cart_icon',
		);

		foreach ( $icon_options as $icon_option ) {
			$option_value = get_option( $icon_option );
			if ( array_key_exists( $option_value, $fa_icon_mapping ) ) {
				update_option( $icon_option, $fa_icon_mapping[ $option_value ] );
			} else {
				delete_option( $icon_option );
			}

			if ( in_array( $icon_option, array( 'yith_wcwl_added_to_wishlist_icon', 'yith_wcwl_ask_an_estimate_icon' ) ) ) {
				$types = array(
					'none'   => 'same',
					'custom' => 'custom',
				);
				update_option( $icon_option . '_type', array_key_exists( $option_value, $types ) ? $types[ $option_value ] : 'default' );
			}
		}

		// Social icons mapping.
		$socials = array( 'wa', 'fb', 'pr', 'tw', 'em' );
		foreach ( $socials as $social ) {
			$option_name = "yith_wcwl_{$social}_button_icon";
			if ( ! in_array( get_option( $option_name, false ), array( 'none', 'default', 'custom' ) ) ) {
				update_option( $option_name, 'default' );
			}
		}
	}
}
