<?php
/**
 * Init class
 *
 * @author  Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.9
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Init' ) ) {
	/**
	 * Initiator class. Install the plugin database and load all needed stuffs.
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL_Init {

		/**
		 * Single instance of the class
		 *
		 * @var \YITH_WCWL_Init
		 * @since 2.0.0
		 */
		protected static $instance;

		/**
		 * CSS selectors used to style buttons.
		 *
		 * @var array
		 * @since 1.0.0
		 */
		public $rules;

		/**
		 * Front end colors options.
		 *
		 * @var array
		 * @since 1.0.0
		 */
		public $colors_options;

		/**
		 * Plugin version
		 *
		 * @var string
		 * @since 1.0.0
		 */
		public $version = '2.2.13';

		/**
		 * Plugin database version
		 *
		 * @var string
		 * @since 1.0.0
		 */
		public $db_version = '2.2.0';

		/**
		 * Positions of the button "Add to Wishlist"
		 *
		 * @var array
		 * @access private
		 * @since 1.0.0
		 */
		private $_positions;

		/**
		 * Store class yith_WCWL_Install.
		 *
		 * @var object
		 * @access private
		 * @since 1.0.0
		 */
		private $_yith_wcwl_install;

		/**
		 * Returns single instance of the class
		 *
		 * @return \YITH_WCWL_Init
		 * @since 2.0.0
		 */
		public static function get_instance(){
			if( is_null( self::$instance ) ){
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			define( 'YITH_WCWL_VERSION', $this->version );
			define( 'YITH_WCWL_DB_VERSION', $this->db_version );

			$this->_yith_wcwl_install = YITH_WCWL_Install();
			$this->_positions         = apply_filters( 'yith_wcwl_positions', array(
				'add-to-cart' => array( 'hook' => 'woocommerce_single_product_summary', 'priority' => 31 ),
				'thumbnails'  => array( 'hook' => 'woocommerce_product_thumbnails', 'priority' => 21 ),
				'summary'     => array( 'hook' => 'woocommerce_after_single_product_summary', 'priority' => 11 )
			) );
			$this->rules              = apply_filters( 'yith_wcwl_colors_rules', array(
				'add_to_wishlist'       => '.woocommerce a.add_to_wishlist.button.alt',

				'add_to_wishlist_hover' => '.woocommerce a.add_to_wishlist.button.alt:hover',

				'add_to_cart'           => '.woocommerce .wishlist_table a.add_to_cart.button.alt',

				'add_to_cart_hover'     => '.woocommerce .wishlist_table a.add_to_cart.button.alt:hover',

				'button_style_1'        => '.woocommerce a.button.ask-an-estimate-button,
                                            .woocommerce .hidden-title-form button,
                                            .yith-wcwl-wishlist-new .create-wishlist-button,
                                            .wishlist_manage_table tfoot button.submit-wishlist-changes,
                                            .yith-wcwl-wishlist-search-form button.wishlist-search-button',

				'button_style_1_hover'  => '.woocommerce a.button.ask-an-estimate-button:hover,
                                            .woocommerce .hidden-title-form button:hover,
                                            .yith-wcwl-wishlist-new .create-wishlist-button:hover,
                                            .wishlist_manage_table tfoot button.submit-wishlist-changes:hover,
                                            .yith-wcwl-wishlist-search-form button.wishlist-search-button:hover',

				'button_style_2'        => '.woocommerce .wishlist-title a.show-title-form,
                                            .woocommerce .hidden-title-form a.hide-title-form,
                                            .wishlist_manage_table tfoot a.create-new-wishlist',

				'button_style_2_hover'  => '.woocommerce .wishlist-title a.show-title-form:hover,
                                            .woocommerce .hidden-title-form a.hide-title-form:hover,
                                            .wishlist_manage_table tfoot a.create-new-wishlist:hover',

				'wishlist_table'        => '.woocommerce table.shop_table.wishlist_table',

				'headers'               => '.wishlist_table thead,
                                            .wishlist_table tfoot,
                                            .yith-wcwl-wishlist-new,
                                            .yith-wcwl-wishlist-search-form,
                                            .widget_yith-wcwl-lists ul.dropdown li.current a,
                                            .widget_yith-wcwl-lists ul.dropdown li a:hover,
                                            .selectBox-dropdown-menu.selectBox-options li.selectBox-selected a,
                                            .selectBox-dropdown-menu.selectBox-options li.selectBox-hover a'
			) );

			$db_colors = get_option( 'yith_wcwl_frontend_css_colors' );

			$this->colors_options = wp_parse_args(
				maybe_unserialize( $db_colors ),
				apply_filters(
					'yith_wcwl_colors_options', array(
						'add_to_wishlist'       => array( 'background' => '#333333', 'color' => '#FFFFFF', 'border_color' => '#333333' ),
						'add_to_wishlist_hover' => array( 'background' => '#4F4F4F', 'color' => '#FFFFFF', 'border_color' => '#4F4F4F' ),
						'add_to_cart'           => array( 'background' => '#333333', 'color' => '#FFFFFF', 'border_color' => '#333333' ),
						'add_to_cart_hover'     => array( 'background' => '#4F4F4F', 'color' => '#FFFFFF', 'border_color' => '#4F4F4F' ),
						'button_style_1'        => array( 'background' => '#333333', 'color' => '#FFFFFF', 'border_color' => '#333333' ),
						'button_style_1_hover'  => array( 'background' => '#4F4F4F', 'color' => '#FFFFFF', 'border_color' => '#4F4F4F' ),
						'button_style_2'        => array( 'background' => '#FFFFFF', 'color' => '#858484', 'border_color' => '#c6c6c6' ),
						'button_style_2_hover'  => array( 'background' => '#4F4F4F', 'color' => '#FFFFFF', 'border_color' => '#4F4F4F' ),
						'wishlist_table'        => array( 'background' => '#FFFFFF', 'color' => '#6d6c6c', 'border_color' => '#FFFFFF' ),
						'headers'               => array( 'background' => '#F4F4F4' )
					)
				)
			);

			if ( empty( $db_colors ) ) {
				update_option( 'yith_wcwl_frontend_css_colors', maybe_serialize( $this->colors_options ) );
			}

			if ( get_option( 'yith_wcwl_enabled' ) == 'yes' ) {
				add_action( 'init', array( $this, 'init' ), 0 );
				add_action( 'wp_head', array( $this, 'detect_javascript' ), 0 );
				add_action( 'wp_head', array( $this, 'add_button' ) );
				add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles_and_stuffs' ) );
				add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
				add_filter( 'body_class', array( $this, 'add_body_class' ) );

				// add YITH WooCommerce Frequently Bought Together Premium shortcode
				add_action( 'yith_wcwl_after_wishlist_form', array( $this, 'yith_wcfbt_shortcode' ), 10, 1 );

				// YITH WCWL Loaded
				do_action( 'yith_wcwl_loaded' );
			}
		}

		/**
		 * Initiator method.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function init() {
			// update cookie from old version to new one
			$this->_update_cookies();
			$this->_destroy_serialized_cookies();

			// register assets
            $this->register_styles();
            $this->register_scripts();

			if ( is_user_logged_in() ) {
				YITH_WCWL()->details['user_id'] = get_current_user_id();

				//check whether any products are added to wishlist, then after login add to the wishlist if not added
				$cookie = yith_getcookie( 'yith_wcwl_products' );
				if( ! empty( $cookie ) && is_array( $cookie ) ) {
					foreach ( $cookie as $details ) {
						YITH_WCWL()->details['add_to_wishlist'] = $details['prod_id'];
						YITH_WCWL()->details['wishlist_id']     = $details['wishlist_id'];
						YITH_WCWL()->details['quantity']        = $details['quantity'];
						YITH_WCWL()->details['user_id']         = get_current_user_id();
						YITH_WCWL()->details['dateadded']       = isset( $details['dateadded'] ) ? $details['dateadded'] : false;

						$ret_val = YITH_WCWL()->add();
					}
				}

				yith_destroycookie( 'yith_wcwl_products' );
			}
		}

		/**
		 * Add the "Add to Wishlist" button. Needed to use in wp_head hook.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function add_button() {
			global $post;

			$this->_positions = apply_filters( 'yith_wcwl_positions', $this->_positions );

			if ( ! isset( $post ) || ! is_object( $post ) ) {
				return;
			}

			// Add the link "Add to wishlist"
			$position = get_option( 'yith_wcwl_button_position' );
			$position = empty( $position ) ? 'add-to-cart' : $position;

			if ( $position != 'shortcode' ) {
				add_action( $this->_positions[$position]['hook'], array( $this, 'print_button' ), $this->_positions[$position]['priority'] );
			}

			// Free the memory. Like it needs a lot of memory... but this is rock!
		}

		/**
		 * Print "Add to Wishlist" shortcode
		 *
		 * @return void
		 * @since 2.2.2
		 */
		public function print_button() {
			echo do_shortcode( "[yith_wcwl_add_to_wishlist]" );
		}

		/**
		 * Add specific body class when the Wishlist page is opened
		 *
		 * @param array $classes
		 *
		 * @return array
		 * @since 1.0.0
		 */
		public function add_body_class( $classes ) {
			$wishlist_page_id = yith_wcwl_object_id( get_option( 'yith_wcwl_wishlist_page_id' ) );

			if ( ! empty( $wishlist_page_id ) && is_page( $wishlist_page_id ) ) {
				$classes[] = 'woocommerce-wishlist';
				$classes[] = 'woocommerce';
				$classes[] = 'woocommerce-page';
			}

			return $classes;
		}

		/**
         * Register styles required by the plugin
         *
         * @return void
		 */
		public function register_styles() {
			$woocommerce_base = WC()->template_path();
			$assets_path = str_replace( array( 'http:', 'https:' ), '', WC()->plugin_url() ) . '/assets/';

			// register dependencies
			wp_register_style( 'jquery-selectBox', YITH_WCWL_URL . 'assets/css/jquery.selectBox.css', array(), '1.2.0' );
			wp_register_style( 'yith-wcwl-font-awesome', YITH_WCWL_URL . 'assets/css/font-awesome.min.css', array(), '4.7.0' );
			wp_register_style( 'woocommerce_prettyPhoto_css', $assets_path . 'css/prettyPhoto.css' );

			// register main style
			$located = locate_template( array(
				$woocommerce_base . 'wishlist.css',
				'wishlist.css'
			) );

			if( ! $located ){
			    wp_register_style( 'yith-wcwl-main', YITH_WCWL_URL . 'assets/css/style.css', array( 'jquery-selectBox', 'yith-wcwl-font-awesome' ), $this->version );
			}
			else{
				$stylesheet_directory = get_stylesheet_directory();
				$stylesheet_directory_uri = get_stylesheet_directory_uri();
				$template_directory = get_template_directory();
				$template_directory_uri = get_template_directory_uri();

				$style_url = ( strpos( $located, $stylesheet_directory ) ) ? str_replace( $stylesheet_directory, $stylesheet_directory_uri, $located ) : str_replace( $template_directory, $template_directory_uri, $located );

				wp_register_style( 'yith-wcwl-user-main', $style_url, array( 'jquery-selectBox', 'yith-wcwl-font-awesome' ), $this->version );
            }
		}

		/**
         * Register scripts required by the plugin
         *
         * @return void
		 */
		public function register_scripts() {
			$woocommerce_base = WC()->template_path();
			$assets_path = str_replace( array( 'http:', 'https:' ), '', WC()->plugin_url() ) . '/assets/';
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

			$located = locate_template( array(
				$woocommerce_base . 'wishlist.js',
				'wishlist.js'
			) );

			wp_register_script( 'prettyPhoto', $assets_path . 'js/prettyPhoto/jquery.prettyPhoto' . $suffix . '.js', array( 'jquery' ), '3.1.6', true );
			wp_register_script( 'jquery-selectBox', YITH_WCWL_URL . 'assets/js/jquery.selectBox.min.js', array( 'jquery' ), '1.2.0', true );

			$yith_wcwl_l10n = $this->get_localize();

			if ( ! $located ) {
				wp_register_script( 'jquery-yith-wcwl', YITH_WCWL_URL . 'assets/js/jquery.yith-wcwl.js', array( 'jquery', 'jquery-selectBox' ), $this->version, true );
				wp_localize_script( 'jquery-yith-wcwl', 'yith_wcwl_l10n', $yith_wcwl_l10n );
			}
			else {
				wp_register_script( 'jquery-yith-wcwl-user', str_replace( get_stylesheet_directory(), get_stylesheet_directory_uri(), $located ), array( 'jquery', 'jquery-selectBox' ), $this->version, true );
				wp_localize_script( 'jquery-yith-wcwl-user', 'yith_wcwl_l10n', $yith_wcwl_l10n );
			}
		}

		/**
		 * Enqueue styles, scripts and other stuffs needed in the <head>.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function enqueue_styles_and_stuffs() {
		    wp_enqueue_style( 'woocommerce_prettyPhoto_css' );
			wp_enqueue_style( 'jquery-selectBox' );

			if ( ! wp_style_is( 'yith-wcwl-user-main', 'registered' ) ) {
				wp_enqueue_style( 'yith-wcwl-main' );
			}
			else {
				wp_enqueue_style( 'yith-wcwl-user-main' );
			}

			wp_enqueue_style( 'yith-wcwl-font-awesome' );

			$this->enqueue_custom_style();
		}

		/**
         * Enqueue style dynamically generated by the plugin
         *
         * @return void
		 */
		public function enqueue_custom_style() {
			// Add frontend CSS for buttons
			$colors_styles = array();
			$frontend_css  = '';
			$rounded_corners_css = '';
			$custom_css = get_option( 'yith_wcwl_custom_css' );

			if( get_option( 'yith_wcwl_rounded_corners' ) == 'yes' ){
			    $rounded_corners_css = '.wishlist_table .add_to_cart, a.add_to_wishlist.button.alt { border-radius: 16px; -moz-border-radius: 16px; -webkit-border-radius: 16px; }';
            }

			if ( get_option( 'yith_wcwl_frontend_css' ) == 'no' ) {
				if ( is_array( $this->colors_options ) && ! empty( $this->colors_options ) ) {
					foreach ( $this->colors_options as $name => $option ) {

						$colors_styles[ $name ] = '';

						if ( is_array( $option ) && ! empty( $option ) ) {
							foreach ( $option as $id => $value ) {
								$colors_styles[ $name ] .= str_replace( '_', '-', $id ) . ':' . $value . ';';
							}
						}
					}
				}

				if ( is_array( $this->rules ) && ! empty( $this->rules ) ) {
					foreach ( $this->rules as $id => $rule ) {
						$frontend_css .= $rule . '{' . $colors_styles[ $id ] . '}';
					}
				}
			}

			if( $custom_css || $frontend_css || $rounded_corners_css ) {
				$handle         = wp_script_is( 'yith-wcwl-user-main' ) ? 'yith-wcwl-user-main' : 'yith-wcwl-main';
				$generated_code = $frontend_css . $rounded_corners_css . $custom_css;

				wp_add_inline_style( $handle, $generated_code );
			}
		}

		/**
		 * Enqueue plugin scripts.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function enqueue_scripts() {
            wp_enqueue_script( 'prettyPhoto' );
			wp_enqueue_script( 'jquery-selectBox' );

			if ( ! wp_script_is( 'jquery-yith-wcwl-user', 'registered' ) ) {
				wp_enqueue_script( 'jquery-yith-wcwl' );
			}
			else {
				wp_enqueue_script( 'jquery-yith-wcwl-user' );
			}
		}

		/**
         * Return localize array
         *
         * @return array Array with variables to be localized inside js
         * @since 2.2.3
		 */
		public function get_localize() {
            return apply_filters( 'yith_wcwl_localize_script', array(
	            'ajax_url' => admin_url( 'admin-ajax.php', 'relative' ),
	            'redirect_to_cart' => get_option( 'yith_wcwl_redirect_cart' ),
	            'multi_wishlist' => defined( 'YITH_WCWL_PREMIUM' ) && get_option( 'yith_wcwl_multi_wishlist_enable' ) == 'yes' ? true : false,
	            'hide_add_button' => apply_filters( 'yith_wcwl_hide_add_button', true ),
	            'is_user_logged_in' => is_user_logged_in(),
	            'ajax_loader_url' => YITH_WCWL_URL . 'assets/images/ajax-loader.gif',
	            'remove_from_wishlist_after_add_to_cart' => get_option( 'yith_wcwl_remove_after_add_to_cart' ),
	            'labels' => array(
		            'cookie_disabled' => __( 'We are sorry, but this feature is available only if cookies are enabled on your browser.', 'yith-woocommerce-wishlist' ),
		            'added_to_cart_message' => sprintf( '<div class="woocommerce-message">%s</div>', apply_filters( 'yith_wcwl_added_to_cart_message', __( 'Product correctly added to cart', 'yith-woocommerce-wishlist' ) ) )
	            ),
	            'actions' => array(
		            'add_to_wishlist_action' => 'add_to_wishlist',
		            'remove_from_wishlist_action' => 'remove_from_wishlist',
		            'move_to_another_wishlist_action' => 'move_to_another_wishlsit',
		            'reload_wishlist_and_adding_elem_action'  => 'reload_wishlist_and_adding_elem'
	            )
            ) );
		}

		/**
		 * Remove the class no-js when javascript is activated
		 *
		 * We add the action at the start of head, to do this operation immediatly, without gap of all libraries loading
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function detect_javascript() {
			if( ! defined( 'YIT' ) ):
				?>
				<script>document.documentElement.className = document.documentElement.className + ' yes-js js_active js'</script>
			<?php
			endif;
		}

		/**
		 * Destroy serialize cookies, to prevent major vulnerability
		 *
		 * @return void
		 * @since 2.0.7
		 */
		private function _destroy_serialized_cookies(){
			$name = 'yith_wcwl_products';

			if ( isset( $_COOKIE[$name] ) && is_serialized( stripslashes( $_COOKIE[ $name ] ) ) ) {
				$_COOKIE[ $name ] = json_encode( array() );
				yith_destroycookie( $name );
			}
		}

		/**
		 * Update old wishlist cookies
		 *
		 * @return void
		 * @since 2.0.0
		 */
		private function _update_cookies(){
			$cookie = yith_getcookie( 'yith_wcwl_products' );
			$new_cookie = array();

			if( ! empty( $cookie ) ) {
				foreach ( $cookie as $item ) {
					if ( ! isset( $item['add-to-wishlist'] ) ) {
						return;
					}

					$new_cookie[] = array(
						'prod_id'     => $item['add-to-wishlist'],
						'quantity'    => isset( $item['quantity'] ) ? $item['quantity'] : 1,
						'wishlist_id' => false
					);
				}

				yith_setcookie( 'yith_wcwl_products', $new_cookie );
			}
		}

		/**
		 * Add Frequently Bought Together shortcode to wishlist page
		 *
		 * @param mixed $meta
		 * @author Francesco Licandro
		 */
		public function yith_wcfbt_shortcode( $meta ){

			if( ! ( defined( 'YITH_WFBT' ) && YITH_WFBT ) || get_option( 'yith_wfbt_enable_integration' ) == 'no' ) {
				return;
			}

			$products = YITH_WCWL()->get_products(
				array(
					'wishlist_id' => is_user_logged_in() ? $meta['ID'] : ''
				));

			$ids   = array();
			// take id of products in wishlist
			foreach( $products as $product ) {
				$ids[] = $product['prod_id'];
			}

			if( empty( $ids ) ) {
				return;
			}

			do_shortcode( '[yith_wfbt products="' . implode( ',', $ids ) . '"]' );
		}
	}
}

/**
 * Unique access to instance of YITH_WCWL_Init class
 *
 * @return \YITH_WCWL_Init
 * @since 2.0.0
 */
function YITH_WCWL_Init(){
	return YITH_WCWL_Init::get_instance();
}