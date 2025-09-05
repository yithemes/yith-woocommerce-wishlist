<?php
/**
 * Init premium features of the plugin
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @version 3.0.0
 */

defined( 'YITH_WCWL_PREMIUM' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Premium' ) ) {
	/**
	 * WooCommerce Wishlist Premium
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL_Premium_Legacy extends YITH_WCWL_Extended {
		public function __construct() {
			parent::__construct();

			add_filter( 'yith_wcwl_adding_wishlist_args', array( $this, 'apply_deprecated_filters_when_adding_wishlist' ) );
		}

		/**
		 * Adding support for deprecated filters while creating a new wishlist.
		 *
		 * @param array $args The arguments to filter.
		 * @return array
		 */
		public function apply_deprecated_filters_when_adding_wishlist( $args ) {
			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_wishlist_name
			 *
			 * Filter the name of the wishlist to be created.
			 *
			 * @param string $wishlist_name Wishlist name
			 * @return string
			 *
			 * @deprecated since 4.0.0
			 */
			$args[ 'wishlist_name' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_wishlist_name', $args[ 'wishlist_name' ] );

			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_wishlist_visibility
			 *
			 * Filter the visibility of the wishlist to be created.
			 *
			 * @param int $wishlist_visibility Wishlist visibility
			 * @return int
			 *
			 * @deprecated since 4.0.0
			 */
			$args[ 'wishlist_visibility' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_wishlist_visibility', in_array( (int) $args[ 'wishlist_visibility' ], array( 0, 1, 2 ), true ) ? $args[ 'wishlist_visibility' ] : 0 );

			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_user_id
			 *
			 * Filter the user ID saved in the wishlist.
			 *
			 * @param int $user_id User ID
			 * @return int
			 *
			 * @deprecated since 4.0.0
			 */
			$args[ 'user_id' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_user_id', intval( $args[ 'user_id' ] ) );

			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_session_id
			 *
			 * Filter the session ID saved in the wishlist.
			 *
			 * @param int $user_id User ID
			 * @return int
			 *
			 * @deprecated since 4.0.0
			 */
			$args[ 'session_id' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_session_id', $args[ 'session_id' ] );

			return $args;
		}

		/* === WISHLIST METHODS === */

		/**
		 * Update wishlist with arguments passed as second parameter
		 *
		 * @param int   $wishlist_id Wishlist id.
		 * @param array $args        Array of parameters to use for update query.
		 * @throws YITH_WCWL_Exception When something goes wrong with update.
		 * @return void
		 * @since 2.0.0
		 */
		public function update_wishlist( $wishlist_id, $args = array() ) {
			wc_deprecated_function( 'YITH_WCWL_Premium_Legacy::update_wishlist', '4.0.0', 'YITH_WCWL_Wishlists_Premium::update' );
			yith_wcwl_wishlists()->update( $wishlist_id, $args );
		}

		/**
		 * Delete indicated wishlist
		 *
		 * @param int $wishlist_id Wishlist id.
		 * @throws YITH_WCWL_Exception When something goes wrong with deletion.
		 * @return void
		 * @since 3.0.0
		 */
		public function remove_wishlist( $wishlist_id ) {
			wc_deprecated_function( 'YITH_WCWL_Premium_Legacy::remove_wishlist', '4.0.0', 'YITH_WCWL_Wishlists_Premium::remove' );
			yith_wcwl_wishlists()->remove( $wishlist_id );
		}
	}
}
