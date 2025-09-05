<?php
/**
 * Admin panel handler class
 *
 * @package YITH\Wishlist\Admin\Classes
 * @author  YITH <plugins@yithemes.com>
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Admin_Panel' ) ) {
	/**
	 * Initiator class. Create and populate admin views.
	 *
	 * @since 4.0.0
	 */
	class YITH_WCWL_Admin_Panel {
		use YITH_WCWL_Extensible_Singleton_Trait;

		/**
		 * Wishlist panel
		 *
		 * @since 2.0.0
		 * @var string Panel hookname
		 */
		protected $panel = null;

		/**
		 * Wishlist panel page
		 *
		 * @since 2.0.0
		 * @var string Panel page name
		 */
		protected static $panel_page = 'yith_wcwl_panel';

		/**
		 * Docs url
		 *
		 * @since 4.0
		 * @var string Official documentation url
		 */
		protected static $doc_url = 'https://docs.yithemes.com/yith-woocommerce-wishlist/';

		/**
		 * Constructor of the class
		 *
		 * @since 2.0.0
		 */
		protected function __construct() {
			// register wishlist panel.
			add_action( 'admin_menu', array( $this, 'register_panel' ), 5 );
		}

		/**
		 * Retrieve the admin panel tabs.
		 *
		 * @return array
		 */
		protected function get_tabs(): array {
			return array(
				'settings'      => array(
					'title' => _x( 'Settings', 'Settings tab name', 'yith-woocommerce-wishlist' ),
					'icon'  => 'settings',
				),
				'customization' => array(
					'title' => __( 'Customization', 'yith-woocommerce-wishlist' ),
					'icon'  => '<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9"></path></svg>',
				),
			);
		}

		/**
		 * Register plugin panel
		 */
		public function register_panel() {
			if ( ! empty( $this->panel ) ) {
				return;
			}

			$admin_tabs = apply_filters( 'yith_wcwl_admin_panel_tabs', $this->get_tabs() );

			$args = array(
				'ui_version'         => 2,
				'create_menu_page'   => true,
				'parent_slug'        => '',
				'page_title'         => 'YITH WooCommerce Wishlist',
				'menu_title'         => 'Wishlist',
				'plugin_slug'        => YITH_WCWL_SLUG,
				'plugin_version'     => YITH_WCWL_VERSION,
				'is_extended'        => defined( 'YITH_WCWL_EXTENDED' ),
				'is_premium'         => defined( 'YITH_WCWL_PREMIUM' ),
				'plugin_description' => __( 'Allows your customers to create and share lists of products that they want to purchase on your e-commerce.', 'yith-woocommerce-wishlist' ),
				/**
				 * APPLY_FILTERS: yith_wcwl_settings_panel_capability
				 *
				 * Filter the capability used to access the plugin panel.
				 *
				 * @param string $capability Capability
				 *
				 * @return string
				 */
				'capability'         => apply_filters( 'yith_wcwl_settings_panel_capability', 'manage_options' ),
				'parent'             => '',
				'class'              => function_exists( 'yith_set_wrapper_class' ) ? yith_set_wrapper_class() : '',
				'parent_page'        => 'yith_plugin_panel',
				'page'               => self::$panel_page,
				'admin-tabs'         => $admin_tabs,
				'options-path'       => YITH_WCWL_DIR . 'plugin-options',
				'help_tab'           => $this->get_help_tab(),
				'welcome_modals'     => $this->get_welcome_modals(),
				'premium_tab'        => $this->get_premium_tab(),
				'your_store_tools' => $this->get_your_store_tools_tab(),
			);

			if ( empty( $args[ 'premium_tab' ] ) ) {
				unset( $args[ 'premium_tab' ] );
			}

			if ( empty( $args[ 'your_store_tools' ] ) ) {
				unset( $args[ 'your_store_tools' ] );
			}

			/* === Fixed: not updated theme  === */
			if ( ! class_exists( 'YIT_Plugin_Panel_WooCommerce' ) ) {
				require_once YITH_WCWL_DIR . 'plugin-fw/lib/yit-plugin-panel-wc.php';
			}

			$this->panel = new YIT_Plugin_Panel_WooCommerce( $args );
		}

		/**
		 * Return the help tab options
		 *
		 * @return array
		 */
		protected function get_help_tab() {
			return array(
				'main_video' => array(
					'desc' => _x( 'Check this video to learn how to <b>configure wishlist and customize options:</b>', '[HELP TAB] Video title', 'yith-woocommerce-wishlist' ),
					'url'  => array(
						'en' => 'https://www.youtube.com/embed/oMnfyHo819M',
						'it' => 'https://www.youtube.com/embed/9hM9PgBVNTg',
						'es' => 'https://www.youtube.com/embed/5gi8SrEuip8',
					),
				),
				'playlists'  => array(
					'en' => 'https://www.youtube.com/watch?v=oMnfyHo819M&list=PLDriKG-6905lyNLO9kQ7GCsldGt7u-4Pa',
					'it' => 'https://www.youtube.com/watch?v=zpwlE60H6YM&list=PL9c19edGMs09kk40S7FEiXjKKppjS-CAK',
					'es' => 'https://www.youtube.com/watch?v=5Ftr4_v0s5I&list=PL9Ka3j92PYJMMYXecDH8FB5cxTfTbF4jJ',
				),
				'hc_url'     => 'https://support.yithemes.com/hc/en-us/categories/360003468437-YITH-WOOCOMMERCE-WISHLIST',
			);
		}

		/**
		 * Return the premium tab options
		 *
		 * @return array
		 */
		protected function get_premium_tab() {
			return array(
				'features' => array(
					array(
						'title'       => __( 'Allow users to create multiple wishlists', 'yith-woocommerce-wishlist' ),
						'description' => __( 'In the premium version, your customers can create a wishlist for their birthday, Christmas, a graduation party, etc.', 'yith-woocommerce-wishlist' ),
					),
					array(
						'title'       => __( 'Advanced wishlist management', 'yith-woocommerce-wishlist' ),
						'description' => __( 'Allow users to rename wishlists, choose whether to make them public or private, move products from one list to another, and more.', 'yith-woocommerce-wishlist' ),
					),
					array(
						'title'       => __( 'Different wishlist layouts', 'yith-woocommerce-wishlist' ),
						'description' => __( 'Choose which layout you prefer to display products in the wishlist for a more modern and 100% mobile-friendly user experience.', 'yith-woocommerce-wishlist' ),
					),
					array(
						'title'       => __( 'Insert a wishlist widget in the header of your shop', 'yith-woocommerce-wishlist' ),
						'description' => __( 'Give instant access to the wishlist and show a preview of the products added to it by inserting the widget in the site header.', 'yith-woocommerce-wishlist' ),
					),
					array(
						'title'       => __( 'Analyze your customers\' wishlists and the most popular products in your shop', 'yith-woocommerce-wishlist' ),
						'description' => __( 'In the premium version, you can analyze the wishlists of each user in your shop and get a clear overview of the most popular products in your shop.', 'yith-woocommerce-wishlist' ),
					),
					array(
						'title'       => __( 'Create targeted promotions and take advantage of the wishlists to increase conversions', 'yith-woocommerce-wishlist' ),
						'description' => __( 'The premium version of the plugin allows you to structure effective marketing strategies and increase conversions. Some examples? You can send promotional emails and offer a discount to all users who have a specific product on their wishlist, notify customers when a product on their wishlist is on sale, or notify them when an out-of-stock product is available again in your shop.', 'yith-woocommerce-wishlist' ),
					),
				),
			);
		}

		/**
		 * Get welcome modals options
		 *
		 * @return array[][]
		 */
		protected function get_welcome_modals() {
			return array(
				'show_in' => 'panel',
				'modals'  => array(
					'welcome' => array(
						'type'     => 'welcome',
						'show'     => ! isset( $_GET[ 'yith-wcwl-no-welcome-modal' ] ) && false === get_option( 'yith_wcwl_disable_wishlist_for_unauthenticated_users', false ) && 'welcome' === get_option( 'yith-wcwl-welcome-modal', 'welcome' ), // phpcs:ignore WordPress.Security.NonceVerification.Recommended
						'on_close' => function () {
							update_option( 'yith-wcwl-welcome-modal', 'no' );
						},
						'items'    => array(
							'documentation'           => array( 'url' => self::$doc_url ),
							'watch_first_steps_video' => array(
								'title'       => __( 'Watch our first steps video', 'yith-woocommerce-wishlist' ),
								'description' => __( 'See how it works before you start using it', 'yith-woocommerce-wishlist' ),
								'url'         => 'https://www.youtube.com/watch?v=oMnfyHo819M',
							),
							'setup_wishlist'          => array(
								'title'       => __( 'Set up your shop\'s wishlist settings', 'yith-woocommerce-wishlist' ),
								'description' => __( 'And embark on this new adventure!', 'yith-woocommerce-wishlist' ),
								'url'         => add_query_arg(
									array(
										'page'                       => self::$panel_page,
										'yith-wcwl-no-welcome-modal' => '',
									),
									admin_url( 'admin.php' )
								),
							),
						),
					),
				),
			);
		}

		/**
		 * Get 'Your store tools tab' options
		 *
		 * @return array
		 */
		protected function get_your_store_tools_tab(){
			return array();
		}

		/**
		 * Check if is a panel page
		 */
		public function is_panel() {
			return is_admin() && isset( $_GET[ 'page' ] ) && self::$panel_page === $_GET[ 'page' ]; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		}

		/**
		 * get panel page url
		 *
		 * @param string $tab The panel tab.
		 *
		 * @return string
		 */
		public static function get_panel_page_url( $tab = '' ) {
			$query_args = array( 'page' => self::$panel_page );
			if ( ! ! $tab ) {
				$query_args[ 'tab' ] = $tab;
			}

			return add_query_arg( $query_args, admin_url( 'admin.php' ) );
		}
	}
}

