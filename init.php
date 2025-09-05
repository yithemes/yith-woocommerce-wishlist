<?php
/**
 * Plugin Name: YITH WooCommerce Wishlist
 * Plugin URI: https://yithemes.com/themes/plugins/yith-woocommerce-wishlist/
 * Description: <code><strong>YITH WooCommerce Wishlist</strong></code> gives your users the possibility to create, fill, manage and share their wishlists allowing you to analyze their interests and needs to improve your marketing strategies. <a href="https://yithemes.com/" target="_blank">Get more plugins for your e-commerce on <strong>YITH</strong></a>
 * Version: 4.9.0
 * Author: YITH
 * Author URI: https://yithemes.com/
 * Text Domain: yith-woocommerce-wishlist
 * Domain Path: /languages/
 * WC requires at least: 10.0
 * WC tested up to: 10.2
 * Requires Plugins: woocommerce
 *
 * @package YITH\Wishlist
 * @author  YITH <plugins@yithemes.com>
 * @version 4.9.0
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

defined( 'YITH_WCWL' ) || define( 'YITH_WCWL', true );
defined( 'YITH_WCWL_VERSION' ) || define( 'YITH_WCWL_VERSION', '4.9.0' );
defined( 'YITH_WCWL_URL' ) || define( 'YITH_WCWL_URL', plugin_dir_url( __FILE__ ) );
defined( 'YITH_WCWL_DIR' ) || define( 'YITH_WCWL_DIR', plugin_dir_path( __FILE__ ) );
defined( 'YITH_WCWL_INC' ) || define( 'YITH_WCWL_INC', YITH_WCWL_DIR . 'includes/' );
defined( 'YITH_WCWL_VIEWS' ) || define( 'YITH_WCWL_VIEWS', YITH_WCWL_DIR . 'views/' );
defined( 'YITH_WCWL_ASSETS' ) || define( 'YITH_WCWL_ASSETS', YITH_WCWL_DIR . 'assets/' );
defined( 'YITH_WCWL_ASSETS_URL' ) || define( 'YITH_WCWL_ASSETS_URL', YITH_WCWL_URL . 'assets/' );
defined( 'YITH_WCWL_ASSETS_CSS_URL' ) || define( 'YITH_WCWL_ASSETS_CSS_URL', YITH_WCWL_ASSETS_URL . 'css/' );
defined( 'YITH_WCWL_ASSETS_JS_URL' ) || define( 'YITH_WCWL_ASSETS_JS_URL', YITH_WCWL_ASSETS_URL . 'js/' );
defined( 'YITH_WCWL_ASSETS_IMAGES' ) || define( 'YITH_WCWL_ASSETS_IMAGES', YITH_WCWL_ASSETS . 'images/' );
defined( 'YITH_WCWL_ASSETS_ICONS' ) || define( 'YITH_WCWL_ASSETS_ICONS', YITH_WCWL_ASSETS_IMAGES . 'icons/' );
defined( 'YITH_WCWL_ASSETS_ICONS_URL' ) || define( 'YITH_WCWL_ASSETS_ICONS_URL', YITH_WCWL_ASSETS_URL . 'images/icons/' );
defined( 'YITH_WCWL_INIT' ) || define( 'YITH_WCWL_INIT', plugin_basename( __FILE__ ) );
defined( 'YITH_WCWL_FREE_INIT' ) || define( 'YITH_WCWL_FREE_INIT', plugin_basename( __FILE__ ) );
defined( 'YITH_WCWL_SLUG' ) || define( 'YITH_WCWL_SLUG', 'yith-woocommerce-wishlist' );

if ( ! class_exists( 'YITH_WCWL_Autoloader' ) ) {
	require_once YITH_WCWL_INC . 'class-yith-wcwl-autoloader.php';
}

if ( ! function_exists( 'yith_wcwl_install_plugin_fw' ) ) {
	/**
	 * Install plugin-fw when needed
	 *
	 * @since 3.9.0
	 */
	function yith_wcwl_install_plugin_fw() {
		// Plugin Framework Loader.
		if ( file_exists( plugin_dir_path( __FILE__ ) . 'plugin-fw/init.php' ) ) {
			require_once plugin_dir_path( __FILE__ ) . 'plugin-fw/init.php';
		}
	}
}

if ( ! function_exists( 'yith_wcwl_register_activation' ) ) {
	/**
	 * Performs required action on activation hook
	 *
	 * @since 3.9.0
	 */
	function yith_wcwl_register_activation() {
		if ( ! function_exists( 'yith_plugin_registration_hook' ) ) {
			require_once 'plugin-fw/yit-plugin-registration-hook.php';
		}
		register_activation_hook( __FILE__, 'yith_plugin_registration_hook' );
	}
}

if ( ! function_exists( 'yith_wishlist_constructor' ) ) {
	/**
	 * Bootstrap function; loads all required dependencies and start the process
	 *
	 * @return void
	 * @since 2.0.0
	 */
	function yith_wishlist_constructor() {
		if ( function_exists( 'yith_plugin_fw_load_plugin_textdomain' ) ) {
			yith_plugin_fw_load_plugin_textdomain( 'yith-woocommerce-wishlist', dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		}

		// Let's start the game!

		// Functions.
		require_once YITH_WCWL_INC . 'functions-yith-wcwl.php';
		require_once YITH_WCWL_INC . 'legacy/functions-yith-wcwl-legacy.php';

		// AJAX Handle classes.
		require_once YITH_WCWL_INC . 'class-yith-wcwl-ajax-handler.php';

		// Shortcodes classes.
		require_once YITH_WCWL_INC . 'class-yith-wcwl-shortcode.php';

		// Form handler classes.
		require_once YITH_WCWL_INC . 'class-yith-wcwl-form-handler.php';

		/**
		 * $yith_wcwl global was deprecated since 3.0.0
		 *
		 * @deprecated
		 */
		global $yith_wcwl;

		$yith_wcwl = YITH_WCWL::get_instance();
	}
}

if ( ! function_exists( 'yith_wishlist_install' ) ) {
	/**
	 * Performs pre-flight checks, and gives green light for plugin bootstrap
	 *
	 * @return void
	 * @since 2.0.0
	 */
	function yith_wishlist_install() {
		if ( ! function_exists( 'yith_deactivate_plugins' ) ) {
			require_once 'plugin-fw/yit-deactive-plugin.php';
		}

		if ( ! function_exists( 'WC' ) ) {
			add_action( 'admin_notices', 'yith_wcwl_install_woocommerce_admin_notice' );
		} elseif ( defined( 'YITH_WCWL_PREMIUM' ) || defined( 'YITH_WCWL_EXTENDED' ) ) {
			yith_deactivate_plugins( 'YITH_WCWL_FREE_INIT' );
		} else {
			do_action( 'yith_wcwl_init' );
		}
	}
}

if ( ! function_exists( 'yith_wcwl_deactivate_lower_tier_notice' ) ) {
	/**
	 * Print an admin notice if trying to activate this version when an higher tier is already enabled
	 *
	 * @return void
	 * @use    admin_notices hooks
	 * @since  1.0
	 */
	function yith_wcwl_deactivate_lower_tier_notice() {
		?>
		<div class="notice">
			<p><?php esc_html_e( 'YITH WooCommerce Wishlist was deactivated as you\'re running an higher tier version of the same plugin.', 'yith-woocommerce-wishlist' ); ?></p>
		</div>
		<?php
	}
}

if ( ! function_exists( 'yith_wcwl_install_woocommerce_admin_notice' ) ) {
	/**
	 * Shows admin notice when plugin is activated without WooCommerce
	 *
	 * @return void
	 * @since 2.0.0
	 */
	function yith_wcwl_install_woocommerce_admin_notice() {
		?>
		<div class="error">
			<p><?php echo esc_html( 'YITH WooCommerce Wishlist ' . __( 'is enabled but not effective. It requires WooCommerce to work.', 'yith-woocommerce-wishlist' ) ); ?></p>
		</div>
		<?php
	}
}

yith_wcwl_register_activation();
yith_wcwl_install_plugin_fw();

add_action( 'plugins_loaded', 'yith_wishlist_install', 11 );
add_action( 'yith_wcwl_init', 'yith_wishlist_constructor' );
