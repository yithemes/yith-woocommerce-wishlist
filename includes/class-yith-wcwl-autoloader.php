<?php
/**
 * Autoloader class
 *
 * @class   YITH_WCWL_Autoloader
 * @package YITH/Wishlist
 * @author  YITH <plugins@yithemes.com>
 * @since   4.0.0
 */

defined( 'YITH_WCWL' ) || exit;

if ( ! class_exists( 'YITH_WCWL_Autoloader' ) ) {
	/**
	 * The autoloader class
	 *
	 * @class      YITH_WCWL_Autoloader
	 * @since      4.0.0
	 */
	class YITH_WCWL_Autoloader {

		/**
		 * Constructor
		 */
		public function __construct() {
			if ( function_exists( '__autoload' ) ) {
				spl_autoload_register( '__autoload' );
			}

			spl_autoload_register( array( $this, 'autoload' ) );
		}

		/**
		 * Get mapped file. Array of class => file to use on autoload.
		 *
		 * @return array
		 * @since  1.0.0
		 */
		protected function get_mapped_files() {
			/**
			 * APPLY_FILTERS: yith_wcwl_autoload_mapped_files
			 *
			 * The filter allow to add remove the class to autoload.
			 *
			 * @param array $mapped_files The mapped files array.
			 *
			 * @return array
			 */
			$mapped_class = array(
				'yith-wcwl-db' => 'abstract-yith-wcwl-db',
			);

			return apply_filters( 'yith_wcwl_autoload_mapped_files', $mapped_class );
		}

		/**
		 * Autoload callback
		 *
		 * @param string $class The class to load.
		 *
		 * @since  1.0.0
		 */
		public function autoload( $class ) {

			$class = strtolower( $class );
			$class = str_replace( '_', '-', $class );

			if ( false === strpos( $class, 'yith-wcwl' ) ) {
				return; // Pass over.
			}

			$base_path = YITH_WCWL_INC;
			// Check first for mapped files.
			$mapped = $this->get_mapped_files();
			if ( isset( $mapped[ $class ] ) ) {
				$file = $base_path . $mapped[ $class ] . '.php';
			} else {
				if ( false !== strpos( $class, 'trait' ) ) {
					$file = $base_path . 'traits/trait-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'privacy' ) ) {
					$file = $base_path . 'privacy/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'abstract' ) ) {
					$file = $base_path . 'abstracts/' . $class . '.php';
				} elseif ( false !== strpos( $class, 'gutenberg' ) ) {
					$file = $base_path . 'builders/gutenberg/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'data-index' ) ) {
					$file = $base_path . 'data-index/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'data-search' ) ) {
					$file = $base_path . 'data-search/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'gutenberg' ) ) {
					$file = $base_path . 'builders/gutenberg/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'data-store' ) ) {
					$file = $base_path . 'data-stores/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'gb' ) ) {
					$file = $base_path . 'builders/gutenberg/blocks/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'elementor' ) ) {
					$file = $base_path . 'legacy/elementor/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'legacy' ) ) {
					$file = $base_path . 'legacy/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'widget' ) ) {
					$file = $base_path . 'widgets/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'elementor' ) ) {
					$file = $base_path . 'widgets/elementor/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'table' ) ) {
					$file = $base_path . 'tables/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'admin' ) ) {
					$file = $base_path . 'admin/class-' . $class . '.php';
				} elseif ( false !== strpos( $class, 'rest' ) ) {
					$base_path .= 'rest-api/';
					if ( strpos( $class, 'controller' ) ) {
						$base_path .= 'controllers/';

						if ( strpos( $class, 'v1' ) ) {
							$base_path .= 'v1/';
						}
					}
					$file = $base_path . 'class-' . $class . '.php';
				} else {
					$file = $base_path . 'class-' . $class . '.php';
				}
			}

			if ( is_readable( $file ) ) {
				require_once $file;
			}
		}
	}
}

new YITH_WCWL_Autoloader();
