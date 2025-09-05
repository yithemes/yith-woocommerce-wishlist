<?php
/**
 * YITH Plugin External Services Class.
 *
 * @class   YITH_External_Services
 * @author  YITH <plugins@yithemes.com>
 * @package YITH\PluginFramework\Classes
 * @since 4.6.2
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_External_Services' ) ) {
	/**
	 * Class YITH_External_Services
	 */
	class YITH_External_Services {

		const API_URL = "https://o37n31x524.execute-api.eu-north-1.amazonaws.com/v1/";

		/**
		 * The single instance of the class.
		 *
		 * @var self
		 */
		protected static $instance = null;

		/**
		 * Get class instance.
		 *
		 * @return self
		 */
		public static function get_instance() {
			return ! is_null( static::$instance ) ? static::$instance : static::$instance = new static();
		}

		/**
		 * Constructor
		 */
		protected function __construct() {
		}

		/**
		 * Do an API request
		 *
		 * @param   string  $endpoint  The endpoint of the request.
		 * @param   array   $args      An array of request arguments.
		 *
		 * @return array
		 * @throws Exception Throws Exception.
		 * @since 4.6.2
		 */
		public function request( $endpoint, $args = array() ) {
			$defaults = array(
				'headers' => array(
					'Content-Type' => ' application/json',
				),
				'method'  => 'POST',
				'timeout' => 2900,
			);

			// Merge given args with default.
			$args = array_merge( $defaults, $args );

			$url = self::API_URL . $endpoint;

			// Make the request.
			$response = wp_remote_request( $url, $args );


			if ( is_wp_error( $response ) || ! in_array( absint( $response['response']['code'] ), array( 200, 201, 400, 204 ), true ) ) {
				throw new Exception( esc_html_x( 'Error: Unable to process the External Services API Request.' . $response['response']['message'], 'External Services error message', 'yith-plugin-fw' ) );
			}

			return $this->maybe_json_decode( $response['body'] );

		}

		/**
		 * Decode a Json string if necessary
		 *
		 * @param string $response String to check.
		 *
		 * @return string|array
		 */
		private function maybe_json_decode( $response ) {
			json_decode( $response );
			return json_last_error() === JSON_ERROR_NONE ? json_decode( $response, true ) : $response;
		}


		/**
		 * Return the authentication token
		 *
		 * @param array $args Args to request a new token.
		 *
		 * @return array|string
		 * @throws Exception
		 */
		public function auth( $args ) {
			return $this->request('auth', $args );
		}
	}
}

YITH_External_Services::get_instance();