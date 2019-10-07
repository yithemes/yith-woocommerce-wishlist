<?php
/**
 * Lists options page
 *
 * @author  Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.0
 */

if ( ! defined( 'YITH_WCWL' ) ) {
	exit;
} // Exit if accessed directly

return apply_filters( 'yith_wcwl_list_options', array(
	'lists' => array(
		'lists_section_start' => array(
			'type' => 'title',
			'desc' => '',
			'id' => 'yith_wcwl_lists_settings'
		),

		'wishlists' => array(
			'name' => 'Wishlists',
			'type' => 'yith-field',
			'yith-type' => 'list-table',

			'class' => '',
			'list_table_class' => 'YITH_WCWL_Admin_Table',
			'list_table_class_dir' => YITH_WCWL_INC . 'tables/class.yith-wcwl-admin-table.php',
			'title' => 'wishlists',
			'id' => 'wishlist-filter'
		),

		'lists_section_end' => array(
			'type' => 'sectionend',
			'id' => 'yith_wcwl_lists_settings'
		),

	)
) );