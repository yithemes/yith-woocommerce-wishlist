<?php
/**
 * Wishlist Cron Handler
 *
 * @author  Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Cron' ) ) {
	/**
	 * This class handles cron for wishlist plugin
	 *
	 * @since 3.0.0
	 */
	class YITH_WCWL_Cron {
		/**
		 * Array of events to schedule
		 *
		 * @var array
		 */
		protected $_crons = array();

		/**
		 * Single instance of the class
		 *
		 * @var \YITH_WCWL_Cron
		 * @since 3.0.0
		 */
		protected static $instance;

		/**
		 * Constructor
		 *
		 * @return void
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'schedule' ) );
		}

		/**
		 * Schedule events not scheduled yet; register callbacks for each event
		 *
		 * @return void
		 */
		public function schedule() {
			$this->_crons = apply_filters( 'yith_wcwl_crons', array(
				'yith_wcwl_delete_expired_wishlists' => array(
					'schedule' => 'daily',
					'callback' => array( $this, 'delete_expired_wishlists' )
				),
				'yith_wcwl_send_back_in_stock_email' => array(
					'schedule' => 'daily',
					'callback' => array( $this, 'send_back_in_stock_email' )
				),
				'yith_wcwl_register_on_sale_items' => array(
					'schedule' => 'daily',
					'callback' => array( $this, 'register_on_sale_items' )
				),
				'yith_wcwl_send_on_sale_item_email' => array(
					'schedule' => 'daily',
					'callback' => array( $this, 'send_on_sale_item_email' )
				),
			) );

			if( ! empty( $this->_crons ) ){
				foreach( $this->_crons as $hook => $data ){

					add_action( $hook, $data['callback'] );

					if( ! wp_next_scheduled( $hook ) ){
						wp_schedule_event( time() + MINUTE_IN_SECONDS, $data['schedule'], $hook );
					}
				}
			}
		}

		/**
		 * Delete expired session wishlist
		 *
		 * @return void
		 */
		public function delete_expired_wishlists() {
			try{
				WC_Data_Store::load( 'wishlist' )->delete_expired();
			}
			catch( Exception $e ){
				return;
			}
		}

		/**
		 * Send back in stock emails
		 *
		 * @return void
		 */
		public function send_back_in_stock_email() {
			// skip if email ain't active
			$email_options = get_option( 'woocommerce_yith_wcwl_back_in_stock_settings', array() );

			if( ! isset( $email_options['enabled'] ) || 'yes' != $email_options['enabled'] ){
				return;
			}

			// queue handling
			$queue = get_option( 'yith_wcwl_back_in_stock_queue', array() );
			$unsubscribed = get_option( 'yith_wcwl_unsubscribed_users', array() );

			if( empty( $queue ) ){
				return;
			}

			$execution_limit = apply_filters( 'yith_wcwl_back_in_stock_execution_limit', 20 );
			$counter = 1;

			foreach( $queue as $user_id => $items ){
				$user = get_user_by( 'id', $user_id );

				if( ! $user || in_array( $user->user_email, $unsubscribed ) ){
					continue;
				}

				do_action( 'send_back_in_stock_mail', $user, $items );

				unset( $queue[ $user_id ] );

				if( $execution_limit > 0 && ++ $counter > $execution_limit ){
					break;
				}
			}

			update_option( 'yith_wcwl_back_in_stock_queue', $queue );
		}

		/**
		 * Register on sale items
		 *
		 * @return void
		 */
		public function register_on_sale_items() {
			$products_on_sale = wc_get_product_ids_on_sale();

			$items_on_sale = YITH_WCWL_Wishlist_Factory::get_wishlist_items( array(
				'user_id' => false,
				'session_id' => false,
				'wishlist_id' => 'all',
				'on_sale' => 1
			) );

			if( ! empty( $items_on_sale ) ){
				foreach( $items_on_sale as $item ){
					$product_id = $item->get_product_id();

					if( ! in_array( $product_id, $products_on_sale ) ){
						$item->set_on_sale( false );
						$item->save();
					}
				}
			}

			if( ! empty( $products_on_sale ) ){
				foreach( $products_on_sale as $product_id ){
					$items = YITH_WCWL_Wishlist_Factory::get_wishlist_items( array(
						'user_id' => false,
						'session_id' => false,
						'wishlist_id' => 'all',
						'product_id' => $product_id,
						'on_sale' => 0
					) );

					if( ! empty( $items ) ){
						foreach( $items as $item ){
							$item->set_on_sale( true );
							$item->save();
						}
					}
				}
			}
		}

		/**
		 * Send on sale item emails
		 *
		 * @return void
		 */
		public function send_on_sale_item_email() {
			// skip if email ain't active
			$email_options = get_option( 'woocommerce_yith_wcwl_on_sale_item_settings', array() );

			if( ! isset( $email_options['enabled'] ) || 'yes' != $email_options['enabled'] ){
				return;
			}

			// queue handling
			$queue = get_option( 'yith_wcwl_on_sale_item_queue', array() );
			$unsubscribed = get_option( 'yith_wcwl_unsubscribed_users', array() );

			if( empty( $queue ) ){
				return;
			}

			$execution_limit = apply_filters( 'yith_wcwl_on_sale_item_execution_limit', 20 );
			$counter = 1;

			foreach( $queue as $user_id => $items ){
				$user = get_user_by( 'id', $user_id );

				if( ! $user || in_array( $user->user_email, $unsubscribed ) ){
					continue;
				}

				do_action( 'send_on_sale_item_mail', $user, $items );

				unset( $queue[ $user_id ] );

				if( $execution_limit > 0 && ++ $counter > $execution_limit ){
					break;
				}
			}

			update_option( 'yith_wcwl_on_sale_item_queue', $queue );
		}

		/**
		 * Returns single instance of the class
		 *
		 * @return \YITH_WCWL_Cron
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
 * Unique access to instance of YITH_WCWL_Cron class
 *
 * @return \YITH_WCWL_Cron
 * @since 3.0.0
 */
function YITH_WCWL_Cron(){
	return YITH_WCWL_Cron::get_instance();
}