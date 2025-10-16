<?php
/**
 * Frontend legacy class
 *
 * @package YITH\Wishlist\Legacy
 * @author  YITH <plugins@yithemes.com>
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Frontend_Legacy' ) ) {
	/**
	 * Frontend legacy class
	 */
	class YITH_WCWL_Frontend_Legacy {
		use YITH_WCWL_Extensible_Singleton_Trait;
		use YITH_WCWL_Rendering_Method_Access_Trait;

		/* === SCRIPTS AND ASSETS === */

		/**
		 * Register styles required by the plugin
		 *
		 * @return void
		 */
		public function register_styles() {
			$woocommerce_base = WC()->template_path();
			$assets_path      = str_replace( array( 'http:', 'https:' ), '', WC()->plugin_url() ) . '/assets/';

			// register dependencies.
			wp_register_style( 'jquery-selectBox', YITH_WCWL_URL . 'assets/css/jquery.selectBox.css', array(), '1.2.0' );
			wp_register_style( 'woocommerce_prettyPhoto_css', $assets_path . 'css/prettyPhoto.css', array(), '3.1.6' );

			/**
			 * APPLY_FILTERS: yith_wcwl_main_style_deps
			 *
			 * Filter the style dependencies to be used in the plugin.
			 *
			 * @param array $deps Array of style dependencies
			 *
			 * @return array
			 */
			$deps = apply_filters( 'yith_wcwl_main_style_deps', array( 'jquery-selectBox', 'yith-wcwl-font-awesome', 'woocommerce_prettyPhoto_css' ) );

			// register main style.
			$located = locate_template(
				array(
					$woocommerce_base . 'wishlist.css',
					'wishlist.css',
				)
			);

			if ( ! $located ) {
				wp_register_style( 'yith-wcwl-main', YITH_WCWL_URL . 'assets/css/style.css', $deps, YITH_WCWL_VERSION );
			} else {
				$stylesheet_directory     = get_stylesheet_directory();
				$stylesheet_directory_uri = get_stylesheet_directory_uri();
				$template_directory       = get_template_directory();
				$template_directory_uri   = get_template_directory_uri();

				$style_url = ( strpos( $located, $stylesheet_directory ) !== false ) ? str_replace( $stylesheet_directory, $stylesheet_directory_uri, $located ) : str_replace( $template_directory, $template_directory_uri, $located );

				wp_register_style( 'yith-wcwl-user-main', $style_url, $deps, YITH_WCWL_VERSION );
			}

			// theme specific assets.
			$current_theme = wp_get_theme();

			if ( $current_theme->exists() ) {
				$theme_slug = $current_theme->Template; // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase

				if ( file_exists( YITH_WCWL_DIR . 'assets/css/themes/' . $theme_slug . '.css' ) ) {
					wp_register_style( 'yith-wcwl-theme', YITH_WCWL_URL . 'assets/css/themes/' . $theme_slug . '.css', array( $located ? 'yith-wcwl-user-main' : 'yith-wcwl-main' ), YITH_WCWL_VERSION );
				}
			}
		}

		/**
		 * Register scripts required by the plugin
		 *
		 * @return void
		 */
		public function register_scripts() {
			$woocommerce_base = WC()->template_path();
			$assets_path      = str_replace( array( 'http:', 'https:' ), '', WC()->plugin_url() ) . '/assets/';
			$suffix           = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
			$prefix           = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? 'unminified/' : '';

			// register dependencies.
			wp_register_script( 'wc-prettyPhoto', $assets_path . 'js/prettyPhoto/jquery.prettyPhoto' . $suffix . '.js', array( 'jquery' ), '3.1.6', true );
			wp_register_script( 'jquery-selectBox', YITH_WCWL_ASSETS_JS_URL . 'jquery.selectBox.min.js', array( 'jquery' ), '1.2.0', true );

			/**
			 * APPLY_FILTERS: yith_wcwl_main_script_deps
			 *
			 * Filter the script dependencies to be used in the plugin.
			 *
			 * @param array $deps Array of script dependencies
			 *
			 * @return array
			 */
			$deps = apply_filters( 'yith_wcwl_main_script_deps', array( 'jquery', 'jquery-selectBox', \YIT_Assets::wc_script_handle( 'wc-prettyPhoto' ) ) );

			// get localized variables.
			$yith_wcwl_l10n = $this->get_localize();

			// register main script.
			$located = locate_template(
				array(
					$woocommerce_base . 'wishlist.js',
					'wishlist.js',
				)
			);

			if ( ! $located ) {
				wp_register_script( 'jquery-yith-wcwl', YITH_WCWL_URL . 'assets/js/' . $prefix . 'jquery.yith-wcwl' . $suffix . '.js', $deps, YITH_WCWL_VERSION, true );
				wp_localize_script( 'jquery-yith-wcwl', 'yith_wcwl_l10n', $yith_wcwl_l10n );
			} else {
				wp_register_script( 'jquery-yith-wcwl-user', str_replace( get_stylesheet_directory(), get_stylesheet_directory_uri(), $located ), $deps, YITH_WCWL_VERSION, true );
				wp_localize_script( 'jquery-yith-wcwl-user', 'yith_wcwl_l10n', $yith_wcwl_l10n );
			}
		}

		/**
		 * Enqueue styles, scripts and other stuffs needed in the <head>.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function enqueue_styles_and_stuffs() {
			// main plugin style.
			if ( ! wp_style_is( 'yith-wcwl-user-main', 'registered' ) ) {
				wp_enqueue_style( 'yith-wcwl-main' );
			} else {
				wp_enqueue_style( 'yith-wcwl-user-main' );
			}

			// theme specific style.
			if ( wp_style_is( 'yith-wcwl-theme', 'registered' ) ) {
				wp_enqueue_style( 'yith-wcwl-theme' );
			}

			// custom style.
			$this->enqueue_custom_style();
		}

		/**
		 * Enqueue plugin scripts.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function enqueue_scripts() {
			if ( ! wp_script_is( 'jquery-yith-wcwl-user', 'registered' ) ) {
				wp_enqueue_script( 'jquery-yith-wcwl' );
			} else {
				wp_enqueue_script( 'jquery-yith-wcwl-user' );
			}
		}

		/**
		 * Return localize array
		 *
		 * @return array Array with variables to be localized inside js
		 * @since 2.2.3
		 */
		public function get_localize() {
			/**
			 * APPLY_FILTERS: yith_wcwl_localize_script
			 *
			 * Filter the array with the parameters sent to the plugin scripts trought the localize.
			 *
			 * @param array $localize Array of parameters
			 *
			 * @return array
			 */
			return apply_filters(
				'yith_wcwl_localize_script',
				array(
					'ajax_url'                    => admin_url( 'admin-ajax.php', 'relative' ),
					'redirect_to_cart'            => get_option( 'yith_wcwl_redirect_cart' ),
					'yith_wcwl_button_position'   => get_option( 'yith_wcwl_button_position' ),
					'multi_wishlist'              => false,
					/**
					 * APPLY_FILTERS: yith_wcwl_hide_add_button
					 *
					 * Filter whether to hide the 'Add to wishlist' button.
					 *
					 * @param bool $hide_button Whether to hide the ATW button or not
					 *
					 * @return bool
					 */
					'hide_add_button'             => apply_filters( 'yith_wcwl_hide_add_button', true ),
					'enable_ajax_loading'         => 'yes' === get_option( 'yith_wcwl_ajax_enable', 'no' ),
					'ajax_loader_url'             => YITH_WCWL_URL . 'assets/images/ajax-loader-alt.svg',
					'remove_from_wishlist_after_add_to_cart' => 'yes' === get_option( 'yith_wcwl_remove_after_add_to_cart' ),
					/**
					 * APPLY_FILTERS: yith_wcwl_is_wishlist_responsive
					 *
					 * Filter whether to use the responsive layout for the wishlist.
					 *
					 * @param bool $is_responsive Whether to use responsive layout or not
					 *
					 * @return bool
					 */
					'is_wishlist_responsive'      => apply_filters( 'yith_wcwl_is_wishlist_responsive', true ),
					/**
					 * APPLY_FILTERS: yith_wcwl_time_to_close_prettyphoto
					 *
					 * Filter the time (in miliseconds) to close the popup after the 'Ask for an estimate' request has been sent.
					 *
					 * @param int $time Time to close the popup
					 *
					 * @return int
					 */
					'time_to_close_prettyphoto'   => apply_filters( 'yith_wcwl_time_to_close_prettyphoto', 3000 ),
					/**
					 * APPLY_FILTERS: yith_wcwl_fragments_index_glue
					 *
					 * Filter the character used for the fragments index.
					 *
					 * @param string $char Character
					 *
					 * @return string
					 */
					'fragments_index_glue'        => apply_filters( 'yith_wcwl_fragments_index_glue', '.' ),
					/**
					 * APPLY_FILTERS: yith_wcwl_reload_on_found_variation
					 *
					 * Filter whether to reload fragments on new variations found.
					 *
					 * @param bool $reload_variations Whether to reload fragments
					 *
					 * @return bool
					 */
					'reload_on_found_variation'   => apply_filters( 'yith_wcwl_reload_on_found_variation', true ),
					/**
					 * APPLY_FILTERS: yith_wcwl_mobile_media_query
					 *
					 * Filter the breakpoint size for the mobile media queries.
					 *
					 * @param int $breakpoint Breakpoint size
					 *
					 * @return int
					 */
					'mobile_media_query'          => apply_filters( 'yith_wcwl_mobile_media_query', 768 ),
					'labels'                      => array(
						'cookie_disabled'       => __( 'We are sorry, but this feature is available only if cookies on your browser are enabled.', 'yith-woocommerce-wishlist' ),
						/**
						 * APPLY_FILTERS: yith_wcwl_added_to_cart_message
						 *
						 * Filter the message when a product has been added succesfully to the cart from the wishlist.
						 *
						 * @param string $message Message
						 *
						 * @return string
						 */
						'added_to_cart_message' => sprintf( '<div class="woocommerce-notices-wrapper"><div class="woocommerce-message" role="alert">%s</div></div>', apply_filters( 'yith_wcwl_added_to_cart_message', __( 'Product added to cart successfully', 'yith-woocommerce-wishlist' ) ) ),
					),
					'actions'                     => array(
						'add_to_wishlist_action'      => 'add_to_wishlist',
						'remove_from_wishlist_action' => 'remove_from_wishlist',
						'reload_wishlist_and_adding_elem_action' => 'reload_wishlist_and_adding_elem',
						'load_mobile_action'          => 'load_mobile',
						'delete_item_action'          => 'delete_item',
						'save_title_action'           => 'save_title',
						'save_privacy_action'         => 'save_privacy',
						'load_fragments'              => 'load_fragments',
					),
					'nonce'                       => array(
						'add_to_wishlist_nonce'      => wp_create_nonce( 'add_to_wishlist' ),
						'remove_from_wishlist_nonce' => wp_create_nonce( 'remove_from_wishlist' ),
						'reload_wishlist_and_adding_elem_nonce' => wp_create_nonce( 'reload_wishlist_and_adding_elem' ),
						'load_mobile_nonce'          => wp_create_nonce( 'load_mobile' ),
						'delete_item_nonce'          => wp_create_nonce( 'delete_item' ),
						'save_title_nonce'           => wp_create_nonce( 'save_title' ),
						'save_privacy_nonce'         => wp_create_nonce( 'save_privacy' ),
						'load_fragments_nonce'       => wp_create_nonce( 'load_fragments' ),
					),
					/**
					 * APPLY_FILTERS: yith_wcwl_redirect_after_ask_an_estimate
					 *
					 * Filter whether to redirect after the 'Ask for an estimate' form has been submitted.
					 *
					 * @param bool $redirect Whether to redirect or not
					 *
					 * @return bool
					 */
					'redirect_after_ask_estimate' => apply_filters( 'yith_wcwl_redirect_after_ask_an_estimate', false ),
					/**
					 * APPLY_FILTERS: yith_wcwl_redirect_url_after_ask_an_estimate
					 *
					 * Filter the URL to redirect after the 'Ask for an estimate' form has been submitted.
					 *
					 * @param string $redirect_url Redirect URL
					 *
					 * @return string
					 */
					'ask_estimate_redirect_url'   => apply_filters( 'yith_wcwl_redirect_url_after_ask_an_estimate', get_home_url() ),
				)
			);
		}
	}
}
