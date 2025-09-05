<?php
/**
 * Legacy admin init class
 *
 * @package YITH\Wishlist\Legacy\Classes
 * @author  YITH <plugins@yithemes.com>
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_Admin_Legacy' ) ) {
	/**
	 * Initiator class. Create and populate admin views.
	 *
	 * @since 4.0.0
	 */
	abstract class YITH_WCWL_Admin_Legacy {
		/**
		 * Register wishlist panel
		 *
		 * @return void
		 * @depreacted since 4.0.0
		 * @see        YITH_WCWL_Admin_Panel::register_panel
		 */
		public function register_panel() {
			wc_deprecated_function( 'YITH_WCWL_Admin::register_panel()', '4.0.0', 'YITH_WCWL_Admin_Panel::register_panel()' );
			YITH_WCWL_Admin_Panel::get_instance()->register_panel();
		}
	}
}

