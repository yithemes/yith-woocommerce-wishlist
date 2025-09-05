<?php
/**
 * Class that handle the frontend rendering methods
 *
 * @since   4.0.0
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 */

defined( 'YITH_WCWL' ) || exit;

if ( ! class_exists( 'YITH_WCWL_Rendering_Method_Frontend_Handler' ) ) {
	/**
	 * Class that handle the frontend rendering methods
	 */
	class YITH_WCWL_Rendering_Method_Frontend_Handler {
		use YITH_WCWL_Singleton_Trait;
		use YITH_WCWL_Rendering_Method_Access_Trait;

		/**
		 * Class constructor
		 */
		protected function __construct() {
			$this->maybe_update_preview_mode();
			if(! is_customize_preview() && ! wp_doing_ajax())
			add_action( 'wp_footer', array( $this, 'maybe_render_preview_mode_toggle' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		}

		/**
		 * Update preview mode if specific query args are set
		 */
		protected function maybe_update_preview_mode() {
			if ( ! empty( $_REQUEST[ self::$react_preview_key ] ) ) {
				self::update_preview_options( true );
			}
			if ( ! empty( $_REQUEST[ 'yith-wcwl-preview-close-preview' ] ) ) {
				self::update_preview_options( false );
			}
		}

		/**
		 * Maybe render React preview mode toggle
		 */
		public function maybe_render_preview_mode_toggle() {
			if ( self::is_preview_mode() && ! defined( 'IFRAME_REQUEST' ) ) {
				$user_can_manage_rendering_method = self::current_user_can_manage_rendering_method();
				$settings_url                     = YITH_WCWL_Admin_Panel::get_panel_page_url( 'settings' );
				$convert_rendering_method_url     = add_query_arg(
					array(
						self::$convert_to_react_rendering_param => 1,
					),
					$settings_url
				);
				$exit_from_preview_url                = add_query_arg(
					array(
						self::$exit_from_preview_mode_param => 1,
					),
					$settings_url
				);

				yith_wcwl_get_template( 'react-preview-toggle.php', compact( 'user_can_manage_rendering_method', 'convert_rendering_method_url', 'exit_from_preview_url' ) );
			}
		}

		public function enqueue_scripts() {
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
			$prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? 'unminified/' : '';

			wp_register_style( 'yith-wcwl-rendering-methods-frontend', YITH_WCWL_ASSETS_CSS_URL . 'frontend/rendering-methods.css', array(), YITH_WCWL_VERSION );
			wp_register_script( 'yith-wcwl-rendering-methods-frontend', YITH_WCWL_ASSETS_JS_URL . $prefix . 'rendering-methods' . $suffix . '.js', array( 'jquery' ), YITH_WCWL_VERSION, true );

			if ( self::is_preview_mode() ) {
				wp_enqueue_style( 'yith-wcwl-rendering-methods-frontend' );
				wp_enqueue_script( 'yith-wcwl-rendering-methods-frontend' );
			}
		}
	}
}
