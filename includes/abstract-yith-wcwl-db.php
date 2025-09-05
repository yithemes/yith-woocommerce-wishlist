<?php
/**
 * Handle DB tables and actions
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @version 4.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YITH_WCWL_DB' ) ) {
	/**
	 * Class YITH_WCWL_DB
	 *
	 * @abstract
	 */
	abstract class YITH_WCWL_DB {

		// Version and option name.
		const DB_VERSION = '4.0.0';
		const DB_VERSION_OPTION = 'yith_wcwl_db_version';

		// Table names.
		const WISHLIST_ITEMS_TABLE = 'yith_wcwl';
		const WISHLISTS_TABLE = 'yith_wcwl_lists';
		const WISHLIST_ITEM_META_TABLE = 'yith_wcwl_itemmeta';

		/**
		 * Check if DB needs to be updated, and do it if so
		 */
		static public function maybe_update() {
			if ( version_compare( self::get_current_version(), self::DB_VERSION, '<' ) ) {
				self::create_tables();

				if ( self::has_tables() ) {
					update_option( self::DB_VERSION_OPTION, self::DB_VERSION );
				}
			}
		}

		/**
		 * Register custom tables in $wpdb global object
		 */
		static public function define_tables() {
			global $wpdb;
			$tables = array(
				'yith_wcwl_items'     => self::WISHLIST_ITEMS_TABLE,
				'yith_wcwl_wishlists' => self::WISHLISTS_TABLE,
				'yith_wcwl_itemmeta'  => self::WISHLIST_ITEM_META_TABLE,
			);

			foreach ( $tables as $name => $table ) {
				$wpdb->$name    = $wpdb->prefix . $table;
				$wpdb->tables[] = $table;
			}

			// TODO: maybe deprecate these constants
			define( 'YITH_WCWL_ITEMS_TABLE', $wpdb->prefix . self::WISHLIST_ITEMS_TABLE );
			define( 'YITH_WCWL_WISHLISTS_TABLE', $wpdb->prefix . self::WISHLISTS_TABLE );
		}

		/**
		 * Run SQL command to create (or update) tables.
		 */
		static private function create_tables() {
			global $wpdb;

			//$wpdb->hide_errors();

			require_once ABSPATH . 'wp-admin/includes/upgrade.php';

			$wishlist_items_table     = $wpdb->prefix . self::WISHLIST_ITEMS_TABLE;
			$wishlists_table          = $wpdb->prefix . self::WISHLISTS_TABLE;
			$wishlist_item_meta_table = $wpdb->prefix . self::WISHLIST_ITEM_META_TABLE;

			$collate = '';

			// Used since the 4.0 Version, so it's used just for the new tables
			if ( method_exists( $wpdb, 'has_cap' ) && $wpdb->has_cap( 'collation' ) ) {
				$collate = $wpdb->get_charset_collate();
			}

			$sql = "CREATE TABLE {$wishlists_table} (
							ID BIGINT( 20 ) NOT NULL AUTO_INCREMENT,
							user_id BIGINT( 20 ) NULL DEFAULT NULL,
							session_id VARCHAR( 255 ) DEFAULT NULL,
							wishlist_slug VARCHAR( 200 ) NOT NULL,
							wishlist_name TEXT,
							wishlist_token VARCHAR( 64 ) NOT NULL UNIQUE,
							wishlist_privacy TINYINT( 1 ) NOT NULL DEFAULT 0,
							is_default TINYINT( 1 ) NOT NULL DEFAULT 0,
							dateadded timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
							expiration timestamp NULL DEFAULT NULL,
							PRIMARY KEY  ( ID ),
							KEY wishlist_slug ( wishlist_slug )
						) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

						CREATE TABLE {$wishlist_items_table} (
							ID BIGINT( 20 ) NOT NULL AUTO_INCREMENT,
							prod_id BIGINT( 20 ) NOT NULL,
							quantity INT( 11 ) NOT NULL,
							user_id BIGINT( 20 ) NULL DEFAULT NULL,
							wishlist_id BIGINT( 20 ) NULL,
							position INT( 11 ) DEFAULT 0,
							original_price DECIMAL( 9,3 ) NULL DEFAULT NULL,
							original_currency CHAR( 3 ) NULL DEFAULT NULL,
							dateadded timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
							on_sale tinyint NOT NULL DEFAULT 0,
							PRIMARY KEY  ( ID ),
							KEY prod_id ( prod_id )
						) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

						CREATE TABLE {$wishlist_item_meta_table} (
							meta_id BIGINT( 20 ) NOT NULL AUTO_INCREMENT,
							yith_wcwl_item_id BIGINT( 20 ) NOT NULL,
							meta_key varchar(255) NULL,
							meta_value longtext NULL,
							PRIMARY KEY  ( meta_id ),
							KEY item_id ( yith_wcwl_item_id ),
							KEY meta_key ( meta_key )
						) $collate;
					";

			dbDelta( $sql );
		}

		/**
		 * Get the DB version
		 *
		 * @return string
		 */
		static public function get_current_version() {
			return get_option( self::DB_VERSION_OPTION, '0.0.0' );
		}

		/**
		 * Check if all the plugin custom tables exists
		 *
		 * @return bool
		 */
		static public function has_tables() {
			global $wpdb;
			$tables_common_prefix = $wpdb->prefix . self::WISHLIST_ITEMS_TABLE;
			$number_of_tables     = (int) $wpdb->query( $wpdb->prepare( 'SHOW TABLES LIKE %s', "{$tables_common_prefix}%" ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery

			return 3 === $number_of_tables;
		}
	}
}
