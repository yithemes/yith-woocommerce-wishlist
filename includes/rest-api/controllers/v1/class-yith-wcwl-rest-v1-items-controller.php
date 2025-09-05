<?php
/**
 * REST API Wishlist Items controller class.
 *
 * @package YITH\Wishlist\RestApi
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YITH_WCWL_Rest_V1_Items_Controller' ) ) {
	/**
	 * REST API Wishlist Items controller class.
	 *
	 * @package YITH\Wishlist\RestApi
	 */
	class YITH_WCWL_Rest_V1_Items_Controller extends YITH_WCWL_Rest_V1_Controller {

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
		protected $rest_base = 'items';

		/**
		 * Register the routes.
		 */
		public function register_routes() {
			register_rest_route(
				$this->namespace,
				'/' . $this->rest_base,
				array(
					array(
						'methods'             => WP_REST_Server::CREATABLE,
						'callback'            => array( $this, 'add_item' ),
						'permission_callback' => array( $this, 'create_item_permissions_check' ),
						'args'                => array(
							'product_id'          => array(
								'description' => _x( 'The product ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
								'required'    => true,
							),
							'wishlist_id'         => array(
								'description' => _x( 'The Wishlist ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => array( 'integer', 'string' ),
							),
							'quantity'            => array(
								'description' => _x( 'The quantity to add in wishlist', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
							),
							'user_id'             => array(
								'description' => _x( 'The User ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
							),
							'dateadded'           => array(
								'description' => _x( 'The timestamp to use as added date.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
							),
							'wishlist_name'       => array(
								'description' => _x( 'The wishlist name.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'string',
							),
							'wishlist_visibility' => array(
								'description' => _x( 'The wishlist visibility value.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
							),
						),
					),
					'schema' => array( $this, 'get_public_item_schema' ),
				)
			);

			register_rest_route(
				$this->namespace,
				'/' . $this->rest_base,
				array(
					array(
						'methods'             => WP_REST_Server::DELETABLE,
						'callback'            => array( $this, 'remove_item' ),
						'permission_callback' => array( $this, 'delete_item_permissions_check' ),
						'args'                => array(
							'product_id'  => array(
								'description' => _x( 'The product ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
								'required'    => true,
							),
							'wishlist_id' => array(
								'description' => _x( 'The Wishlist ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => array( 'integer', 'string' ),
							),
							'user_id'             => array(
								'description' => _x( 'The User ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
							),
						),
					),
					'schema' => array( $this, 'get_public_item_schema' ),
				)
			);

			register_rest_route(
				$this->namespace,
				'/' . $this->rest_base . '/move',
				array(
					array(
						'methods'             => WP_REST_Server::CREATABLE,
						'callback'            => array( $this, 'move_item' ),
						'permission_callback' => '__return_true',
						'args'                => array(
							'product_id'  => array(
								'description' => _x( 'The product ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
								'required'    => true,
							),
							'destination_wishlist' => array(
								'description' => _x( 'The destination wishlist ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type' => array( 'integer', 'string' ),
								'required' => true,
							),
							'origin_wishlist' => array(
								'description' => _x( 'The origin wishlist ID', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type' => 'integer',
							),
							'wishlist_name'       => array(
								'description' => _x( 'The wishlist name.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'string',
							),
							'wishlist_visibility' => array(
								'description' => _x( 'The wishlist visibility value.', '[REST-API] The schema field description', 'yith-woocommerce-wishlist' ),
								'type'        => 'integer',
							),
						),
					),
					'schema' => array( $this, 'get_public_item_schema' ),
				)
			);
		}

		/**
		 * Add item to a wishlist
		 *
		 * @param WP_REST_Request $request The rest request.
		 *
		 * @return WP_Error|WP_HTTP_Response|WP_REST_Response
		 */
		public function add_item( $request ) {
			$args     = $request->get_params();
			$response = array( 'success' => true );

			$creating_default = false;
			if ( ! empty( $args[ 'wishlist_id' ] ) && 'default' === $args[ 'wishlist_id' ] ) {
				$creating_default = true;
				unset( $args[ 'wishlist_id' ] );
			}

			try {
				$data       = YITH_WCWL_Wishlists::get_instance()->add_item( $args );
				$product_id = $args[ 'product_id' ];
				$response   = array(
					'product_data' => array_merge(
						$this->prepare_product_for_rest( $product_id ),
						array(
							'added_to' => $data[ 'wishlist_id' ],
						)
					),
				);

				if ( $creating_default ) {
					$response[ 'wishlist_data' ] = $this->prepare_wishlist_for_rest( $data[ 'wishlist_id' ] );
				}
			} catch ( \Exception $e ) {
				$response = array( 'success' => false, 'message' => $e->getMessage() );
			}

			return rest_ensure_response( $response );
		}

		/**
		 * Remove an item from a wishlist
		 *
		 * @param WP_REST_Request $request The rest request.
		 *
		 * @return WP_Error|WP_HTTP_Response|WP_REST_Response
		 */
		public function remove_item( $request ) {
			$args     = $request->get_params();
			$response = array( 'success' => true );

			try {
				$data       = YITH_WCWL_Wishlists::get_instance()->remove_item( $args );
				$product_id = $args[ 'product_id' ];
				$response   = array(
					'product_data' => array_merge(
						array( 'removed_from' => $data[ 'wishlist_id' ] ),
						$this->prepare_product_for_rest( $product_id )
					),
				);
			} catch ( \Exception $e ) {
				$response = array( 'success' => false, 'message' => $e->getMessage() );
			}

			return rest_ensure_response( $response );
		}

		/**
		 * Remove an item from a wishlist
		 *
		 * @param WP_REST_Request $request The rest request.
		 *
		 * @return WP_Error|WP_HTTP_Response|WP_REST_Response
		 */
		public function move_item( $request ) {
			$args = $request->get_params();

			try {
				$result   = YITH_WCWL_Wishlists::get_instance()->move( $args );
				$response = array(
					'moved'        => $result[ 'moved' ],
					'product_data' => $this->prepare_product_for_rest(
						$args[ 'product_id' ],
						array(
							'moved_from' => $args[ 'origin_wishlist' ],
							'moved_to'   => 'new' === $args[ 'destination_wishlist' ] ? $result[ 'destination_wishlist' ]->get_id() : $args[ 'destination_wishlist' ],
						)
					),
				);

				if ( $result[ 'destination_wishlist' ] instanceof YITH_WCWL_Wishlist ) {
					$response[ 'destination_wishlist' ] = $this->prepare_wishlist_for_rest( $result[ 'destination_wishlist' ] );
				}
			} catch ( \Exception $e ) {
				$response = array( 'success' => false, 'message' => $e->getMessage() );
			}

			return rest_ensure_response( $response );
		}

		/**
		 * Create item permission checks
		 *
		 * @param WP_REST_Request $request
		 * @return true|WP_Error
		 */
		public function create_item_permissions_check( $request ) {
			$wishlist = $this->get_wishlist_from_request( $request );

			return ! $wishlist || $wishlist->current_user_can( 'add_to_wishlist' );
		}

		/**
		 * Delete item permission checks
		 *
		 * @param WP_REST_Request $request
		 * @return true|WP_Error
		 */
		public function delete_item_permissions_check( $request ) {
			$wishlist = $this->get_wishlist_from_request( $request );

			return ! $wishlist || $wishlist->current_user_can( 'remove_from_wishlist' );
		}

		/**
		 * Get wishlist object from request
		 *
		 * @param WP_REST_Request $request The request.
		 *
		 * @return YITH_WCWL_Wishlist|false
		 */
		protected function get_wishlist_from_request( $request ) {
			$wishlist_id = $request->get_param( 'wishlist_id' );
			$wishlist    = false;

			if ( $wishlist_id ) {
				try {
					$wishlist = new YITH_WCWL_Wishlist( $wishlist_id );
				} catch ( Exception $exception ) {
				}
			}

			return $wishlist;
		}
	}
}
