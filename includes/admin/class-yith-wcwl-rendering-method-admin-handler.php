<?php
/**
 * Class that manage the admin handling rendering methods
 *
 * @since   4.0.0
 * @package YITH\Wishlist\Admin\
 * @author  YITH <plugins@yithemes.com>
 */

defined( 'YITH_WCWL' ) || exit;

if ( ! class_exists( 'YITH_WCWL_Rendering_Method_Admin_Handler' ) ) {
	/**
	 * Class that manage the admin handling rendering methods
	 */
	class YITH_WCWL_Rendering_Method_Admin_Handler {
		use YITH_WCWL_Singleton_Trait;
		use YITH_WCWL_Rendering_Method_Access_Trait;

		/**
		 * Class constructor
		 */
		protected function __construct() {
			$this->maybe_update_rendering_method();
			add_action( 'admin_notices', array( $this, 'add_notices' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		}

		protected function maybe_update_rendering_method() {
			if ( ! empty( $_REQUEST[ self::$exit_from_preview_mode_param ] ) ) {
				self::update_preview_options( false );
			}
			if ( ! empty( $_REQUEST[ self::$convert_to_react_rendering_param ] ) ) {
				self::update_preview_options( false );
				self::$updated_rendering_method = self::update_rendering_method( 'react-components' );
			}
		}

		/**
		 * Add notices used to update the rendering method
		 */
		public function add_notices() {
			$rendering_method = self::get_rendering_method_option();
			$args             = array();

			if ( 'php-templates' === $rendering_method && YITH_WCWL_Admin_Panel::get_instance()->is_panel() ) {
				$args[ 'message' ] = sprintf(
					// translators: %1$s is the opening tag to hyperlink the text; %2$s id the closing tag to hyperlink the text;
					__( 'YITH Wishlist 4.0 includes the new React Components. %1$s Read how to convert to them to improve the plugin performance %2$s', 'yith-woocommerce-wishlist' ),
					'<a id="yith-wcwl-open-rendering-methods-modal" href="#">',
					'</a>'
				);
			}

			if ( 'react-components' === $rendering_method && self::$updated_rendering_method ) {
				$args[ 'message' ]     = sprintf(
					__( 'Successfully switched to the new React Components management!', 'yith-woocommerce-wishlist' ),
					'<a id="yith-wcwl-open-rendering-methods-modal" href="#">',
					'</a>'
				);
				$args[ 'notice_type' ] = 'success';
			}

			if ( ! empty( $args[ 'message' ] ) ) {
				$args = wp_parse_args(
					$args,
					array(
						'type'        => 'notice',
						'notice_type' => 'warning',
					)
				);

				echo yith_plugin_fw_get_component( $args );
			}
		}

		/**
		 * Enqueue scripts
		 */
		public function enqueue_scripts() {
			if ( 'react-components' === self::get_rendering_method_option() ) {
				return;
			}

			$prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? 'unminified/' : '';
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

			wp_register_script( 'yith-wcwl-rendering-methods', YITH_WCWL_ASSETS_JS_URL . $prefix . 'admin/rendering-methods' . $suffix . '.js', array( 'jquery' ), YITH_WCWL_VERSION );
			wp_register_style( 'yith-wcwl-rendering-methods', YITH_WCWL_ASSETS_CSS_URL . 'admin/rendering-methods.css', array(), YITH_WCWL_VERSION );

			$current_url = ( is_ssl() ? 'https://' : 'http://' ) . $_SERVER[ 'HTTP_HOST' ] . $_SERVER[ 'REQUEST_URI' ];

			wp_localize_script(
				'yith-wcwl-rendering-methods',
				'yithWcwlRenderingMethods',
				array(
					'i18n'      => array(
						'reactOnlyOptionModalTitle' => __( 'This option is available only in the new React templates. Convert now to unlock all the new features!', 'yith-woocommerce-wishlist' ),
					),
					'modals'    => array(
						'updateRenderingMethod' => array(
							'title'   => __( 'YITH Wishlist 4.0 includes new React Components. Convert now to improve the plugin performance!', 'yith-woocommerce-wishlist' ),
							'content' => __( "In this update, we converted our frontend templates using React to improve code readability and plugin performance.<br><br><b>Our PHP templates will be deprecated soon</b> (in the next major update) so we suggest you convert them now to enjoy the new system and check if everything works properly.<br><br>Any doubts? Don't worry! You can click on the button below to see a preview of the new system on your site before you apply the changes!", 'yith-woocommerce-wishlist' ),
							'footer'  => yith_wcwl_get_view(
								'rendering-methods/modal/footer.php',
								array(
									'preview_url'          => add_query_arg(
										array(
											self::$react_preview_key => true,
										),
										wc_get_page_permalink( 'shop' )
									),
									'convert_to_react_url' => add_query_arg( array( self::$convert_to_react_rendering_param => true ), $current_url ),
								),
								true ),
						),
					),
					'templates' => array(
						'reactOnlyOptionNotice' => yith_wcwl_get_view( 'rendering-methods/react-only-option-notice.php', array(), true ),
					),
				)
			);

			if ( YITH_WCWL_Admin_Panel::get_instance()->is_panel() ) {
				wp_enqueue_script( 'yith-wcwl-rendering-methods' );
				wp_enqueue_style( 'yith-wcwl-rendering-methods' );
			}
		}
	}
}
