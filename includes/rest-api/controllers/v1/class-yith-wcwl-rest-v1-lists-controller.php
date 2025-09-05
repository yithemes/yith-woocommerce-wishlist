<?php
/**
 * REST API Wishlist Lists controller class.
 *
 * @package YITH\Wishlist\RestApi
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YITH_WCWL_Rest_V1_Lists_Controller' ) ) {
	/**
	 * REST API Wishlist Lists controller class.
	 *
	 * @package YITH\Wishlist\RestApi
	 */
	class YITH_WCWL_Rest_V1_Lists_Controller extends YITH_WCWL_Rest_V1_Controller {

		/**
		 * Endpoint namespace.
		 *
		 * @var string
		 */
		protected $namespace = 'yith/wishlist/v1';

		/**
		 * Route base.
		 *
		 * @var string
		 */
		protected $rest_base = 'lists';

		/**
		 * Register the routes.
		 */
		public function register_routes() {
			register_rest_route(
				$this->namespace,
				'/' . $this->rest_base,
				array(
					array(
						'methods'             => WP_REST_Server::READABLE,
						'callback'            => array( $this, 'get_lists' ),
						'permission_callback' => '__return_true',
						'args'                => $this->get_endpoint_args_for_item_schema(),
					),
					'schema' => array( $this, 'get_public_item_schema' ),
				)
			);
			register_rest_route(
				$this->namespace,
				'/' . $this->rest_base,
				array(
					array(
						'methods'             => WP_REST_Server::CREATABLE,
						'callback'            => array( $this, 'create_list' ),
						'permission_callback' => '__return_true',
						'args'                => array(
							'wishlist_name'       => array(
								'description' => _x( 'The wishlist name.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'string',
								'required'    => true,
							),
							'wishlist_visibility' => array(
								'description' => _x( 'The wishlist visibility value.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
								'required'    => true,
							),
							'user_id'             => array(
								'description' => _x( 'The unique identifier for the user.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
							),
							'session_id'          => array(
								'description' => _x( 'The unique identifier for the session.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'string',
							),
						),
					),
					'schema' => array( $this, 'get_public_item_schema' ),
				)
			);
		}


		/**
		 * Get lists
		 *
		 * @return WP_Error|WP_HTTP_Response|WP_REST_Response
		 */
		public function get_lists() {
			$response = array(
				'lists' => $this->prepare_wishlists_for_rest( YITH_WCWL_Wishlists::get_instance()->get_current_user_wishlists() ),
			);

			return rest_ensure_response( $response );
		}

		public function create_list( $request ) {
			$args = $request->get_params();

			try {
				$wishlist = YITH_WCWL_Wishlists::get_instance()->create( $args );
				$response = array(
					'wishlist_data' => $this->prepare_wishlist_for_rest( $wishlist ),
				);
			} catch ( YITH_WCWL_Exception $e ) {
				$response = array(
					'success' => false,
					'message' => $e->getMessage(),
				);
			}

			return rest_ensure_response( $response );
		}
	}
}
