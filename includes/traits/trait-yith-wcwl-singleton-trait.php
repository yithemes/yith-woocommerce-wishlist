<?php
/**
 * Singleton class trait.
 *
 * @package YITH\Wishlist\Traits
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly

/**
 * Singleton trait.
 */
trait YITH_WCWL_Singleton_Trait {
	/**
	 * The single instance of the class.
	 *
	 * @var self
	 */
	protected static $instance = null;

	/**
	 * Constructor
	 *
	 * @return void
	 */
	protected function __construct() {
	}

	/**
	 * Get class instance.
	 *
	 * @return self
	 */
	final public static function get_instance() {
		return ! is_null( static::$instance ) ? static::$instance : static::$instance = new static();
	}

	/**
	 * Prevent cloning.
	 */
	private function __clone() {
	}
}
