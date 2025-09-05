<?php
/**
 * Rest controller abstract class
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Rest_V1_Controller' ) ) {
	abstract class YITH_WCWL_Rest_V1_Controller extends WP_REST_Controller {
		/**
		 * Get item permission
		 *
		 * TODO: implement this method
		 *
		 * @param WP_REST_Request $request
		 * @return true|WP_Error
		 */
		public function get_item_permissions_check( $request ) {
			return true;
		}

		/**
		 * Get item permission
		 *
		 * TODO: implement this method
		 *
		 * @param $request
		 * @return true|WP_Error
		 */
		public function get_items_permissions_check( $request ) {
			return true;
		}

		/**
		 * @param YITH_WCWL_Wishlist[] $wishlists The wishlist objects.
		 *
		 * @return array
		 */
		protected function prepare_wishlists_for_rest( $wishlists ) {
			$wishlists_for_rest = array();
			foreach ( $wishlists as $wishlist ) {
				$wishlists_for_rest[ $wishlist->get_id() ] = $this->prepare_wishlist_for_rest( $wishlist );
			}

			return $wishlists_for_rest;
		}

		/**
		 * Prepare wishlist object for Rest response
		 *
		 * @param int|YITH_WCWL_Wishlist $wishlist The wishlist object or its id.
		 *
		 * @return array|false
		 */
		protected function prepare_wishlist_for_rest( $wishlist ) {
			$wishlist = $wishlist instanceof YITH_WCWL_Wishlist ? $wishlist : YITH_WCWL_Wishlist_Factory::get_wishlist( $wishlist );

			if ( ! $wishlist ) {
				return false;
			}

			return array_merge(
				$wishlist->get_data(),
				array(
					'name'       => $wishlist->get_formatted_name(),
					'token'      => $wishlist->get_token(),
					'session_id' => $wishlist->get_session_id(),
				)
			);
		}

		/**
		 * @param YITH_WCWL_Wishlist[] $wishlists The wishlist objects.
		 *
		 * @return array
		 */
		protected function prepare_products_for_rest( $products ) {
			$products_for_rest = array();
			foreach ( $products as $product ) {
				$products_for_rest[ $product instanceof WC_Product ? $product->get_id() : absint( $product ) ] = $this->prepare_product_for_rest( $product );
			}

			return $products_for_rest;
		}

		/**
		 * Prepare wishlist object for Rest response
		 *
		 * @param int|WC_Product $product The product object or its id.
		 *
		 * @return array|false
		 */
		protected function prepare_product_for_rest( $product, $additional_data = array() ) {
			$product = $product instanceof WC_Product ? $product : wc_get_product( $product );

			if ( ! $product ) {
				return false;
			}

			$product_id    = $product->get_id();
			$product_lists = yith_wcwl_wishlists()->get_wishlists_for_product( $product_id );

			return array_merge(
				array(
					'name'      => $product->get_name(),
					'isAdded'   => ! ! $product_lists,
					'count'     => yith_wcwl_wishlists()->count_add_to_wishlist( $product_id ),
					'wishlists' => $product_lists,
				),
				is_array( $additional_data ) ? $additional_data : array()
			);
		}
	}
}
