<?php
/**
 * Static class that will handle all form submission from customer
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 3.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Form_Handler' ) ) {
	/**
	 * WooCommerce Wishlist Form Handler
	 *
	 * @since 3.0.0
	 */
	class YITH_WCWL_Form_Handler {
		/**
		 * Performs all required add_actions to handle forms
		 *
		 * @return void
		 */
		public static function init() {
			// add to wishlist when js is disabled
			add_action( 'init', array( 'YITH_WCWL_Form_Handler', 'add_to_wishlist' ) );

			// remove from wishlist when js is disabled
			add_action( 'init', array( 'YITH_WCWL_Form_Handler', 'remove_from_wishlist' ) );

			// remove from wishlist after add to cart
			add_action( 'woocommerce_add_to_cart', array( 'YITH_WCWL_Form_Handler', 'remove_from_wishlist_after_add_to_cart' ) );
		}

		/**
		 * Adds a product to wishlist when js is disabled
		 *
		 * @return void
		 */
		public static function add_to_wishlist() {
			// add item to wishlist when javascript is not enabled
			if( isset( $_GET['add_to_wishlist'] ) ) {
				try{
					YITH_WCWL()->add();

					wc_add_notice( apply_filters( 'yith_wcwl_product_added_to_wishlist_message', get_option( 'yith_wcwl_product_added_text' ) ), 'success' );
				}
				catch( Exception $e ){
					wc_add_notice( apply_filters( 'yith_wcwl_error_adding_to_wishlist_message', $e->getMessage() ), 'error' );
				}
			}
		}

		/**
		 * Removes from wishlist when js is disabled
		 *
		 * @return void
		 */
		public static function remove_from_wishlist() {
			// remove item from wishlist when javascript is not enabled
			if( isset( $_GET['remove_from_wishlist'] ) ){
				try {
					YITH_WCWL()->remove();
				}
				catch( Exception $e ){
					wc_add_notice( $e->getMessage(), 'error' );
				}
			}
		}

		/**
		 * Remove from wishlist after adding to cart
		 *
		 * @return void
		 */
		public static function remove_from_wishlist_after_add_to_cart() {
			if( 'yes' != get_option( 'yith_wcwl_remove_after_add_to_cart' ) ) {
				return;
			}

			$args = array();

			if( isset( $_REQUEST['remove_from_wishlist_after_add_to_cart'] ) ) {

				$args['remove_from_wishlist'] = $_REQUEST['remove_from_wishlist_after_add_to_cart'];

				if ( isset( $_REQUEST['wishlist_id'] ) ) {
					$args['wishlist_id'] = $_REQUEST['wishlist_id'];
				}
			}
			elseif( yith_wcwl_is_wishlist() ){
				$args['remove_from_wishlist'] = $_REQUEST['add-to-cart'];

				if ( isset( $_REQUEST['wishlist_id'] ) ) {
					$args['wishlist_id'] = $_REQUEST['wishlist_id'];
				}
			}

			if( ! empty( $args['wishlist_id'] ) ){
				$wishlist = yith_wcwl_get_wishlist( $args['wishlist_id'] );

				if( $wishlist && $wishlist->is_current_user_owner() ) {
					try {
						YITH_WCWL()->remove( $args );
					} catch ( Exception $e ) {
						// we were unable to remove item from the wishlist; no follow up is provided
					}
				}
			}
		}
	}
}
YITH_WCWL_Form_Handler::init();