<?php
/**
 * Initialize this version of the REST API.
 *
 * @package YITH\Wishlist\RestApi
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YITH_WCWL_Rest_Server' ) ) {
	/**
	 * Class responsible for loading the REST API and all REST API namespaces.
	 */
	class YITH_WCWL_Rest_Server {
		use YITH_WCWL_Singleton_Trait;

		/**
		 * REST API namespaces and endpoints.
		 *
		 * @var array
		 */
		protected $controllers = array();

		/**
		 * Construct
		 */
		protected function __construct() {
			add_action( 'rest_api_init', array( $this, 'register_rest_routes' ), 10 );
		}

		/**
		 * Instance the controller classes that will register the Rest Routes
		 */
		public function register_rest_routes() {
			foreach ( $this->get_rest_namespaces() as $namespace => $controllers ) {
				foreach ( $controllers as $controller_name => $controller_class ) {
					if ( class_exists( $controller_class ) ) {
						$this->controllers[ $namespace ][ $controller_name ] = new $controller_class();
						$this->controllers[ $namespace ][ $controller_name ]->register_routes();
					}
				}
			}
		}

		/**
		 * Get the namespace that needs to be registered
		 *
		 * @return array[]
		 */
		protected function get_rest_namespaces() {
			return array(
				'yith-wishlist' => $this->get_v1_controllers(),
			);
		}

		/**
		 * List of controllers in the v1 namespace.
		 *
		 * @return array
		 */
		protected function get_v1_controllers() {
			return array(
				'products' => 'YITH_WCWL_Rest_V1_Products_Controller',
				'lists' => 'YITH_WCWL_Rest_V1_Lists_Controller',
				'items' => 'YITH_WCWL_Rest_V1_Items_Controller',
			);
		}
	}
}
