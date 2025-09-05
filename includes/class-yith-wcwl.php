<?php
/**
 * Main class
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @version 3.0.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL' ) ) {
	/**
	 * WooCommerce Wishlist
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL extends YITH_WCWL_Legacy {
		use YITH_WCWL_Extensible_Singleton_Trait;

		/**
		 * Admin class
		 *
		 * @var YITH_WCWL_Admin
		 */
		protected $wcwl_admin;

		/**
		 * Frontend class
		 *
		 * @var YITH_WCWL_Frontend
		 */
		protected $wcwl_frontend;

		/**
		 * Cron class
		 *
		 * @var YITH_WCWL_Cron
		 */
		protected $wcwl_cron;

		/**
		 * Session class
		 *
		 * @var YITH_WCWL_Session
		 */
		protected $wcwl_session;

		/**
		 * Emails
		 *
		 * @var array
		 */
		public $emails = array();

		/**
		 * Last operation token
		 *
		 * @since 2.0.0
		 * @var string
		 */
		public $last_operation_token;

		/**
		 * Query string parameter used to generate Wishlist urls
		 *
		 * @since 2.1.2
		 * @var string
		 */
		public $wishlist_param = 'wishlist-action';

		/**
		 * Constructor.
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			parent::__construct();

			// register data stores.
			add_filter( 'woocommerce_data_stores', array( $this, 'register_data_stores' ) );

			// init frontend class.
			$this->wcwl_frontend = YITH_WCWL_Frontend::get_instance();

			// init crons.
			$this->wcwl_cron = YITH_WCWL_Cron::get_instance();

			// init session.
			$this->wcwl_session = YITH_WCWL_Session::get_instance();

			// init admin handling.
			if ( is_admin() ) {
				$this->wcwl_admin = YITH_WCWL_Admin::get_instance();
			}

			YITH_WCWL_Install::get_instance();
			YITH_WCWL_Rest_Server::get_instance();

			// load plugin-fw.
			add_action( 'plugins_loaded', array( $this, 'privacy_loader' ), 20 );

			// add rewrite rule.
			add_action( 'init', array( $this, 'add_rewrite_rules' ), 0 );
			add_filter( 'query_vars', array( $this, 'add_public_query_var' ) );

			// Polylang integration.
			add_filter( 'pll_translation_url', array( $this, 'get_pll_wishlist_url' ), 10, 1 );

			add_action( 'before_woocommerce_init', array( $this, 'declare_wc_features_support' ) );
		}

		/* === PRIVACY LOADER === */

		/**
		 * Loads privacy class
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function privacy_loader() {
			if ( class_exists( 'YITH_Privacy_Plugin_Abstract' ) ) {
				require_once YITH_WCWL_INC . 'class-yith-wcwl-privacy.php';
				new YITH_WCWL_Privacy();
			}
		}

		/* === GENERAL METHODS === */

		/**
		 * Checks whether current user can add to the wishlist
		 *
		 * TODO: merge this into \YITH_WCWL_Wishlist::current_user_can
		 *
		 * @param int|bool $user_id User id to test; false to use current user id.
		 * @return bool Whether current user can add to wishlist
		 * @since 3.0.0
		 */
		public function can_user_add_to_wishlist( $user_id = false ) {
			$user_id                                    = $user_id ? $user_id : get_current_user_id();
			$disable_wishlist_for_unauthenticated_users = get_option( 'yith_wcwl_disable_wishlist_for_unauthenticated_users' );
			$return                                     = true;

			if ( 'yes' === $disable_wishlist_for_unauthenticated_users && ! $user_id ) {
				$return = false;
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_can_user_add_to_wishlist
			 *
			 * Filter whether the current user can add products to the wishlist.
			 *
			 * @param bool $can_add_to_wishlist Whether the product is already in the wishlist
			 * @param int  $user_id             User ID
			 *
			 * @return bool
			 */
			return apply_filters( 'yith_wcwl_can_user_add_to_wishlist', $return, $user_id );
		}

		/**
		 * Register custom plugin Data Stores classes
		 *
		 * @param array $data_stores Array of registered data stores.
		 * @return array Array of filtered data store
		 */
		public function register_data_stores( $data_stores ) {
			$data_stores[ 'wishlist' ]      = 'YITH_WCWL_Wishlist_Data_Store';
			$data_stores[ 'wishlist-item' ] = 'YITH_WCWL_Wishlist_Item_Data_Store';

			return $data_stores;
		}

		/**
		 * Add rewrite rules for wishlist
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function add_rewrite_rules() {
			global $wp_query;

			// filter wishlist param.
			/**
			 * APPLY_FILTERS: yith_wcwl_wishlist_param
			 *
			 * Filter the wishlist param.
			 *
			 * @param string $wishlist_param Wishlist param
			 *
			 * @return string
			 */
			$this->wishlist_param = apply_filters( 'yith_wcwl_wishlist_param', $this->wishlist_param );

			$wishlist_page_id = get_option( 'yith_wcwl_wishlist_page_id' );
			$wishlist_page_id = yith_wcwl_object_id( $wishlist_page_id, 'page', true, 'default' );

			if ( empty( $wishlist_page_id ) ) {
				return;
			}

			$wishlist_page      = get_post( $wishlist_page_id );
			$wishlist_page_slug = $wishlist_page ? $wishlist_page->post_name : false;

			if ( empty( $wishlist_page_slug ) ) {
				return;
			}

			if ( defined( 'POLYLANG_VERSION' ) || defined( 'ICL_PLUGIN_PATH' ) ) {
				return;
			}

			$regex_paged  = '((?!wp-json/.*)([^/]+/)*' . urldecode( $wishlist_page_slug ) . ')(/(.*))?/page/([0-9]{1,})/?$';
			$regex_simple = '((?!wp-json/.*)([^/]+/)*' . urldecode( $wishlist_page_slug ) . ')(/(.*))?/?$';

			add_rewrite_rule( $regex_paged, 'index.php?pagename=$matches[1]&' . $this->wishlist_param . '=$matches[4]&paged=$matches[5]', 'top' );
			add_rewrite_rule( $regex_simple, 'index.php?pagename=$matches[1]&' . $this->wishlist_param . '=$matches[4]', 'top' );

			$rewrite_rules = get_option( 'rewrite_rules' );

			if ( ! is_array( $rewrite_rules ) || ! array_key_exists( $regex_paged, $rewrite_rules ) || ! array_key_exists( $regex_simple, $rewrite_rules ) ) {
				flush_rewrite_rules();
			}
		}

		/**
		 * Adds public query var for wishlist
		 *
		 * @param array $public_var Array of available query vars.
		 * @return array
		 * @since 2.0.0
		 */
		public function add_public_query_var( $public_var ) {
			$public_var[] = $this->wishlist_param;
			$public_var[] = 'wishlist_id';

			return $public_var;
		}

		/**
		 * Return wishlist page id, if any
		 *
		 * @return int Wishlist page id.
		 */
		public function get_wishlist_page_id() {
			$wishlist_page_id = get_option( 'yith_wcwl_wishlist_page_id' );
			$wishlist_page_id = yith_wcwl_object_id( $wishlist_page_id );

			/**
			 * APPLY_FILTERS: yith_wcwl_wishlist_page_id
			 *
			 * Filter the wishlist page ID.
			 *
			 * @param int $wishlist_page_id Wishlist page ID
			 *
			 * @return int
			 */
			return (int) apply_filters( 'yith_wcwl_wishlist_page_id', $wishlist_page_id );
		}

		/**
		 * Build wishlist page URL.
		 *
		 * @param string $action Action string to use in the url.
		 *
		 * @return string
		 * @since 1.0.0
		 */
		public function get_wishlist_url( $action = '' ) {
			global $sitepress;
			$wishlist_page_id   = $this->get_wishlist_page_id();
			$wishlist_permalink = get_the_permalink( $wishlist_page_id );

			$action_params = explode( '/', $action );
			$view          = $action_params[ 0 ];
			$data          = isset( $action_params[ 1 ] ) ? $action_params[ 1 ] : '';

			if ( 'view' === $action && empty( $data ) ) {
				return $wishlist_permalink;
			}

			if ( get_option( 'permalink_structure' ) && ! defined( 'ICL_PLUGIN_PATH' ) && ! defined( 'POLYLANG_VERSION' ) ) {
				$wishlist_permalink = trailingslashit( $wishlist_permalink );
				$base_url           = trailingslashit( $wishlist_permalink . $action );
			} else {
				$base_url = $wishlist_permalink;
				$params   = array();

				if ( ! empty( $data ) ) {
					$params[ $this->wishlist_param ] = $view;

					if ( 'view' === $view ) {
						$params[ 'wishlist_id' ] = $data;
					} elseif ( 'user' === $view ) {
						$params[ 'user_id' ] = $data;
					}
				} else {
					$params[ $this->wishlist_param ] = $view;
				}

				$base_url = add_query_arg( $params, $base_url );
			}

			if ( defined( 'ICL_PLUGIN_PATH' ) && $sitepress->get_current_language() !== $sitepress->get_default_language() ) {
				$base_url = add_query_arg( 'lang', $sitepress->get_current_language(), $base_url );
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_wishlist_page_url
			 *
			 * Filter the wishlist page URL.
			 *
			 * @param string $wishlist_page_url Wishlist page URL
			 * @param string $action            Action
			 *
			 * @return string
			 */
			return apply_filters( 'yith_wcwl_wishlist_page_url', esc_url_raw( $base_url ), $action );
		}

		/**
		 * Retrieve url for the wishlist that was affected by last operation
		 *
		 * @return string Url to view last operation wishlist
		 */
		public function get_last_operation_url() {
			$action = 'view';

			if ( ! empty( $this->last_operation_token ) ) {
				$action .= "/{$this->last_operation_token}";
			}

			return $this->get_wishlist_url( $action );
		}

		/**
		 * Generates Add to Wishlist url, to use when customer do not have js enabled
		 *
		 * @param int   $product_id Product id to add to wishlist.
		 * @param array $args       Any of the following parameters
		 *                          [
		 *                          'base_url' => ''
		 *                          'wishlist_id' => 0,
		 *                          'quantity' => 1,
		 *                          'user_id' => false,
		 *                          'dateadded' => '',
		 *                          'wishlist_name' => '',
		 *                          'wishlist_visibility' => 0
		 *                          ].
		 * @return string Add to wishlist url
		 */
		public function get_add_to_wishlist_url( $product_id, $args = array() ) {
			$args = array_merge(
				array(
					'add_to_wishlist' => $product_id,
				),
				$args
			);

			if ( isset( $args[ 'base_url' ] ) ) {
				$base_url = $args[ 'base_url' ];
				unset( $args[ 'base_url' ] );

				$url = add_query_arg( $args, $base_url );
			} else {
				$url = add_query_arg( $args );
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_url
			 *
			 * Filter the URL to add products to the wishlist.
			 *
			 * @param string $url        URL to add to wishlist
			 * @param int    $product_id Product ID
			 * @param array  $args       Array of parameters
			 *
			 * @return string
			 */
			return apply_filters( 'yith_wcwl_add_to_wishlist_url', esc_url_raw( wp_nonce_url( $url, 'add_to_wishlist' ) ), $product_id, $args );
		}

		/**
		 * Build the URL used to remove an item from the wishlist.
		 *
		 * @param int $item_id Id of the item to remove.
		 * @return string
		 * @since 1.0.0
		 */
		public function get_remove_url( $item_id ) {
			return esc_url( wp_nonce_url( add_query_arg( 'remove_from_wishlist', $item_id ), 'remove_from_wishlist' ) );
		}

		/**
		 * Returns available views for wishlist page
		 *
		 * @return string[]
		 * @since 3.0.0
		 */
		public function get_available_views() {
			/**
			 * APPLY_FILTERS: yith_wcwl_available_wishlist_views
			 *
			 * Filter the available views in the wishlist page.
			 *
			 * @param array $views Available views
			 *
			 * @return array
			 */
			$available_views = apply_filters( 'yith_wcwl_available_wishlist_views', array( 'view', 'user' ) );
			return $available_views;
		}

		/* === POLYLANG INTEGRATION === */

		/**
		 * Filters translation url for the wishlist page, when PolyLang is enabled
		 *
		 * @param string $url Translation url.
		 * @return string Filtered translation url for current page/post.
		 */
		public function get_pll_wishlist_url( $url ) {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			if ( yith_wcwl_is_wishlist_page() && isset( $_GET[ $this->wishlist_param ] ) ) {
				$wishlist_action = sanitize_text_field( wp_unslash( $_GET[ $this->wishlist_param ] ) );
				$user_id         = isset( $_GET[ 'user_id' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 'user_id' ] ) ) : '';
				$wishlist_id     = isset( $_GET[ 'wishlist_id' ] ) ? sanitize_text_field( wp_unslash( $_GET[ 'wishlist_id' ] ) ) : '';

				$params = array_filter(
					array(
						$this->wishlist_param => $wishlist_action,
						'user_id'             => $user_id,
						'wishlist_id'         => $wishlist_id,
					)
				);

				$url = add_query_arg( $params, $url );
			}
			// phpcs:enable WordPress.Security.NonceVerification.Recommended

			return $url;
		}

		/**
		 * Declare support for WooCommerce features.
		 *
		 * @since 3.22.0
		 */
		public function declare_wc_features_support() {
			if ( class_exists( '\Automattic\WooCommerce\Utilities\FeaturesUtil' ) ) {
				\Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility( 'custom_order_tables', YITH_WCWL_INIT, true );
			}
		}
	}
}
