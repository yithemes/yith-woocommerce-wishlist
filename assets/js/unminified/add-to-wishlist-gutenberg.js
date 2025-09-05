jQuery( $ => {
	wp.hooks.addAction( 'yith_plugin_fw_gutenberg_success_do_shortcode', 'yith-woocommerce-wishlist', ( shortcode, shortcodeHash, ajaxResponse ) => {
		if ( 0 === shortcode.indexOf( '[yith_wcwl_add_to_wishlist' ) ) {
			wp.hooks.doAction( 'yith_wcwl_init_add_to_wishlist_components' );
		}
	} )
} )