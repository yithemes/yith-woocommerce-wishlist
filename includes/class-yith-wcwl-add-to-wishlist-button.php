<?php
/**
 * Add to wishlist button handler
 *
 * @package YITH\Wishlist\Classes
 * @author  YITH <plugins@yithemes.com>
 * @since   4.0
 */

defined( 'YITH_WCWL' ) || exit; // Exit if accessed directly

if ( ! class_exists( 'YITH_WCWL_Add_To_Wishlist_Button' ) ) {
	/**
	 * @class YITH_WCWL_Add_To_Wishlist_Button
	 */
	class YITH_WCWL_Add_To_Wishlist_Button extends Abstract_YITH_WCWL_Block_Object {

		static protected $object_type = 'add_to_wishlist_button';

		/**
		 * @var array
		 */
		protected static $options = array(
			'wishlist_disabled_for_unauthenticated_users' => array(
				'name'    => 'yith_wcwl_disable_wishlist_for_unauthenticated_users',
				'default' => 'no',
			),
			'loop_position'                               => array(
				'name' => 'yith_wcwl_loop_position',
			),
			'ajax_loading'                                => array(
				'name' => 'yith_wcwl_ajax_enable',
			),
			'icon_type'                                   => array(
				'name'    => 'yith_wcwl_add_to_wishlist_icon_type',
				'default' => 'default',
			),
			'icon'                                        => array(
				'name'    => 'yith_wcwl_add_to_wishlist_icon',
				'default' => 'heart-outline',
			),
			'custom_icon'                                 => array(
				'name' => 'yith_wcwl_add_to_wishlist_custom_icon',
			),
			'added_icon_type'                             => array(
				'name'    => 'yith_wcwl_added_to_wishlist_icon_type',
				'default' => 'default',
			),
			'added_icon'                                  => array(
				'name'    => 'yith_wcwl_added_to_wishlist_icon',
				'default' => 'heart',
			),
			'custom_added_icon'                           => array(
				'name' => 'yith_wcwl_added_to_wishlist_custom_icon',
			),
			'custom_icon_alt'                             => array(
				'value' => '',
			),
			'custom_icon_width'                           => array(
				'value' => '25',
			),
			'behaviour'                                   => array(
				'name' => 'yith_wcwl_after_add_to_wishlist_behaviour',
			),
			'style'                                       => array(
				'name' => 'yith_wcwl_add_to_wishlist_style',
			),
		);

		/**
		 * the object data
		 *
		 * @var array
		 */
		protected $data = array(
			'product_id'        => false,
			'parent_product_id' => false,
			'icon_type'         => '',
			'icon'              => '',
			'added_icon_type'   => '',
			'added_icon'        => '',
			'custom_icon'       => '',
			'custom_added_icon' => '',
			'wishlist'          => false,
			'label'             => '',
			'added_label'       => '',
			'browse_label'      => '',
			'already_in_label'  => '',
			'is_single'         => null,
			'ajax_loading'      => null,
		);

		/**
		 * The YITH_WCWL_Add_To_Wishlist_Button construct.
		 *
		 * @param array $data The button data.
		 */
		public function __construct( $data = array() ) {
			parent::__construct();
			if ( is_array( $data ) ) {
				$this->populate( $data );
			}
		}

		/* === SETTERS === */

		/**
		 * Setter for 'icon' property
		 *
		 * @param string $icon The icon.
		 */
		public function set_icon( $icon ) {
			if ( in_array( $icon, array( 'fa-heart-o', 'fa-heart', 'custom', 'none' ) ) ) {
				$this->set_prop( 'icon', $icon );
			}
		}

		/**
		 * Setter for 'added_icon' property
		 *
		 * @param string $icon The added_icon.
		 */
		public function set_added_icon( $icon ) {
			if ( in_array( $icon, array( 'fa-heart-o', 'fa-heart', 'custom', 'none' ) ) ) {
				$this->set_prop( 'added_icon', $icon );
			}
		}

		/**
		 * Setter for 'custom_icon' property
		 *
		 * @param string $custom_icon The custom_icon.
		 */
		public function set_custom_icon( $custom_icon ) {
			$this->set_prop( 'custom_icon', $custom_icon );
		}

		/**
		 * Setter for 'custom_added_icon' property
		 *
		 * @param string $custom_icon The custom_added_icon.
		 */
		public function set_custom_added_icon( $custom_icon ) {
			$this->set_prop( 'custom_added_icon', $custom_icon );
		}

		/**
		 * Setter for 'product_id' property
		 *
		 * @param int $product_id The product_id.
		 */
		public function set_product_id( $product_id ) {
			if ( $product_id instanceof WC_Product ) {
				$product_id = $product_id->get_id();
			} elseif ( $product_id instanceof WP_Post ) {
				$product_id = $product_id->ID;
			}

			$product_id = absint( $product_id );

			$this->set_prop( 'product_id', $product_id );
		}

		/**
		 * Setter for 'label' property
		 *
		 * @param string $label The label.
		 */
		public function set_label( $label ) {
			if ( is_string( $label ) ) {
				$this->set_prop( 'add_label', $label );
			}
		}

		/**
		 * Setter for 'added_label' property
		 *
		 * @param string $label The added_label.
		 */
		public function set_added_label( $label ) {
			if ( is_string( $label ) ) {
				$this->set_prop( 'added_label', $label );
			}
		}

		/**
		 * Setter for 'browse_label' property
		 *
		 * @param string $label The browse_label.
		 */
		public function set_browse_label( $label ) {
			if ( is_string( $label ) ) {
				$this->set_prop( 'browse_label', $label );
			}
		}

		/**
		 * Setter for 'already_in_label' property
		 *
		 * @param string $label The already_in_label.
		 */
		public function set_already_in_label( $label ) {
			if ( is_string( $label ) ) {
				$this->set_prop( 'already_in_label', $label );
			}
		}

		/**
		 * Setter for 'is_single' property
		 *
		 * @param string $is_single Whether it's single page or loop.
		 */
		public function set_is_single( $is_single ) {
			$this->set_prop( 'is_single', ! ! $is_single );
		}

		/**
		 * Setter for 'ajax_loading' property
		 *
		 * @param string $ajax_loading Whether load the content in ajax or not.
		 */
		public function set_ajax_loading( $ajax_loading ) {
			$this->set_prop( 'ajax_loading', wc_string_to_bool( $ajax_loading ) );
		}

		/* === GETTERS === */

		/**
		 * Getter for 'icon' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_icon( $context = 'view' ) {
			$icon = 'custom';
			if ( 'custom' !== self::get_option( 'icon_type' ) ) {
				$icon = $this->get_prop( 'icon', $context );
			}

			return $icon ?: self::get_option( 'icon' );
		}

		/**
		 * Getter for 'added_icon' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_added_icon_type( $context = 'view' ) {
			$icon_type = $this->get_prop( 'added_icon_type', $context );

			return $icon_type ?: self::get_option( 'added_icon_type' );
		}

		/**
		 * Getter for 'added_icon' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_added_icon( $context = 'view' ) {
			$icon_type = $this->get_added_icon_type( $context );
			switch ( $icon_type ) {
				case 'same':
				case 'custom':
					$icon = $icon_type;
					break;
				default:
					$icon = $this->get_prop( 'added_icon', $context );
					break;
			}

			return $icon ?: self::get_option( 'added_icon' );
		}

		/**
		 * Getter for 'custom_icon' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_custom_icon( $context = 'view' ) {
			$custom_icon = $this->get_prop( 'custom_icon', $context );
			return $custom_icon ?: self::get_option( 'custom_icon' );
		}

		/**
		 * Getter for 'custom_added_icon' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_custom_added_icon( $context = 'view' ) {
			$added_icon = $this->get_added_icon( $context );
			if ( 'same' === $added_icon ) {
				$custom_icon = $this->get_custom_icon( $context );
			} else {
				$custom_icon = $this->get_prop( 'custom_added_icon', $context );
			}

			return $custom_icon ?: self::get_option( 'custom_added_icon' );
		}

		/**
		 * Getter for 'product_id' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return int
		 */
		public function get_product_id( $context = 'view' ) {
			$product_id = $this->get_prop( 'product_id', $context );
			if ( ! $product_id ) {
				$product    = wc_get_product();
				$product_id = $product ? $product->get_id() : false;
				if ( $product_id ) {
					$this->set_product_id( $product_id );
				}
			}
			return $product_id;
		}

		/**
		 * Return the product object
		 *
		 * @return false|WC_Product|null
		 */
		public function get_product() {
			return wc_get_product( $this->get_product_id() );
		}

		/**
		 * Getter for 'parent_product_id' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return int
		 */
		public function get_parent_product_id( $context = 'view' ) {
			$product = $this->get_product();

			return $product ? $product->get_parent_id() : false;
		}

		/**
		 * Getter for 'label' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_add_label( $context = 'view' ) {
			$label = $this->get_prop( 'add_label', $context );
			return $label ?: self::get_option( 'add_label' );
		}

		/**
		 * Getter for 'added_label' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_added_label( $context = 'view' ) {
			$label = $this->get_prop( 'added_label', $context );
			return $label ?: self::get_option( 'added_label' );
		}

		/**
		 * Getter for 'browse_label' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_browse_label( $context = 'view' ) {
			$label = $this->get_prop( 'browse_label', $context );
			return $label ?: self::get_option( 'browse_label' );
		}

		/**
		 * Getter for 'already_in_label' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return string
		 */
		public function get_already_in_label( $context = 'view' ) {
			$label = $this->get_prop( 'already_in_label', $context );
			return $label ?: self::get_option( 'already_in_label' );
		}

		/**
		 * Getter for 'is_single' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return bool
		 */
		public function get_is_single( $context = 'view' ) {
			$is_single = $this->get_prop( 'is_single', $context );

			return ! ! ( is_null( $is_single ) ? yith_wcwl_is_single() : $is_single );
		}

		/**
		 * Getter for 'is_single' property
		 *
		 * @param string $context What the value is for. Valid values are view and edit.
		 *
		 * @return bool
		 */
		public function get_ajax_loading( $context = 'view' ) {
			$ajax_loading = $this->get_prop( 'ajax_loading', $context );

			return ! ! ( is_bool( $ajax_loading ) ? $ajax_loading : 'yes' === self::get_option( 'ajax_loading' ) );
		}

		/* === CONDITIONALS === */

		/**
		 * Check if the product is already in the wishlist
		 *
		 * @return bool
		 */
		public function is_in_a_wishlist() {
			$product_id = $this->get_product_id();
			if ( ! $product_id ) {
				return false;
			}

			return ! ! yith_wcwl_wishlists()->get_wishlist_for_product( $product_id );
		}

		/**
		 * Check if the product is already in the wishlist
		 *
		 * @return bool
		 */
		public function is_in_default_wishlist() {
			$product_id = $this->get_product_id();
			if ( ! $product_id ) {
				return false;
			}

			return yith_wcwl_wishlists()->is_product_in_wishlist( $product_id );
		}

		/**
		 * Get the wishlist
		 *
		 * @return false|YITH_WCWL_Wishlist
		 */
		public function get_wishlist() {
			return $this->is_in_a_wishlist() ? yith_wcwl_get_wishlist() : false;
		}

		/**
		 * Get the wishlist item
		 *
		 * @return false|YITH_WCWL_Wishlist
		 */
		public function get_wishlist_item() {
			$wishlist = $this->get_wishlist();
			return $wishlist ? $wishlist->get_product( $this->get_product_id() ) : false;
		}

		/**
		 * Get template kind
		 *
		 * @return string
		 */
		public function get_template_kind() {
			$behaviour      = self::get_option( 'behaviour', 'view' );
			$is_in_wishlist = $this->is_in_default_wishlist();
			$template_part  = $is_in_wishlist && 'add' !== $behaviour ? 'browse' : 'button';
			$template_part  = $is_in_wishlist ? 'added' : $template_part;

			if ( $is_in_wishlist && in_array( $template_part, array( 'browse', 'added' ), true ) && 'remove' === $behaviour ) {
				$template_part = 'remove';
			}

			return $template_part;
		}

		/**
		 * Get label for display
		 * TODO: check if the behaviour is correct (maybe it just need to change the one for display only when on 'remove')
		 *
		 * @param string|null $template_kind The kind of template you want the label for
		 *
		 * @return  string
		 */
		public function get_label_for_display( $template_kind = null ) {
			$template_kind = $this->get_template_kind();
			switch ( $template_kind ) {
				case 'browse':
					$label = $this->get_browse_label();
					break;
				case 'added':
					$label = $this->get_added_label();
					break;
				case 'remove':
					$label = $this->get_option( 'remove_label' );
					break;
				default:
					$label = $this->get_add_label();
			}

			return $label;
		}

		/* === OTHER METHODS === */

		/**
		 * Return the array of data used to render the button or false if there is no product recoverable
		 *
		 * @return array|false
		 */
		protected function get_render_data() {
			$product = $this->get_product();

			if ( ! $product ) {
				return array();
			}

			// get wishlist url.
			$wishlist_url = YITH_WCWL()->get_wishlist_url();
			$exists       = $this->is_in_a_wishlist();

			// get product type.

			$data = array(
				'add_label'        => $this->get_add_label(),
				'added_label'      => $this->get_added_label(),
				'is_single'        => $this->get_is_single(),
				'exists'           => $exists,
				'kind'             => $this->get_template_kind(),
				'show_view'        => yith_wcwl_is_single(),
				'browse_label'     => $this->get_browse_label(),
				'already_in_label' => $this->get_already_in_label(),
				'icon'             => $this->get_prop( 'icon' ),
				'added_icon'       => $this->get_prop( 'added_icon' ),
				'loop_position'    => self::get_option( 'loop_position' ),
			);

			// TODO: Add filter

			return array_filter( $data );
		}

		/**
		 * Return the array of data used to render the button or false if there is no product recoverable
		 *
		 * @return array|false
		 */
		protected function get_legacy_php_template_render_data() {
			$product = $this->get_product();

			if ( ! $product ) {
				return false;
			}

			// get wishlist url.
			$wishlist_url = YITH_WCWL()->get_wishlist_url();

			$data = array(
				'label'                     => $this->get_label_for_display(),
				'base_url'                  => yith_wcwl_get_current_url(),
				'wishlist_url'              => $wishlist_url,
				'container_classes'         => $this->get_container_classes(),
				'product_id'                => $product->get_id(),
				'parent_product_id'         => $product->get_parent_id(),
				'product_type'              => $product->get_type(), // TODO: check if needed.
				'link_classes'              => $this->get_button_classes(),
				'is_single'                 => $this->get_is_single(),
				'in_default_wishlist'       => $this->is_in_default_wishlist(), // Always true if it exists in the free version
				'exists'                    => $this->is_in_a_wishlist(),
				'found_in_list'             => $this->get_wishlist(),
				'found_item'                => $this->get_wishlist_item(),
				'template_part'             => $this->get_template_kind(),
				'show_view'                 => yith_wcwl_is_single(),
				'browse_wishlist_text'      => $this->get_browse_label(),
				'already_in_wishslist_text' => $this->get_already_in_label(),
				'product_added_text'        => $this->get_added_label(),
				'icon'                      => $this->get_icon_to_display(),
				'available_multi_wishlist'  => false,
				'disable_wishlist'          => false,
				'show_count'                => false, // Always false in free version
				'ajax_loading'              => $this->get_ajax_loading(),
				'loop_position'             => self::get_option( 'loop_position' ),
			);

			/**
			 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_params
			 *
			 * Filter the array with the parameters for the 'Add to wishlist' action.
			 *
			 * @param array $additional_params Wishlist parameters
			 * @param array $data              Array of attributes
			 *
			 * @return array
			 */
			$data = apply_filters( 'yith_wcwl_add_to_wishlist_params', $data, $data );

			// set fragment options.
			$data[ 'fragment_options' ] = YITH_WCWL_Frontend()->format_fragment_options( $data, 'add_to_wishlist' );

			// Updating icon and heading icon HTML
			$data = array_merge( $data, $this->get_icons_html() );

			return $data;
		}

		/**
		 * Render the button
		 *
		 * @param bool $return_html Whether you want to return HTML as string or just print it
		 *
		 * @return string|null
		 */
		public function render( $return_html = false ) {
			if ( 'php-templates' === self::get_rendering_method() ) {
				return $this->legacy_php_template_render( $return_html );
			}

			$global_options = static::get_global_options();

			$attributes = array_filter(
				$this->get_render_data(),
				function ( $value, $name ) use ( $global_options ) {
					return $value !== ( $global_options[ $name ] ?? null );
				},
				ARRAY_FILTER_USE_BOTH
			);

			$button_html = '<div class="' . $this->get_component_container_classes() . '" data-product-id="' . absint( $this->get_product_id() ) . '" data-attributes="' . esc_attr( wp_json_encode( $attributes ) ) . '"></div>';
			if ( ! $return_html ) {
				echo $button_html;
			}

			return $button_html;
		}

		/**
		 * Get php template for "Add to wishlist" button
		 *
		 * @param bool $return_html Whether to print or return the button HTML.
		 * @return string|null
		 */
		protected function legacy_php_template_render( $return_html = false ) {
			$data = $this->get_legacy_php_template_render_data();

			if ( ! $data ) {
				return '';
			}

			$template = yith_wcwl_get_template( 'add-to-wishlist.php', $data, $return_html );

			// enqueue scripts.
			YITH_WCWL_Frontend()->register_styles();
			YITH_WCWL_Frontend()->register_scripts();
			YITH_WCWL_Frontend()->enqueue_scripts();
			YITH_WCWL_Frontend()->enqueue_styles_and_stuffs();

			/**
			 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_button_html
			 *
			 * Filter the HTML of the 'Add to wishlist' button.
			 *
			 * @param string $template     Button HTML
			 * @param string $wishlist_url Wishlist URL
			 * @param string $product_type Product type
			 * @param bool   $exists       Whether the product is already in the wishlist
			 * @param array  $data         Array of attributes
			 *
			 * @return string
			 */
			return apply_filters( 'yith_wcwl_add_to_wishlist_button_html', $template, $data[ 'wishlist_url' ], $data[ 'product_type' ], $data[ 'exists' ], $data );
		}

		/**
		 * Get button icon
		 *
		 * @param array $data The button data.
		 * @return string
		 */
		protected function get_icon_to_display() {
			$icon       = $this->get_icon();
			$added_icon = $this->get_added_icon();

			$icon       = 'none' !== $icon ? $icon : '';
			$added_icon = 'none' !== $added_icon ? $added_icon : '';

			$custom_icon       = 'custom' === $icon ? $this->get_custom_icon() : '';
			$custom_added_icon = 'custom' === $added_icon || ( 'same' === $added_icon && $custom_icon ) ? $this->get_custom_added_icon() : '';

			$is_single              = $this->get_is_single();
			$is_on_top_of_the_image = 'before_image' === $this->get_option( 'loop_position' );

			if ( ! $is_single && $is_on_top_of_the_image && ( ! $icon || ( 'custom' === $icon && ! $custom_icon && ! $custom_added_icon ) ) ) {
				$icon = 'heart-outline';
			}

			// Change icon when item exists in wishlist.
			if ( $this->is_in_a_wishlist() ) {
				if ( $added_icon && 'same' !== $added_icon && ( 'custom' !== $added_icon || $custom_added_icon || $custom_icon ) ) {
					$icon = $added_icon;
				} elseif ( strpos( $icon, '-outline' ) !== false ) {
					$icon = str_replace( '-outline', '', $icon );
				}
			}

			return $icon;
		}

		/**
		 * Get button icons HTML
		 *
		 * @return string[]
		 */
		protected function get_icons_html() {
			$icon = $this->get_icon_to_display();

			if ( 'custom' === $icon ) {
				$custom_icon       = $this->get_custom_icon();
				$custom_added_icon = $this->get_custom_added_icon();
				$custom_icon_alt   = self::get_option( 'custom_icon_alt' );
				$custom_icon_width = self::get_option( 'custom_icon_width' );
				if ( $this->is_in_a_wishlist() && $custom_added_icon ) {
					$icon_html         = '<img class="yith-wcwl-icon" src="' . esc_url( $custom_added_icon ) . '" alt="' . esc_attr( $custom_icon_alt ) . '" width="' . esc_attr( $custom_icon_width ) . '" />';
					$heading_icon_html = ! empty( $custom_icon ) ? '<img class="yith-wcwl-icon" src="' . esc_url( $custom_icon ) . '" alt="' . esc_attr( $custom_icon_alt ) . '" width="' . esc_attr( $custom_icon_width ) . '" />' : '';
				} elseif ( $custom_icon ) {
					$icon_html         = '<img class="yith-wcwl-icon" src="' . esc_url( $custom_icon ) . '" alt="' . esc_attr( $custom_icon_alt ) . '" width="' . esc_attr( $custom_icon_width ) . '" />';
					$heading_icon_html = $icon_html;
				}
			} else {
				$icon_html         = ! empty( $icon ) ? yith_wcwl_get_icon( $icon ) : '';
				$heading_icon_html = $icon_html;
			}

			/**
			 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_icon_html
			 *
			 * Filter the HTML of the icon for the 'Add to wishlist'.
			 *
			 * @param string $icon_html HTML icon
			 * @param array  $data      Array of attributes
			 *
			 * @return string
			 */
			$icon_html = apply_filters( 'yith_wcwl_add_to_wishlist_icon_html', $icon_html, $this->data );

			/**
			 * APPLY_FILTERS: yith_wcwl_add_to_wishlist_heading_icon_html
			 *
			 * Filter the HTML of the heading icon for the 'Add to wishlist'.
			 *
			 * @param string $icon_html HTML icon
			 * @param array  $data      Array of attributes
			 *
			 * @return string
			 */
			$heading_icon_html = apply_filters( 'yith_wcwl_add_to_wishlist_heading_icon_html', $heading_icon_html, $this->data );

			return array(
				'icon'         => $icon_html,
				'heading_icon' => $heading_icon_html,
			);
		}

		/**
		 * Get button HTML classes
		 *
		 * @return string
		 */
		public function get_button_classes() {
			$classes = array();

			$template_part = $this->get_template_kind();
			$style         = self::get_option( 'style' );
			$loop_position = self::get_option( 'loop_position' );
			$is_single     = $this->get_is_single();

			if ( 'remove' !== $template_part ) {
				$classes = array(
					'add_to_wishlist',
					'single_add_to_wishlist',
				);
			}

			if ( in_array( $style, array( 'button_custom', 'button_default' ), true ) ) {
				$classes[] = 'alt';

				// Prevent button appearance when we're in loop, over image.
				if ( $is_single || 'before_image' !== $loop_position ) {
					$classes[] = 'button';
				}
			}

			if ( 'button_default' === $style ) {
				$classes[] = 'theme-button-style';
				$classes[] = wc_wp_theme_get_element_class_name( 'button' );
			}

			return apply_filters( 'yith_wcwl_add_to_wishlist_button_classes', implode( ' ', $classes ) );
		}


		public function get_component_container_classes() {
			$classes = array(
				'yith-add-to-wishlist-button-block',
			);

			if ( $this->get_is_single() ) {
				$classes[] = 'yith-add-to-wishlist-button-block--single';
			}

			return implode( ' ', $classes );
		}

		/**
		 * Get container HTML classes
		 *
		 * @return string
		 */
		public function get_container_classes() {
			$classes = array(
				'yith-wcwl-add-to-wishlist--' . self::get_option( 'style' ) . '-style',
			);

			if ( $this->is_in_a_wishlist() ) {
				$classes[] = 'exists';
			}

			if ( $this->get_is_single() ) {
				$classes[] = 'yith-wcwl-add-to-wishlist--single';
			}

			if ( $this->get_is_single() && ! $this->get_icon() ) { // TODO: check when this happen (no-icon displayed)
				$classes[] = 'no-icon';
			}

			return implode( ' ', $classes );
		}

		/**
		 * Initialize static options
		 */
		static protected function maybe_init_static_options() {
			static $initialized = false;

			if ( ! $initialized ) {
				static::$options = array_merge(
					static::$options,
					array(
						'popup_title'           => array( 'value' => __( 'Select a wishlist', 'yith-woocommerce-wishlist' ) ),
						'move_popup_title'      => array( 'value' => __( 'Move to another wishlist', 'yith-woocommerce-wishlist' ) ),
						'add_label'             => array(
							'name'    => 'yith_wcwl_add_to_wishlist_text',
							'default' => __( 'Add to wishlist', 'yith-woocommerce-wishlist' ),
						),
						'added_label'           => array(
							'name'    => 'yith_wcwl_product_added_text',
							'default' => __( 'Product added!', 'yith-woocommerce-wishlist' ),
						),
						'remove_label'          => array(
							'name'    => 'yith_wcwl_remove_from_wishlist_text',
							'default' => __( 'Remove from list', 'yith-woocommerce-wishlist' ),
						),
						'browse_label'          => array(
							'name'    => 'yith_wcwl_browse_wishlist_text',
							'default' => __( 'Remove from list', 'yith-woocommerce-wishlist' ),
						),
						'already_in_label'      => array(
							'name'    => 'yith_wcwl_already_in_wishlist_text',
							'default' => __( 'The product is already in your wishlist!', 'yith-woocommerce-wishlist' ),
						),
						'default_wishlist_name' => array(
							'name'    => 'yith_wcwl_wishlist_title',
							'default' => __( 'My wishlist', 'yith-woocommerce-wishlist' ),
						),
					)
				);
				$initialized     = true;
			}

			parent::maybe_init_static_options();
		}

		/**
		 * Register scripts and style and localize scripts
		 */
		public static function maybe_register_scripts() {
			if ( ! self::is_php_templates_mode() ) {
				static $registered = false;

				if ( ! $registered ) {
					$asset_file = include YITH_WCWL_ASSETS . 'js/dist/components/add-to-wishlist/index.asset.php';
					wp_register_style( 'yith-wcwl-add-to-wishlist', YITH_WCWL_ASSETS_CSS_URL . 'frontend/add-to-wishlist.css', array(), YITH_WCWL_VERSION );
					wp_register_script( 'yith-wcwl-add-to-wishlist', YITH_WCWL_ASSETS_JS_URL . 'dist/components/add-to-wishlist/index.js', $asset_file[ 'dependencies' ], $asset_file[ 'version' ], true ); // TODO: minify the script and enqueue the in .min.js when not in debug mode

					wp_localize_script(
						'yith-wcwl-add-to-wishlist',
						'yithWcwlAddToWishlist',
						static::get_data_to_localize()
					);
					$registered = true;
				}
			}
		}

		/**
		 * Get object to localize in class script
		 *
		 * @return array
		 */
		protected static function get_data_to_localize() {
			return array(
				'isUserLoggedIn'     => is_user_logged_in(),
				'globalOptions'      => static::get_global_options(),
				'buttonClasses'      => wc_wp_theme_get_element_class_name( 'button' ),
				'feedback_duration'  => yith_wcwl_get_feedback_duration(),
				'wishlist_url'       => YITH_WCWL()->get_wishlist_url(),
				'containerSelectors'   => array(
					'productContainer'   => apply_filters(
						'yith_wcwl_product_container_selectors',
						array(
							'.wc-block-grid__product',
							'.wp-block-post.product',
							'.wc-block-product',
							'.add-to-wishlist-before_image',
						)
					),
					'thumbnailContainer' => apply_filters(
						'yith_wcwl_product_thumbnail_container_selectors',
						array(
							'div[data-block-name="woocommerce/product-image"]',
							'div.wc-block-grid__product-image',
							'.woocommerce-loop-product__link [class*="image"]',
							'.astra-shop-thumbnail-wrap',
							'.product-inner .image-wrap',
							'a.woocommerce-loop-product__link',
							'div.t-entry-visual',
							'div.box-image',
							'div.product-image',
							'a.product-image-link',
						)
					),
				),
				'login_wishlist_url' => add_query_arg(
					array(
						'wishlist_notice' => 'true',
						'add_to_wishlist' => '%product_id%',
					),
					get_permalink( wc_get_page_id( 'myaccount' ) )
				),
				'i18n'               => array(
					'feedbacks' => array(
						'added'   => __( '{{product_name}} has been added to your {{wishlist_name}} list!', 'yith-woocommerce-wishlist' ),
						'removed' => __( '{{product_name}} has been removed from your {{wishlist_name}} list!', 'yith-woocommerce-wishlist' ),
					),
				),
			);
		}

		/**
		 * Enqueue style and scripts fot the add to wishlist.
		 */
		public static function enqueue_style() {
			static $enqueued = false;

			if ( ! $enqueued ) {
				wp_enqueue_script( 'yith-wcwl-add-to-wishlist' );
				wp_enqueue_style( 'yith-wcwl-add-to-wishlist' );
				wp_set_script_translations( 'yith-wcwl-add-to-wishlist', 'yith-woocommerce-wishlist', YITH_WCWL_DIR . 'languages/js' );

				YITH_WCWL_Frontend::get_instance()->enqueue_custom_style( 'yith-wcwl-add-to-wishlist' );

				$enqueued = true;
			}
		}
	}
}
