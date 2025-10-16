<?php
/**
 * Admin init class
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Admin' ) ) {
	/**
	 * Initiator class. Create and populate admin views.
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL_Admin extends YITH_WCWL_Admin_Legacy {
		use YITH_WCWL_Extensible_Singleton_Trait;

		/**
		 * Plugin options
		 *
		 * @since 1.0.0
		 * @var array
		 */
		public $options;

		/**
		 * Constructor of the class
		 *
		 * @since 2.0.0
		 */
		public function __construct() {
			YITH_WCWL_Admin_Panel::get_instance();
			YITH_WCWL_Rendering_Method_Admin_Handler::get_instance();

			// init admin processing.
			add_action( 'init', array( $this, 'init' ) );

			// enqueue scripts.
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ), 20 );

			// plugin panel options.
			add_filter( 'yith_plugin_fw_panel_wc_extra_row_classes', array( $this, 'mark_options_disabled' ), 10, 23 );

			// add plugin links.
			add_filter( 'plugin_action_links_' . plugin_basename( YITH_WCWL_DIR . 'init.php' ), array( $this, 'action_links' ) );
			add_filter( 'yith_show_plugin_row_meta', array( $this, 'add_plugin_meta' ), 10, 5 );

			// add a post display state for special WC pages.
			add_filter( 'display_post_states', array( $this, 'add_display_post_states' ), 10, 2 );
		}

		/* === ADMIN GENERAL === */

		/**
		 * Add a post display state for special WC pages in the page list table.
		 *
		 * @param array   $post_states An array of post display states.
		 * @param WP_Post $post        The current post object.
		 */
		public function add_display_post_states( $post_states, $post ) {
			if ( (int) get_option( 'yith_wcwl_wishlist_page_id' ) === $post->ID ) {
				$post_states[ 'yith_wcwl_page_for_wishlist' ] = __( 'Wishlist Page', 'yith-woocommerce-wishlist' );
			}

			return $post_states;
		}

		/* === INITIALIZATION SECTION === */

		/**
		 * Initiator method. Initiate properties.
		 *
		 * @return void
		 * @access private
		 * @since  1.0.0
		 */
		public function init() {
			$prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? 'unminified/' : '';
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

			wp_register_style( 'yith-wcwl-material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', array(), '3.0.1' );
			wp_register_style( 'yith-wcwl-admin', YITH_WCWL_URL . 'assets/css/admin.css', array(), YITH_WCWL_VERSION );
			wp_register_script( 'yith-wcwl-admin', YITH_WCWL_URL . 'assets/js/' . $prefix . 'admin/yith-wcwl' . $suffix . '.js', array( 'jquery', \YIT_Assets::wc_script_handle( 'wc-jquery-blockui' ) ), YITH_WCWL_VERSION, true );

			$icons = yith_wcwl_get_plugin_icons_list();
			wp_localize_script(
				'yith-wcwl-admin',
				'yith_wcwl_admin',
				array(
					'plugin_icons' => array_combine( array_keys( $icons ), array_column( $icons, 'svg' ) ),
					'i18n'         => array(
						'deleteWishlistConfirmModal' => array(
							'title'         => _x( 'Confirm delete', '[Admin] Delete wishlist from panel confirmation modal', 'yith-woocommerce-wishlist' ),
							//translators: %s is the name of the wishlist
							'message'       => _x( 'Are you sure you want to delete %s?', '[Admin] Delete wishlist from panel confirmation modal', 'yith-woocommerce-wishlist' ),
							'confirmButton' => _x( 'Delete', '[Admin] Delete wishlist from panel confirmation modal', 'yith-woocommerce-wishlist' ),
						),
					),
				)
			);
		}

		/**
		 * Run the installation
		 *
		 * @return void
		 * @since      1.0.0
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Install::maybe_install
		 */
		public function install() {
			wc_deprecated_function( 'YITH_WCWL_Admin::install', '4.0.0', 'YITH_WCWL_Install::maybe_install' );
			yith_wcwl_install()->maybe_install();
		}

		/**
		 * Adds plugin actions link
		 *
		 * @param mixed $links Available action links.
		 * @return array
		 */
		public function action_links( $links ) {
			$links = yith_add_action_links( $links, 'yith_wcwl_panel', defined( 'YITH_WCWL_PREMIUM' ), YITH_WCWL_SLUG );
			return $links;
		}

		/**
		 * Adds plugin row meta
		 *
		 * @param array  $new_row_meta_args Array of meta for current plugin.
		 * @param array  $plugin_meta       Not in use.
		 * @param string $plugin_file       Current plugin iit file path.
		 * @param array  $plugin_data       Plugin info.
		 * @param string $status            Plugin status.
		 * @param string $init_file         Wishlist plugin init file.
		 * @return array
		 * @since 2.0.0
		 */
		public function add_plugin_meta( $new_row_meta_args, $plugin_meta, $plugin_file, $plugin_data, $status, $init_file = 'YITH_WCWL_INIT' ) {
			if ( ! defined( $init_file ) || constant( $init_file ) !== $plugin_file ) {
				return $new_row_meta_args;
			}

			$new_row_meta_args[ 'slug' ]        = 'yith-woocommerce-wishlist';
			$new_row_meta_args[ 'is_premium' ]  = defined( 'YITH_WCWL_PREMIUM' );
			$new_row_meta_args[ 'is_extended' ] = defined( 'YITH_WCWL_EXTENDED' );

			return $new_row_meta_args;
		}

		/* === WISHLIST SUBPANEL SECTION === */

		/**
		 * Adds yith-disabled class
		 * Adds class to fields when required, and when disabled state cannot be achieved any other way (eg. by dependencies)
		 *
		 * @param array $classes Array of field extra classes.
		 * @param array $field   Array of field data.
		 *
		 * @return array Filtered array of extra classes
		 */
		public function mark_options_disabled( $classes, $field ) {
			if ( isset( $field[ 'id' ] ) && 'yith_wfbt_enable_integration' === $field[ 'id' ] && ! ( defined( 'YITH_WFBT' ) && YITH_WFBT ) ) {
				$classes[] = 'yith-disabled';
			}

			return $classes;
		}

		/**
		 * Load admin style.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function enqueue() {
			global $woocommerce, $pagenow;

			if ( 'admin.php' === $pagenow && isset( $_GET[ 'page' ] ) && 'yith_wcwl_panel' === $_GET[ 'page' ] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
				wp_enqueue_style( 'yith-wcwl-admin' );
				wp_enqueue_script( 'yith-wcwl-admin' );

				if ( isset( $_GET[ 'tab' ], $_GET[ 'sub_tab' ] ) && 'dashboard' === $_GET[ 'tab' ] && 'dashboard-popular' === $_GET[ 'sub_tab' ] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					wp_enqueue_style( 'yith-wcwl-material-icons' );
					wp_enqueue_editor();
				}
			}
		}
	}
}

