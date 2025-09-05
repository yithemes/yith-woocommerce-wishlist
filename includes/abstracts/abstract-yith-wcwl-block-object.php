<?php
/**
 * Class to handle the base behaviour of a Block object
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'Abstract_YITH_WCWL_Block_Object' ) ) {
	class Abstract_YITH_WCWL_Block_Object {
		use YITH_WCWL_Rendering_Method_Access_Trait;

		/**
		 * The options array
		 *
		 * @var array
		 */
		static protected $options = array();

		/**
		 * The object type
		 *
		 * @var string
		 */
		static protected $object_type = '';

		/**
		 * The object data
		 *
		 * @var array
		 */
		protected $data = array();

		protected function __construct() {
			static::maybe_register_scripts();

		}

		/**
		 * Register scripts and style
		 */
		public static function maybe_register_scripts() {
		}

		/**
		 * Register scripts and style
		 */
		public static function enqueue_style() {
		}

		/**
		 * Set property
		 *
		 * @param string $prop  The property name.
		 * @param mixed  $value The property value.
		 */
		protected function set_prop( $prop, $value ) {
			$this->data[ $prop ] = $value;
		}

		/**
		 * Gets a prop for a getter method.
		 *
		 * @param string $prop    Name of prop to get.
		 * @param string $context What the value is for. Valid values are view and edit.
		 * @return mixed
		 * @since  3.0.0
		 */
		protected function get_prop( $prop, $context = 'view' ) {
			$value = null;

			if ( array_key_exists( $prop, $this->data ) ) {
				$value = $this->data[ $prop ];

				if ( 'view' === $context ) {
					$value = apply_filters( static::get_hook_prefix() . 'get_' . $prop, $value, $this );
				}
			}

			return $value;
		}

		/**
		 * Populate the object using an array of data
		 *
		 * @param array $data The data to populate the object
		 */
		protected function populate( $data ) {
			foreach ( $data as $prop => $value ) {
				$setter = "set_$prop";
				if ( method_exists( $this, $setter ) ) {
					$this->{$setter}( $value );
				}
			}
		}

		static public function get_hook_prefix() {
			return 'yith_wcwl_' . static::$object_type . '_';
		}

		/**
		 * Maybe initialize options with a static value that needs function calling
		 * such as localized strings
		 */
		static protected function maybe_init_static_options() {
		}

		/**
		 * Get Add To Wishlist button option
		 *
		 * @param string $option  The option name.
		 * @param mixed  $default The default value to return if the option does not exist.
		 * @return mixed
		 */
		static public function get_option( $option, $default = false ) {
			static::$options = array_merge( self::get_extended_options(), static::$options );
			static::maybe_init_static_options();

			if ( ! isset( static::$options[ $option ][ 'value' ] ) ) {
				if ( ! array_key_exists( $option, static::$options ) ) {
					static::$options[ $option ] = array();
				}

				$value = $default;

				if ( ! empty( static::$options[ $option ][ 'name' ] ) ) {
					$option_value = get_option( static::$options[ $option ][ 'name' ], null );
					if ( ! is_null( $option_value ) ) {
						$value                                 = $option_value;
						static::$options[ $option ][ 'value' ] = $value;
					} elseif(isset(static::$options[ $option ][ 'default' ])){
						$value = static::$options[ $option ][ 'default' ];
					}
				} elseif ( isset( $static_options[ $option ] ) ) {
					$value                                 = $static_options[ $option ];
					static::$options[ $option ][ 'value' ] = $value;
				}
			} else {
				$value = static::$options[ $option ][ 'value' ];
			}

			$value = apply_filters( static::get_hook_prefix() . $option . '_option', $value, $default );

			return $value;
		}

		/**
		 * Get the array of options
		 *
		 * TODO: handle the behavior when different classes extends this abstract class
		 *
		 * @return array
		 */
		protected static function get_extended_options() {
			static $extended_options = array();
			if ( ! $extended_options ) {
				foreach ( get_declared_classes() as $class_name ) {
					if ( is_subclass_of( $class_name, __CLASS__ ) ) {
						$extended_options = array_merge( $extended_options, $class_name::$options );
					}
				}
			}

			return $extended_options;
		}

		/**
		 * Get the instance of the most extended version available
		 *
		 * @param array $data The instance Data
		 * @return YITH_WCWL_Add_To_Wishlist_Button|YITH_WCWL_Add_To_Wishlist_Button_Premium
		 */
		public static function get( $data = array() ) {
			$class = self::get_class();
			return new $class( $data );
		}

		/**
		 * Get the classname of the most extended class available
		 *
		 * @return self
		 */
		public static function get_class() {
			$extensions = array_keys(
				array_filter(
					array(
						'_Premium'  => defined( 'YITH_WCWL_PREMIUM' ) && YITH_WCWL_PREMIUM,
						'_Extended' => defined( 'YITH_WCWL_EXTENDED' ) && YITH_WCWL_EXTENDED,
					)
				)
			);

			$called_class = get_called_class();
			$class        = $called_class;

			$extensions_regex = array_map(
				function ( $extension ) {
					return '/' . preg_quote( $extension, '/' ) . '$/';
				},
				$extensions
			);

			$base_class = preg_replace( $extensions_regex, '', $called_class );

			foreach ( $extensions as $extension ) {
				$extension_class = $base_class . $extension;
				if ( class_exists( $extension_class ) ) {
					$class = $extension_class;
					break;
				}
			}

			return $class;
		}

		/**
		 * Get global options
		 *
		 * @return array
		 */
		public static function get_global_options() {
			static $global_options = null;
			if ( is_null( $global_options ) ) {
				static::$options = array_merge( self::get_extended_options(), static::$options );
				static::maybe_init_static_options();

				foreach ( static::$options as $name => $option ) {
					$global_options[ $name ] = $option[ 'value' ] ?? get_option( $option[ 'name' ], $option[ 'default' ] ?? false );
				}
			}

			return $global_options;
		}
	}
}
