<?php
/**
 * Install file
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @version 3.0.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Install' ) ) {
	/**
	 * Install plugin table and create the wishlist page
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL_Install {
		use YITH_WCWL_Singleton_Trait;

		const VERSION_OPTION = 'yith_wcwl_version';

		/**
		 * Constructor.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			YITH_WCWL_DB::define_tables();

			add_action( 'init', array( $this, 'maybe_install' ) );
		}

		/**
		 * Run the installation
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function maybe_install() {
			if ( wp_doing_ajax() ) {
				return;
			}

			YITH_WCWL_DB::maybe_update();

			$current_version = get_option( self::VERSION_OPTION );
			if ( ! $current_version ) {
				$this->init();
			} elseif ( version_compare( $current_version, YITH_WCWL_VERSION, '<' ) ) {
				YITH_WCWL_Install()->update( $current_version );

				/**
				 * DO_ACTION: yith_wcwl_updated
				 *
				 * Allows to fire some action when the plugin database is updated.
				 */
				do_action( 'yith_wcwl_updated' );
			}

			// Plugin installed.
			/**
			 * DO_ACTION: yith_wcwl_installed
			 *
			 * Allows to fire some action when the plugin database is installed.
			 */
			do_action( 'yith_wcwl_installed' );
		}

		/**
		 * Init pages and version of the plugin
		 *
		 * @since 1.0.0
		 */
		public function init() {
			$this->add_pages();
			$this->register_current_version();
		}

		/**
		 * Update db structure of the plugin
		 *
		 * @param string $current_version Version from which we're updating.
		 *
		 * @ince 3.0.0
		 */
		public function update( $current_version ) {
			include_once YITH_WCWL_INC . '/functions-yith-wcwl-update.php';

			if ( version_compare( $current_version, '1.0.0', '<' ) ) {
				yith_wcwl_update_100();
			}

			if ( version_compare( $current_version, '3.0.0', '<' ) ) {
				yith_wcwl_update_300();
			}

			if ( version_compare( $current_version, '4.0.0', '<' ) ) {
				yith_wcwl_update_400();
			}

			$this->register_current_version();
		}

		/**
		 * Register current version of plugin and database structure
		 *
		 * @since 3.0.0
		 */
		public function register_current_version() {
			delete_option( 'yith_wcwl_version' );
			update_option( 'yith_wcwl_version', YITH_WCWL_VERSION );
		}

		/**
		 * Check if the table of the plugin already exists.
		 *
		 * @return bool
		 * @since 1.0.0
		 */
		public function is_installed() {
			return YITH_WCWL_DB::has_tables();
		}

		/**
		 * Add a page "Wishlist".
		 *
		 * @return void
		 * @since 1.0.0
		 */
		private function add_pages() {
			if ( function_exists( 'wc_create_page' ) ) {
				wc_create_page(
					sanitize_title_with_dashes( _x( 'wishlist', 'page_slug', 'yith-woocommerce-wishlist' ) ),
					'yith_wcwl_wishlist_page_id',
					__( 'Wishlist', 'yith-woocommerce-wishlist' ),
					'<!-- wp:shortcode -->[yith_wcwl_wishlist]<!-- /wp:shortcode -->'
				);
			}
		}
	}
}
