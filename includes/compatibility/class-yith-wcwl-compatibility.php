<?php
/**
 * Main compatibility class
 *
 * @author  YITH <plugins@yithemes.com>
 * @package YITH\Wishlist\Classes
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Compatibility' ) ) {
	/**
	 * Class to initialize compatibility features
	 */
	class YITH_WCWL_Compatibility {
		use YITH_WCWL_Singleton_Trait;

		/**
		 * Integrations object list.
		 *
		 * @var array
		 */
		protected $integrations = array();

		/**
		 * Construct
		 */
		public function __construct() {
			$this->load();
		}

		/**
		 * Get the compatible plugins
		 */
		protected function get_plugins() {
			return array(
				'wpml' => 'WPML',
			);
		}

		/**
		 * Load classes for compatible plugins
		 */
		protected function load() {
			foreach ( $this->get_plugins() as $slug => $class_slug ) {
				$filename  = YITH_WCWL_INC . '/compatibility/class-yith-wcwl-' . $slug . '-compatibility.php';
				$classname = 'YITH_WCWL_' . $class_slug . '_Compatibility';
				$var       = str_replace( '-', '_', $slug );

				if ( ! static::has_plugin( $slug ) ) {
					continue;
				}

				if ( file_exists( $filename ) && ! class_exists( $classname ) ) {
					require_once $filename;
				}

				if ( class_exists( $classname ) && method_exists( $classname, 'get_instance' ) ) {
					$this->integrations[ $var ] = $classname::get_instance();
				}
			}
		}

		/**
		 * Check if plugin exists and it's activated.
		 *
		 * @param string $plugin_slug Plugin slug.
		 *
		 * @return bool
		 */
		public static function has_plugin( $plugin_slug ) {
			$has_plugin = false;

			switch ( $plugin_slug ) {
				case 'wpml':
					global $sitepress;

					$has_plugin = ! empty( $sitepress ) || defined( 'WCML_VERSION' );

					break;

				default:
					$has_plugin = false;
			}

			return $has_plugin;
		}
	}
}
