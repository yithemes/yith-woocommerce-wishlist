<?php
/**
 * Wishlist Session Handler
 *
 * @author  Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Session' ) ) {
	/**
	 * This class implements Session handler for wishlist
	 * Unique session id is assigned to any new customer, and registered in a cookie
	 *
	 * Expiration is set accordingly to plugin options
	 *
	 * @since 3.0.0
	 */
	class YITH_WCWL_Session {
		/**
		 * Single instance of the class
		 *
		 * @var \YITH_WCWL_Session
		 * @since 3.0.0
		 */
		protected static $instance;

		/**
		 * Session ID.
		 *
		 * @var int $_session_id Session ID.
		 */
		protected $_session_id;

		/**
		 * Cookie name used for the session.
		 *
		 * @var string cookie name
		 */
		protected $_cookie;

		/**
		 * Stores session expiry.
		 *
		 * @var string session due to expire timestamp
		 */
		protected $_session_expiring;

		/**
		 * Stores session expiration.
		 *
		 * @var string session expiration timestamp
		 */
		protected $_session_expiration;

		/**
		 * True when the cookie exists.
		 *
		 * @var bool Based on whether a cookie exists.
		 */
		protected $_has_cookie = false;

		/**
		 * Construct session class
		 */
		public function __construct() {
			$this->_cookie = apply_filters( 'yith_wcwl_session_cookie', 'yith_wcwl_session_' . COOKIEHASH );
		}

		/**
		 * Init hooks and session data.
		 *
		 * @since 3.0.0
		 */
		public function init() {
			$this->init_session_cookie();
		}

		/**
		 * Setup cookie and customer ID.
		 *
		 * @since 3.0.0
		 */
		public function init_session_cookie() {
			$cookie = $this->get_session_cookie();

			if ( is_array( $cookie ) && ! empty( $cookie['session_id'] ) && ! empty( $cookie['session_expiration'] ) ) {
				$this->_session_id         = $cookie['session_id'];
				$this->_session_expiration = $cookie['session_expiration'];
				$this->_session_expiring   = $cookie['session_expiring'];

				// If the user logs in, forget session.
				if ( is_user_logged_in() ) {
					/**
					 * Once customer logs in, we can permanently register wishlists for his account
					 */
					$this->finalize_session();
				}
				// Update session if its close to expiring.
				elseif ( time() > $this->_session_expiring ) {
					$this->set_session_expiration();
					$this->update_session_timestamp( $this->_session_id, $this->_session_expiration );
				}
			} else {
				$this->set_session_expiration();
				$this->_session_id = $this->generate_session_id();
			}

			if( ! $this->_has_cookie  ) {
				$this->set_session_cookie();
			}
		}

		/**
		 * Sets the session cookie on-demand
		 *
		 * @return void
		 */
		public function set_session_cookie() {
			if( headers_sent() ){
				return;
			}

			$to_hash = $this->_session_id . '|' . $this->_session_expiration;
			$hash    = hash_hmac( 'md5', $to_hash, wp_hash( $to_hash ) );

			$cookie_value = array(
				'session_id' => $this->_session_id,
				'session_expiration' => $this->_session_expiration,
				'session_expiring' => $this->_session_expiring,
				'cookie_hash' => $hash
			);
			yith_setcookie( $this->_cookie, $cookie_value, $this->_session_expiration );

			// cookie has been set
			$this->_has_cookie = true;
		}

		/**
		 * Get the session cookie, if set. Otherwise return false.
		 *
		 * Session cookies without a customer ID are invalid.
		 *
		 * @return bool|array
		 */
		public function get_session_cookie() {
			$cookie_value = yith_getcookie( $this->_cookie ); // @codingStandardsIgnoreLine.

			if ( empty( $cookie_value ) || ! is_array( $cookie_value ) ) {
				return false;
			}

			if ( empty( $cookie_value['session_id'] ) ) {
				return false;
			}

			// Validate hash.
			$to_hash = $cookie_value['session_id'] . '|' . $cookie_value['session_expiration'];
			$hash    = hash_hmac( 'md5', $to_hash, wp_hash( $to_hash ) );

			if ( empty( $cookie_value['cookie_hash'] ) || ! hash_equals( $hash, $cookie_value['cookie_hash'] ) ) {
				return false;
			}

			return $cookie_value;
		}

		/**
		 * Returns current session expiration; if session doesn't exist, creates it; if user is logged in, return false
		 *
		 * @return string Current customer id
		 */
		public function get_session_expiration() {
			$session_id = $this->get_session_id();

			if( $session_id ){
				return $this->_session_expiration;
			}

			return false;
		}

		/**
		 * Set session expiration.
		 */
		public function set_session_expiration() {
			$this->_session_expiring   = time() + yith_wcwl_get_cookie_expiration() - HOUR_IN_SECONDS;
			$this->_session_expiration = time() + yith_wcwl_get_cookie_expiration();
		}

		/**
		 * Return true if the current user has an active session, i.e. a cookie to retrieve values.
		 *
		 * @return bool
		 */
		public function has_session() {
			return $this->_has_cookie; // @codingStandardsIgnoreLine.
		}

		/**
		 * Returns current session id; if session doesn't exist, creates it; if user is logged in, return false
		 *
		 * @return string Current customer id
		 */
		public function get_session_id() {
			if( $this->has_session() ){
				return $this->_session_id;
			}
			elseif( ! is_user_logged_in() ){
				$this->init_session_cookie();

				return $this->_session_id;
			}

			return false;
		}

		/**
		 * Generate a unique customer ID for guests, or return false if logged in.
		 *
		 * Uses Portable PHP password hashing framework to generate a unique cryptographically strong ID.
		 *
		 * @return string|bool
		 */
		public function generate_session_id() {
			$session_id = '';

			if ( is_user_logged_in() ) {
				return false;
			}

			require_once ABSPATH . 'wp-includes/class-phpass.php';
			$hasher      = new PasswordHash( 8, false );
			$session_id = md5( $hasher->get_random_bytes( 32 ) );

			return $session_id;
		}

		/**
		 * Converts session to stable database items
		 *
		 * @return void
		 */
		public function finalize_session() {
			if( ! is_user_logged_in() ){
				return;
			}

			$user_id = get_current_user_id();

			try{
				WC_Data_Store::load( 'wishlist' )->assign_to_user( $this->_session_id, $user_id );
			}
			catch( Exception $e ){
				wc_caught_exception( $e, __FUNCTION__, func_get_args() );
				return;
			}

			$this->forget_session();
		}

		/**
		 * Update the session expiry timestamp.
		 *
		 * @param string $session_id Session ID.
		 * @param int    $timestamp Timestamp to expire the cookie.
		 */
		public function update_session_timestamp( $session_id, $timestamp ) {
			try{
				WC_Data_Store::load( 'wishlist' )->update_raw(
					array( 'expiration' => 'FROM_UNIXTIME(%d)' ),
					array( $timestamp ),
					array( 'session_id' => '%s' ),
					array( $session_id )
				);
			}
			catch( Exception $e ){
				wc_caught_exception( $e, __FUNCTION__, func_get_args() );
				return;
			}
		}

		/**
		 * Forget all session data without destroying it.
		 */
		public function forget_session() {
			yith_destroycookie( $this->_cookie );

			$this->_session_id = $this->generate_session_id();
		}

		/**
		 * Returns single instance of the class
		 *
		 * @return \YITH_WCWL_Session
		 * @since 3.0.0
		 */
		public static function get_instance(){
			if( is_null( self::$instance ) ){
				self::$instance = new self();
			}

			return self::$instance;
		}
	}
}

/**
 * Unique access to instance of YITH_WCWL_Session class
 *
 * @return \YITH_WCWL_Session
 * @since 3.0.0
 */
function YITH_WCWL_Session(){
	return YITH_WCWL_Session::get_instance();
}