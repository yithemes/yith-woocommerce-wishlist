<?php
/**
 * Shortcodes class
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Shortcode' ) ) {
	/**
	 * YITH WCWL Shortcodes
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL_Shortcode {
		use YITH_WCWL_Rendering_Method_Access_Trait;

		/**
		 * Init shortcodes available for the plugin
		 *
		 * @return void
		 */
		public static function init() {
			// register shortcodes.
			add_shortcode( 'yith_wcwl_wishlist', array( 'YITH_WCWL_Shortcode', 'wishlist' ) );
			add_shortcode( 'yith_wcwl_add_to_wishlist', array( 'YITH_WCWL_Shortcode', 'add_to_wishlist' ) );

			// register gutenberg blocks.
			add_action( 'init', array( 'YITH_WCWL_Shortcode', 'register_gutenberg_blocks' ) );
			add_action( 'yith_plugin_fw_gutenberg_before_do_shortcode', array( 'YITH_WCWL_Shortcode', 'fix_for_gutenberg_blocks' ), 10, 1 );

			// register elementor widgets.
			add_action( 'init', array( 'YITH_WCWL_Shortcode', 'init_elementor_widgets' ) );
		}

		/* === GUTENBERG BLOCKS === */

		/**
		 * Register available gutenberg blocks
		 *
		 * @return void
		 */
		public static function register_gutenberg_blocks() {
			self::register_gutenberg_scripts();
			YITH_WCWL_Add_To_Wishlist_Button::get_class()::maybe_register_scripts();
			$blocks = array(
				'yith-wcwl-add-to-wishlist' => array(
					'style'          => self::is_php_templates_mode() ? 'yith-wcwl-main' : 'yith-wcwl-add-to-wishlist',
					'script'         => self::is_php_templates_mode() ? 'jquery-yith-wcwl' : array( 'yith-wcwl-add-to-wishlist', 'yith-wcwl-add-to-wishlist-gutenberg' ),
					'title'          => _x( 'YITH Add to wishlist', '[gutenberg]: block name', 'yith-woocommerce-wishlist' ),
					'description'    => _x( 'Shows Add to wishlist button', '[gutenberg]: block description', 'yith-woocommerce-wishlist' ),
					'shortcode_name' => 'yith_wcwl_add_to_wishlist',
					'attributes'     => array(
						'product_id'                => array(
							'type'    => 'text',
							'label'   => __( 'ID of the product to add to the wishlist (leave empty to use the global product)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
						'wishlist_url'              => array(
							'type'    => 'text',
							'label'   => __( 'URL of the wishlist page (leave empty to use the default settings)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
						'label'                     => array(
							'type'    => 'text',
							'label'   => __( 'Button label (leave empty to use the default settings)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
						'browse_wishlist_text'      => array(
							'type'    => 'text',
							'label'   => __( '"Browse wishlist" label (leave empty to use the default settings)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
						'already_in_wishslist_text' => array(
							'type'    => 'text',
							'label'   => __( '"Product already in wishlist" label (leave empty to use the default settings)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
						'product_added_text'        => array(
							'type'    => 'text',
							'label'   => __( '"Product added to wishlist" label (leave empty to use the default settings)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
						'icon'                      => array(
							'type'    => 'text',
							'label'   => __( 'Icon for the button (use any FontAwesome valid class, or leave empty to use the default settings)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
						'link_classes'              => array(
							'type'    => 'text',
							'label'   => __( 'Additional CSS classes for the button (leave empty to use the default settings)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
					),
				),
				'yith-wcwl-wishlist'        => array(
					'style'          => 'yith-wcwl-main',
					'script'         => 'jquery-yith-wcwl',
					'title'          => _x( 'YITH Wishlist', '[gutenberg]: block name', 'yith-woocommerce-wishlist' ),
					'description'    => _x( 'Shows a list of products in wishlist', '[gutenberg]: block description', 'yith-woocommerce-wishlist' ),
					'shortcode_name' => 'yith_wcwl_wishlist',
					'attributes'     => array(
						'pagination'  => array(
							'type'    => 'select',
							'label'   => __( 'Choose whether to paginate items in the wishlist or show them all', 'yith-woocommerce-wishlist' ),
							'default' => 'no',
							'options' => array(
								'yes' => __( 'Paginate', 'yith-woocommerce-wishlist' ),
								'no'  => __( 'Do not paginate', 'yith-woocommerce-wishlist' ),
							),
						),
						'per_page'    => array(
							'type'    => 'number',
							'label'   => __( 'Number of items to show per page', 'yith-woocommerce-wishlist' ),
							'default' => '5',
						),
						'wishlist_id' => array(
							'type'    => 'text',
							'label'   => __( 'ID of the wishlist to show (e.g. K6EOWXB888ZD)', 'yith-woocommerce-wishlist' ),
							'default' => '',
						),
					),
				),
			);

			yith_plugin_fw_gutenberg_add_blocks( $blocks );
		}

		/**
		 * Register gutenberg scripts
		 */
		public static function register_gutenberg_scripts() {
			$prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? 'unminified/' : '';
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

			wp_register_script( 'yith-wcwl-add-to-wishlist-gutenberg', YITH_WCWL_ASSETS_JS_URL . $prefix . 'add-to-wishlist-gutenberg' . $suffix . '.js', 'jquery', YITH_WCWL_VERSION, true );
		}

		/**
		 * Fix preview of Gutenberg blocks at backend
		 *
		 * @param string $shortcode Shortcode to render.
		 * @return void
		 */
		public static function fix_for_gutenberg_blocks( $shortcode ) {
			if ( strpos( $shortcode, '[yith_wcwl_add_to_wishlist' ) !== false ) {
				if ( strpos( $shortcode, 'product_id=""' ) !== false ) {
					$products = wc_get_products(
						array(
							'type'  => 'simple',
							'limit' => 1,
						)
					);

					if ( ! empty( $products ) ) {
						global $product;
						$product = array_shift( $products );
					}
				}
			}
		}

		/* === ELEMENTOR WIDGETS === */

		/**
		 * Register custom widgets for Elementor
		 *
		 * @return void
		 */
		public static function init_elementor_widgets() {
			// check if elementor is active.
			if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
				return;
			}

			// include widgets.
			include_once YITH_WCWL_INC . 'widgets/elementor/class-yith-wcwl-elementor-add-to-wishlist.php';
			include_once YITH_WCWL_INC . 'widgets/elementor/class-yith-wcwl-elementor-wishlist.php';

			$register_widget_hook = version_compare( ELEMENTOR_VERSION, '3.5.0', '>=' ) ? 'elementor/widgets/register' : 'elementor/widgets/widgets_registered';

			// register widgets.
			add_action( $register_widget_hook, array( 'YITH_WCWL_Shortcode', 'register_elementor_widgets' ) );
		}

		/**
		 * Register Elementor Widgets
		 *
		 * @return void
		 */
		public static function register_elementor_widgets() {
			$widgets_manager = \Elementor\Plugin::instance()->widgets_manager;

			if ( is_callable( array( $widgets_manager, 'register' ) ) ) {
				$widgets_manager->register( new YITH_WCWL_Elementor_Add_To_Wishlist() );
				$widgets_manager->register( new YITH_WCWL_Elementor_Wishlist() );
			} else {
				$widgets_manager->register_widget_type( new YITH_WCWL_Elementor_Add_To_Wishlist() );
				$widgets_manager->register_widget_type( new YITH_WCWL_Elementor_Wishlist() );
			}
		}

		/* === SHORTCODES == */

		/**
		 * Print the wishlist HTML.
		 *
		 * @param array  $atts    Array of attributes for the shortcode.
		 * @param string $content Shortcode content (none expected).
		 * @return string Rendered shortcode
		 *
		 * @since 1.0.0
		 */
		public static function wishlist( $atts, $content = null ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter
			global $yith_wcwl_is_wishlist, $yith_wcwl_wishlist_token;

			$atts = shortcode_atts(
				array(
					'per_page'        => 5,
					'current_page'    => 1,
					'pagination'      => 'no',
					'wishlist_id'     => get_query_var( 'wishlist_id', false ),
					'action_params'   => get_query_var( YITH_WCWL()->wishlist_param, false ),
					'no_interactions' => 'no',
					'layout'          => '',
				),
				$atts
			);

			/**
			 * Extracted variables:
			 *
			 * @var $per_page        int
			 * @var $current_page    int
			 * @var $pagination      string
			 * @var $wishlist_id     int
			 * @var $action_params   array
			 * @var $no_interactions string
			 * @var $layout          string
			 */
			extract( $atts ); // phpcs:ignore

			// retrieve options from query string.
			/**
			 * APPLY_FILTERS: yith_wcwl_current_wishlist_view_params
			 *
			 * Filter the array of parameters to see the current wishlist.
			 *
			 * @param array $params Array of parameters
			 *
			 * @return array
			 */
			$action_params = explode( '/', apply_filters( 'yith_wcwl_current_wishlist_view_params', $action_params ) );
			$action        = ( isset( $action_params[ 0 ] ) ) ? $action_params[ 0 ] : 'view';

			// retrieve options from db.
			$default_wishlist_title = get_option( 'yith_wcwl_wishlist_title', __( 'My wishlist', 'yith-woocommerce-wishlist' ) );
			$show_price             = 'yes' === get_option( 'yith_wcwl_price_show' );
			$show_stock             = 'yes' === get_option( 'yith_wcwl_stock_show' );
			$show_date_added        = 'yes' === get_option( 'yith_wcwl_show_dateadded' );
			$show_add_to_cart       = 'yes' === get_option( 'yith_wcwl_add_to_cart_show' );
			$show_remove_product    = 'yes' === get_option( 'yith_wcwl_show_remove', 'yes' );
			$show_variation         = 'yes' === get_option( 'yith_wcwl_variation_show' );
			$repeat_remove_button   = 'yes' === get_option( 'yith_wcwl_repeat_remove_button' );
			$add_to_cart_label      = get_option( 'yith_wcwl_add_to_cart_text', __( 'Add to cart', 'yith-woocommerce-wishlist' ) );
			$price_excluding_tax    = 'excl' === get_option( 'woocommerce_tax_display_cart' );
			$ajax_loading           = 'yes' === get_option( 'yith_wcwl_ajax_enable', 'no' );

			// icons.
			$icon = get_option( 'yith_wcwl_add_to_wishlist_icon' );

			if ( 'custom' === $icon ) {
				$custom_icon = get_option( 'yith_wcwl_add_to_wishlist_custom_icon' );

				/**
				 * APPLY_FILTERS: yith_wcwl_custom_icon_alt
				 *
				 * Filter the alternative text for the heading icon in the widget.
				 *
				 * @param string $text Alternative text
				 *
				 * @return string
				 */
				$custom_icon_alt = apply_filters( 'yith_wcwl_custom_icon_alt', '' );

				/**
				 * APPLY_FILTERS: yith_wcwl_custom_width
				 *
				 * Filter the width for the heading icon in the widget.
				 *
				 * @param string $width Icon width
				 *
				 * @return string
				 */
				$custom_icon_width = apply_filters( 'yith_wcwl_custom_width', '32' );

				$heading_icon = '<img src="' . esc_url( $custom_icon ) . '" alt="' . esc_attr( $custom_icon_alt ) . '" width="' . esc_attr( $custom_icon_width ) . '" />';
			} else {
				$heading_icon = ! empty( $icon ) ? '<i class="fa ' . esc_attr( $icon ) . '"></i>' : '';
			}

			// init params needed to load correct template.
			$template_part     = 'view';
			$no_interactions   = 'yes' === $no_interactions;
			$additional_params = array(
				// wishlist data.
				'wishlist'                 => false,
				'is_default'               => true, // @deprecated since 3.0.7
				'is_custom_list'           => false,
				'wishlist_token'           => '',
				'wishlist_id'              => false,
				'is_private'               => false,

				// wishlist items.
				'count'                    => 0,
				'wishlist_items'           => array(),

				// page data.
				'page_title'               => $default_wishlist_title,
				'default_wishlsit_title'   => $default_wishlist_title,
				'current_page'             => $current_page,
				'page_links'               => false,
				'layout'                   => $layout,

				// user data.
				'is_user_logged_in'        => is_user_logged_in(),
				'is_user_owner'            => true,
				'can_user_edit_title'      => false,

				// view data.
				'no_interactions'          => $no_interactions,
				'show_price'               => $show_price,
				'show_dateadded'           => $show_date_added,
				'show_stock_status'        => $show_stock,
				'show_add_to_cart'         => $show_add_to_cart && ! $no_interactions,
				'show_remove_product'      => $show_remove_product && ! $no_interactions,
				'add_to_cart_text'         => $add_to_cart_label,
				'show_ask_estimate_button' => false,
				'ask_estimate_url'         => '',
				'price_excl_tax'           => $price_excluding_tax,
				'show_cb'                  => false,
				'show_quantity'            => false,
				'show_variation'           => $show_variation,
				'show_price_variations'    => false,
				'show_update'              => false,
				'enable_drag_n_drop'       => false,
				'enable_add_all_to_cart'   => false,
				'move_to_another_wishlist' => false,
				'repeat_remove_button'     => $repeat_remove_button && ! $no_interactions,
				'show_last_column'         => $show_date_added || ( $show_add_to_cart && ! $no_interactions ) || ( $repeat_remove_button && ! $no_interactions ),

				// wishlist icon.
				'heading_icon'             => $heading_icon,

				// share data.
				'share_enabled'            => false,

				// template data.
				'template_part'            => $template_part,
				'additional_info'          => false,
				'available_multi_wishlist' => false,
				'users_wishlists'          => array(),
				'form_action'              => esc_url( YITH_WCWL()->get_wishlist_url( 'view' ) ),
			);

			$wishlist = YITH_WCWL_Wishlist_Factory::get_current_wishlist( $atts );

			if ( $wishlist && $wishlist->current_user_can( 'view' ) ) {
				// set global wishlist token.
				$yith_wcwl_wishlist_token = $wishlist->get_token();

				// retrieve wishlist params.
				$is_user_owner = $wishlist->is_current_user_owner();
				$count         = $wishlist->count_items();
				$offset        = 0;

				// sets current page, number of pages and element offset.
				$queried_page = get_query_var( 'paged' );
				$current_page = max( 1, $queried_page ? $queried_page : $current_page );

				// sets variables for pagination, if shortcode atts is set to yes.
				if ( 'yes' === $pagination && ! $no_interactions && $count > 1 ) {
					$pages = ceil( $count / $per_page );

					if ( $current_page > $pages ) {
						$current_page = $pages;
					}

					$offset = ( $current_page - 1 ) * $per_page;

					if ( $pages > 1 ) {
						$page_links = paginate_links(
							array(
								'base'     => esc_url( add_query_arg( array( 'paged' => '%#%' ), $wishlist->get_url() ) ),
								'format'   => '?paged=%#%',
								'current'  => $current_page,
								'total'    => $pages,
								'show_all' => true,
							)
						);
					}
				} else {
					$per_page = 0;
				}

				// retrieve items to print.
				$wishlist_items = $wishlist->get_items( $per_page, $offset );

				// retrieve wishlist information.
				$is_default     = $wishlist->get_is_default();
				$wishlist_token = $wishlist->get_token();
				$wishlist_title = $wishlist->get_formatted_name();

				$additional_params = wp_parse_args(
					array(
						// wishlist items.
						'count'                => $count,
						'wishlist_items'       => $wishlist_items,

						// wishlist data.
						'wishlist'             => $wishlist,
						'is_default'           => $is_default,
						'is_custom_list'       => $is_user_owner && ! $no_interactions, // @deprecated since 3.0.7
						'wishlist_token'       => $wishlist_token,
						'wishlist_id'          => $wishlist->get_id(),
						'is_private'           => $wishlist->has_privacy( 'private' ),
						'ajax_loading'         => $ajax_loading,

						// page data.
						'page_title'           => $wishlist_title,
						'current_page'         => $current_page,
						'page_links'           => isset( $page_links ) && ! $no_interactions ? $page_links : false,

						// user data.
						'is_user_owner'        => $is_user_owner,
						'can_user_edit_title'  => $wishlist->current_user_can( 'update_wishlist' ) && ! $no_interactions,

						// view data.
						'show_remove_product'  => $show_remove_product && $wishlist->current_user_can( 'remove_from_wishlist' ) && ! $no_interactions,
						'repeat_remove_button' => $repeat_remove_button && $wishlist->current_user_can( 'remove_from_wishlist' ) && ! $no_interactions,

						// template data.
						'form_action'          => $wishlist->get_url(),
					),
					$additional_params
				);

				// share options.
				$enable_share            = 'yes' === get_option( 'yith_wcwl_enable_share' ) && ! $wishlist->has_privacy( 'private' );
				$share_facebook_enabled  = 'yes' === get_option( 'yith_wcwl_share_fb' );
				$share_twitter_enabled   = 'yes' === get_option( 'yith_wcwl_share_twitter' );
				$share_pinterest_enabled = 'yes' === get_option( 'yith_wcwl_share_pinterest' );
				$share_email_enabled     = 'yes' === get_option( 'yith_wcwl_share_email' );
				$share_whatsapp_enabled  = 'yes' === get_option( 'yith_wcwl_share_whatsapp' );
				$share_url_enabled       = 'yes' === get_option( 'yith_wcwl_share_url' );

				// we want spaces to be encoded as + instead of %20, so we use urlencode instead of rawurlencode.
				// phpcs:disable WordPress.PHP.DiscouragedPHPFunctions.urlencode_urlencode
				if ( ! $no_interactions && $enable_share && ( $share_facebook_enabled || $share_twitter_enabled || $share_pinterest_enabled || $share_email_enabled || $share_whatsapp_enabled || $share_url_enabled ) ) {
					/**
					 * APPLY_FILTERS: yith_wcwl_socials_share_title
					 *
					 * Filter the title to share the wishlist on the different socials.
					 *
					 * @param string $share_title Share title
					 *
					 * @return string
					 */
					$share_title = apply_filters( 'yith_wcwl_socials_share_title', __( 'Share on:', 'yith-woocommerce-wishlist' ) );

					/**
					 * APPLY_FILTERS: yith_wcwl_shortcode_share_link_url
					 *
					 * Filter the wishlist URL to share.
					 *
					 * @param string             $share_link_url Share link URL
					 * @param YITH_WCWL_Wishlist $wishlist       Wishlist object
					 *
					 * @return string
					 */
					$share_link_url = apply_filters( 'yith_wcwl_shortcode_share_link_url', $wishlist->get_url(), $wishlist );

					/**
					 * APPLY_FILTERS: yith_wcwl_share_title
					 *
					 * Filter the title to share the wishlist.
					 *
					 * @param string             $share_title Share title
					 * @param YITH_WCWL_Wishlist $wishlist    Wishlist object
					 *
					 * @return string
					 */
					$share_link_title = apply_filters( 'yith_wcwl_share_title', urlencode( get_option( 'yith_wcwl_socials_title' ) ), $wishlist );
					$share_summary    = urlencode( str_replace( '%wishlist_url%', $share_link_url, get_option( 'yith_wcwl_socials_text' ) ) );

					$share_atts = array(
						'share_facebook_enabled'  => $share_facebook_enabled,
						'share_twitter_enabled'   => $share_twitter_enabled,
						'share_pinterest_enabled' => $share_pinterest_enabled,
						'share_email_enabled'     => $share_email_enabled,
						'share_whatsapp_enabled'  => $share_whatsapp_enabled,
						'share_url_enabled'       => $share_url_enabled,
						'share_title'             => $share_title,
						'share_link_url'          => $share_link_url,
						'share_link_title'        => $share_link_title,
					);

					$social_buttons = array(
						'fb' => array(
							'name'     => 'facebook',
							'alt_text' => __( 'Share on Facebook', 'yith-woocommerce-wishlist' ),
							'enabled'  => $share_facebook_enabled,
						),
						'tw' => array(
							'name'     => 'twitter',
							'alt_text' => __( 'Tweet on Twitter (X)', 'yith-woocommerce-wishlist' ),
							'icon'     => 'x-twitter',
							'enabled'  => $share_twitter_enabled,
						),
						'pr' => array(
							'name'     => 'pinterest',
							'alt_text' => __( 'Pin on Pinterest', 'yith-woocommerce-wishlist' ),
							'enabled'  => $share_pinterest_enabled,
						),
						'em' => array(
							'name'     => 'email',
							'alt_text' => __( 'Share via email', 'yith-woocommerce-wishlist' ),
							'icon'     => 'envelope',
							'enabled'  => $share_email_enabled,
						),
						'wa' => array(
							'name'     => 'whatsapp',
							'alt_text' => __( 'Share on WhatsApp', 'yith-woocommerce-wishlist' ),
							'enabled'  => $share_whatsapp_enabled,
						),
					);

					foreach ( $social_buttons as $social_id => $social_button ) {
						if ( $social_button[ 'enabled' ] ) {
							$share_button_icon        = get_option( 'yith_wcwl_' . $social_id . '_button_icon', 'default' );
							if ('none' === $share_button_icon) {
								$share_atts[ 'share_' . $social_button[ 'name' ] . '_icon' ] = '';
							}else{
								$share_button_custom_icon = get_option( 'yith_wcwl_' . $social_id . '_button_custom_icon' );
								if ( 'custom' === $share_button_icon && $share_button_custom_icon ) {
									$share_atts[ 'share_' . $social_button[ 'name' ] . '_icon' ] = "<img src='$share_button_custom_icon' alt='{$social_button[ 'alt_text' ]}'/>";
								} else {
									$share_atts[ 'share_' . $social_button[ 'name' ] . '_icon' ] = yith_wcwl_get_icon( $social_button[ 'icon' ] ?? $social_button[ 'name' ] );
								}
							}
						}
					}

					if ( $share_twitter_enabled ) {
						$share_atts[ 'share_twitter_summary' ] = urlencode( str_replace( '%wishlist_url%', '', get_option( 'yith_wcwl_socials_text' ) ) );
					}

					if ( $share_pinterest_enabled ) {
						$share_atts[ 'share_summary' ]   = $share_summary;
						$share_atts[ 'share_image_url' ] = urlencode( get_option( 'yith_wcwl_socials_image_url' ) );
					}

					if ( $share_whatsapp_enabled ) {
						if ( wp_is_mobile() ) {
							$share_atts[ 'share_whatsapp_url' ] = 'whatsapp://send?text=' . $share_link_title . ' - ' . urlencode( $share_link_url );
						} else {
							$share_atts[ 'share_whatsapp_url' ] = 'https://web.whatsapp.com/send?text=' . $share_link_title . ' - ' . urlencode( $share_link_url );
						}
					}

					$additional_params[ 'share_enabled' ] = true;
					$additional_params[ 'share_atts' ]    = $share_atts;
				}
				// phpcs:enable WordPress.PHP.DiscouragedPHPFunctions.urlencode_urlencode
			}

			// filter params.

			/**
			 * APPLY_FILTERS: yith_wcwl_wishlist_params
			 *
			 * Filter the array with the paramters in the wishlist page.
			 *
			 * @param array  $additional_params Wishlist parameters
			 * @param string $action            Action
			 * @param array  $action_params     Action parameters
			 * @param string $pagination        Use pagination or not
			 * @param int    $per_page          Number of items per page
			 * @param array  $atts              Array of attributes
			 *
			 * @return array
			 */
			$additional_params = apply_filters( 'yith_wcwl_wishlist_params', $additional_params, $action, $action_params, $pagination, $per_page, $atts );

			$atts = array_merge(
				$atts,
				$additional_params
			);

			$atts[ 'fragment_options' ] = YITH_WCWL_Frontend()->format_fragment_options( $atts, 'wishlist' );

			// apply filters for add to cart buttons.
			YITH_WCWL_Frontend()->alter_add_to_cart_button();

			// sets that we're in the wishlist template.
			$yith_wcwl_is_wishlist = true;

			$template = yith_wcwl_get_template( 'wishlist.php', $atts, true );

			// we're not in wishlist template anymore.
			$yith_wcwl_is_wishlist    = false;
			$yith_wcwl_wishlist_token = null;

			// remove filters for add to cart buttons.
			YITH_WCWL_Frontend()->restore_add_to_cart_button();

			// enqueue scripts.
			YITH_WCWL_Frontend()->enqueue_scripts();

			return apply_filters( 'yith_wcwl_wishlisth_html', $template, array(), true );
		}

		/**
		 * Return "Add to Wishlist" button.
		 *
		 * @param array $atts Array of parameters for the shortcode.
		 *
		 * @return string Template of the shortcode.
		 *
		 * @since 1.0.0
		 */
		public static function add_to_wishlist( $atts ) {
			$button = YITH_WCWL_Add_To_Wishlist_Button::get( $atts );
			return $button->render( true );
		}
	}
}

YITH_WCWL_Shortcode::init();
