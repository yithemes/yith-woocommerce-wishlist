<?php
/**
 * Wishlists handler class
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @since   4.0.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Wishlists' ) ) {
	/**
	 * YITH_WCWL_Wishlist class
	 */
	class YITH_WCWL_Wishlists {
		use YITH_WCWL_Extensible_Singleton_Trait;

		/**
		 * Store the last used wishlist token.
		 *
		 * @var string
		 */
		protected $last_operation_token = '';

		/**
		 * YITH_WCWL_Wishlist constructor
		 */
		protected function __construct() {
		}

		/* === WISHLISTS METHODS === */

		/**
		 * Add a new wishlist for the user.
		 *
		 * @param array $args Array of params for wishlist creation.
		 * @return int|false The id of the wishlist created or false if something goes wrong
		 */
		public function create( $args = array() ) {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			$user_id = $args[ 'user_id' ] ?? false;

			$wishlist = YITH_WCWL_Wishlist_Factory::generate_default_wishlist( $user_id );

			return $wishlist ? $wishlist->get_id() : false;
			// phpcs:enable
		}

		/**
		 * Update wishlist with arguments passed as second parameter
		 *
		 * @param int   $wishlist_id The wishlist id.
		 * @param array $args        The array of parameters to use for update query.
		 *
		 * @return void
		 */
		public function update( $wishlist_id, $args = array() ) {
		}

		/**
		 * Delete indicated wishlist
		 *
		 * @param int $wishlist_id The wishlist ID.
		 * @return void
		 */
		public function remove( $wishlist_id ) {
		}

		/**
		 * Move an item from a wishlist to another
		 *
		 * @param array $args The arguments
		 * @return array
		 */
		public function move( $args ) {
		}

		/**
		 * Retrieve first list of current user where a specific product occurs; if no wishlist is found, returns false
		 *
		 * @param WC_Product|int $product The product or its id.
		 * @return \YITH_WCWL_Wishlist|false First wishlist found where the product occurs (system will privilege default lists)
		 */
		public function get_wishlist_for_product( $product ) {
			$product_id = $product instanceof WC_Product ? $product->get_id() : absint( $product );
			$items      = YITH_WCWL_Wishlist_Factory::get_wishlist_items(
				array(
					'product_id'  => $product_id,
					'wishlist_id' => 'all',
					'limit'       => 1,
					'orderby'     => 'dateadded',
					'order'       => 'DESC',
				)
			);

			if ( ! $items ) {
				return false;
			}

			$item = array_shift( $items );

			/**
			 * APPLY_FILTERS: yith_wcwl_wishlist_for_product
			 *
			 * Filter the first wishlist of current user where a specific product is found.
			 *
			 * @param YITH_WCWL_Wishlist $wishlist   Wishlist object
			 * @param int                $product_id Product ID
			 *
			 * @return YITH_WCWL_Wishlist
			 */
			return apply_filters( 'yith_wcwl_wishlist_for_product', $item->get_wishlist(), $product_id );
		}

		public function get_wishlists_for_product( $product_id, $limit = false ) {
			$args = array(
				'product_id'  => $product_id,
				'wishlist_id' => 'all',
				'orderby'     => 'dateadded',
				'order'       => 'DESC',
			);

			if ( $limit ) {
				$args[ 'limit' ] = $limit;
			}

			$items = YITH_WCWL_Wishlist_Factory::get_wishlist_items( $args );

			$wishlist_ids = array_map(
				function ( $item ) {
					return $item->get_wishlist_id();
				},
				$items
			);

			/**
			 * APPLY_FILTERS: yith_wcwl_wishlist_for_product
			 *
			 * Filter the first wishlist of current user where a specific product is found.
			 *
			 * @param YITH_WCWL_Wishlist $wishlist   Wishlist object
			 * @param int                $product_id Product ID
			 *
			 * @return YITH_WCWL_Wishlist
			 */
			return apply_filters( 'yith_wcwl_wishlists_for_product', $wishlist_ids, $product_id, $limit );
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
		 * @since 2.0.0
		 */
		public function get_wishlists( $args = array() ) {
			return YITH_WCWL_Wishlist_Factory::get_wishlists( $args );
		}

		/**
		 * Wrapper for \YITH_WCWL::get_wishlists, will return wishlists for current user
		 *
		 * @return YITH_WCWL_Wishlist[]
		 */
		public function get_current_user_wishlists() {
			$id = is_user_logged_in() ? get_current_user_id() : YITH_WCWL_Session()->maybe_get_session_id();

			if ( ! $id ) {
				return array();
			}

			$lists = wp_cache_get( 'user-wishlists-' . $id, 'wishlists' );

			if ( ! $lists ) {
				$lists = YITH_WCWL_Wishlist_Factory::get_wishlists(
					array(
						'orderby' => 'dateadded',
						'order'   => 'ASC',
					)
				);

				wp_cache_set( 'user-wishlists-' . $id, $lists, 'wishlists' );
			}

			return $lists;
		}

		/**
		 * Generate default wishlist for current user or session
		 *
		 * @param int|bool $id User or session id; false if you want to use current user/session.
		 *
		 * @return int Default wishlist id
		 */
		public function generate_default_wishlist( $id = false ) {
			$wishlist = YITH_WCWL_Wishlist_Factory::generate_default_wishlist( $id );

			if ( $wishlist ) {
				return $wishlist->get_id();
			}

			return false;
		}

		/**
		 * Count users that have public wishlists
		 *
		 * @param string $search Search string.
		 *
		 * @return int
		 */
		public function count_users_with_wishlists( $search ) {
			return count( YITH_WCWL_Wishlist_Factory::get_wishlist_users( array( 'search' => $search ) ) );
		}

		/* === WISHLIST ITEMS METHODS === */

		/**
		 * Add a product in the wishlist.
		 *
		 * @param array $args Array of parameters.
		 * @throws YITH_WCWL_Exception When an error occurs with Add to Wishlist operation.
		 *
		 * @return void
		 */
		public function add_item( $args = array() ) {
			$defaults = array(
				'product_id'          => 0,
				'wishlist_id'         => 0,
				'quantity'            => 1,
				'user_id'             => false,
				'dateadded'           => time(),
				'wishlist_name'       => '',
				'wishlist_visibility' => 0,
			);

			$args = apply_filters( 'yith_wcwl_adding_to_wishlist_args', wp_parse_args( $args, $defaults ) );

			/**
			 * DO_ACTION: yith_wcwl_adding_to_wishlist
			 *
			 * Allows to fire some action when a product is added to a wishlist.
			 *
			 * @param int $product_id  Product ID
			 * @param int $wishlist_id Wishlist ID
			 * @param int $user_id     User ID
			 */
			do_action( 'yith_wcwl_adding_to_wishlist', $args[ 'product_id' ], $args[ 'wishlist_id' ], $args[ 'user_id' ] );

			if ( ! $this->can_user_add_to_wishlist() ) {
				/**
				 * APPLY_FILTERS: yith_wcwl_user_cannot_add_to_wishlist_message
				 *
				 * Filter the message shown when the product can't be added to the wishlist.
				 *
				 * @param string $message Message
				 *
				 * @return string
				 */
				throw new YITH_WCWL_Exception( esc_html( apply_filters( 'yith_wcwl_user_cannot_add_to_wishlist_message', __( 'The item cannot be added to this wishlist', 'yith-woocommerce-wishlist' ) ) ), 0 );
			}

			if ( ! $args[ 'product_id' ] ) {
				throw new YITH_WCWL_Exception( esc_html__( 'An error occurred while adding the products to the wishlist.', 'yith-woocommerce-wishlist' ), 0 );
			}

			$wishlist = 'new' === $args[ 'wishlist_id' ] ? $this->create( $args ) : YITH_WCWL_Wishlist_Factory::get_wishlist( $args[ 'wishlist_id' ], 'edit' );

			if ( ! $wishlist instanceof YITH_WCWL_Wishlist || ! $wishlist->current_user_can( 'add_to_wishlist' ) ) {
				throw new YITH_WCWL_Exception( esc_html__( 'An error occurred while adding the products to the wishlist.', 'yith-woocommerce-wishlist' ), 0 );
			}

			$this->last_operation_token = $wishlist->get_token();

			if ( $wishlist->has_product( $args[ 'product_id' ] ) ) {
				/**
				 * APPLY_FILTERS: yith_wcwl_product_already_in_wishlist_message
				 *
				 * Filter the message shown when the product is already in the wishlist.
				 *
				 * @param string $message Message
				 *
				 * @return string
				 */
				throw new YITH_WCWL_Exception( esc_html( apply_filters( 'yith_wcwl_product_already_in_wishlist_message', get_option( 'yith_wcwl_already_in_wishlist_text' ) ) ), 1 );
			}

			$item = new YITH_WCWL_Wishlist_Item();

			$item->set_product_id( $args[ 'product_id' ] );
			$item->set_quantity( $args[ 'quantity' ] );
			$item->set_wishlist_id( $wishlist->get_id() );
			$item->set_user_id( $wishlist->get_user_id() );

			if ( $args[ 'dateadded' ] ) {
				$item->set_date_added( $args[ 'dateadded' ] );
			}

			$wishlist->add_item( $item );
			$wishlist->save();

			wp_cache_delete( 'wishlist-count-' . $wishlist->get_token(), 'wishlists' );

			$user_id = $wishlist->get_user_id();

			if ( $user_id ) {
				wp_cache_delete( 'wishlist-user-total-count-' . $user_id, 'wishlists' );
			}

			/**
			 * DO_ACTION: yith_wcwl_added_to_wishlist
			 *
			 * Allows to fire some action when a product has been added to a wishlist.
			 *
			 * @param int $prod_id     Product ID
			 * @param int $wishlist_id Wishlist ID
			 * @param int $user_id     User ID
			 */
			do_action( 'yith_wcwl_added_to_wishlist', $args[ 'product_id' ], $item->get_wishlist_id(), $item->get_user_id() );

			return array(
				'product_id'  => $args[ 'product_id' ],
				'wishlist_id' => $item->get_wishlist_id(),
				'user_id'     => $item->get_user_id(),
			);
		}

		/**
		 * Remove an entry from the wishlist.
		 *
		 * @param array $args Array of parameters.
		 *
		 * @throws YITH_WCWL_Exception When something was wrong with removal.
		 * @return array
		 */
		public function remove_item( $args ) {
			$defaults = array(
				'product_id'  => 0,
				'wishlist_id' => 0,
				'user_id'     => false,
			);

			$args = wp_parse_args( $args, $defaults );

			$product_id  = intval( $args[ 'product_id' ] );
			$wishlist_id = intval( $args[ 'wishlist_id' ] );
			$user_id     = intval( $args[ 'user_id' ] );

			/**
			 * DO_ACTION: yith_wcwl_removing_from_wishlist
			 *
			 * Allows to fire some action when removing a product from a wishlist.
			 *
			 * @param int $product_id  Product ID
			 * @param int $wishlist_id Wishlist ID
			 * @param int $user_id     User ID
			 */
			do_action( 'yith_wcwl_removing_from_wishlist', $product_id, $wishlist_id, $user_id );

			if ( ! $product_id ) {
				/**
				 * APPLY_FILTERS: yith_wcwl_unable_to_remove_product_message
				 *
				 * Filter the message shown when the product can't be removed the wishlist.
				 *
				 * @param string $message Message
				 *
				 * @return string
				 */
				throw new YITH_WCWL_Exception( esc_html( apply_filters( 'yith_wcwl_unable_to_remove_product_message', __( 'Error. Unable to remove the product from the wishlist.', 'yith-woocommerce-wishlist' ) ) ), 0 );
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_get_wishlist_on_remove
			 *
			 * Filter the wishlist from which products will be removed.
			 *
			 * @param YITH_WCWL_Wishlist $wishlist Wishlist object
			 * @param array              $atts     Array of parameters
			 *
			 * @return YITH_WCWL_Wishlist
			 */
			$wishlist = apply_filters( 'yith_wcwl_get_wishlist_on_remove', YITH_WCWL_Wishlist_Factory::get_wishlist( $wishlist_id ), $args );

			/**
			 * APPLY_FILTERS: yith_wcwl_allow_remove_after_add_to_cart
			 *
			 * Filter whether the product will be removed from the wishlist after it has been added to the cart.
			 *
			 * @param bool               $remove_after_add_to_cart Whether the item will be removed from the wishlist after added to cart or not
			 * @param YITH_WCWL_Wishlist $wishlist                 Wishlist object
			 *
			 * @return bool
			 */
			if ( apply_filters( 'yith_wcwl_allow_remove_after_add_to_cart', ! $wishlist instanceof YITH_WCWL_Wishlist || ! $wishlist->current_user_can( 'remove_from_wishlist' ), $wishlist ) ) {
				throw new YITH_WCWL_Exception( esc_html( apply_filters( 'yith_wcwl_unable_to_remove_product_message', __( 'Error. Unable to remove the product from the wishlist.', 'yith-woocommerce-wishlist' ) ) ), 0 );
			}

			$wishlist->remove_product( $product_id );
			$wishlist->save();

			wp_cache_delete( 'wishlist-count-' . $wishlist->get_token(), 'wishlists' );

			$user_id = $wishlist->get_user_id();

			if ( $user_id ) {
				wp_cache_delete( 'wishlist-user-total-count-' . $user_id );
			}

			/**
			 * DO_ACTION: yith_wcwl_removed_from_wishlist
			 *
			 * Allows to fire some action when a product has been removed from a wishlist.
			 *
			 * @param int $product_id  Product ID
			 * @param int $wishlist_id Wishlist ID
			 * @param int $user_id     User ID
			 */
			do_action( 'yith_wcwl_removed_from_wishlist', $product_id, $wishlist->get_id(), $wishlist->get_user_id() );

			return array(
				'product_id'  => $product_id,
				'wishlist_id' => $wishlist->get_id(),
				'user_id'     => $wishlist->get_user_id(),
			);
		}

		/**
		 * Retrieve items of the wishlist for a specific user
		 *
		 * @param array $args Arguments array; it may contain any of the following:<br/>
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
		 */
		public function get_items( $args = array() ) {
			return YITH_WCWL_Wishlist_Factory::get_wishlist_items( $args );
		}

		/**
		 * Retrieve details of a product in the wishlist.
		 *
		 * @param WC_Product|int $product_id  Product id.
		 * @param int|bool       $wishlist_id Wishlist id, or false when default should be applied.
		 * @return YITH_WCWL_Wishlist_Item|bool
		 */
		public function get_product_item( $product, $wishlist_id = false ) {
			$items = $this->get_items(
				array(
					'product_id'     => $product instanceof WC_Product ? $product->get_id() : $product,
					'wishlist_id' => $wishlist_id,
				)
			);

			if ( empty( $items ) ) {
				return false;
			}

			return array_shift( $items );
		}

		/**
		 * Retrieve the number of products in the wishlist.
		 *
		 * @param string|bool $wishlist_token Wishlist token if any; false for default wishlist.
		 *
		 * @return int
		 * @since 1.0.0
		 */
		public function count_items_in_wishlist( $wishlist_token = false ) {
			$wishlist = YITH_WCWL_Wishlist_Factory::get_wishlist( $wishlist_token );

			if ( ! $wishlist ) {
				return 0;
			}

			$count = wp_cache_get( 'wishlist-count-' . $wishlist->get_token(), 'wishlists' );

			if ( false === $count ) {
				$count = $wishlist->count_items();
				wp_cache_set( 'wishlist-count-' . $wishlist->get_token(), $count, 'wishlists' );
			}

			return $count;
		}

		/**
		 * Count all user items in wishlists
		 *
		 * @return int Count of items added all over wishlist from current user
		 */
		public function count_all_items() {
			$args = array(
				'wishlist_id' => 'all',
			);

			if ( is_user_logged_in() ) {
				$id                = get_current_user_id();
				$args[ 'user_id' ] = $id;
			} elseif ( YITH_WCWL_Session::get_instance()->has_session() ) {
				$id                   = YITH_WCWL_Session::get_instance()->get_session_id();
				$args[ 'session_id' ] = $id;
			}

			if ( ! isset( $id ) ) {
				return 0;
			}

			$count = wp_cache_get( 'wishlist-user-total-count-' . $id, 'wishlists' );

			if ( false === $count ) {
				$count = YITH_WCWL_Wishlist_Factory::get_wishlist_items_count( $args );
				wp_cache_set( 'wishlist-user-total-count-' . $id, $count, 'wishlists' );
			}

			return $count;
		}

		/**
		 * Count number of times a product was added to users wishlists
		 *
		 * @param int|bool $product_id Product id; false will force method to use global product.
		 *
		 * @return int Number of times the product was added to wishlist
		 * @since 2.0.13
		 */
		public function count_add_to_wishlist( $product_id = false ) {
			global $product;

			$product_id = ! ( $product_id ) && $product ? $product->get_id() : $product_id;

			if ( ! $product_id ) {
				return 0;
			}

			return YITH_WCWL_Wishlist_Factory::get_times_added_count( $product_id );
		}

		/**
		 * Count product occurrences in users wishlists
		 *
		 * @param int|bool $product_id Product id; false will force method to use global product.
		 *
		 * @return int
		 * @since 2.0.0
		 */
		public function count_product_occurrences( $product_id = false ) {
			global $product;

			$product_id = ! ( $product_id ) ? yit_get_product_id( $product ) : $product_id;

			if ( ! $product_id ) {
				return 0;
			}

			$count = YITH_WCWL_Wishlist_Factory::get_wishlist_items_count(
				array(
					'product_id'  => $product_id,
					'user_id'     => false,
					'session_id'  => false,
					'wishlist_id' => 'all',
				)
			);

			return $count;
		}

		/**
		 * Check if the product exists in the wishlist.
		 *
		 * @param int      $product_id  Product id to check.
		 * @param int|bool $wishlist_id Wishlist where to search (use false to search in default wishlist).
		 * @return bool
		 */
		public function is_product_in_wishlist( $product_id, $wishlist_id = false ) {
			$wishlist = YITH_WCWL_Wishlist_Factory::get_wishlist( $wishlist_id );

			if ( ! $wishlist ) {
				return false;
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_is_product_in_wishlist
			 *
			 * Filter whether the product is already in the wishlist.
			 *
			 * @param bool $is_in_wishlist Whether the product is already in the wishlist
			 * @param int  $product_id     Product ID
			 * @param int  $wishlist_id    Wishlist ID
			 *
			 * @return bool
			 */
			return apply_filters( 'yith_wcwl_is_product_in_wishlist', $wishlist->has_product( $product_id ), $product_id, $wishlist_id );
		}

		/* === GENERAL METHODS === */

		/**
		 * Checks whether current user can add to the wishlist
		 *
		 * TODO: merge this into \YITH_WCWL_Wishlist::current_user_can
		 *
		 * @param int|bool $user_id User id to test; false to use current user id.
		 * @return bool Whether current user can add to wishlist
		 * @since 3.0.0
		 */
		public function can_user_add_to_wishlist( $user_id = false ) {
			$user_id                                    = $user_id ?: get_current_user_id();
			$disable_wishlist_for_unauthenticated_users = get_option( 'yith_wcwl_disable_wishlist_for_unauthenticated_users' );
			$return                                     = true;

			if ( 'yes' === $disable_wishlist_for_unauthenticated_users && ! $user_id ) {
				$return = false;
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_can_user_add_to_wishlist
			 *
			 * Filter whether the current user can add products to the wishlist.
			 *
			 * @param bool $can_add_to_wishlist Whether the product is already in the wishlist
			 * @param int  $user_id             User ID
			 *
			 * @return bool
			 */
			return apply_filters( 'yith_wcwl_can_user_add_to_wishlist', $return, $user_id );
		}

		/**
		 * Checks whether multi-wishlist feature is enabled for current user
		 *
		 * @return bool Whether feature is enabled or not
		 */
		public function is_multi_wishlist_enabled() {
			return false;
		}
	}
}
