<?php
/**
 * Install file
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.10
 */

if ( !defined( 'YITH_WCWL' ) ) { exit; } // Exit if accessed directly

if( !function_exists( 'yith_wcwl_is_wishlist' ) ){
    /**
     * Check if we're printing wishlist shortcode
     *
     * @return bool
     * @since 2.0.0
     */
    function yith_wcwl_is_wishlist(){
        global $yith_wcwl_is_wishlist;

        return $yith_wcwl_is_wishlist;
    }
}

if( !function_exists( 'yith_wcwl_is_wishlist_page' ) ){
    /**
     * Check if current page is wishlist
     *
     * @return bool
     * @since 2.0.13
     */
    function yith_wcwl_is_wishlist_page(){
        $wishlist_page_id = yith_wcwl_object_id( get_option( 'yith_wcwl_wishlist_page_id' ) );

        if( ! $wishlist_page_id ){
            return false;
        }

        return is_page( $wishlist_page_id );
    }
}

if( !function_exists( 'yith_wcwl_locate_template' ) ) {
    /**
     * Locate the templates and return the path of the file found
     *
     * @param string $path
     * @param array $var
     * @return void
     * @since 1.0.0
     */
    function yith_wcwl_locate_template( $path, $var = NULL ){
        $woocommerce_base = WC()->template_path();

    	$template_woocommerce_path =  $woocommerce_base . $path;
        $template_path = '/' . $path;
        $plugin_path = YITH_WCWL_DIR . 'templates/' . $path;
    	
    	$located = locate_template( array(
            $template_woocommerce_path, // Search in <theme>/woocommerce/
            $template_path,             // Search in <theme>/
        ) );

        if( ! $located && file_exists( $plugin_path ) ){
            return apply_filters( 'yith_wcwl_locate_template', $plugin_path, $path );
        }

        return apply_filters( 'yith_wcwl_locate_template', $located, $path );
    }
}

if( !function_exists( 'yith_wcwl_get_template' ) ) {
    /**
     * Retrieve a template file.
     * 
     * @param string $path
     * @param mixed $var
     * @param bool $return
     * @return void
     * @since 1.0.0
     */
    function yith_wcwl_get_template( $path, $var = null, $return = false ) {
        $located = yith_wcwl_locate_template( $path, $var );      
        
        if ( $var && is_array( $var ) ) {
	        extract( $var );
        }
                               
        if( $return ) {
        	ob_start();
        }
                                                                     
        // include file located
        include( $located );
        
        if( $return ) {
        	return ob_get_clean();
        }
    }
}

if( !function_exists( 'yith_wcwl_count_products' ) ) {
    /**
     * Retrieve the number of products in the wishlist.
     *
     * @param $wishlist_token string|bool Optional wishlist token
     * 
     * @return int
     * @since 1.0.0
     */
    function yith_wcwl_count_products( $wishlist_token = false ) {
        return YITH_WCWL()->count_products( $wishlist_token );
    }
}

if( !function_exists( 'yith_wcwl_count_all_products' ) ) {
    /**
     * Retrieve the number of products in all the wishlists.
     *
     * @return int
     * @since 2.0.13
     */
    function yith_wcwl_count_all_products() {
        return YITH_WCWL()->count_all_products();
    }
}

if( !function_exists( 'yith_wcwl_count_add_to_wishlist' ) ){
    /**
     * Count number of times a product was added to users wishlists
     *
     * @param $product_id int|bool Product id
     *
     * @return int Number of times the product was added to wishlists
     * @since 2.0.13
     */
    function yith_wcwl_count_add_to_wishlist( $product_id = false ){
        return YITH_WCWL()->count_add_to_wishlist( $product_id );
    }
}

if( !function_exists( 'yith_frontend_css_color_picker' ) ) {
    /**
     * Output a colour picker input box.
     * 
     * This function is not of the plugin YITH WCWL. It is from WooCommerce.
     * We redeclare it only because it is needed in the tab "Styles" where it is not available.
     * The original function name is woocommerce_frontend_css_colorpicker and it is declared in
     * wp-content/plugins/woocommerce/admin/settings/settings-frontend-styles.php
     *
     * @access public
     * @param mixed $name
     * @param mixed $id
     * @param mixed $value
     * @param string $desc (default: '')
     * @return void
     */
    function yith_frontend_css_color_picker( $name, $id, $value, $desc = '' ) {
    	$value = ! empty( $value ) ? $value : '#ffffff';

        echo '<div  class="color_box">
                  <table><tr><td>
                  <strong>' . $name . '</strong>
       		      <input name="' . esc_attr( $id ). '" id="' . $id . '" type="text" value="' . esc_attr( $value ) . '" class="colorpick colorpickpreview" style="background-color: ' . $value . '" /> <div id="colorPickerDiv_' . esc_attr( $id ) . '" class="colorpickdiv"></div>
       		      </td></tr></table>
       		  </div>';
    
    }
}

if( !function_exists( 'yith_setcookie' ) ) {
    /**
     * Create a cookie.
     * 
     * @param string $name
     * @param mixed $value
     * @param int $time
     * @return bool
     * @since 1.0.0
     */
    function yith_setcookie( $name, $value = array(), $time = null ) {
    	if( ! apply_filters( 'yith_wcwl_set_cookie', true ) ){
    		return false;
	    }

        $time = $time != null ? $time : time() + apply_filters( 'yith_wcwl_cookie_expiration', 60 * 60 * 24 * 30 );

        $value = json_encode( stripslashes_deep( $value ) );
        $expiration = apply_filters( 'yith_wcwl_cookie_expiration_time', $time ); // Default 30 days

        $_COOKIE[ $name ] = $value;
	    wc_setcookie( $name, $value, $expiration, false );

	    return true;
    }
}

if( !function_exists( 'yith_getcookie' ) ) {
    /**
     * Retrieve the value of a cookie.
     * 
     * @param string $name
     * @return mixed
     * @since 1.0.0
     */
    function yith_getcookie( $name ) {
        if( isset( $_COOKIE[$name] ) ) {
	        return json_decode( stripslashes( $_COOKIE[$name] ), true );
        }
        
        return array();
    }
}

if( !function_exists( 'yith_usecookies' ) ) {
    /**
     * Check if the user want to use cookies or not.
     * 
     * @return bool
     * @since 1.0.0
     */
    function yith_usecookies() {
        return get_option( 'yith_wcwl_use_cookie' ) == 'yes' ? true : false;
    }
}

if( !function_exists ( 'yith_destroycookie' ) ) {
    /**
     * Destroy a cookie.
     * 
     * @param string $name
     * @return void
     * @since 1.0.0
     */
    function yith_destroycookie( $name ) {
        yith_setcookie( $name, array(), time() - 3600 );
    }
}

if( !function_exists( 'yith_wcwl_object_id' ) ){
    /**
     * Retrieve translated page id, if wpml is installed
     *
     * @param $id int Original page id
     * @return int Translation id
     * @since 1.0.0
     */
    function yith_wcwl_object_id( $id ){
        if( function_exists( 'wpml_object_id_filter' ) ){
            return wpml_object_id_filter( $id, 'page', true );
        }
        elseif( function_exists( 'icl_object_id' ) ){
            return icl_object_id( $id, 'page', true );
        }
        else{
            return $id;
        }
    }
}

if( !function_exists( 'yith_wcwl_get_hidden_products' ) ){
    /**
     * Retrieves a list of hidden products, whatever WC version is running
     *
     * WC switched from meta _visibility to product_visibility taxonomy since version 3.0.0,
     * forcing a split handling (Thank you, WC!)
     * 
     * @return array List of hidden product ids
     * @since 2.1.1
     */
    function yith_wcwl_get_hidden_products(){
        global $wpdb;
        $hidden_products = array();

        if( version_compare( WC()->version, '3.0.0', '<' ) ){
            $query = "SELECT p.ID
                      FROM {$wpdb->posts} AS p
                      LEFT JOIN {$wpdb->postmeta} AS pm ON p.ID = pm.post_id
                      WHERE meta_key = %s AND meta_value <> %s";
            $query_args = array(
                '_visibility',
                'visible'
            );
        }
        else{
            $product_visibility_term_ids = wc_get_product_visibility_term_ids();
            $query = "SELECT tr.object_id 
                      FROM {$wpdb->term_relationships} AS tr
                      LEFT JOIN {$wpdb->term_taxonomy} AS tt USING( term_taxonomy_id ) 
                      WHERE tt.taxonomy = %s AND tr.term_taxonomy_id = %d";
            $query_args = array(
                'product_visibility',
                $product_visibility_term_ids['exclude-from-catalog'] 
            );
        }

        $hidden_products = $wpdb->get_col( $wpdb->prepare( $query, $query_args ) );

        /**
         * array_filter was added to prevent errors when previous query returns for some reason just 0 index
         * @since 2.2.6
         */
        return apply_filters( 'yith_wcwl_hidden_products', array_filter( $hidden_products ) );
    }
}