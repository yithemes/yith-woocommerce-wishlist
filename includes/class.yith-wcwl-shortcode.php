<?php
/**
 * Shortcodes class
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 1.1.5
 */

if ( ! defined( 'YITH_WCWL' ) ) { exit; } // Exit if accessed directly

if( ! class_exists( 'YITH_WCWL_Shortcode' ) ) {
	/**
	 * YITH WCWL Shortcodes
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL_Shortcode {

		/**
		 * Init shortcodes available for the plugin
		 *
		 * @return void
		 */
		public static function init() {
			// register shortcodes
			add_shortcode( 'yith_wcwl_wishlist', array( 'YITH_WCWL_Shortcode', 'wishlist' ) );
			add_shortcode( 'yith_wcwl_add_to_wishlist', array( 'YITH_WCWL_Shortcode', 'add_to_wishlist' ) );

            // register gutenberg blocks
			add_action( 'init', array( 'YITH_WCWL_Shortcode', 'register_gutenberg_blocks' ) );
			add_action( 'yith_plugin_fw_gutenberg_before_do_shortcode', array( 'YITH_WCWL_Shortcode', 'fix_for_gutenberg_blocks' ), 10, 1 );
		}

		/**
		 * Register available gutenberg blocks
		 *
		 * @return void
		 */
		public static function register_gutenberg_blocks() {
			$blocks = array(
				'yith-wcwl-add-to-wishlist' => array(
					'style'          => 'yith-wcwl-main',
					'script'         => 'jquery-yith-wcwl',
					'title'          => _x( 'YITH Add to Wishlist', '[gutenberg]: block name', 'yith-woocommerce-brands-add-on' ),
					'description'    => _x( 'Shows Add to Wishlist button', '[gutenberg]: block description', 'yith-woocommerce-brands-add-on' ),
					'shortcode_name' => 'yith_wcwl_add_to_wishlist',
					'attributes'     => array(
						'product_id'  => array(
							'type'    => 'text',
							'label'   => __( 'ID of the product to add to wishlist (leave empty to use global product)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
						'wishlist_url'  => array(
							'type'    => 'text',
							'label'   => __( 'Url of wishlist page (leave empty to use default)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
						'label'  => array(
							'type'    => 'text',
							'label'   => __( 'Button label (leave empty to use default)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
						'browse_wishlist_text'  => array(
							'type'    => 'text',
							'label'   => __( '"Browse wishlist" label (leave empty to use default)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
						'already_in_wishslist_text'  => array(
							'type'    => 'text',
							'label'   => __( '"Product already in wishlist" label (leave empty to use default)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
						'product_added_text'  => array(
							'type'    => 'text',
							'label'   => __( '"Product added to wishlist" label (leave empty to use default)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
						'icon'  => array(
							'type'    => 'text',
							'label'   => __( 'Icon for the button (use any FontAwesome valid class, or leave empty to use default)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
						'link_classes'  => array(
							'type'    => 'text',
							'label'   => __( 'Additional css classes for the button (leave empty to use default)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
					),
				),
				'yith-wcwl-wishlist' => array(
					'style'          => 'yith-wcwl-main',
					'script'         => 'jquery-yith-wcwl',
					'title'          => _x( 'YITH Wishlist', '[gutenberg]: block name', 'yith-woocommerce-brands-add-on' ),
					'description'    => _x( 'Shows list of products in wishlist', '[gutenberg]: block description', 'yith-woocommerce-brands-add-on' ),
					'shortcode_name' => 'yith_wcwl_wishlist',
					'attributes'     => array(
						'pagination'    => array(
							'type'    => 'select',
							'label'   => __( 'Choose whether to paginate items in the wishlist or show them all', 'yith-woocommerce-brands-add-on' ),
							'default' => 'no',
							'options' => array(
								'yes' => __( 'Paginate', 'yith-woocommerce-wishlist' ),
								'no' => __( 'Do not paginate', 'yith-woocommerce-wishlist' )
							)
						),
						'per_page'    => array(
							'type'    => 'number',
							'label'   => __( 'Number of items to show for each page', 'yith-woocommerce-brands-add-on' ),
							'default' => '5',
						),
						'wishlist_id'  => array(
							'type'    => 'text',
							'label'   => __( 'ID of the wishlist to show (EG: K6EOWXB888ZD)', 'yith-woocommerce-brands-add-on' ),
							'default' => '',
						),
					),
				)
			);

			yith_plugin_fw_gutenberg_add_blocks( $blocks );
		}

		/**
		 * Fix preview of Gutenberg blocks at backend
		 *
		 * @param $shortcode string Shortcode to render
		 * @return void
		 */
		public static function fix_for_gutenberg_blocks( $shortcode ){
			if( strpos( $shortcode, '[yith_wcwl_add_to_wishlist' ) !== false ){
				if( strpos( $shortcode, 'product_id=""' ) !== false ){
					$products = wc_get_products( array(
						'type' => 'simple',
						'limit' => 1
					) );

					if( ! empty( $products ) ){
						global $product;
						$product = array_shift( $products );
					}
				}
			}
		}

		/**
		 * Print the wishlist HTML.
		 *
		 * @since 1.0.0
		 */
		public static function wishlist( $atts, $content = null ) {
			global $yith_wcwl_is_wishlist, $yith_wcwl_wishlist_token;

			$atts = shortcode_atts( array(
				'per_page' => 5,
				'pagination' => 'no',
				'wishlist_id' => false,
				'action_params' => get_query_var( YITH_WCWL()->wishlist_param, false )
			), $atts );

			$available_views = apply_filters( 'yith_wcwl_available_wishlist_views', array( 'view', 'user' ) );

			extract( $atts );

			// retrieve options from query string
			$action_params = explode( '/', apply_filters( 'yith_wcwl_current_wishlist_view_params', $action_params ) );
			$action = ( isset( $action_params[0] ) ) ? $action_params[0] : 'view';

			$user_id = isset( $_GET['user_id'] ) ? $_GET['user_id'] : false;

			// init params needed to load correct tempalte
			$additional_params = array();
			$template_part = 'view';

			/* === WISHLIST TEMPLATE === */
			if(
				empty( $action ) ||
				( ! empty( $action ) && ( $action == 'view' || $action == 'user' ) ) ||
				( ! empty( $action ) && ( $action == 'manage' || $action == 'create' ) && get_option( 'yith_wcwl_multi_wishlist_enable', false ) != 'yes' ) ||
				( ! empty( $action ) && ! in_array( $action, $available_views ) ) ||
				! empty( $user_id )
			){
				/*
				 * someone is requesting a wishlist
				 * -if user is not logged in..
				 *  -and no wishlist_id is passed, cookie wishlist is loaded
				 *  -and a wishlist_id is passed, checks if wishlist is public or shared, and shows it only in this case
				 * -if user is logged in..
				 *  -and no wishlist_id is passed, default wishlist is loaded
				 *  -and a wishlist_id is passed, checks owner of the wishlist
				 *   -if wishlist is of the logged user, shows it
				 *   -if wishlist is of another user, checks if wishlist is public or shared, and shows it only in this case (if user is admin, can see all wishlists)
				*/

				if( empty( $wishlist_id ) ) {
					if ( ! empty( $action ) && $action == 'user' ) {
						$user_id = isset( $action_params[1] ) ? $action_params[1] : false;
						$user_id = ( ! $user_id ) ? get_query_var( $user_id, false ) : $user_id;
						$user_id = ( ! $user_id ) ? get_current_user_id() : $user_id;

						$wishlists = YITH_WCWL()->get_wishlists( array( 'user_id' => $user_id, 'is_default' => 1 ) );

						if ( ! empty( $wishlists ) && isset( $wishlists[0] ) ) {
							$wishlist_id = $wishlists[0]['wishlist_token'];
						} else {
							$wishlist_id = false;
						}
					} else {
						$wishlist_id = isset( $action_params[1] ) ? $action_params[1] : false;
						$wishlist_id = ( ! $wishlist_id ) ? get_query_var( 'wishlist_id', false ) : $wishlist_id;
					}
				}

				$is_user_owner = false;
				$query_args = array();

				if( ! empty( $user_id ) ){
					$query_args[ 'user_id' ] = $user_id;
					$query_args[ 'is_default' ] = 1;

					if( get_current_user_id() == $user_id ){
						$is_user_owner = true;
					}
				}
				elseif( ! is_user_logged_in() ){
					if( empty( $wishlist_id ) ){
						$query_args[ 'wishlist_id' ] = false;
						$is_user_owner = true;
					}
					else{
						$is_user_owner = false;

						$query_args[ 'wishlist_token' ] = $wishlist_id;
						$query_args[ 'wishlist_visibility' ] = 'visible';
					}
				}
				else{
					if( empty( $wishlist_id ) ){
						$query_args[ 'user_id' ] = get_current_user_id();
						$query_args[ 'is_default' ] = 1;
						$is_user_owner = true;
					}
					else{
						$wishlist = YITH_WCWL()->get_wishlist_detail_by_token( $wishlist_id );
						$is_user_owner = $wishlist['user_id'] == get_current_user_id();

						$query_args[ 'wishlist_token' ] = $wishlist_id;

						if( ! empty( $wishlist ) && $wishlist['user_id'] != get_current_user_id() ){
							$query_args[ 'user_id' ] = false;
							if( ! current_user_can( apply_filters( 'yith_wcwl_view_wishlist_capability', 'manage_options' ) ) ){
								$query_args[ 'wishlist_visibility' ] = 'visible';
							}
						}
					}
				}

				// counts number of elements in wishlist for the user
				$count = YITH_WCWL()->count_products( $wishlist_id );

				// sets current page, number of pages and element offset
				$current_page = max( 1, get_query_var( 'paged' ) );

				// sets variables for pagination, if shortcode atts is set to yes
				if( $pagination == 'yes' && $count > 1 ){
					$pages = ceil( $count / $per_page );

					if( $current_page > $pages ){
						$current_page = $pages;
					}

					$offset = ( $current_page - 1 ) * $per_page;

					if( $pages > 1 ){
						$page_links = paginate_links( array(
							'base' => esc_url( add_query_arg( array( 'paged' => '%#%' ), YITH_WCWL()->get_wishlist_url( 'view' . '/' . $wishlist_id ) ) ),
							'format' => '?paged=%#%',
							'current' => $current_page,
							'total' => $pages,
							'show_all' => true
						) );
					}

					$query_args[ 'limit' ] = $per_page;
					$query_args[ 'offset' ] = $offset;
				}

				if( empty( $wishlist_id ) && is_user_logged_in() ){
					$wishlists = YITH_WCWL()->get_wishlists( array( 'user_id' => get_current_user_id(), 'is_default' => 1 ) );
					if( ! empty( $wishlists ) ){
						$wishlist_id = $wishlists[0]['wishlist_token'];
					}
				}

				$yith_wcwl_wishlist_token = $wishlist_id;

				// retrieve items to print
				$wishlist_items = YITH_WCWL()->get_products( $query_args );

				// retrieve wishlist information
				$wishlist_meta = YITH_WCWL()->get_wishlist_detail_by_token( $wishlist_id );
				$is_default = $wishlist_meta['is_default'] == 1;
				$wishlist_token = ! empty( $wishlist_meta['wishlist_token'] ) ? $wishlist_meta['wishlist_token'] : false;

				// retireve wishlist title
				$default_wishlist_title = get_option( 'yith_wcwl_wishlist_title' );

				$wishlist_title = $is_default ? $default_wishlist_title : $wishlist_meta['wishlist_name'];

				// retrieve estimate options
				$show_ask_estimate_button = get_option( 'yith_wcwl_show_estimate_button' ) == 'yes';
				$ask_estimate_url = false;
				if( $show_ask_estimate_button ){
					$ask_estimate_url = esc_url( wp_nonce_url(
						add_query_arg(
							'ask_an_estimate',
							! empty( $wishlist_token ) ? $wishlist_token : 'false',
							YITH_WCWL()->get_wishlist_url( 'view' . ( ! $is_default ? '/' . $wishlist_token : '' ) )
						),
						'ask_an_estimate',
						'estimate_nonce'
					) );
				}

				// retrieve share options
				$share_facebook_enabled = get_option( 'yith_wcwl_share_fb' ) == 'yes';
				$share_twitter_enabled = get_option( 'yith_wcwl_share_twitter' ) == 'yes';
				$share_pinterest_enabled = get_option( 'yith_wcwl_share_pinterest' ) == 'yes';
				$share_googleplus_enabled = get_option( 'yith_wcwl_share_googleplus' ) == 'yes';
				$share_email_enabled = get_option( 'yith_wcwl_share_email' ) == 'yes';
				$share_whatsapp_enabled = get_option( 'yith_wcwl_share_whatsapp' ) == 'yes';
				$share_url_enabled = get_option( 'yith_wcwl_share_url' ) == 'yes';
				$show_date_added = get_option( 'yith_wcwl_show_dateadded' ) == 'yes';
				$show_add_to_cart = get_option( 'yith_wcwl_add_to_cart_show' ) == 'yes';
				$repeat_remove_button = get_option( 'yith_wcwl_repeat_remove_button' ) == 'yes';

				$share_enabled = $share_facebook_enabled || $share_twitter_enabled || $share_pinterest_enabled || $share_googleplus_enabled || $share_email_enabled || $share_whatsapp_enabled || $share_url_enabled;

				$additional_params = array(
					// wishlist items
					'count' => $count,
					'wishlist_items' => $wishlist_items,

					// wishlist data
					'wishlist_meta' => $wishlist_meta,
					'is_default' => $is_default,
					'is_custom_list' => ! $is_default && $is_user_owner,
					'wishlist_token' => $wishlist_token,
					'wishlist_id' => $wishlist_meta['ID'],
					'is_private' => $wishlist_meta['wishlist_privacy'] == 2,

					//page data
					'page_title' => $wishlist_title,
					'default_wishlsit_title' => $default_wishlist_title,
					'current_page' => $current_page,
					'page_links' => isset( $page_links ) ? $page_links : false,

					// user data
					'is_user_logged_in' => is_user_logged_in(),
					'is_user_owner' => $is_user_owner,

					// view data
					'show_price' => get_option( 'yith_wcwl_price_show' ) == 'yes',
					'show_dateadded' => $show_date_added,
					'show_ask_estimate_button' => $show_ask_estimate_button,
					'ask_estimate_url' => $ask_estimate_url,
					'show_stock_status' => get_option( 'yith_wcwl_stock_show' ) == 'yes',
					'show_add_to_cart' => $show_add_to_cart,
					'add_to_cart_text' => get_option( 'yith_wcwl_add_to_cart_text' ),
					'price_excl_tax' => get_option( 'woocommerce_tax_display_cart' ) == 'excl',
					'show_cb' => false,
					'repeat_remove_button' => $repeat_remove_button,
					'show_last_column' => ( $show_date_added && is_user_logged_in() ) || $show_add_to_cart || $repeat_remove_button,

					// share data
					'share_enabled' => $share_enabled,

					// template data
					'template_part' => $template_part,
					'additional_info' => false,
					'available_multi_wishlist' => false,
					'users_wishlists' => array(),
					'form_action' => esc_url( YITH_WCWL()->get_wishlist_url( 'view' . ( ! $is_default ? '/' . $wishlist_token : '' ) ) )
				);

				if( $share_enabled ){
					$share_title = apply_filters( 'yith_wcwl_socials_share_title', __( 'Share on:', 'yith-woocommerce-wishlist' ) );
					$share_link_url = ( ! empty( $wishlist_id ) ) ? YITH_WCWL()->get_wishlist_url( 'view' . '/' . $wishlist_id ) : YITH_WCWL()->get_wishlist_url( 'user' . '/' . get_current_user_id() );
					$share_links_title = apply_filters( 'plugin_text', urlencode( get_option( 'yith_wcwl_socials_title' ) ) );
					$share_twitter_summary = urlencode( str_replace( '%wishlist_url%', '', get_option( 'yith_wcwl_socials_text' ) ) );
					$share_summary = urlencode( str_replace( '%wishlist_url%', $share_link_url, get_option( 'yith_wcwl_socials_text' ) ) );
					$share_image_url = urlencode( get_option( 'yith_wcwl_socials_image_url' ) );

					$share_atts = array(
						'share_facebook_enabled' => $share_facebook_enabled,
						'share_twitter_enabled' => $share_twitter_enabled,
						'share_pinterest_enabled' => $share_pinterest_enabled,
						'share_googleplus_enabled' => $share_googleplus_enabled,
						'share_email_enabled' => $share_email_enabled,
						'share_whatsapp_enabled' => $share_whatsapp_enabled,
						'share_url_enabled' => $share_url_enabled,
						'share_title' => $share_title,
						'share_link_url' => $share_link_url,
						'share_link_title' => $share_links_title,
						'share_twitter_summary' => $share_twitter_summary,
						'share_summary' => $share_summary,
						'share_image_url' => $share_image_url
					);

					$additional_params['share_atts'] = $share_atts;
				}
			}

			$additional_params = apply_filters( 'yith_wcwl_wishlist_params', $additional_params, $action, $action_params, $pagination, $per_page );
			$additional_params['template_part'] = isset( $additional_params['template_part'] ) ? $additional_params['template_part'] : $template_part;

			$atts = array_merge(
				$atts,
				$additional_params
			);

			// adds attributes list to params to extract in template, so it can be passed through a new get_template()
			$atts['atts'] = $atts;

			// apply filters for add to cart buttons
			add_filter( 'woocommerce_loop_add_to_cart_link', array( 'YITH_WCWL_UI', 'alter_add_to_cart_button' ), 10, 2 );

			// sets that we're in the wishlist template
			$yith_wcwl_is_wishlist = true;

			$template = yith_wcwl_get_template( 'wishlist.php', $atts, true );

			// we're not in wishlist template anymore
			$yith_wcwl_is_wishlist = false;
			$yith_wcwl_wishlist_token = null;

			// remove filters for add to cart buttons
			remove_filter( 'woocommerce_loop_add_to_cart_link', array( 'YITH_WCWL_UI', 'alter_add_to_cart_button' ) );

			return apply_filters( 'yith_wcwl_wishlisth_html', $template, array(), true );
		}

		/**
		 * Return "Add to Wishlist" button.
		 *
		 * @since 1.0.0
		 */
		public static function add_to_wishlist( $atts, $content = null ) {
			global $product;

			// product object
			$current_product = ( isset( $atts['product_id'] ) ) ? wc_get_product( $atts['product_id'] ) : false;
			$current_product = $current_product ? $current_product : $product;

			if( ! $current_product ){
				return '';
			}

			$current_product_id = yit_get_product_id( $current_product );

			$template_part = 'button';

			// labels & icons settings
			$label_option = get_option( 'yith_wcwl_add_to_wishlist_text' );
			$icon_option = get_option( 'yith_wcwl_add_to_wishlist_icon' ) != 'none' ? get_option( 'yith_wcwl_add_to_wishlist_icon' ) : '';

			$label = apply_filters( 'yith_wcwl_button_label', $label_option );
			$icon = apply_filters( 'yith_wcwl_button_icon', $icon_option );

			$browse_wishlist = get_option( 'yith_wcwl_browse_wishlist_text' );

			$already_in_wishlist = get_option( 'yith_wcwl_already_in_wishlist_text' );

			$product_added = get_option( 'yith_wcwl_product_added_text' );

			// button class
			$classes = apply_filters( 'yith_wcwl_add_to_wishlist_button_classes', get_option( 'yith_wcwl_use_button' ) == 'yes' ? 'add_to_wishlist single_add_to_wishlist button alt' : 'add_to_wishlist' );

			// default wishlist id
			$default_wishlists = is_user_logged_in() ? YITH_WCWL()->get_wishlists( array( 'is_default' => true ) ) : false;

			if( ! empty( $default_wishlists ) ){
				$default_wishlist = $default_wishlists[0]['ID'];
			}
			else{
				$default_wishlist = false;
			}

			// exists in default wishlist
			$exists = YITH_WCWL()->is_product_in_wishlist( $current_product_id, $default_wishlist );

			// get wishlist url
			$wishlist_url = YITH_WCWL()->get_wishlist_url();

			// get product type
			$product_type = $current_product->get_type();

			$additional_params = array(
				'wishlist_url' => $wishlist_url,
				'exists' => $exists,
				'product_id' => $current_product_id,
				'product_type' => $product_type,
				'label' => $label,
				'browse_wishlist_text' => $browse_wishlist,
				'already_in_wishslist_text' => $already_in_wishlist,
				'product_added_text' => $product_added,
				'icon' => $icon,
				'link_classes' => $classes,
				'available_multi_wishlist' => false,
				'disable_wishlist' => false
			);

			$additional_params = apply_filters( 'yith_wcwl_add_to_wishlist_params', $additional_params );
			$additional_params['template_part'] = isset( $additional_params['template_part'] ) ? $additional_params['template_part'] : $template_part;

			$atts = is_array( $atts ) ? array_filter( $atts ) : (array) $atts;

			$atts = shortcode_atts(
				$additional_params,
				$atts
			);

			$atts['icon'] = ! empty( $atts['icon'] ) ? '<i class="fa ' . $atts['icon'] . '"></i>' : '';

			// adds attributes list to params to extract in template, so it can be passed through a new get_template()
			$atts['atts'] = $atts;

			$template = yith_wcwl_get_template( 'add-to-wishlist.php', $atts, true );

			return apply_filters( 'yith_wcwl_add_to_wishlisth_button_html', $template, $wishlist_url, $product_type, $exists );
		}

    }
}

YITH_WCWL_Shortcode::init();