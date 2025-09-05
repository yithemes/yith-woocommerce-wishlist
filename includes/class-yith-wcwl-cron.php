<?php
/**
 * Wishlist Cron Handler
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @version 3.0.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Cron' ) ) {
	/**
	 * This class handles cron for wishlist plugin
	 *
	 * @since 3.0.0
	 */
	class YITH_WCWL_Cron {
		use YITH_WCWL_Extensible_Singleton_Trait;

		/**
		 * Array of events to schedule
		 *
		 * @var array
		 */
		protected $crons = array();

		/**
		 * Constructor
		 *
		 * @return void
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'schedule' ) );
		}

		/**
		 * Returns registered crons
		 *
		 * @return array Array of registered crons ans callbacks
		 */
		public function get_crons() {
			if ( empty( $this->crons ) ) {
				$this->crons = array(
					'yith_wcwl_delete_expired_wishlists' => array(
						'schedule' => 'daily',
						'callback' => array( $this, 'delete_expired_wishlists' ),
					),
				);
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_crons
			 *
			 * Filter the cron tasks created in the plugin.
			 *
			 * @param array $crons Plugin crons
			 *
			 * @return array
			 */
			return apply_filters( 'yith_wcwl_crons', $this->crons );
		}

		/**
		 * Schedule events not scheduled yet; register callbacks for each event
		 *
		 * @return void
		 */
		public function schedule() {
			$crons = $this->get_crons();

			if ( ! empty( $crons ) ) {
				foreach ( $crons as $hook => $data ) {

					add_action( $hook, $data['callback'] );

					if ( ! wp_next_scheduled( $hook ) ) {
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
			try {
				WC_Data_Store::load( 'wishlist' )->delete_expired();
			} catch ( Exception $e ) {
				return;
			}
		}
	}
}
