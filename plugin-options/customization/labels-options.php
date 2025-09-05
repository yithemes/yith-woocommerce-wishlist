<?php
/**
 * Style subtab of customization settings
 *
 * @package YITH\Wishlist\Options
 * @author  YITH <plugins@yithemes.com>
 * @since   4.0.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly

$share_enabled = wc_string_to_bool( get_option( 'yith_wcwl_enable_share', 'yes' ) );
$share_on      = array(
	'pinterest' => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_pinterest' ) ),
	'twitter'   => $share_enabled && wc_string_to_bool( get_option( 'yith_wcwl_share_twitter' ) ),
);

$add_to_wishlist_section = array(
	'add_to_wishlist_start' => array(
		'name' => __( 'Add to wishlist ', 'yith-woocommerce-wishlist' ),
		'type' => 'title',
	),

	'add_to_wishlist_text' => array(
		'name'    => __( '"Add to wishlist" text', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Enter a text for "Add to wishlist" button', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_add_to_wishlist_text',
		'default' => __( 'Add to wishlist', 'yith-woocommerce-wishlist' ),
		'type'    => 'text',
	),

	'product_added_text' => array(
		'name'    => __( '"Product added" text', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Enter the text of the message displayed when the user adds a product to the wishlist', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_product_added_text',
		'default' => __( 'Product added!', 'yith-woocommerce-wishlist' ),
		'type'    => 'text',
	),

	'remove_from_wishlist_text' => array(
		'name'    => __( '"Remove from wishlist" text', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Enter a text for the "Remove from wishlist" button', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_remove_from_wishlist_text',
		'default' => __( 'Remove from list', 'yith-woocommerce-wishlist' ),
		'type'    => 'text',
	),

	'browse_wishlist_text' => array(
		'name'    => __( '"Browse wishlist" text', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Enter a text for the "Browse wishlist" link on the product page', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_browse_wishlist_text',
		'default' => __( 'Browse wishlist', 'yith-woocommerce-wishlist' ),
		'type'    => 'text',
	),

	'already_in_wishlist_text' => array(
		'name'    => __( '"Product already in wishlist" text', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Enter the text for the message displayed when the user views a product that is already in the wishlist', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_already_in_wishlist_text',
		'default' => __( 'The product is already in your wishlist!', 'yith-woocommerce-wishlist' ),
		'type'    => 'text',
	),

	'add_to_wishlist_end' => array(
		'type' => 'sectionend',
	),
);

$wishlist_page_section = array(
	'wishlist_page_start' => array(
		'title' => __( 'Wishlist page', 'yith-woocommerce-wishlist' ),
		'type'  => 'title',
	),

	'default_wishlist_title' => array(
		'name'    => __( 'Default wishlist name', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Enter a name for the default wishlist. This is the wishlist that will be automatically generated for all users if they do not create any custom one', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_wishlist_title',
		'default' => __( 'My wishlist', 'yith-woocommerce-wishlist' ),
		'type'    => 'text',
	),

	'socials_title' => $share_on[ 'pinterest' ] || $share_on[ 'twitter' ] ? array(
		'name'    => __( 'Sharing title', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Wishlist title used for sharing (only used on Twitter and Pinterest)', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_socials_title',
		// translators: 1. Blog name.
		'default' => sprintf( __( 'My wishlist on %s', 'yith-woocommerce-wishlist' ), get_bloginfo( 'name' ) ),
		'type'    => 'text',
	) : array(),

	'socials_text' => $share_on[ 'pinterest' ] || $share_on[ 'twitter' ] ? array(
		'name'      => __( 'Social text', 'yith-woocommerce-wishlist' ),
		'desc'      => __( 'Type the message you want to publish when you share your wishlist on Twitter and Pinterest', 'yith-woocommerce-wishlist' ),
		'id'        => 'yith_wcwl_socials_text',
		'default'   => '',
		'type'      => 'yith-field',
		'yith-type' => 'textarea',
	) : array(),

	'add_to_cart_text' => array(
		'name'    => __( '"Add to cart" text', 'yith-woocommerce-wishlist' ),
		'desc'    => __( 'Enter a text for the "Add to cart" button', 'yith-woocommerce-wishlist' ),
		'id'      => 'yith_wcwl_add_to_cart_text',
		'default' => __( 'Add to cart', 'yith-woocommerce-wishlist' ),
		'type'    => 'text',
	),

	'wishlist_page_end' => array(
		'type' => 'sectionend',
	),
);

/**
 * APPLY_FILTERS: yith_wcwl_customization_labels_options
 *
 * Filter the options available in the 'Customization > Labels' tab.
 *
 * @param array $options Array of options
 *
 * @return array
 */
return apply_filters(
	'yith_wcwl_customization_labels_options',
	array(
		'customization-labels' => array_merge(
			$add_to_wishlist_section,
			$wishlist_page_section
		),
	)
);
