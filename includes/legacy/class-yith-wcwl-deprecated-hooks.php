<?php
/**
 * Deprecated hooks and filters
 *
 * @package YITH\Wishlist\Classes\Legacy
 * @author  YITH <plugins@yithemes.com>
 * @version 3.0.24
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Deprecated_Hooks' ) ) {
	/**
	 * Class that manages deprecated hooks and filters
	 *
	 * @since 1.0.0
	 */
	class YITH_WCWL_Deprecated_Hooks {

		/**
		 * List of deprecated hooks
		 *
		 * @var array
		 */
		private $deprecated_hooks = array(
			'yith_wcwl_add_to_wishlist_button_html'                     => 'yith_wcwl_add_to_wishlisth_button_html',
			'yith_wcwl_adding_to_wishlist_product_id'                   => 'yith_wcwl_adding_to_wishlist_prod_id',
			'yith_wcwl_add_to_wishlist_button_move_label_option'        => 'yith_wcwl_move_from_wishlist_label',
			'yith_wcwl_add_to_wishlist_button_modal_label_option'       => 'yith_wcwl_button_popup_label',
			'yith_wcwl_add_to_wishlist_button_icon_option'              => 'yith_wcwl_button_icon',
			'yith_wcwl_add_to_wishlist_button_label_option'             => 'yith_wcwl_button_label',
			'yith_wcwl_add_to_wishlist_button_remove_label_option'      => 'yith_wcwl_remove_from_wishlist_label',
			'yith_wcwl_add_to_wishlist_button_added_icon_option'        => 'yith_wcwl_button_added_icon',
			'yith_wcwl_add_to_wishlist_button_custom_icon_alt_option'   => 'yith_wcwl_custom_icon_alt',
			'yith_wcwl_add_to_wishlist_button_custom_icon_width_option' => 'yith_wcwl_custom_width',
			'yith_wcwl_add_to_wishlist_button_browse_label_option'      => 'yith_wcwl_browse_wishlist_label',
			'yith_wcwl_add_to_wishlist_button_already_in_label_option'  => 'yith_wcwl_product_already_in_wishlist_text_button',
			'yith_wcwl_add_to_wishlist_button_added_label_option'       => 'yith_wcwl_product_added_to_wishlist_message_button',
		);

		/**
		 * List of deprecated hooks
		 *
		 * @var array
		 */
		private $deprecated_version = array(
			'yith_wcwl_add_to_wishlist_button_html'                     => '4.0.0',
			'yith_wcwl_adding_to_wishlist_product_id'                   => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_move_label_option'        => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_modal_label_option'       => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_icon_option'              => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_label_option'             => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_remove_label_option'      => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_added_icon_option'        => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_custom_icon_alt_option'   => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_custom_icon_width_option' => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_browse_label_option'      => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_already_in_label_option'  => '4.0.0',
			'yith_wcwl_add_to_wishlist_button_added_label_option'       => '4.0.0',
		);

		/**
		 * Constructor.
		 */
		public function __construct() {
			$new_hooks = array_keys( $this->deprecated_hooks );
			array_walk( $new_hooks, array( $this, 'hook_in' ) );

			add_filter( 'yith_wcwl_adding_to_wishlist_args', array( $this, 'apply_deprecated_filters_when_adding_to_wishlist' ) );
		}

		/**
		 * Hook into the new hook so we can handle deprecated hooks once fired.
		 *
		 * @param string $hook_name Hook name.
		 */
		public function hook_in( $hook_name ) {
			add_filter( $hook_name, array( $this, 'maybe_handle_deprecated_hook' ), -1000, 8 );
		}

		/**
		 * If the hook is Deprecated, call the old hooks here.
		 */
		public function maybe_handle_deprecated_hook() {
			$new_hook          = current_filter();
			$old_hook          = isset( $this->deprecated_hooks[ $new_hook ] ) ? $this->deprecated_hooks[ $new_hook ] : false;
			$new_callback_args = func_get_args();
			$return_value      = $new_callback_args[ 0 ];

			if ( $old_hook && has_action( $old_hook ) ) {
				$this->display_notice( $old_hook, $new_hook );
				$return_value = apply_filters_ref_array( $old_hook, $new_callback_args );
			}

			return $return_value;
		}

		/**
		 * Display a deprecated notice for old hooks.
		 *
		 * @param string $old_hook Old hook.
		 * @param string $new_hook New hook.
		 */
		protected function display_notice( $old_hook, $new_hook ) {
			$deprecated_version = isset( $this->deprecated_version[ $old_hook ] ) ? $this->deprecated_version[ $old_hook ] : YITH_WCWL_VERSION;

			wc_deprecated_hook( esc_html( $old_hook ), esc_html( $deprecated_version ), esc_html( $new_hook ) );
		}

		/* === DEPRECATED FILTERS COMPATIBILITY === */

		/**
		 * Adding support for deprecated filters when adding a product in wishlist.
		 *
		 * TODO: mark the used filters as deprecated without any replacement
		 *
		 * @param array $args List of arguments when adding to wishlist
		 *
		 * @return array
		 */
		public function apply_deprecated_filters_when_adding_to_wishlist( $args ) {
			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_prod_id
			 *
			 * Filter the ID of the product added to the wishlist.
			 *
			 * @param int $product_id Product ID
			 *
			 * @return int
			 */
			$args[ 'product_id' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_product_id', $args[ 'product_id' ] );

			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_wishlist_id
			 *
			 * Filter the wishlist ID where the products are added to.
			 *
			 * @param int $wishlist_id Wishlist ID
			 *
			 * @return int
			 */
			$args[ 'wishlist_id' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_wishlist_id', $args[ 'wishlist_id' ] );

			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_quantity
			 *
			 * Filter the quantity of the product added to the wishlist.
			 *
			 * @param int $quantity   Product quantity
			 * @param int $product_id Product ID
			 *
			 * @return int
			 */
			$args[ 'quantity' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_quantity', intval( $args[ 'quantity' ] ), $args[ 'product_id' ] );

			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_user_id
			 *
			 * Filter the user ID saved in the wishlist.
			 *
			 * @param int $user_id User ID
			 *
			 * @return int
			 */
			$args[ 'user_id' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_user_id', intval( $args[ 'user_id' ] ) );

			/**
			 * APPLY_FILTERS: yith_wcwl_adding_to_wishlist_dateadded
			 *
			 * Filter the date when the wishlist was created.
			 *
			 * @param int $date_added Date when the wishlist was created (timestamp)
			 *
			 * @return int
			 */
			$args[ 'dateadded' ] = apply_filters( 'yith_wcwl_adding_to_wishlist_dateadded', $args[ 'dateadded' ] );

			return $args;
		}
	}
}

return new YITH_WCWL_Deprecated_Hooks();
