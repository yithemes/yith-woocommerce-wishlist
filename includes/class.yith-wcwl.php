<?php
/**
 * Main class
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.9
 */

if ( ! defined( 'YITH_WCWL' ) ) {
    exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL' ) ) {
    /**
     * WooCommerce Wishlist
     *
     * @since 1.0.0
     */
    class YITH_WCWL {
        /**
         * Single instance of the class
         *
         * @var \YITH_WCWL
         * @since 2.0.0
         */
        protected static $instance;

        /**
         * Errors array
         * 
         * @var array
         * @since 1.0.0
         */
        public $errors;

        /**
         * Last operation token
         *
         * @var string
         * @since 2.0.0
         */
        public $last_operation_token;
        
        /**
         * Details array
         * 
         * @var array
         * @since 1.0.0
         */
        public $details;
        
        /**
         * Messages array
         * 
         * @var array
         * @since 1.0.0
         */
        public $messages;

        /**
         * Query string parameter used to generate Wishlist urls
         *
         * @var string
         * @since 2.1.2
         */
        public $wishlist_param = 'wishlist-action';

        /**
         * Returns single instance of the class
         *
         * @return \YITH_WCWL
         * @since 2.0.0
         */
        public static function get_instance(){
            if( is_null( self::$instance ) ){
                self::$instance = new self( $_REQUEST );
            }

            return self::$instance;
        }
        
        /**
         * Constructor.
         * 
         * @param array $details
         * @return \YITH_WCWL
         * @since 1.0.0
         */
        public function __construct( $details ) {
        	// set details for actions
            $this->details = $details;

	        // init main plugin classes
            $this->wcwl_init = YITH_WCWL_Init();

            if( is_admin() ){
                $this->wcwl_admin_init = YITH_WCWL_Admin_Init();
            }

            // load plugin-fw
            add_action( 'plugins_loaded', array( $this, 'plugin_fw_loader' ), 15 );
            add_action( 'plugins_loaded', array( $this, 'privacy_loader' ), 20 );

            // add rewrite rule
            add_action( 'init', array( $this, 'add_rewrite_rules' ), 0 );
            add_filter( 'query_vars', array( $this, 'add_public_query_var' ) );

            // add to wishlist
            add_action( 'init', array( $this, 'add_to_wishlist' ) );
            add_action( 'wp_ajax_add_to_wishlist', array( $this, 'add_to_wishlist_ajax' ) );
            add_action( 'wp_ajax_nopriv_add_to_wishlist', array( $this, 'add_to_wishlist_ajax' ) );

            // remove from wishlist
            add_action( 'init', array( $this, 'remove_from_wishlist' ) );
            add_action( 'wp_ajax_remove_from_wishlist', array( $this, 'remove_from_wishlist_ajax' ) );
            add_action( 'wp_ajax_nopriv_remove_from_wishlist', array( $this, 'remove_from_wishlist_ajax' ) );

            // add to wishlist and reload
	        add_action( 'wp_ajax_reload_wishlist_and_adding_elem', array( $this, 'reload_wishlist_and_adding_elem_ajax' ) );
	        add_action( 'wp_ajax_nopriv_reload_wishlist_and_adding_elem', array( $this, 'reload_wishlist_and_adding_elem_ajax' ) );

	        // remove from wishlist after add to cart
            add_action( 'woocommerce_add_to_cart', array( $this, 'remove_from_wishlist_after_add_to_cart' ) );

            // redirect to cart after add to cart in wishlist view
            add_filter( 'woocommerce_product_add_to_cart_url', array( $this, 'redirect_to_cart' ), 10, 2 );
	        add_filter( 'woocommerce_add_to_cart_redirect', array( $this, 'yith_wfbt_redirect_after_add_to_cart' ), 10, 1 );

            // print notices in wishlist page
	        add_action( 'yith_wcwl_before_wishlist_title', array( $this, 'print_notices' ) );

	        // add filter for font-awesome compatibility
	        add_filter( 'option_yith_wcwl_add_to_wishlist_icon', array( $this, 'update_font_awesome_classes' ) );
	        add_filter( 'option_yith_wcwl_add_to_cart_icon', array( $this, 'update_font_awesome_classes' ) );
        }

        /* === PLUGIN FW LOADER === */

        /**
         * Loads plugin fw, if not yet created
         *
         * @return void
         * @since 2.0.0
         */
        public function plugin_fw_loader() {
            if ( ! defined( 'YIT_CORE_PLUGIN' ) ) {
                global $plugin_fw_data;
                if( ! empty( $plugin_fw_data ) ){
                    $plugin_fw_file = array_shift( $plugin_fw_data );
                    require_once( $plugin_fw_file );
                }
            }
        }

        /* === PRIVACY LOADER === */

        /**
         * Loads privacy class
         *
         * @return void
         * @since 2.0.0
         */
        public function privacy_loader() {
        	if( class_exists( 'YITH_Privacy_Plugin_Abstract' ) ) {
		        require_once( YITH_WCWL_INC . 'class.yith-wcwl-privacy.php' );
		        new YITH_WCWL_Privacy();
	        }
        }

        /* === ITEMS METHODS === */
        
        /**
         * Add a product in the wishlist.
         * 
         * @return string "error", "true" or "exists"
         * @since 1.0.0
         */
        public function add() {
            global $wpdb, $sitepress;
            $prod_id = ( isset( $this->details['add_to_wishlist'] ) && is_numeric( $this->details['add_to_wishlist'] ) ) ? $this->details['add_to_wishlist'] : false;
            $wishlist_id = ( isset( $this->details['wishlist_id'] ) && strcmp( $this->details['wishlist_id'], 0 ) != 0 ) ? $this->details['wishlist_id'] : false;
            $quantity = ( isset( $this->details['quantity'] ) ) ? ( int ) $this->details['quantity'] : 1;
            $user_id = ( ! empty( $this->details['user_id'] ) ) ? $this->details['user_id'] : false;
            $dateadded = ( ! empty( $this->details['$dateadded'] ) ) ? $this->details['$dateadded'] : '';

            do_action( 'yith_wcwl_adding_to_wishlist', $prod_id, $wishlist_id, $user_id );

            // filtering params
            $prod_id = apply_filters( 'yith_wcwl_adding_to_wishlist_prod_id', $prod_id );
            $wishlist_id = apply_filters( 'yith_wcwl_adding_to_wishlist_wishlist_id', $wishlist_id );
            $quantity = apply_filters( 'yith_wcwl_adding_to_wishlist_quantity', $quantity );
            $user_id = apply_filters( 'yith_wcwl_adding_to_wishlist_user_id', $user_id );
	        $dateadded = apply_filters( 'yith_wcwl_adding_to_wishlist_dateadded', $dateadded );

            if( defined('ICL_SITEPRESS_VERSION') ) {
                $prod_id = yit_wpml_object_id( $prod_id, 'product', true, $sitepress->get_default_language() );
            }

            if ( $prod_id == false ) {
                $this->errors[] = __( 'An error occurred while adding products to the wishlist.', 'yith-woocommerce-wishlist' );
                return "error";
            }

            //check for existence,  product ID, variation ID, variation data, and other cart item data
            if( strcmp( $wishlist_id, 'new' ) != 0 && $this->is_product_in_wishlist( $prod_id, $wishlist_id ) ) {
                if( $wishlist_id != false ){
                    $wishlist = $this->get_wishlist_detail( $wishlist_id );
                    $this->last_operation_token = $wishlist['wishlist_token'];
                }
                else{
                    $this->last_operation_token = false;
                }

                return "exists";
            }

            if( $user_id != false ) {

                $insert_args = array(
                    'prod_id' => $prod_id,
                    'user_id' => $user_id,
                    'quantity' => $quantity,
                    'dateadded' => ! empty( $dateadded ) ? $dateadded : date( 'Y-m-d H:i:s' )
                );

                if( ! empty( $wishlist_id ) && strcmp( $wishlist_id, 'new' ) != 0 ){
                    $insert_args[ 'wishlist_id' ] = $wishlist_id;

                    $wishlist = $this->get_wishlist_detail( $insert_args[ 'wishlist_id' ] );
                    $this->last_operation_token = $wishlist['wishlist_token'];
                }
                elseif( strcmp( $wishlist_id, 'new' ) == 0 ){
	                $response = function_exists( 'YITH_WCWL_Premium' ) ? YITH_WCWL_Premium()->add_wishlist() : $this->add_wishlist();

                    if( $response == "error" ){
                        return "error";
                    }
                    else{
                        $insert_args[ 'wishlist_id' ] = $response;

                        $wishlist = $this->get_wishlist_detail( $insert_args[ 'wishlist_id' ] );
                        $this->last_operation_token = $wishlist['wishlist_token'];
                    }
                }
                elseif( empty( $wishlist_id ) ){
                    $wishlist_id = $this->generate_default_wishlist( $user_id );
                    $insert_args[ 'wishlist_id' ] = $wishlist_id;

                    if( $this->is_product_in_wishlist( $prod_id, $wishlist_id ) ){
                        return "exists";
                    }
                }

                $result = $wpdb->insert( $wpdb->yith_wcwl_items, $insert_args );

                if( $result ){
                    if( $this->last_operation_token ) {
                        delete_transient( 'yith_wcwl_wishlist_count_' . $this->last_operation_token );
                    }

                    if( $user_id ) {
                        delete_transient( 'yith_wcwl_user_default_count_' . $user_id );
                        delete_transient( 'yith_wcwl_user_total_count_' . $user_id );
                    }
                }
            }
            else {
                $cookie = array(
                    'prod_id' => $prod_id,
                    'quantity' => $quantity,
                    'wishlist_id' => $wishlist_id,
	                'dateadded' => ! empty( $dateadded ) ? $dateadded : date( 'Y-m-d H:i:s' )
                );

                $wishlist = yith_getcookie( 'yith_wcwl_products' );
                $found = $this->is_product_in_wishlist( $prod_id, $wishlist_id );

                if( ! $found ){
                    $wishlist[] = $cookie;
                }

                yith_setcookie( 'yith_wcwl_products', $wishlist );

                $result = true;
            }

            if( $result ) {
                do_action( 'yith_wcwl_added_to_wishlist', $prod_id, $wishlist_id, $user_id );
                return "true";
            }
            else {
                $this->errors[] = __( 'An error occurred while adding products to wishlist.', 'yith-woocommerce-wishlist' );
                return "error";
            }
        }
        
        /**
         * Remove an entry from the wishlist.
         *
         * @param $id int|bool Deprecated
         *
         * @return bool
         * @since 1.0.0
         */
        public function remove( $id = false ) {
            global $wpdb, $sitepress;

            if( ! empty( $id ) ) {
                _deprecated_argument( 'YITH_WCWL->remove()', '2.0.0', __( 'The "Remove" option now does not require any parameter' ) );
            }

            $prod_id = ( isset( $this->details['remove_from_wishlist'] ) && is_numeric( $this->details['remove_from_wishlist'] ) ) ? $this->details['remove_from_wishlist'] : false;
            $wishlist_id = ( isset( $this->details['wishlist_id'] ) && is_numeric( $this->details['wishlist_id'] ) ) ? $this->details['wishlist_id'] : false;
            $user_id = ( ! empty( $this->details['user_id'] ) ) ? $this->details['user_id'] : false;

            do_action( 'yith_wcwl_removing_from_wishlist', $prod_id, $wishlist_id, $user_id );

            if( defined('ICL_SITEPRESS_VERSION') ) {
                $prod_id = yit_wpml_object_id( $prod_id, 'product', true, $sitepress->get_default_language() );
            }

            if( $prod_id == false ){
                return false;
            }

            if ( is_user_logged_in() ) {
                $sql = "DELETE FROM {$wpdb->yith_wcwl_items} WHERE user_id = %d AND prod_id = %d";
                $sql_args = array(
                    $user_id,
                    $prod_id
                );

                if( empty( $wishlist_id ) ){
                    $wishlist_id = $this->generate_default_wishlist( get_current_user_id() );
                }

                $wishlist = $this->get_wishlist_detail( $wishlist_id );
                $this->last_operation_token = $wishlist['wishlist_token'];

                $sql .= " AND wishlist_id = %d";
                $sql_args[] = $wishlist_id;

                $result = $wpdb->query( $wpdb->prepare( $sql, $sql_args ) );

                if ( $result ) {
                    if( $this->last_operation_token ) {
                        delete_transient( 'yith_wcwl_wishlist_count_' . $this->last_operation_token );
                    }

                    if( $user_id ) {
                        delete_transient( 'yith_wcwl_user_default_count_' . $user_id );
                        delete_transient( 'yith_wcwl_user_total_count_' . $user_id );
                    }

                    $result = true;
                }
                else {
                    $this->errors[] = __( 'An error occurred while removing products from the wishlist', 'yith-woocommerce-wishlist' );
                    $result = false;
                }
            }
            else {
                $wishlist = yith_getcookie( 'yith_wcwl_products' );

                foreach( $wishlist as $key => $item ){
                    if( $item['wishlist_id'] == $wishlist_id && $item['prod_id'] == $prod_id ){
                        unset( $wishlist[ $key ] );
                    }
                }

                yith_setcookie( 'yith_wcwl_products', $wishlist );

                $result = true;
            }

            if( $result ){
	            do_action( 'yith_wcwl_removed_from_wishlist', $prod_id, $wishlist_id, $user_id );
            }

	        return $result;
        }

	    /**
	     * Check if the product exists in the wishlist.
	     *
	     * @param int $product_id Product id to check
	     * @param int|bool $wishlist_id Wishlist where to search (use false to search in default wishlist)
	     * @return bool
	     * @since 1.0.0
	     */
	    public function is_product_in_wishlist( $product_id, $wishlist_id = false ) {
		    global $wpdb, $sitepress;

		    $exists = false;

		    if( defined('ICL_SITEPRESS_VERSION') ) {
			    $product_id = yit_wpml_object_id( $product_id, 'product', true, $sitepress->get_default_language() );
		    }

		    if( is_user_logged_in() ) {

		        $user_id = ( $this->details['user_id'] ) ? $this->details['user_id'] : get_current_user_id();

			    $sql = "SELECT COUNT(*) as `cnt` FROM `{$wpdb->yith_wcwl_items}` WHERE `prod_id` = %d AND `user_id` = %d";
			    $sql_args = array(
				    $product_id,
				    $user_id
			    );

			    if( $wishlist_id != false ){
				    $sql .= " AND `wishlist_id` = %d";
				    $sql_args[] = $wishlist_id;
			    }
			    elseif( $default_wishlist_id = $this->generate_default_wishlist( get_current_user_id() ) ){
				    $sql .= " AND `wishlist_id` = %d";
				    $sql_args[] = $default_wishlist_id;
			    }
			    else{
				    $sql .= " AND `wishlist_id` IS NULL";
			    }

			    $results = $wpdb->get_var( $wpdb->prepare( $sql, $sql_args ) );
			    $exists = (bool) ( $results > 0 );
		    }
		    else {
			    $wishlist = yith_getcookie( 'yith_wcwl_products' );

			    if( $wishlist && is_array( $wishlist ) ) {
				    foreach ( $wishlist as $key => $item ) {
					    if ( $item['wishlist_id'] == $wishlist_id && $item['prod_id'] == $product_id ) {
						    $exists = true;
					    }
				    }
			    }
		    }

		    return apply_filters( 'yith_wcwl_is_product_in_wishlist', $exists, $product_id, $wishlist_id );
	    }

	    /**
	     * Retrieve elements of the wishlist for a specific user
	     *
	     * @param $args mixed Arguments array; it may contains any of the following:<br/>
	     * [<br/>
	     *     'user_id'             // Owner of the wishlist; default to current user logged in (if any), or false for cookie wishlist<br/>
	     *     'product_id'          // Product to search in the wishlist<br/>
	     *     'wishlist_id'         // wishlist_id for a specific wishlist, false for default, or all for any wishlist<br/>
	     *     'wishlist_token'      // wishlist token, or false as default<br/>
	     *     'wishlist_visibility' // all, visible, public, shared, private<br/>
	     *     'is_default' =>       // whether searched wishlist should be default one <br/>
	     *     'id' => false,        // only for table select<br/>
	     *     'limit' => false,     // pagination param; number of items per page. 0 to get all items<br/>
	     *     'offset' => 0         // pagination param; offset for the current set. 0 to start from the first item<br/>
	     * ]
	     *
	     * @return array
	     * @since 2.0.0
	     */
	    public function get_products( $args = array() ) {
		    global $wpdb;

		    $default = array(
			    'user_id' => ( is_user_logged_in() ) ? get_current_user_id(): false,
			    'product_id' => false,
			    'wishlist_id' => false, //wishlist_id for a specific wishlist, false for default, or all for any wishlist
			    'wishlist_token' => false,
                'wishlist_visibility' => apply_filters( 'yith_wcwl_wishlist_visibility_string_value', 'all'), // all, visible, public, shared, private
			    'is_default' => false,
			    'id' => false, // only for table select
			    'limit' => false,
			    'offset' => 0
		    );

		    $args = wp_parse_args( $args, $default );
		    extract( $args );

		    if( ! empty( $user_id ) || ! empty( $wishlist_token ) || ! empty( $wishlist_id ) ) {
			    $hidden_products = yith_wcwl_get_hidden_products();

			    $sql = "SELECT *, i.dateadded AS dateadded
                    FROM `{$wpdb->yith_wcwl_items}` AS i
                    LEFT JOIN {$wpdb->yith_wcwl_wishlists} AS l ON l.`ID` = i.`wishlist_id`
                    INNER JOIN {$wpdb->posts} AS p ON p.ID = i.prod_id 
                    WHERE 1 AND p.post_type = %s AND p.post_status = %s";
			    $sql .= $hidden_products ? " AND p.ID NOT IN ( " . implode( ', ', array_filter( $hidden_products, 'esc_sql' ) ) . " )" : "";

			    $sql_args = array(
				    'product',
				    'publish'
			    );

			    if( ! empty( $user_id ) ){
				    $sql .= " AND i.`user_id` = %d";
				    $sql_args[] = $user_id;
			    }

			    if( ! empty( $product_id ) ){
				    $sql .= " AND i.`prod_id` = %d";
				    $sql_args[] = $product_id;
			    }

			    if( ! empty( $wishlist_id ) && $wishlist_id != 'all' ){
				    $sql .= " AND i.`wishlist_id` = %d";
				    $sql_args[] = $wishlist_id;
			    }
			    elseif( ( empty( $wishlist_id ) ) && empty( $wishlist_token ) && empty( $is_default ) ){
				    $sql .= " AND i.`wishlist_id` IS NULL";
			    }

			    if( ! empty( $wishlist_token ) ){
				    $sql .= " AND l.`wishlist_token` = %s";
				    $sql_args[] = $wishlist_token;
			    }

			    if( ! empty( $wishlist_visibility ) && $wishlist_visibility != 'all' ){
				    switch( $wishlist_visibility ){
					    case 'visible':
						    $sql .= " AND ( l.`wishlist_privacy` = %d OR l.`wishlist_privacy` = %d )";
						    $sql_args[] = 0;
						    $sql_args[] = 1;
						    break;
					    case 'public':
						    $sql .= " AND l.`wishlist_privacy` = %d";
						    $sql_args[] = 0;
						    break;
					    case 'shared':
						    $sql .= " AND l.`wishlist_privacy` = %d";
						    $sql_args[] = 1;
						    break;
					    case 'private':
						    $sql .= " AND l.`wishlist_privacy` = %d";
						    $sql_args[] = 2;
						    break;
					    default:
						    $sql .= " AND l.`wishlist_privacy` = %d";
						    $sql_args[] = 0;
						    break;
				    }
			    }

			    if( ! empty( $is_default ) ){
				    if( ! empty( $user_id ) ){
					    $this->generate_default_wishlist( $user_id );
				    }

				    $sql .= " AND l.`is_default` = %d";
				    $sql_args[] = $is_default;
			    }

			    if( ! empty( $id ) ){
				    $sql .= " AND `i.ID` = %d";
				    $sql_args[] = $id;
			    }

			    $sql .= " GROUP BY i.prod_id, l.ID";

			    if( ! empty( $limit ) && isset( $offset ) ){
				    $sql .= " LIMIT %d, %d";
				    $sql_args[] = $offset;
				    $sql_args[] = $limit;
			    }

			    $wishlist = $wpdb->get_results( $wpdb->prepare( $sql, $sql_args ), ARRAY_A );
		    }
		    else{
			    $wishlist = yith_getcookie( 'yith_wcwl_products' );
			    $hidden_products = yith_wcwl_get_hidden_products();
			    $items = is_array( $wishlist ) ? wp_list_pluck( $wishlist, 'prod_id' ) : false;

			    if( empty( $items ) ){
			    	return array();
			    }

			    $valid_products = wc_get_products( array(
				    'status' => 'publish',
				    'include' => $items,
				    'limit' => -1,
				    'return' => 'ids'
			    ) );

			    if( empty( $valid_products ) ){
			    	return array();
			    }

			    foreach( $wishlist as $key => $cookie ){
			    	if( in_array( $cookie['prod_id'], $hidden_products )  ){
			    		unset( $wishlist[ $key ] );
			    		continue;
				    }

			    	if( ! in_array( $cookie['prod_id'], $valid_products ) ){
					    unset( $wishlist[ $key ] );
					    continue;
				    }

				    if( ! empty( $product_id ) && $cookie['prod_id'] != $product_id ){
					    unset( $wishlist[ $key ] );
					    continue;
				    }

				    if( ( ! empty( $wishlist_id ) && $wishlist_id != 'all' ) && $cookie['wishlist_id'] != $wishlist_id ){
					    unset( $wishlist[ $key ] );
					    continue;
				    }
			    }

			    if( ! empty( $limit ) && isset( $offset ) ){
				    $wishlist = array_slice( $wishlist, $offset, $limit );
			    }
		    }

		    return apply_filters( 'yith_wcwl_get_products', $wishlist, $args );
	    }

        /**
         * Retrieve the number of products in the wishlist.
         *
         * @param $wishlist_token string|bool Wishlist token if any; false for default wishlist
         *
         * @return int
         * @since 1.0.0
         */
        public function count_products( $wishlist_token = false ) {
            global $wpdb;

            if( is_user_logged_in() || $wishlist_token != false ) {
                if( ! empty( $wishlist_token ) ) {
                    $count = get_transient( 'yith_wcwl_wishlist_count_' . $wishlist_token );
                }
                else{
                    $count = get_transient( 'yith_wcwl_user_default_count_' . get_current_user_id() );
                }

                if( false === $count ){
	                $hidden_products = yith_wcwl_get_hidden_products();

                    $sql  = "SELECT i.`prod_id` AS `cnt`
                        FROM `{$wpdb->yith_wcwl_items}` AS i
                        LEFT JOIN `{$wpdb->yith_wcwl_wishlists}` AS l ON l.ID = i.wishlist_id
                        INNER JOIN `{$wpdb->posts}` AS p ON i.`prod_id` = p.`ID`
                        WHERE p.`post_type` = %s AND p.`post_status` = %s";
	                $sql .= $hidden_products ? " AND p.ID NOT IN ( " . implode( ', ', array_filter( $hidden_products, 'esc_sql' ) ) . " )" : "";
                    $args = array(
                        'product',
                        'publish'
                    );

                    if ( ! empty( $wishlist_token ) ) {
                        $sql .= " AND l.`wishlist_token` = %s";
                        $args[] = $wishlist_token;
                    } else {
                        $sql .= " AND l.`is_default` = %d AND l.`user_id` = %d";
                        $args[] = 1;
                        $args[] = get_current_user_id();
                    }

	                $sql .= " GROUP BY i.prod_id, l.ID";

                    $query = $wpdb->prepare( $sql, $args );
                    $count = count( $wpdb->get_col( $query ) );

                    $transient_name = ! empty( $wishlist_token ) ? ( 'yith_wcwl_wishlist_count_' . $wishlist_token ) : ( 'yith_wcwl_user_default_count_' . get_current_user_id() );
                    set_transient( $transient_name, $count, WEEK_IN_SECONDS );
                }

                return $count;
            }
            else {
                $cookie = yith_getcookie( 'yith_wcwl_products' );
	            $hidden_products = yith_wcwl_get_hidden_products();

	            $query = "SELECT ID FROM {$wpdb->posts} AS p
                          WHERE post_type = %s AND post_status = %s";
	            $query .= ! empty( $hidden_products ) ? ( " AND p.ID NOT IN ( " . implode( ', ', array_filter( $hidden_products, 'esc_sql' ) ). " )" ) : "";
	            $query_args = array(
		            'product',
		            'publish'
	            );

	            $existing_products = $wpdb->get_col( $wpdb->prepare( $query, $query_args ) );
                $wishlist_products = array();

                if( ! empty( $cookie ) ){
                    foreach( $cookie as $elem ){
                        $wishlist_products[] = $elem['prod_id'];
                    }
                }

                $wishlist_products = array_intersect( $wishlist_products, $existing_products );

                return count( $wishlist_products );
            }
        }

        /**
         * Count all user items in wishlists
         *
         * @return int Count of items added all over wishlist from current user
         * @since 2.0.12
         */
        public function count_all_products() {
            global $wpdb;

            if( is_user_logged_in() ) {
                $user_id = get_current_user_id();

                if( false === $count = get_transient( 'yith_wcwl_user_total_count_' . $user_id ) ) {
	                $hidden_products = yith_wcwl_get_hidden_products();

                    $sql = "SELECT COUNT( i.`prod_id` ) AS `cnt`
                        FROM `{$wpdb->yith_wcwl_items}` AS i
                        WHERE i.`user_id` = %d AND i.`prod_id` IN (
                            SELECT ID
                            FROM {$wpdb->posts} AS p
                            WHERE p.`post_type` = %s AND p.`post_status` = %s";

	                $sql .= ! empty( $hidden_products ) ? ( " AND p.ID NOT IN ( " . implode( ', ', array_filter( $hidden_products, 'esc_sql' ) ). " )" ) : "";

                    $sql .= ")";

                    $query = $wpdb->prepare( $sql, array( $user_id, 'product', 'publish' ) );
                    $count = $wpdb->get_var( $query );

                    set_transient( 'yith_wcwl_user_total_count_' . $user_id, $count, WEEK_IN_SECONDS );
                }

                return $count;
            }
            else {
                $cookie = yith_getcookie( 'yith_wcwl_products' );
	            $hidden_products = yith_wcwl_get_hidden_products();

	            $query = "SELECT ID FROM {$wpdb->posts} AS p
                          WHERE post_type = %s AND post_status = %s";
	            $query .= ! empty( $hidden_products ) ? ( " AND p.ID NOT IN ( " . implode( ', ', array_filter( $hidden_products, 'esc_sql' ) ). " )" ) : "";

	            $query_args = array(
		            'product',
		            'publish'
	            );

	            $existing_products = $wpdb->get_col( $wpdb->prepare( $query, $query_args ) );
                $wishlist_products = array();

                if( ! empty( $cookie ) ){
                    foreach( $cookie as $elem ){
                        $wishlist_products[] = $elem['prod_id'];
                    }
                }

                $wishlist_products = array_intersect( $wishlist_products, $existing_products );

                return count( $wishlist_products );
            }
        }

        /**
         * Count number of times a product was added to users wishlists
         *
         * @param $product_id int|bool Product id; false will force method to use global product
         *
         * @return int Number of times the product was added to wishlist
         * @since 2.0.13
         */
        public function count_add_to_wishlist( $product_id = false ) {
            global $product, $wpdb;

            $product_id = ! ( $product_id ) ? yit_get_product_id( $product ) : $product_id;

            if( ! $product_id ){
                return 0;
            }

            $query = "SELECT COUNT( DISTINCT( user_id ) ) FROM {$wpdb->yith_wcwl_items} WHERE prod_id = %d";
            $res = $wpdb->get_var( $wpdb->prepare( $query, $product_id ) );

            return $res;
        }

        /**
         * Count product occurrences in users wishlists
         *
         * @param $product_id int
         *
         * @return int
         * @since 2.0.0
         */
        public function count_product_occurrences( $product_id ) {
            global $wpdb;
            $sql = "SELECT COUNT(*) FROM {$wpdb->yith_wcwl_items} WHERE `prod_id` = %d";

            return $wpdb->get_var( $wpdb->prepare( $sql, $product_id ) );
        }

        /**
         * Retrieve details of a product in the wishlist.
         *
         * @param int $product_id
         * @param int|bool $wishlist_id
         * @return array
         * @since 1.0.0
         */
        public function get_product_details( $product_id, $wishlist_id = false ) {
            return $this->get_products(
                array(
                    'prod_id' => $product_id,
                    'wishlist_id' => $wishlist_id
                )
            );
        }

        /* === WISHLISTS METHODS === */

        /**
         * Add a new wishlist for the user.
         *
         * @return string "error", "exists" or id of the inserted wishlist
         * @since 2.0.0
         */
        public function add_wishlist() {
            $user_id = ( ! empty( $this->details['user_id'] ) ) ? $this->details['user_id'] : false;

            if( $user_id == false ){
                $this->errors[] = __( 'You need to log in before creating a new wishlist', 'yith-woocommerce-wishlist' );
                return "error";
            }

            return $this->generate_default_wishlist( $user_id );
        }

        /**
         * Update wishlist with arguments passed as second parameter
         *
         * @param $wishlist_id int
         * @param $args array Array of parameters to user in $wpdb->update
         * @return bool
         * @since 2.0.0
         */
        public function update_wishlist( $wishlist_id, $args = array() ) {
            return false;
        }

        /**
         * Delete indicated wishlist
         *
         * @param $wishlist_id int
         * @return bool
         * @since 2.0.0
         */
        public function remove_wishlist( $wishlist_id ) {
            return false;
        }

        /**
         * Retrieve all the wishlist matching specified arguments
         *
         * @param $args mixed Array of valid arguments<br/>
         * [<br/>
         *     'id'                  // Wishlist id to search, if any<br/>
         *     'user_id'             // User owner<br/>
         *     'wishlist_slug'       // Slug of the wishlist to search<br/>
         *     'wishlist_name'       // Name of the wishlist to search<br/>
         *     'wishlist_token'      // Token of the wishlist to search<br/>
         *     'wishlist_visibility' // Wishlist visibility: all, visible, public, shared, private<br/>
         *     'user_search'         // String to match against first name / last name or email of the wishlist owner<br/>
         *     'is_default'          // Whether wishlist should be default or not<br/>
         *     'orderby'             // Column used to sort final result (could be any wishlist lists column)<br/>
         *     'order'               // Sorting order<br/>
         *     'limit'               // Pagination param: maximum number of elements in the set. 0 to retrieve all elements<br/>
         *     'offset'              // Pagination param: offset for the current set. 0 to start from the first item<br/>
         *     'show_empty'          // Whether to show empty lists os not<br/>
         * ]
         *
         * @return array
         * @since 2.0.0
         */
        public function get_wishlists( $args = array() ){
            global $wpdb;

            $default = array(
                'id' => false,
                'user_id' => ( is_user_logged_in() ) ? get_current_user_id(): false,
                'wishlist_slug' => false,
                'wishlist_name' => false,
                'wishlist_token' => false,
                'wishlist_visibility' => apply_filters( 'yith_wcwl_wishlist_visibility_string_value', 'all'), // all, visible, public, shared, private
                'user_search' => false,
                'is_default' => false,
                'orderby' => 'ID',
                'order' => 'DESC',
                'limit' =>  false,
                'offset' => 0,
	            'show_empty' => true
            );

            $args = wp_parse_args( $args, $default );
            extract( $args );

            $sql = "SELECT l.*";

            if( ! empty( $user_search ) ){
                $sql .= ", u.user_email, umn.meta_value AS first_name, ums.meta_value AS last_name";
            }

            $sql .= " FROM `{$wpdb->yith_wcwl_wishlists}` AS l";

            if( ! empty( $user_search ) || ( ! empty($orderby ) && $orderby == 'user_login' ) ) {
                $sql .= " LEFT JOIN `{$wpdb->users}` AS u ON l.`user_id` = u.ID";
            }

            if( ! empty( $user_search ) ){
                $sql .= " LEFT JOIN `{$wpdb->usermeta}` AS umn ON umn.`user_id` = u.`ID`";
                $sql .= " LEFT JOIN `{$wpdb->usermeta}` AS ums ON ums.`user_id` = u.`ID`";
            }

            $sql .= " WHERE 1";

            if( ! empty( $user_id ) ){
                $sql .= " AND l.`user_id` = %d";

                $sql_args = array(
                    $user_id
                );
            }

            if( ! empty( $user_search ) ){
                $sql .= " AND ( umn.`meta_key` LIKE %s AND ums.`meta_key` LIKE %s AND ( u.`user_email` LIKE %s OR umn.`meta_value` LIKE %s OR ums.`meta_value` LIKE %s ) )";
                $sql_args[] = 'first_name';
                $sql_args[] = 'last_name';
                $sql_args[] = "%" . esc_sql( $user_search ) . "%";
                $sql_args[] = "%" . esc_sql( $user_search ) . "%";
                $sql_args[] = "%" . esc_sql( $user_search ) . "%";
            }

            if( ! empty( $is_default ) ){
                $sql .= " AND l.`is_default` = %d";
                $sql_args[] = $is_default;
            }

            if( ! empty( $id ) ){
                $sql .= " AND l.`ID` = %d";
                $sql_args[] = $id;
            }

            if( isset( $wishlist_slug ) && $wishlist_slug !== false ){
                $sql .= " AND l.`wishlist_slug` = %s";
                $sql_args[] = sanitize_title_with_dashes( $wishlist_slug );
            }

            if( ! empty( $wishlist_token ) ){
                $sql .= " AND l.`wishlist_token` = %s";
                $sql_args[] = $wishlist_token;
            }

            if( ! empty( $wishlist_name ) ){
                $sql .= " AND l.`wishlist_name` LIKE %s";
                $sql_args[] = "%" . esc_sql( $wishlist_name ) . "%";
            }

            if( ! empty( $wishlist_visibility ) && $wishlist_visibility != 'all' ){
                switch( $wishlist_visibility ){
                    case 'visible':
                        $sql .= " AND ( l.`wishlist_privacy` = %d OR l.`is_public` = %d )";
                        $sql_args[] = 0;
                        $sql_args[] = 1;
                        break;
                    case 'public':
                        $sql .= " AND l.`wishlist_privacy` = %d";
                        $sql_args[] = 0;
                        break;
                    case 'shared':
                        $sql .= " AND l.`wishlist_privacy` = %d";
                        $sql_args[] = 1;
                        break;
                    case 'private':
                        $sql .= " AND l.`wishlist_privacy` = %d";
                        $sql_args[] = 2;
                        break;
                    default:
                        $sql .= " AND l.`wishlist_privacy` = %d";
                        $sql_args[] = 0;
                        break;
                }
            }

	        if( empty( $show_empty ) ){
		        $sql .= " AND l.`ID` IN ( SELECT wishlist_id FROM {$wpdb->yith_wcwl_items} )";
	        }

	        if( ! empty( $orderby ) && isset( $order ) ) {
		        $sql .= " ORDER BY " . esc_sql( $orderby ) . " " . esc_sql( $order );
	        }

            if( ! empty( $limit ) && isset( $offset ) ){
                $sql .= " LIMIT %d, %d";
	            $sql_args[] = $offset;
	            $sql_args[] = $limit;
            }

            if( ! empty( $sql_args ) ){
                $sql = $wpdb->prepare( $sql, $sql_args );
            }

            $lists = $wpdb->get_results( $sql, ARRAY_A );

            return $lists;
        }

        /**
         * Returns details of a wishlist, searching it by wishlist id
         *
         * @param $wishlist_id int
         * @return array
         * @since 2.0.0
         */
        public function get_wishlist_detail( $wishlist_id ) {
            global $wpdb;

            $sql = "SELECT * FROM {$wpdb->yith_wcwl_wishlists} WHERE `ID` = %d";
            return $wpdb->get_row( $wpdb->prepare( $sql, $wishlist_id ), ARRAY_A );
        }

        /**
         * Returns details of a wishlist, searching it by wishlist token
         *
         * @param $wishlist_token string
         * @return array
         * @since 2.0.0
         */
        public function get_wishlist_detail_by_token( $wishlist_token ) {
            global $wpdb;

            $sql = "SELECT * FROM {$wpdb->yith_wcwl_wishlists} WHERE `wishlist_token` = %s";
            return $wpdb->get_row( $wpdb->prepare( $sql, $wishlist_token ), ARRAY_A );
        }

        /**
         * Generate default wishlist for a specific user, adding all NULL items of the user to it
         *
         * @param $user_id int
         * @return int Default wishlist id
         * @since 2.0.0
         */
        public function generate_default_wishlist( $user_id ){
            global $wpdb;

            $wishlists = $this->get_wishlists( array(
                'user_id' => $user_id,
                'is_default' => 1
            ) );

            if( ! empty( $wishlists ) ){
                $default_user_wishlist = $wishlists[0]['ID'];
                $this->last_operation_token = $wishlists[0]['wishlist_token'];

                do_action('yith_wcwl_default_user_wishlist', $user_id, $wishlists);
            }
            else{
                $token = $this->generate_wishlist_token();
                $this->last_operation_token = $token;

                $wpdb->insert( $wpdb->yith_wcwl_wishlists, array(
                    'user_id' => apply_filters( 'yith_wcwl_default_wishlist_user_id', $user_id ),
                    'wishlist_slug' => apply_filters( 'yith_wcwl_default_wishlist_slug', '' ),
                    'wishlist_token' => $token,
                    'wishlist_name' => apply_filters( 'yith_wcwl_default_wishlist_name', '' ),
                    'wishlist_privacy' => apply_filters( 'yith_wcwl_default_wishlist_privacy', 0 ),
                    'is_default' => 1
                ) );

                $default_user_wishlist = $wpdb->insert_id;
            }

            $sql = "UPDATE {$wpdb->yith_wcwl_items} SET wishlist_id = %d WHERE user_id = %d AND wishlist_id IS NULL";
            $sql_args = array(
                $default_user_wishlist,
                $user_id
            );

            $wpdb->query( $wpdb->prepare( $sql, $sql_args ) );
            return $default_user_wishlist;
        }

        /**
         * Generate a token to visit wishlist
         *
         * @return string token
         * @since 2.0.0
         */
        public function generate_wishlist_token(){
            global $wpdb;
            $count = 0;
            $sql = "SELECT COUNT(*) FROM `{$wpdb->yith_wcwl_wishlists}` WHERE `wishlist_token` = %s";

            do {
                $dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                $nchars = 12;
                $token = "";

                for( $i = 0; $i <= $nchars - 1; $i++ ){
                    $token .= $dictionary[ mt_rand( 0, strlen( $dictionary ) - 1 ) ];
                }

                $count = $wpdb->get_var( $wpdb->prepare( $sql, $token ) );
            }
            while( $count != 0 );

            return $token;
        }

	    /**
	     * Returns an array of users that created and populated a public wishlist
	     *
	     * @param $args mixed Array of valid arguments<br/>
	     * [<br/>
	     *     'search' // String to match against first name / last name / user login or user email of wishlist owner<br/>
	     *     'limit'  // Pagination param: number of items to show in one page. 0 to show all items<br/>
	     *     'offset' // Pagination param: offset for the current set. 0 to start from the first item<br/>
	     * ]
	     * @return array
	     * @since 2.0.0
	     */
	    public function get_users_with_wishlist( $args = array() ){
		    global $wpdb;

		    $default = array(
			    'search' => false,
			    'limit' => false,
			    'offset' => 0
		    );

		    $args = wp_parse_args( $args, $default );
		    extract( $args );

		    $sql = "SELECT DISTINCT i.user_id
                    FROM {$wpdb->yith_wcwl_items} AS i
                    LEFT JOIN {$wpdb->yith_wcwl_wishlists} AS l ON i.wishlist_id = l.ID";

		    if( ! empty( $search ) ){
			    $sql .= " LEFT JOIN `{$wpdb->users}` AS u ON l.`user_id` = u.ID";
			    $sql .= " LEFT JOIN `{$wpdb->usermeta}` AS umn ON umn.`user_id` = u.`ID`";
			    $sql .= " LEFT JOIN `{$wpdb->usermeta}` AS ums ON ums.`user_id` = u.`ID`";
		    }

		    $sql .= " WHERE l.wishlist_privacy = %d";
		    $sql_args = array( 0 );

		    if( ! empty( $search ) ){
			    $sql .= " AND ( umn.`meta_key` LIKE %s AND ums.`meta_key` LIKE %s AND ( u.`user_email` LIKE %s OR u.`user_login` LIKE %s OR umn.`meta_value` LIKE %s OR ums.`meta_value` LIKE %s ) )";
			    $sql_args[] = 'first_name';
			    $sql_args[] = 'last_name';
			    $sql_args[] = "%" . esc_sql( $search ) . "%";
			    $sql_args[] = "%" . esc_sql( $search ) . "%";
			    $sql_args[] = "%" . esc_sql( $search ) . "%";
			    $sql_args[] = "%" . esc_sql( $search ) . "%";
		    }

		    if( ! empty( $limit ) && isset( $offset ) ){
			    $sql .= " LIMIT " . $offset . ", " . $limit;
		    }

		    $res = $wpdb->get_col( $wpdb->prepare( $sql, $sql_args ) );
		    return $res;
	    }

	    /**
	     * Count users that have public wishlists
	     *
	     * @param $search string
	     * @return int
	     * @since 2.0.0
	     */
	    public function count_users_with_wishlists( $search  ){
		    return count( $this->get_users_with_wishlist( array( 'search' => $search ) ) );
	    }

        /* === GENERAL METHODS === */

        /**
         * Add rewrite rules for wishlist
         *
         * @return void
         * @since 2.0.0
         */
        public function add_rewrite_rules() {
            global $wp_query;

            // filter wishlist param
	        $this->wishlist_param = apply_filters( 'yith_wcwl_wishlist_param', $this->wishlist_param );

            $wishlist_page_id = isset( $_POST['yith_wcwl_wishlist_page_id'] ) ? $_POST['yith_wcwl_wishlist_page_id'] : get_option( 'yith_wcwl_wishlist_page_id' );
	        $wishlist_page_id = yith_wcwl_object_id( $wishlist_page_id );

            if( empty( $wishlist_page_id ) ){
                return;
            }

            $wishlist_page = get_post( $wishlist_page_id );
	        $wishlist_page_slug = $wishlist_page ? $wishlist_page->post_name : false;

            if ( empty( $wishlist_page_slug ) ){
                return;
            }

            if( defined( 'POLYLANG_VERSION' ) || defined( 'ICL_PLUGIN_PATH' ) ){
            	return;
            }

            $regex_paged = '(([^/]+/)*' . $wishlist_page_slug . ')(/(.*))?/page/([0-9]{1,})/?$';
            $regex_simple = '(([^/]+/)*' . $wishlist_page_slug . ')(/(.*))?/?$';

            add_rewrite_rule( $regex_paged, 'index.php?pagename=$matches[1]&' . $this->wishlist_param . '=$matches[4]&paged=$matches[5]', 'top' );
            add_rewrite_rule( $regex_simple, 'index.php?pagename=$matches[1]&' . $this->wishlist_param . '=$matches[4]', 'top' );

            $rewrite_rules = get_option( 'rewrite_rules' );

            if( ! is_array( $rewrite_rules ) || ! array_key_exists( $regex_paged, $rewrite_rules ) || ! array_key_exists( $regex_simple, $rewrite_rules ) ){
            	flush_rewrite_rules();
            }
        }

        /**
         * Adds public query var for wishlist
         *
         * @param $public_var array
         * @return array
         * @since 2.0.0
         */
        public function add_public_query_var( $public_var ) {
            $public_var[] = $this->wishlist_param;
            $public_var[] = 'wishlist_id';

            return $public_var;
        }
        
        /**
         * Get all errors in HTML mode or simple string.
         * 
         * @param bool $html
         * @return string
         * @since 1.0.0
         */
        public function get_errors( $html = true ) {
            return implode( ( $html ? '<br />' : ', ' ), $this->errors );
        }
        
        /**
         * Build wishlist page URL.
         *
         * @param $action string
         * 
         * @return string
         * @since 1.0.0
         */
        public function get_wishlist_url( $action = '' ) {
            global $sitepress;
            $wishlist_page_id = yith_wcwl_object_id( get_option( 'yith_wcwl_wishlist_page_id' ) );
            $wishlist_permalink = get_the_permalink( $wishlist_page_id );

            $action_params = explode( '/', $action );
            $view = $action_params[0];
            $data = isset( $action_params[1] ) ? $action_params[1] : '';

            if( $action == 'view' && empty( $data ) ){
                return $wishlist_permalink;
            }

            if( get_option( 'permalink_structure' ) && ! defined( 'ICL_PLUGIN_PATH' ) && ! defined( 'POLYLANG_VERSION' ) ) {
	            $wishlist_permalink = trailingslashit( $wishlist_permalink );
	            $base_url = trailingslashit( $wishlist_permalink . $action );
            }
            else{
                $base_url = $wishlist_permalink;
                $params = array();

                if( ! empty( $data ) ){
                    $params[ $this->wishlist_param ] = $view;

                    if( $view == 'view' ){
                        $params['wishlist_id'] = $data;
                    }
                    elseif( $view == 'user' ){
                        $params['user_id'] = $data;
                    }
                }
                else{
                    $params[ $this->wishlist_param ] = $view;
                }

                $base_url = add_query_arg( $params, $base_url );
            }

            if( defined( 'ICL_PLUGIN_PATH' ) && $sitepress->get_current_language() != $sitepress->get_default_language() ){
		        $base_url = add_query_arg( 'lang', $sitepress->get_current_language(), $base_url );
	        }

            return apply_filters( 'yith_wcwl_wishlist_page_url', esc_url_raw( $base_url ), $action );
        }

        /**
         * Build the URL used to remove an item from the wishlist.
         *
         * @param int $item_id
         * @return string
         * @since 1.0.0
         */
        public function get_remove_url( $item_id ) {
            return esc_url( add_query_arg( 'remove_from_wishlist', $item_id ) );
        }
        
        /**
         * Build the URL used to add an item in the wishlist.
         *
         * @return string
         * @since 1.0.0
         */
        public function get_addtowishlist_url() {
	        _deprecated_function( 'YITH_WCWL::get_addtowishlist_url', '2.0.16' );

            global $product;
            	
            return esc_url( add_query_arg( 'add_to_wishlist', yit_get_product_id( $product ) ) );
        }
        
        /**
         * Build the URL used to add an item to the cart from the wishlist.
         * 
         * @param int $id
         * @param int|string $user_id
         * @return string
         * @since 1.0.0
         */
        public function get_addtocart_url( $id, $user_id = '' ) {
            _deprecated_function( 'YITH_WCWL::get_addtocart_url', '2.0.0' );

            $product = wc_get_product( $id );
                
            if ( $product->is_type( 'variable' ) ) {
                return get_permalink( $id );
            }
            
    		$url = YITH_WCWL_URL . 'add-to-cart.php?wishlist_item_id=' . rtrim( $id, '_' );
    		
    		if( $user_id != '' ) {
    			$url .= '&id=' . $user_id;
    		}
            
    		return $url;
    	}

        /**
         * Build the URL used for an external/affiliate product.
         *
         * @deprecated
         * @param $id
         * @return string
         */
        public function get_affiliate_product_url( $id ) {
            _deprecated_function( 'YITH_WCWL::get_affiliate_product_url', '2.0.0' );

            return get_post_meta( $id, '_product_url', true );
        }
        
        /**
         * Build an URL with the nonce added.
         * 
         * @param string $action
         * @param string $url
         * @return string
         * @since 1.0.0
         */
        public function get_nonce_url( $action, $url = '' ) {
	        _deprecated_function( 'YITH_WCWL::get_nonce_url', '2.0.16' );

            return esc_url( add_query_arg( '_n', wp_create_nonce( 'yith-wcwl-' . $action ), $url ) );
        }

	    /**
	     * Prints wc notice for wishlist pages
	     *
	     * @return void
	     * @since 2.0.5
	     */
	    public function print_notices() {
		    if( function_exists( 'wc_print_notices' ) ) {
			    wc_print_notices();
		    }
	    }

	    /* === FONTAWESOME FIX === */

	    /**
	     * Modernize font-awesome class, for old wishlist users
	     *
	     * @param $class string Original font-awesome class
	     * @return string Filtered font-awesome class
	     * @since 2.0.2
	     */
	    public function update_font_awesome_classes( $class ) {
		    $exceptions = array(
			    'icon-envelope' => 'fa-envelope-o',
			    'icon-star-empty' => 'fa-star-o',
			    'icon-ok' => 'fa-check',
			    'icon-zoom-in' => 'fa-search-plus',
			    'icon-zoom-out' => 'fa-search-minus',
			    'icon-off' => 'fa-power-off',
			    'icon-trash' => 'fa-trash-o',
			    'icon-share' => 'fa-share-square-o',
			    'icon-check' => 'fa-check-square-o',
			    'icon-move' => 'fa-arrows',
			    'icon-file' => 'fa-file-o',
			    'icon-time' => 'fa-clock-o',
			    'icon-download-alt' => 'fa-download',
			    'icon-download' => 'fa-arrow-circle-o-down',
			    'icon-upload' => 'fa-arrow-circle-o-up',
			    'icon-play-circle' => 'fa-play-circle-o',
			    'icon-indent-left' => 'fa-dedent',
			    'icon-indent-right' => 'fa-indent',
			    'icon-facetime-video' => 'fa-video-camera',
			    'icon-picture' => 'fa-picture-o',
			    'icon-plus-sign' => 'fa-plus-circle',
			    'icon-minus-sign' => 'fa-minus-circle',
			    'icon-remove-sign' => 'fa-times-circle',
			    'icon-ok-sign' => 'fa-check-circle',
			    'icon-question-sign' => 'fa-question-circle',
			    'icon-info-sign' => 'fa-info-circle',
			    'icon-screenshot' => 'fa-crosshairs',
			    'icon-remove-circle' => 'fa-times-circle-o',
			    'icon-ok-circle' => 'fa-check-circle-o',
			    'icon-ban-circle' => 'fa-ban',
			    'icon-share-alt' => 'fa-share',
			    'icon-resize-full' => 'fa-expand',
			    'icon-resize-small' => 'fa-compress',
			    'icon-exclamation-sign' => 'fa-exclamation-circle',
			    'icon-eye-open' => 'fa-eye',
			    'icon-eye-close' => 'fa-eye-slash',
			    'icon-warning-sign' => 'fa-warning',
			    'icon-folder-close' => 'fa-folder',
			    'icon-resize-vertical' => 'fa-arrows-v',
			    'icon-resize-horizontal' => 'fa-arrows-h',
			    'icon-twitter-sign' => 'fa-twitter-square',
			    'icon-facebook-sign' => 'fa-facebook-square',
			    'icon-thumbs-up' => 'fa-thumbs-o-up',
			    'icon-thumbs-down' => 'fa-thumbs-o-down',
			    'icon-heart-empty' => 'fa-heart-o',
			    'icon-signout' => 'fa-sign-out',
			    'icon-linkedin-sign' => 'fa-linkedin-square',
			    'icon-pushpin' => 'fa-thumb-tack',
			    'icon-signin' => 'fa-sign-in',
			    'icon-github-sign' => 'fa-github-square',
			    'icon-upload-alt' => 'fa-upload',
			    'icon-lemon' => 'fa-lemon-o',
			    'icon-check-empty' => 'fa-square-o',
			    'icon-bookmark-empty' => 'fa-bookmark-o',
			    'icon-phone-sign' => 'fa-phone-square',
			    'icon-hdd' => 'fa-hdd-o',
			    'icon-hand-right' => 'fa-hand-o-right',
			    'icon-hand-left' => 'fa-hand-o-left',
			    'icon-hand-up' => 'fa-hand-o-up',
			    'icon-hand-down' => 'fa-hand-o-down',
			    'icon-circle-arrow-left' => 'fa-arrow-circle-left',
			    'icon-circle-arrow-right' => 'fa-arrow-circle-right',
			    'icon-circle-arrow-up' => 'fa-arrow-circle-up',
			    'icon-circle-arrow-down' => 'fa-arrow-circle-down',
			    'icon-fullscreen' => 'fa-arrows-alt',
			    'icon-beaker' => 'fa-flask',
			    'icon-paper-clip' => 'fa-paperclip',
			    'icon-sign-blank' => 'fa-square',
			    'icon-pinterest-sign' => 'fa-pinterest-square',
			    'icon-google-plus-sign' => 'fa-google-plus-square',
			    'icon-envelope-alt' => 'fa-envelope',
			    'icon-comment-alt' => 'fa-comment-o',
			    'icon-comments-alt' => 'fa-comments-o'
		    );

		    if( in_array( $class, array_keys( $exceptions ) ) ){
			    $class = $exceptions[ $class ];
		    }

		    $class = str_replace( 'icon-', 'fa-', $class );

		    return $class;
	    }

        /* === REQUEST HANDLING METHODS === */

        /**
         * Adds an element to wishlist when default AJAX method cannot be used
         *
         * @return void
         * @since 2.0.0
         */
        public function add_to_wishlist(){
            // add item to wishlist when javascript is not enabled
            if( isset( $_GET['add_to_wishlist'] ) ) {
                $this->add();
            }
        }

        /**
         * Removes an element from wishlist when default AJAX method cannot be used
         *
         * @return void
         * @since 2.0.0
         */
        public function remove_from_wishlist(){
            // remove item from wishlist when javascript is not enabled
            if( isset( $_GET['remove_from_wishlist'] ) ){
                $this->remove();
            }
        }

        /**
         * Removes an element after add to cart, if option is enabled in panel
         *
         * @return void
         * @since 2.0.0
         */
        public function remove_from_wishlist_after_add_to_cart() {
            if( get_option( 'yith_wcwl_remove_after_add_to_cart' ) == 'yes' ){
                if( isset( $_REQUEST['remove_from_wishlist_after_add_to_cart'] ) ) {

                    $this->details['remove_from_wishlist'] = $_REQUEST['remove_from_wishlist_after_add_to_cart'];

                    if ( isset( $_REQUEST['wishlist_id'] ) ) {
                        $this->details['wishlist_id'] = $_REQUEST['wishlist_id'];
                    }
                }
                elseif( yith_wcwl_is_wishlist() ){
                    $this->details['remove_from_wishlist'] = $_REQUEST['add-to-cart'];

                    if ( isset( $_REQUEST['wishlist_id'] ) ) {
                        $this->details['wishlist_id'] = $_REQUEST['wishlist_id'];
                    }
                }

                $this->remove();
            }
        }

        /**
         * Redirect to cart after "Add to cart" button pressed on wishlist table
         *
         * @param $url string Original redirect url
         * @param $product \WC_Product Product added to cart
         * @return string Redirect url
         * @since 2.0.0
         */
        public function redirect_to_cart( $url, $product ) {
	        global $yith_wcwl_wishlist_token;

	        $wishlist = $this->get_wishlist_detail_by_token( $yith_wcwl_wishlist_token );
	        $wishlist_id = $wishlist['ID'];

            if( $product->is_type( 'simple' ) && get_option( 'yith_wcwl_redirect_cart' ) == 'yes' ){
                if( ! ( defined( 'DOING_AJAX' ) && DOING_AJAX ) && yith_wcwl_is_wishlist() ){
                    $url = add_query_arg( 'add-to-cart', yit_get_product_id( $product ), wc_get_cart_url() );
                }
            }

            if( ! $product->is_type( 'external' ) && get_option( 'yith_wcwl_remove_after_add_to_cart' ) == 'yes' ){
                if( ! ( defined( 'DOING_AJAX' ) && DOING_AJAX ) && yith_wcwl_is_wishlist() ) {
                    $url = add_query_arg(
	                    array(
		                    'remove_from_wishlist_after_add_to_cart' => yit_get_product_id( $product ),
		                    'wishlist_id' => $wishlist_id,
		                    'wishlist_token' => $yith_wcwl_wishlist_token
	                    ),
	                    $url
                    );
                }
            }

            return apply_filters( 'yit_wcwl_add_to_cart_redirect_url', esc_url_raw( $url ), $url,$product );
        }

        /**
         * AJAX: add to wishlist action
         * 
         * @return void
         * @since 1.0.0
         */
        public function add_to_wishlist_ajax() {
            $return = $this->add();
            $message = '';
            $user_id = isset( $this->details['user_id'] ) ? $this->details['user_id'] : false;
            $wishlists = array();

            if( $return == 'true' ){
                $message = apply_filters( 'yith_wcwl_product_added_to_wishlist_message', get_option( 'yith_wcwl_product_added_text' ) );
            }
            elseif( $return == 'exists' ){
                $message = apply_filters( 'yith_wcwl_product_already_in_wishlist_message', get_option( 'yith_wcwl_already_in_wishlist_text' ) );
            }
            elseif( count( $this->errors ) > 0 ){
                $message = apply_filters( 'yith_wcwl_error_adding_to_wishlist_message', $this->get_errors() );
            }

            if( $user_id != false ){
                $wishlists = $this->get_wishlists( array( 'user_id' => $user_id ) );
            }

            wp_send_json(
                array(
                    'result' => $return,
                    'message' => $message,
                    'user_wishlists' => $wishlists,
                    'wishlist_url' => $this->get_wishlist_url( 'view' . ( isset( $this->last_operation_token ) ? ( '/' . $this->last_operation_token ) : false ) ),
                )
            );
        }
        
        /**
         * AJAX: remove from wishlist action
         * 
         * @return void
         * @since 1.0.0
         */
        public function remove_from_wishlist_ajax() {
            $wishlist_token = isset( $this->details['wishlist_token'] ) ? $this->details['wishlist_token'] : false;
            $count = $this->count_products( $wishlist_token );
            $message = '';

            if( $count != 0 ) {
                if ( $this->remove() ) {
                    $message = apply_filters( 'yith_wcwl_product_removed_text', __( 'Product successfully removed.', 'yith-woocommerce-wishlist' ) );
                    $count --;
                }
                else {
                    $message = apply_filters( 'yith_wcwl_unable_to_remove_product_message', __( 'Error. Unable to remove the product from the wishlist.', 'yith-woocommerce-wishlist' ) );
                }
            }
            else{
                $message = apply_filters( 'yith_wcwl_no_product_to_remove_message', __( 'No products were added to the wishlist', 'yith-woocommerce-wishlist' ) );
            }

            wc_add_notice( $message );

            $atts = array( 'wishlist_id' => $wishlist_token );
            if( isset( $this->details['pagination'] ) ){
                $atts['pagination'] = $this->details['pagination'];
            }

            if( isset( $this->details['per_page'] ) ){
                $atts['per_page'] = $this->details['per_page'];
            }

            echo YITH_WCWL_Shortcode::wishlist( $atts );
            die();
        }

	    /*******************************************
	     * INTEGRATION WC Frequently Bought Together
	     *******************************************/

	    /**
	     * AJAX: reload wishlist and adding elem action
	     *
	     * @return void
	     * @since 1.0.0
	     */
	    public function reload_wishlist_and_adding_elem_ajax() {

		    $return     = $this->add();
		    $message    = '';
		    $type_msg   = 'success';

		    if( $return == 'true' ){
			    $message = apply_filters( 'yith_wcwl_product_added_to_wishlist_message', get_option( 'yith_wcwl_product_added_text' ) );
		    }
		    elseif( $return == 'exists' ){
			    $message = apply_filters( 'yith_wcwl_product_already_in_wishlist_message', get_option( 'yith_wcwl_already_in_wishlist_text' ) );
			    $type_msg = 'error';
		    }
		    else {
			    $message = apply_filters( 'yith_wcwl_product_removed_text', __( 'An error as occurred.', 'yith-woocommerce-wishlist' ) );
			    $type_msg = 'error';
		    }

		    $wishlist_token = isset( $this->details['wishlist_token'] ) ? $this->details['wishlist_token'] : false;

		    $atts = array( 'wishlist_id' => $wishlist_token );
		    if( isset( $this->details['pagination'] ) ){
			    $atts['pagination'] = $this->details['pagination'];
		    }

		    if( isset( $this->details['per_page'] ) ){
			    $atts['per_page'] = $this->details['per_page'];
		    }

		    ob_start();

		    wc_add_notice( $message, $type_msg );

		    echo '<div>'. YITH_WCWL_Shortcode::wishlist( $atts ) . '</div>';

		    echo ob_get_clean();
		    die();

	    }

	    /**
	     * redirect after add to cart from YITH WooCommerce Frequently Bought Together Premium shortcode
	     *
	     * @since 1.0.0
	     */
	    public function yith_wfbt_redirect_after_add_to_cart( $url ){
		    if( ! isset( $_REQUEST['yith_wfbt_shortcode'] ) ) {
			    return $url;
		    }

            $cart_url = function_exists( 'wc_get_cart_url' ) ? wc_get_cart_url() : WC()->cart->get_cart_url();

			return get_option( 'yith_wcwl_redirect_cart' ) == 'yes' ? $cart_url : $this->get_wishlist_url();
	    }
    }
}

/**
 * Unique access to instance of YITH_WCWL class
 *
 * @return \YITH_WCWL
 * @since 2.0.0
 */
function YITH_WCWL(){
    return YITH_WCWL::get_instance();
}