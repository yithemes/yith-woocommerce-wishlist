<?php
/**
 * Trait to access to Template rendering method
 *
 * @since   4.0.0
 * @package YITH\Wishlist\Traits
 * @author  YITH <plugins@yithemes.com>
 */

if ( ! trait_exists( 'YITH_WCWL_Rendering_Method_Access_Trait' ) ) {
	trait YITH_WCWL_Rendering_Method_Access_Trait {
		/**
		 * The option name that store the templates rendering method.
		 *
		 * @var string
		 */
		private static $rendering_method_option_name = 'yith_wcwl_rendering_method';

		/**
		 * The option name that store the templates rendering method.
		 *
		 * @var string
		 */
		private static $rendering_method = null;

		/**
		 * The cookie name
		 *
		 * @var string
		 */
		private static $react_preview_key = 'yith-wcwl-react-preview-mode';

		/**
		 * The query param used to trigger the exit from preview mode
		 *
		 * @var string
		 */
		private static $exit_from_preview_mode_param = 'yith-wcwl-exit-from-preview-mode';

		/**
		 * The query param used to convert the rendering method using React Components
		 *
		 * @var string
		 */
		private static $convert_to_react_rendering_param = 'yith-wcwl-convert-to-react';

		/**
		 * Store whether the rendering method has been updated
		 *
		 * @var string
		 */
		private static $updated_rendering_method = false;

		/**
		 * Get the templates rendering method option value
		 *
		 * @param string $default      The default value.
		 * @param bool   $force_update Whether is needed to force the retrieving of the option value.
		 *
		 * @return string
		 */
		public static function get_rendering_method( $default = 'react-components', $force_update = false ) {
			if ( self::is_preview_mode() ) {
				self::$rendering_method = 'react-components';
			}

			if ( is_null( self::$rendering_method ) || $force_update ) { // TODO: handle $force_update in preview mode.
				self::$rendering_method = self::get_rendering_method_option( $default );
			}

			return apply_filters( 'yith_wcwl_rendering_method', self::$rendering_method, $default, $force_update );
		}

		/**
		 * get rendering method option value
		 *
		 * @param mixed $default The default value.
		 *
		 * @return string
		 */
		public static function get_rendering_method_option( $default = 'react-components' ) {
			if ( is_null( self::$rendering_method ) ) {
				self::$rendering_method = get_option( self::$rendering_method_option_name, $default );
			}

			return self::$rendering_method;
		}

		/**
		 * Set the templates rendering method option value
		 *
		 * @param string $value The value to set.
		 *
		 * @return string
		 */
		public static function update_rendering_method( $value ) {
			if ( self::current_user_can_manage_rendering_method() ) {
				self::$rendering_method = null;
				return update_option( self::$rendering_method_option_name, $value );
			}
		}

		/**
		 * Check whether the current user can manage the rendering method
		 *
		 * @return bool
		 */
		public static function current_user_can_manage_rendering_method() {
			return current_user_can( 'manage_options' );
		}

		/**
		 * Check if is the React rendering preview mode
		 *
		 * @return bool
		 */
		public static function is_preview_mode() {
			if ( 'php-templates' === self::get_rendering_method_option() ) {
				if ( yith_getcookie( self::$react_preview_key ) ) {
					return true;
				}

				if ( is_user_logged_in() ) {
					$user_id = function_exists( 'get_current_user_id' ) ? get_current_user_id() : false;
					if ( $user_id ) {
						if ( get_user_meta( $user_id, self::$react_preview_key, true ) ) {
							return true;
						}
					}
				}
			}

			return false;
		}

		/**
		 * Check if is using the php-templates rendering method
		 *
		 * @return bool
		 */
		public static function is_php_templates_mode() {
			return 'php-templates' === self::get_rendering_method();
		}

		/**
		 * Update options related to preview rendering method (Session cookie and User meta if is logged id)
		 *
		 * @param bool $value The options value
		 *
		 * @return void
		 */
		protected function update_preview_options( $value ) {
			yith_setcookie( self::$react_preview_key, $value );
			$user_id = function_exists( 'get_current_user_id' ) ? get_current_user_id() : false;
			if ( $user_id ) {
				update_user_meta( $user_id, self::$react_preview_key, $value );
			}
		}
	}
}
