<?php
/**
 * Main class
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @since   4.0.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Legacy' ) ) {
	/**
	 * WooCommerce Wishlist
	 *
	 * @since 1.0.0
	 */
	abstract class YITH_WCWL_Legacy {
		public function __construct() {
		}

		/* === ITEMS METHODS === */

		/**
		 * Add a product in the wishlist.
		 *
		 * @param array $atts Array of parameters; when not passed, params will be searched in $_REQUEST.
		 * @throws YITH_WCWL_Exception When an error occurs with Add to Wishlist operation.
		 *
		 * @return void
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::add_item
		 */
		public function add( $atts = array() ) {
			wc_deprecated_function( 'YITH_WCWL::add', '4.0.0', 'YITH_WCWL_Wishlists::add_item' );

			$atts = $this->get_details( $atts );

			yith_wcwl_wishlists()->add_item( $atts );
		}

		/**
		 * Remove an entry from the wishlist.
		 *
		 * @param array $atts Array of parameters; when not passed, parameters will be retrieved from $_REQUEST.
		 *
		 * @throws YITH_WCWL_Exception When something was wrong with removal.
		 *
		 * @return void
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::remove_item
		 */
		public function remove( $atts = array() ) {
			wc_deprecated_function( 'YITH_WCWL::remove', '4.0.0', 'YITH_WCWL_Wishlists::remove_item' );

			$atts = $this->get_details($atts);

			yith_wcwl_wishlists()->remove_item( $atts );
		}

		/**
		 * Retrieve first list of current user where a specific product occurs; if no wishlist is found, returns false
		 *
		 * @param int $product_id Product id.
		 * @return \YITH_WCWL_Wishlist|bool First wishlist found where the product occurs (system will privilege default lists)
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::get_wishlist_for_product
		 */
		public function get_wishlist_for_product( $product_id ) {
			wc_deprecated_function( 'YITH_WCWL::get_wishlist_for_product', '4.0.0', 'YITH_WCWL_Wishlists::get_wishlist_for_product' );
			return yith_wcwl_wishlists()->get_wishlist_for_product( $product_id );
		}

		/**
		 * Retrieve elements of the wishlist for a specific user
		 *
		 * @param array $args Arguments array; it may contains any of the following:<br/>
		 *                    [<br/>
		 *                    'user_id'             // Owner of the wishlist; default to current user logged in (if any), or false for cookie wishlist<br/>
		 *                    'product_id'          // Product to search in the wishlist<br/>
		 *                    'wishlist_id'         // wishlist_id for a specific wishlist, false for default, or all for any wishlist<br/>
		 *                    'wishlist_token'      // wishlist token, or false as default<br/>
		 *                    'wishlist_visibility' // all, visible, public, shared, private<br/>
		 *                    'is_default' =>       // whether searched wishlist should be default one <br/>
		 *                    'id' => false,        // only for table select<br/>
		 *                    'limit' => false,     // pagination param; number of items per page. 0 to get all items<br/>
		 *                    'offset' => 0         // pagination param; offset for the current set. 0 to start from the first item<br/>
		 *                    ].
		 *
		 * @return YITH_WCWL_Wishlist_Item[]|bool
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::get_items
		 */
		public function get_products( $args = array() ) {
			wc_deprecated_function( 'YITH_WCWL::get_products', '4.0.0', 'YITH_WCWL_Wishlists::get_items' );
			return yith_wcwl_wishlists()->get_items( $args );
		}

		/**
		 * Retrieve details of a product in the wishlist.
		 *
		 * @param int      $product_id  Product id.
		 * @param int|bool $wishlist_id Wishlist id, or false when default should be applied.
		 * @return YITH_WCWL_Wishlist_Item|bool
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::get_product_item
		 */
		public function get_product_details( $product_id, $wishlist_id = false ) {
			wc_deprecated_function( 'YITH_WCWL::get_product_details', '4.0.0', 'YITH_WCWL_Wishlists::get_product_item' );
			return yith_wcwl_wishlists()->get_product_item( $product_id, $wishlist_id );
		}

		/**
		 * Retrieve the number of products in the wishlist.
		 *
		 * @param string|bool $wishlist_token Wishlist token if any; false for default wishlist.
		 *
		 * @return int
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::count_items_in_wishlist
		 */
		public function count_products( $wishlist_token = false ) {
			wc_deprecated_function( 'YITH_WCWL::count_products', '4.0.0', 'YITH_WCWL_Wishlists::count_items_in_wishlist' );
			return yith_wcwl_wishlists()->count_items_in_wishlist( $wishlist_token );
		}

		/**
		 * Count all user items in wishlists
		 *
		 * @return int Count of items added all over wishlist from current user
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::count_all_items
		 */
		public function count_all_products() {
			wc_deprecated_function( 'YITH_WCWL::count_all_products', '4.0.0', 'YITH_WCWL_Wishlists::count_all_items' );

			return yith_wcwl_wishlists()->count_all_items();
		}

		/**
		 * Count number of times a product was added to users wishlists
		 *
		 * @param int|bool $product_id Product id; false will force method to use global product.
		 *
		 * @return int Number of times the product was added to wishlist
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::count_add_to_wishlist
		 */
		public function count_add_to_wishlist( $product_id = false ) {
			wc_deprecated_function( 'YITH_WCWL::count_add_to_wishlist', '4.0.0', 'YITH_WCWL_Wishlists::count_add_to_wishlist' );
			return yith_wcwl_wishlists()->count_add_to_wishlist( $product_id );
		}

		/**
		 * Count product occurrences in users wishlists
		 *
		 * @param int|bool $product_id Product id; false will force method to use global product.
		 *
		 * @return int
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::count_product_occurrences
		 */
		public function count_product_occurrences( $product_id = false ) {
			wc_deprecated_function( 'YITH_WCWL::count_product_occurrences', '4.0.0', 'YITH_WCWL_Wishlists::count_product_occurrences' );
			return yith_wcwl_wishlists()->count_product_occurrences( $product_id );
		}

		/**
		 * Check if the product exists in the wishlist.
		 *
		 * @param int      $product_id  Product id to check.
		 * @param int|bool $wishlist_id Wishlist where to search (use false to search in default wishlist).
		 * @return bool
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::is_product_in_wishlist
		 */
		public function is_product_in_wishlist( $product_id, $wishlist_id = false ) {
			wc_deprecated_function( 'YITH_WCWL::is_product_in_wishlist', '4.0.0', 'YITH_WCWL_Wishlists::is_product_in_wishlist' );
			return yith_wcwl_wishlists()->is_product_in_wishlist( $product_id, $wishlist_id );
		}

		/* === WISHLISTS METHODS === */

		/**
		 * Add a new wishlist for the user.
		 *
		 * @param array $atts Array of params for wishlist creation.
		 * @return int|false The ID of the wishlist created or false if something go wrong
		 *
		 * @depreacted since 4.0.0
		 * @see        YITH_WCWL_Wishlists::remove_item
		 */
		public function add_wishlist( $atts = array() ) {
			wc_deprecated_function( 'YITH_WCWL::add_wishlist', '4.0.0', 'YITH_WCWL_Wishlists::create' );

			$atts = $this->get_details($atts);

			return yith_wcwl_wishlists()->create( $atts );
		}

		/**
		 * Get details stored in the class or from request
		 *
		 * @return array
		 */
		public function get_details( $atts = array() ){
			$atts = empty( $atts ) && ! empty( $this->details ) ? $this->details : $atts;
			$atts = ! empty( $atts ) ? $atts : $_REQUEST;  // phpcs:ignore WordPress.Security.NonceVerification.Recommended

			if ( isset( $atts[ 'add_to_wishlist' ] ) ) {
				$atts[ 'product_id' ] = $atts[ 'add_to_wishlist' ];
				unset( $atts[ 'add_to_wishlist' ] );
			}

			if ( isset( $atts[ 'remove_from_wishlist' ] ) ) {
				$atts[ 'product_id' ] = $atts[ 'remove_from_wishlist' ];
				unset( $atts[ 'remove_from_wishlist' ] );
			}

			return $atts;
		}

		/**
		 * Update wishlist with arguments passed as second parameter
		 *
		 * @param int   $wishlist_id Wishlist id.
		 * @param array $args        Array of parameters to use in update process.
		 *
		 * @return void
		 *
		 * @depreacted since 4.0.0
		 * @see        YITH_WCWL_Wishlists::update
		 */
		public function update_wishlist( $wishlist_id, $args = array() ) {
			wc_deprecated_function( 'YITH_WCWL::update_wishlist', '4.0.0', 'YITH_WCWL_Wishlists::update' );
			yith_wcwl_wishlists()->update( $wishlist_id, $args );
		}

		/**
		 * Delete indicated wishlist
		 *
		 * @param int $wishlist_id Wishlist id.
		 *
		 * @return void
		 *
		 * @depreacted since 4.0.0
		 * @see        YITH_WCWL_Wishlists::remove
		 */
		public function remove_wishlist( $wishlist_id ) {
			wc_deprecated_function( 'YITH_WCWL::remove_wishlist', '4.0.0', 'YITH_WCWL_Wishlists::remove' );
			yith_wcwl_wishlists()->remove( $wishlist_id );
		}

		/**
		 * Retrieve all the wishlist matching specified arguments
		 *
		 * @param array $args Array of valid arguments<br/>
		 *                    [<br/>
		 *                    'id'                  // Wishlist id to search, if any<br/>
		 *                    'user_id'             // User owner<br/>
		 *                    'wishlist_slug'       // Slug of the wishlist to search<br/>
		 *                    'wishlist_name'       // Name of the wishlist to search<br/>
		 *                    'wishlist_token'      // Token of the wishlist to search<br/>
		 *                    'wishlist_visibility' // Wishlist visibility: all, visible, public, shared, private<br/>
		 *                    'user_search'         // String to match against first name / last name or email of the wishlist owner<br/>
		 *                    'is_default'          // Whether wishlist should be default or not<br/>
		 *                    'orderby'             // Column used to sort final result (could be any wishlist lists column)<br/>
		 *                    'order'               // Sorting order<br/>
		 *                    'limit'               // Pagination param: maximum number of elements in the set. 0 to retrieve all elements<br/>
		 *                    'offset'              // Pagination param: offset for the current set. 0 to start from the first item<br/>
		 *                    'show_empty'          // Whether to show empty lists os not<br/>
		 *                    ].
		 *
		 * @return YITH_WCWL_Wishlist[]
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlist_Factory::get_wishlists
		 */
		public function get_wishlists( $args = array() ) {
			wc_deprecated_function( 'YITH_WCWL::get_wishlists', '4.0.0', 'YITH_WCWL_Wishlist_Factory::get_wishlists' );
			return YITH_WCWL_Wishlist_Factory::get_wishlists( $args );
		}

		/**
		 * Wrapper for \YITH_WCWL::get_wishlists, will return wishlists for current user
		 *
		 * @return YITH_WCWL_Wishlist[]
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::get_current_user_wishlists
		 */
		public function get_current_user_wishlists() {
			wc_deprecated_function( 'YITH_WCWL::get_current_user_wishlists', '4.0.0', 'YITH_WCWL_Wishlists::get_current_user_wishlists' );
			return yith_wcwl_wishlists()->get_current_user_wishlists();
		}

		/**
		 * Returns details of a wishlist, searching it by wishlist id
		 *
		 * @param int $wishlist_id Wishlist id.
		 * @return YITH_WCWL_Wishlist
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlist_Factory::get_wishlist
		 */
		public function get_wishlist_detail( $wishlist_id ) {
			wc_deprecated_function( 'YITH_WCWL::get_wishlist_detail', '4.0.0', 'YITH_WCWL_Wishlist_Factory::get_wishlist' );
			return YITH_WCWL_Wishlist_Factory::get_wishlist( $wishlist_id );
		}

		/**
		 * Returns details of a wishlist, searching it by wishlist token
		 *
		 * @param string $wishlist_token Wishlist token.
		 * @return YITH_WCWL_Wishlist
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::get_wishlist_for_product
		 */
		public function get_wishlist_detail_by_token( $wishlist_token ) {
			wc_deprecated_function( 'YITH_WCWL::get_wishlist_detail_by_token', '4.0.0', 'YITH_WCWL_Wishlist_Factory::get_wishlist' );
			return YITH_WCWL_Wishlist_Factory::get_wishlist( $wishlist_token );
		}

		/**
		 * Generate default wishlist for current user or session
		 *
		 * @param int|bool $id User or session id; false if you want to use current user/session.
		 *
		 * @return int Default wishlist id
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::generate_default_wishlist
		 */
		public function generate_default_wishlist( $id = false ) {
			wc_deprecated_function( 'YITH_WCWL::generate_default_wishlist', '4.0.0', 'YITH_WCWL_Wishlists::generate_default_wishlist' );
			return yith_wcwl_wishlists()->generate_default_wishlist( $id );
		}

		/**
		 * Generate a token to visit wishlist
		 *
		 * @return string token
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlist_Factory::generate_wishlist_token
		 */
		public function generate_wishlist_token() {
			wc_deprecated_function( 'YITH_WCWL::generate_wishlist_token', '4.0.0', 'YITH_WCWL_Wishlist_Factory::generate_wishlist_token' );
			return YITH_WCWL_Wishlist_Factory::generate_wishlist_token();
		}

		/**
		 * Returns an array of users that created and populated a public wishlist
		 *
		 * @param array $args Array of valid arguments<br/>
		 *                    [<br/>
		 *                    'search' // String to match against first name / last name / user login or user email of wishlist owner<br/>
		 *                    'limit'  // Pagination param: number of items to show in one page. 0 to show all items<br/>
		 *                    'offset' // Pagination param: offset for the current set. 0 to start from the first item<br/>
		 *                    ].
		 *
		 * @return array
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlist_Factory::get_wishlist_users
		 */
		public function get_users_with_wishlist( $args = array() ) {
			wc_deprecated_function( 'YITH_WCWL::get_users_with_wishlist', '4.0.0', 'YITH_WCWL_Wishlist_Factory::get_wishlist_users' );
			return YITH_WCWL_Wishlist_Factory::get_wishlist_users( $args );
		}

		/**
		 * Count users that have public wishlists
		 *
		 * @param string $search Search string.
		 *
		 * @return int
		 *
		 * @depreacted since 4.0
		 * @see        YITH_WCWL_Wishlists::count_users_with_wishlists
		 */
		public function count_users_with_wishlists( $search ) {
			wc_deprecated_function( 'YITH_WCWL::count_users_with_wishlists', '4.0.0', 'YITH_WCWL_Wishlists::count_users_with_wishlists' );
			return yith_wcwl_wishlists()->count_users_with_wishlists( $search );
		}

		/* === GENERAL METHODS === */

		/**
		 * Checks whether multi-wishlist feature is enabled for current user
		 *
		 * @return bool Whether feature is enabled or not
		 */
		public function is_multi_wishlist_enabled() {
			wc_deprecated_function( 'YITH_WCWL::is_multi_wishlist_enabled', '4.0.0', 'YITH_WCWL_Wishlists::is_multi_wishlist_enabled' );
			return yith_wcwl_wishlists()->is_multi_wishlist_enabled();
		}
	}
}
