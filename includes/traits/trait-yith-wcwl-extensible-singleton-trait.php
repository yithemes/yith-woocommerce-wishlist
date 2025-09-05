<?php
/**
 * Extensible Singleton class trait.
 * Useful to allow only one instance for Extended/Premium classes.
 *
 * @package YITH\Wishlist\Traits
 * @author  YITH <plugins@yithemes.com>
 */

if ( ! trait_exists( 'YITH_WCWL_Extensible_Singleton_Trait' ) ) {
	/**
	 * Extensible Singleton trait.
	 */
	trait YITH_WCWL_Extensible_Singleton_Trait {

		/**
		 * Instance of the class.
		 *
		 * @var self|null
		 */
		private static $instance = null;

		/**
		 * Constructor
		 *
		 * @return void
		 */
		protected function __construct() {
		}

		/**
		 * Get class instance.
		 *
		 * @return self
		 */
		final public static function get_instance() {

			if ( is_null( self::$instance ) ) {
				$extensions   = array( '_Premium', '_Extended' ); // Allowed extensions ordered by priority.
				$called_class = get_called_class();
				$class        = $called_class;

				$extensions_regex = array_map(
					function ( $extension ) {
						return '/' . preg_quote( $extension, '/' ) . '$/';
					},
					$extensions
				);

				$base_class = preg_replace( $extensions_regex, '', $called_class );

				foreach ( $extensions as $extension ) {
					$extension_class = $base_class . $extension;
					if ( class_exists( $extension_class ) ) {
						$class = $extension_class;
						break;
					}
				}

				self::$instance = new $class();
			}

			return self::$instance;
		}

		/**
		 * Prevent cloning.
		 */
		private function __clone() {
		}
	}
}
