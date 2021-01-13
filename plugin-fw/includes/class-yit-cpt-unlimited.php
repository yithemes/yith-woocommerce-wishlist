<?php
/**
 * YITH Custom-Post-Type Unlimited Class.
 * Manage the custom post types as Portfolio, Contact Forms and similar (called CPTU)
 *
 * @class      YIT_CPT_Unlimited
 * @package    YITH\PluginFramework\Classes
 * @deprecated 3.5 | This will be removed, so please don't use it
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

if ( ! class_exists( 'YIT_CPT_Unlimited' ) ) {

	/**
	 * Class YIT_CPT_Unlimited
	 *
	 * @deprecated 3.5 | This will be removed, so please don't use it
	 */
	class YIT_CPT_Unlimited {

		/**
		 * The name of main post type of CPTU.
		 *
		 * @var string
		 */
		protected $name = '';

		/**
		 * The prefix of each post type created by the post of main CPTU
		 *
		 * @var string
		 */
		protected $prefix_cpt = '';

		/**
		 * Labels defined for the main CPTU
		 *
		 * @var string
		 */
		protected $labels = '';

		/**
		 * The configuration arguments of post type
		 *
		 * @var string
		 */
		protected $args = '';

		/**
		 * All post types created by the post of main CPTU
		 *
		 * @var array
		 */
		public $post_types = array();

		/**
		 * Array with all portfolio layouts available for this site
		 *
		 * @var array
		 */
		public $layouts = array();

		/**
		 * The pathname of template folder
		 *
		 * @var string
		 */
		protected $template_path = '';

		/**
		 * The URL of template folder
		 *
		 * @var string
		 */
		protected $template_url = '';

		/**
		 * Unique sequential ID to differentiate same shortcodes in the same page
		 *
		 * @var int
		 */
		public $index = 0;

		/**
		 * Temporary attribute to load automatically the settings for each layout
		 *
		 * @var string
		 */
		private $layout = '';

		/**
		 * YIT_CPT_Unlimited constructor.
		 *
		 * @param array $args Configuration arguments of post type.
		 */
		public function __construct( $args = array() ) {

			$defaults   = array(
				'name'              => '',
				'post_type_prefix'  => '',
				'labels'            => array(
					'main_name' => '',
					'singular'  => '',
					'plural'    => '',
					'menu'      => '',
				),
				'manage_layouts'    => false,
				'add_multiuploader' => false,
				'sortable'          => false,
				'has_single'        => false,
				'has_taxonomy'      => false,
				'label_item_sing'   => '',
				'label_item_plur'   => '',
				'shortcode_name'    => '',
				'shortcode_icon'    => '', // URL or icon name from http://melchoyce.github.io/dashicons/.
				'layout_option'     => '_type', // The option ID of layout meta-box.
			);
			$this->args = wp_parse_args( $args, $defaults );

			// Fix the labels.
			if ( empty( $this->args['labels']['main_name'] ) ) {
				$this->args['labels']['main_name'] = $this->args['labels']['singular'];
			}
			if ( empty( $this->args['labels']['menu'] ) ) {
				$this->args['labels']['menu'] = $this->args['labels']['singular'];
			}

			// Populate.
			$this->name       = $this->args['name'];
			$this->prefix_cpt = $this->args['post_type_prefix'];
			$this->labels     = $this->args['labels'];

			add_action( 'init', array( $this, 'register_post_type' ) );
			add_action( 'init', array( $this, 'register_cptu_post_types' ) );

			add_action( 'save_post', array( $this, 'rewrite_flush' ) );

			// Admin interface.
			add_action( 'admin_head', array( $this, 'add_cptu_menu_item' ) );
			add_action( 'admin_init', array( $this, 'add_quick_links_metaboxes' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_assets' ) );

			// Meta-boxes.
			if ( is_admin() ) {
				add_action( 'init', array( $this, 'add_metabox_cptu' ) );
				add_action( 'init', array( $this, 'add_metabox_item_fields' ) );
			}

			// Multi-uploader.
			if ( $this->args['add_multiuploader'] ) {
				add_action( 'admin_footer', array( $this, 'add_button_multiuploader' ) );
				add_action( 'wp_ajax_yit_cptu_multiuploader', array( $this, 'post_multiuploader' ) );
			}

			// Layouts.
			if ( $this->args['manage_layouts'] ) {
				$this->get_layouts();
			}

			// Single layout.
			if ( $this->args['has_single'] ) {
				add_action( 'yit_loop', array( $this, 'single_template' ) );
				add_action( 'wp', array( $this, 'single_template_config' ) );

				if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
					add_action( 'init', array( $this, 'single_template_config' ) );
				}
			}

			// Archive template.
			add_action( 'wp', array( $this, 'archive_template' ) );

			// Enqueue the assets of each layout.
			add_action( 'wp_enqueue_scripts', array( $this, 'frontend_assets' ) );

			// Add the shortcode, used to show the frontend.
			if ( ! empty( $this->args['shortcode_name'] ) ) {
				add_shortcode( $this->args['shortcode_name'], array( &$this, 'add_shortcode' ) );
				add_filter( 'yit_shortcode_' . $this->args['shortcode_name'] . '_icon', array( $this, 'shortcode_icon' ) );
				add_filter( 'yit-shortcode-plugin-init', array( $this, 'add_shortcode_to_box' ) );
			}

			// Add sortable feature.
			if ( $this->args['sortable'] ) {
				add_action( 'admin_enqueue_scripts', array( $this, 'admin_sortable_assets' ) );
				add_action( 'wp_ajax_cpt_sort_posts', array( $this, 'sort_posts' ) );
				add_action( 'admin_init', array( $this, 'init_menu_order' ) );
				add_filter( 'pre_get_posts', array( $this, 'filter_active' ) );
				add_filter( 'pre_get_posts', array( $this, 'pre_get_posts' ) );
				add_filter( 'get_next_post_where', array( $this, 'sorted_next_post_where' ) );
				add_filter( 'get_previous_post_where', array( $this, 'sorted_prev_post_where' ) );
				add_filter( 'get_next_post_sort', array( $this, 'sorted_next_post_sort' ) );
				add_filter( 'get_previous_post_sort', array( $this, 'sorted_prev_post_sort' ) );
			}

			// Add default columns to post type table list.
			add_filter( 'manage_edit-' . $this->name . '_columns', array( $this, 'cptu_define_columns' ) );
			add_action( 'manage_' . $this->name . '_posts_custom_column', array( $this, 'cptu_change_columns' ), 10, 2 );

			// Add required post type for WordPress importer.
			add_filter( 'wp_import_post_data_raw', array( $this, 'add_importer_required_post_type' ) );
			add_filter( 'wp_import_terms', array( $this, 'add_importer_required_taxonomy' ) );
			add_action( 'wp_import_set_post_terms', array( $this, 'recount_terms_post' ), 10, 3 );

		}

		/**
		 * Enqueue the assets for the sortable feature
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function admin_sortable_assets() {
			global $post;

			if ( ! isset( $post->post_type ) || ! $this->is_valid( $post->post_type ) ) {
				return;
			}

			wp_enqueue_script( 'yit-cptu-sortable-posts', YIT_CORE_PLUGIN_URL . '/assets/js/yit-cptu-sortable-posts.js', array( 'jquery', 'jquery-ui-sortable' ), '1.0', true );
		}

		/**
		 * Init menu order
		 *
		 * @param array $post_types The post types.
		 */
		public function init_menu_order( $post_types = array() ) {
			global $wpdb;

			if ( empty( $post_types ) ) {
				$post_types = $wpdb->get_col( $wpdb->prepare( "SELECT DISTINCT post_type FROM $wpdb->posts WHERE post_type LIKE %s", str_replace( '_', '\_', $this->prefix_cpt ) . '%' ) );
			} elseif ( ! is_array( $post_types ) ) {
				$post_types = array( $post_types );
			}

			foreach ( $post_types as $post_type ) {
				$count = $wpdb->get_var(
					$wpdb->prepare(
						"SELECT COUNT(*) FROM $wpdb->posts WHERE post_type = %s AND post_status IN ('publish', 'pending', 'draft', 'private', 'future') AND menu_order = 0",
						$post_type
					)
				);

				if ( empty( $count ) ) {
					continue;
				}

				$results = $wpdb->get_results(
					$wpdb->prepare(
						"SELECT ID FROM $wpdb->posts WHERE post_type = %s AND post_status IN ('publish', 'pending', 'draft', 'private', 'future') ORDER BY post_date DESC",
						$post_type
					)
				);

				foreach ( $results as $key => $result ) {
					$wpdb->update( $wpdb->posts, array( 'menu_order' => $key + 1 ), array( 'ID' => $result->ID ) );
				}
			}
		}

		/**
		 * Save the order of posts from sortable feature
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function sort_posts() {
			global $wpdb;

			parse_str( $_REQUEST['order'], $data ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended,WordPress.Security.ValidatedSanitizedInput

			if ( is_array( $data ) ) {
				$id_arr = array();
				foreach ( $data as $key => $values ) {
					foreach ( $values as $position => $id ) {
						$id_arr[] = $id;
					}
				}

				$menu_order_arr = array();
				foreach ( $id_arr as $key => $id ) {
					$results = $wpdb->get_results( $wpdb->prepare( "SELECT menu_order FROM $wpdb->posts WHERE ID = %d", $id ) );
					foreach ( $results as $result ) {
						$menu_order_arr[] = $result->menu_order;
					}
				}

				sort( $menu_order_arr );

				foreach ( $data as $key => $values ) {
					foreach ( $values as $position => $id ) {
						$wpdb->update( $wpdb->posts, array( 'menu_order' => $menu_order_arr[ $position ] ), array( 'ID' => $id ) );
					}
				}
			}

			die();
		}

		/**
		 * Filter Active
		 *
		 * @param WC_Query $wp_query The query.
		 *
		 * @return mixed
		 */
		public function filter_active( $wp_query ) {
			if ( is_admin() && isset( $wp_query->query['suppress_filters'] ) ) {
				$wp_query->query['suppress_filters'] = false;
			}
			if ( is_admin() && isset( $wp_query->query_vars['suppress_filters'] ) ) {
				$wp_query->query_vars['suppress_filters'] = false;
			}

			return $wp_query;
		}

		/**
		 * Pre get post.
		 *
		 * @param WP_Query $wp_query The query.
		 */
		public function pre_get_posts( $wp_query ) {
			if ( is_admin() && ! defined( 'DOING_AJAX' ) ) {
				if ( isset( $wp_query->query['post_type'] ) ) {
					$post_types = (array) $wp_query->query['post_type'];
					foreach ( $post_types as $post_type ) {
						if ( $this->is_valid( $post_type ) ) {
							$wp_query->set( 'orderby', 'menu_order' );
							$wp_query->set( 'order', 'ASC' );
						}
					}
				}
			} else {
				$active = false;
				if ( isset( $wp_query->query['suppress_filters'] ) || isset( $wp_query->query['post_type'] ) ) {
					$post_types = (array) $wp_query->query['post_type'];
					foreach ( $post_types as $post_type ) {
						if ( $this->is_valid( $post_type ) ) {
							$active = true;
						}
					}
				}

				if ( $active ) {
					if ( ! isset( $wp_query->query['orderby'] ) || 'post_date' === $wp_query->query['orderby'] ) {
						$wp_query->set( 'orderby', 'menu_order' );
					}
					if ( ! isset( $wp_query->query['order'] ) || 'DESC' === $wp_query->query['order'] ) {
						$wp_query->set( 'order', 'ASC' );
					}
				}
			}
		}

		/**
		 * Filters where clause for get next post
		 *
		 * @param string $where The 'where'.
		 *
		 * @return string
		 * @since  1.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function sorted_next_post_where( $where ) {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			global $post;
			if ( defined( 'DOING_AJAX' ) && DOING_AJAX && isset( $_REQUEST['post_id'] ) ) {
				$post = get_post( absint( $_REQUEST['post_id'] ) ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			} else {
				$post = get_post(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			}

			if ( ! $post || ! $this->is_valid( $post->post_type ) ) {
				return $where;
			}

			$result = str_replace( "'" . $post->post_date . "'", $post->menu_order, $where );
			$result = str_replace( 'p.post_date', 'p.menu_order', $result );

			return $result;
			// phpcs:enable
		}

		/**
		 * Filters where clause for get prev post
		 *
		 * @param string $where The 'where'.
		 *
		 * @return string
		 * @since  1.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function sorted_prev_post_where( $where ) {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			global $post;

			if ( defined( 'DOING_AJAX' ) && DOING_AJAX && isset( $_REQUEST['post_id'] ) ) {
				$post = get_post( absint( $_REQUEST['post_id'] ) ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			} else {
				$post = get_post(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			}

			if ( ! $post || ! $this->is_valid( $post->post_type ) ) {
				return $where;
			}

			$result = str_replace( "'" . $post->post_date . "'", $post->menu_order, $where );
			$result = str_replace( 'p.post_date', 'p.menu_order', $result );

			return $result;
			// phpcs:enable
		}

		/**
		 * Filters sort clause for get next post
		 *
		 * @param string $sort The 'sort' param.
		 *
		 * @return string
		 * @since    1.0
		 * @author   Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function sorted_next_post_sort( $sort ) {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			global $post;

			if ( defined( 'DOING_AJAX' ) && DOING_AJAX && isset( $_REQUEST['post_id'] ) ) {
				$post = get_post( absint( $_REQUEST['post_id'] ) ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			} else {
				$post = get_post(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			}

			if ( ! $post || ! $this->is_valid( $post->post_type ) ) {
				return $sort;
			}

			return str_replace( 'p.post_date', 'p.menu_order', $sort );
			// phpcs:enable
		}

		/**
		 * Filters sort clause for get prev post
		 *
		 * @param string $sort The 'sort' param.
		 *
		 * @return string
		 * @since    1.0
		 * @author   Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function sorted_prev_post_sort( $sort ) {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			global $post;

			if ( defined( 'DOING_AJAX' ) && DOING_AJAX && isset( $_REQUEST['post_id'] ) ) {
				$post = get_post( absint( $_REQUEST['post_id'] ) ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			} else {
				$post = get_post(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			}

			if ( ! $post || ! $this->is_valid( $post->post_type ) ) {
				return $sort;
			}

			return str_replace( 'p.post_date', 'p.menu_order', $sort );
			// phpcs:enable
		}

		/**
		 * Register post type
		 * Register the post type for the creation of portfolios
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function register_post_type() {
			$labels = array(
				'name'               => ucfirst( $this->labels['main_name'] ),
				'singular_name'      => ucfirst( $this->labels['singular'] ),
				// translators: %s is the singular name of the post type.
				'add_new'            => sprintf( __( 'Add %s', 'yith-plugin-fw' ), ucfirst( $this->labels['singular'] ) ),
				// translators: %s is the singular name of the post type.
				'add_new_item'       => sprintf( __( 'Add New %s', 'yith-plugin-fw' ), ucfirst( $this->labels['singular'] ) ),
				// translators: %s is the singular name of the post type.
				'edit_item'          => sprintf( __( 'Edit %s', 'yith-plugin-fw' ), ucfirst( $this->labels['singular'] ) ),
				// translators: %s is the singular name of the post type.
				'new_item'           => sprintf( __( 'New %s', 'yith-plugin-fw' ), ucfirst( $this->labels['singular'] ) ),
				// translators: %s is the plural name of the post type.
				'all_items'          => sprintf( __( 'All %s', 'yith-plugin-fw' ), ucfirst( $this->labels['plural'] ) ),
				// translators: %s is the singular name of the post type.
				'view_item'          => sprintf( __( 'View %s', 'yith-plugin-fw' ), ucfirst( $this->labels['singular'] ) ),
				// translators: %s is the plural name of the post type.
				'search_items'       => sprintf( __( 'Search %s', 'yith-plugin-fw' ), ucfirst( $this->labels['plural'] ) ),
				// translators: %s is the plural name of the post type.
				'not_found'          => sprintf( __( 'No %s found', 'yith-plugin-fw' ), ucfirst( $this->labels['plural'] ) ),
				// translators: %s is the plural name of the post type.
				'not_found_in_trash' => sprintf( __( 'No %s found in Trash', 'yith-plugin-fw' ), ucfirst( $this->labels['plural'] ) ),
				'parent_item_colon'  => '',
				'menu_name'          => ucfirst( $this->labels['menu'] ),
			);

			$args = array(
				'labels'             => apply_filters( 'yit_' . $this->name . '_labels', $labels ),
				'public'             => false,
				'publicly_queryable' => false,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => false,
				'capability_type'    => 'post',
				'hierarchical'       => false,
				'menu_position'      => null,
				'supports'           => array( 'title' ),
			);

			if ( ! empty( $this->args['menu_icon'] ) ) {
				$args['menu_icon'] = $this->args['menu_icon'];
			}

			register_post_type( $this->name, apply_filters( 'yit_' . $this->name . '_args', $args ) );
		}

		/**
		 * Retrieve the values configured inside the custom post type
		 *
		 * @param WP_Post $post The post where get the arguments configured in the cpt.
		 *
		 * @return array
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		protected function cpt_args( $post ) {
			if ( ! isset( $post->ID ) ) {
				return;
			}

			$args = apply_filters(
				'yit_cptu_register_post_type_args',
				array(
					'layout'           => get_post_meta( $post->ID, $this->args['layout_option'], true ),
					'rewrite'          => get_post_meta( $post->ID, '_rewrite', true ),
					'label_singular'   => ! empty( $this->args['label_item_sing'] ) ? $this->args['label_item_sing'] : get_post_meta( $post->ID, '_label_singular', true ),
					'label_plural'     => ! empty( $this->args['label_item_plur'] ) ? $this->args['label_item_plur'] : get_post_meta( $post->ID, '_label_plural', true ),
					'taxonomy'         => get_post_meta( $post->ID, '_taxonomy', true ),
					'taxonomy_rewrite' => get_post_meta( $post->ID, '_taxonomy_rewrite', true ),
				),
				$this->name,
				$post
			);

			$title = $post->post_title;

			if ( empty( $args['label_singular'] ) ) {
				$args['label_singular'] = $title;
			}

			if ( empty( $args['label_plural'] ) ) {
				$args['label_plural'] = $title;
			}

			return $args;
		}

		/**
		 * Retrieve the post types created for this CPTU
		 *
		 * @return array The link changed
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function get_post_types() {
			if ( ! empty( $this->post_types ) ) {
				return $this->post_types;
			}

			$args             = array(
				'post_type'      => $this->name,
				'posts_per_page' => - 1,
				'post_status'    => 'publish',
			);
			$this->post_types = get_posts( $args );

			return $this->post_types;
		}

		/**
		 * Register portfolio post types
		 * Register the post types for each portfolio created by admin
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function register_cptu_post_types() {
			$post_types = $this->get_post_types();
			$pts        = array();

			foreach ( $post_types as $pt ) {
				extract( $this->cpt_args( $pt ) ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract
				/**
				 * Fields.
				 *
				 * @var string $label_singular The singular label.
				 * @var string $label_plural   The plural label.
				 * @var string $layout         The layout.
				 */

				$name  = $pt->post_name;
				$title = $pt->post_title;

				$labels = array(
					'name'               => $title,
					'singular_name'      => $label_singular,
					// translators: $s is the singular name of the post type.
					'add_new'            => sprintf( __( 'Add %s', 'yith-plugin-fw' ), $label_singular ),
					// translators: $s is the singular name of the post type.
					'add_new_item'       => sprintf( __( 'Add New %s', 'yith-plugin-fw' ), $label_singular ),
					// translators: $s is the singular name of the post type.
					'edit_item'          => sprintf( __( 'Edit %s', 'yith-plugin-fw' ), $label_singular ),
					// translators: $s is the singular name of the post type.
					'new_item'           => sprintf( __( 'New %s', 'yith-plugin-fw' ), $label_singular ),
					// translators: $s is the plural name of the post type.
					'all_items'          => sprintf( __( 'All %s', 'yith-plugin-fw' ), $label_plural ),
					// translators: $s is the singular name of the post type.
					'view_item'          => sprintf( __( 'View %s', 'yith-plugin-fw' ), $label_singular ),
					// translators: $s is the plural name of the post type.
					'search_items'       => sprintf( __( 'Search %s', 'yith-plugin-fw' ), $label_plural ),
					// translators: $s is the plural name of the post type.
					'not_found'          => sprintf( __( 'No %s found', 'yith-plugin-fw' ), $label_plural ),
					// translators: $s is the plural name of the post type.
					'not_found_in_trash' => sprintf( __( 'No %s found in Trash', 'yith-plugin-fw' ), $label_plural ),
					'parent_item_colon'  => '',
					'menu_name'          => $title,
				);

				$args = array(
					'labels'             => apply_filters( 'yit_' . $this->prefix_cpt . $name . '_labels', $labels ),
					'public'             => true,
					'publicly_queryable' => true,
					'show_ui'            => true,
					'show_in_menu'       => false,
					'query_var'          => true,
					'capability_type'    => 'post',
					'hierarchical'       => false,
					'menu_position'      => null,
					'supports'           => array( 'title', 'editor', 'thumbnail' ),
				);

				if ( ! $this->args['has_single'] ) {
					$args['public']             = false;
					$args['publicly_queryable'] = false;
					$args['query_var']          = false;
				}

				if ( $this->args['manage_layouts'] && isset( $this->layouts[ $layout ] ) && ! $this->layouts[ $layout ]['support']['description'] ) {
					unset( $args['supports'][1] );  // Remove 'editor'.
				}

				if ( ! empty( $rewrite ) ) {
					$args['rewrite'] = array( 'slug' => $rewrite );
				}

				$post_type = yit_avoid_duplicate( str_replace( '-', '_', substr( $this->prefix_cpt . $name, 0, 16 ) ), $post_types );
				register_post_type( $post_type, apply_filters( 'yit_' . $this->prefix_cpt . $name . '_args', $args, $pt ) );

				update_post_meta( $pt->ID, '_post_type', $post_type );
				$pts[] = $post_type;

				if ( $this->args['has_taxonomy'] && ! empty( $taxonomy ) ) {
					$labels = array(
						// translators: %s is the singular name of the post type.
						'name'              => sprintf( _x( '%s Categories', 'taxonomy general name', 'yith-plugin-fw' ), $label_singular ),
						'singular_name'     => _x( 'Category', 'taxonomy singular name', 'yith-plugin-fw' ),
						'search_items'      => __( 'Search Categories', 'yith-plugin-fw' ),
						'all_items'         => __( 'All Categories', 'yith-plugin-fw' ),
						'parent_item'       => __( 'Parent Category', 'yith-plugin-fw' ),
						'parent_item_colon' => __( 'Parent Category:', 'yith-plugin-fw' ),
						'edit_item'         => __( 'Edit Category', 'yith-plugin-fw' ),
						'update_item'       => __( 'Update Category', 'yith-plugin-fw' ),
						'add_new_item'      => __( 'Add New Category', 'yith-plugin-fw' ),
						'new_item_name'     => __( 'New Category Name', 'yith-plugin-fw' ),
						'menu_name'         => __( 'Category', 'yith-plugin-fw' ),
					);

					$args = array(
						'hierarchical'      => true,
						'labels'            => $labels,
						'show_ui'           => true,
						'show_admin_column' => true,
						'query_var'         => true,
					);

					if ( ! empty( $taxonomy_rewrite ) ) {
						$args['rewrite'] = array( 'slug' => $taxonomy_rewrite );
					}

					register_taxonomy( substr( $taxonomy, 0, 32 ), $post_type, $args );
				}
			}

			wp_cache_set( 'yit_cptu_post_types', $post_types );
		}

		/**
		 * Flush Rewrite Rules
		 * rewrite rules when a cpt unlimited is saved
		 *
		 * @param int $post The post ID.
		 *
		 * @return void
		 * @since  1.0
		 * @author Emanuela Castorina <emanuela.castorina@yithemes.com>
		 */
		public function rewrite_flush( $post ) {
			if ( isset( $post ) && $this->is_valid( get_post_type( intval( $post ) ) ) ) {
				flush_rewrite_rules();
			}
		}

		/**
		 * Add the item for each portfolio under "Portfolios"
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_cptu_menu_item() {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended,WordPress.WP.GlobalVariablesOverride.Prohibited
			global $submenu, $post, $parent_file, $pagenow;

			if ( isset( $post->post_type ) ) {
				$post_type = $post->post_type;
			} elseif ( isset( $_REQUEST['post_type'] ) ) {
				$post_type = sanitize_key( wp_unslash( $_REQUEST['post_type'] ) );
			} else {
				return;
			}

			$item = 'edit.php?post_type=' . $this->name;

			if ( strpos( $post_type, $this->prefix_cpt ) !== false ) {
				global $wpdb;
				$portfolio = $wpdb->get_row( $wpdb->prepare( "SELECT p.* FROM $wpdb->postmeta AS pm INNER JOIN $wpdb->posts AS p ON p.ID = pm.post_id WHERE pm.meta_key = %s AND pm.meta_value = %s AND p.post_type = %s", '_post_type', $post_type, $this->name ) );

				if ( ! isset( $portfolio->ID ) ) {
					return;
				}

				$label_singular = ! empty( $this->args['label_item_sing'] ) ? $this->args['label_item_sing'] : get_post_meta( $portfolio->ID, '_label_singular', true );
				$label_plural   = ! empty( $this->args['label_item_plur'] ) ? $this->args['label_item_plur'] : get_post_meta( $portfolio->ID, '_label_plural', true );

				if ( empty( $label_plural ) ) {
					$label_plural = $portfolio->post_title;
				}

				if ( empty( $label_singular ) ) {
					$label_singular = $portfolio->post_title;
				}

				$submenu[ $item ][15] = array( ucfirst( $label_plural ), 'edit_posts', 'edit.php?post_type=' . $post_type );
				$submenu[ $item ][20] = array(
					sprintf(
					// translators: %s is the singular name of the post type.
						__( 'Add %s', 'yith-plugin-fw' ),
						ucfirst( $label_singular )
					),
					'edit_posts',
					'post-new.php?post_type=' . $post_type,
				);

				global $wp_taxonomies;
				$taxonomy = get_post_meta( $portfolio->ID, '_taxonomy', true );
				if ( isset( $wp_taxonomies[ $taxonomy ] ) ) {
					$submenu[ $item ][25] = array( __( 'Categories', 'yith-plugin-fw' ), 'edit_posts', 'edit-tags.php?taxonomy=' . $taxonomy . '&post_type=' . $post_type );
				}
			}

			// Set the parent item inside the single of each post type.
			if ( 'post.php' === $pagenow && isset( $_GET['post'] ) && $this->is_valid( get_post_type( intval( $_GET['post'] ) ) ) ) {
				$parent_file = 'edit.php?post_type=' . $this->name;
			}

			// phpcs:enable
		}

		/**
		 * Locate folder of CPTU templates, if there isn't a layouts management
		 *
		 * @return string
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function template_path() {
			if ( ! empty( $this->template_path ) ) {
				return $this->template_path;
			}

			$stylesheet_path_1 = get_stylesheet_directory() . '/theme/templates/' . $this->name . '/';
			$stylesheet_path_2 = get_template_directory() . '/theme/templates/' . $this->name . '/';
			$template_path_1   = get_stylesheet_directory() . '/' . $this->name . '/';
			$template_path_2   = get_template_directory() . '/' . $this->name . '/';
			$plugin_path       = $this->args['plugin_path'] . '/templates/';

			foreach ( array( 'stylesheet_path_1', 'stylesheet_path_2', 'template_path_1', 'template_path_2', 'plugin_path' ) as $var ) {
				$path = ${$var};

				if ( file_exists( $path ) ) {
					$this->template_path = $path;
				}
			}

			return $this->template_path;
		}

		/**
		 * Locate folder of CPTU templates, if there isn't a layouts management
		 *
		 * @return string
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function template_url() {
			if ( ! empty( $this->template_url ) ) {
				return $this->template_path;
			}

			$this->template_url = str_replace(
				array(
					get_stylesheet_directory(),
					get_template_directory(),
					$this->args['plugin_path'],
				),
				array(
					get_stylesheet_directory_uri(),
					get_template_directory_uri(),
					$this->args['plugin_url'],
				),
				$this->template_path()
			);

			return $this->template_url;
		}

		/**
		 * Retrieve all layouts to manage by custom post type added in the site in this order:
		 * 1. Child theme (if exists)
		 * 2. Theme
		 * 3. Plugin
		 * It also load the config.php file of each layout
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function get_layouts() {
			$stylesheet_path_1 = get_stylesheet_directory() . '/theme/templates/' . $this->name . '/';
			$stylesheet_path_2 = get_template_directory() . '/theme/templates/' . $this->name . '/';
			$template_path_1   = get_stylesheet_directory() . '/' . $this->name . '/';
			$template_path_2   = get_template_directory() . '/' . $this->name . '/';
			$plugin_path       = $this->args['plugin_path'] . '/templates/';

			foreach ( array( 'stylesheet_path_1', 'stylesheet_path_2', 'template_path_1', 'template_path_2', 'plugin_path' ) as $var ) {
				$path = ${$var};

				if ( file_exists( $path ) ) {
					foreach ( scandir( $path ) as $scan ) {
						if ( ! isset( $this->layouts[ $scan ] ) && is_dir( $path . $scan ) && ! in_array( $scan, array( '.', '..', '.svn' ), true ) && '_' !== $scan[0] ) {
							$this->layouts[ $scan ] = array(
								'name'    => ucfirst( str_replace( '-', ' ', $scan ) ),
								'path'    => $path . $scan,
								'url'     => str_replace(
									array(
										get_stylesheet_directory(),
										get_template_directory(),
										$this->args['plugin_path'],
									),
									array(
										get_stylesheet_directory_uri(),
										get_template_directory_uri(),
										$this->args['plugin_url'],
									),
									$path . $scan
								),
								'css'     => array(),
								'js'      => array(),
								'support' => array(
									'description' => true,
								),
								'columns' => array(),
							);

							// Set the vars for config.php.
							$layout       = $scan;
							$this->layout = $layout;   // temporary attribute to load automatically the configuration inside the config.php, for this layout.

							if ( ! in_array( $scan, array( 'single' ), true ) && file_exists( $path . $scan . '/config.php' ) ) {
								include_once $path . $scan . '/config.php';
							}
						}
					}
				}
			}
		}

		/**
		 * Say if you want to set description for the current layout or not. This method must be used only inside the
		 * config.php file of layout
		 *
		 * @param string $v 'yes' or 'no'.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_description_field( $v ) {
			$this->layouts[ $this->layout ]['support']['description'] = 'yes' === $v;
		}

		/**
		 * Add the extra fields for the specific layout type of portfolio
		 *
		 * @param array $fields The fields to add.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_layout_fields( $fields = array() ) {
			foreach ( $fields as $id => $val ) {
				unset( $fields[ $id ] );
				$id            = $this->layout . '_' . $id;
				$fields[ $id ] = $val;
			}

			$this->layouts[ $this->layout ]['fields'] = $fields;
		}

		/**
		 * Add fields to add to the metabox of each item of each post type created
		 *
		 * @param array $fields The fields to add.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_item_fields( $fields = array() ) {
			foreach ( $fields as $id => $val ) {
				unset( $fields[ $id ] );
				$fields[ $id ] = $val;
			}
			$this->layouts[ $this->layout ]['item_fields'] = $fields;
		}

		/**
		 * Add columns to the table list
		 *
		 * @param array $columns The columns to add in the table list.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_table_columns( $columns ) {
			$this->layouts[ $this->layout ]['columns'] = $columns;
		}

		/**
		 * Enqueue the css files of layout
		 *
		 * @param string      $handle Name of the stylesheet.
		 * @param string|bool $src    Path to the stylesheet from the root directory of WordPress. Example: '/css/mystyle.css'.
		 * @param array       $deps   An array of registered style handles this stylesheet depends on. Default empty array.
		 * @param string|bool $ver    String specifying the stylesheet version number, if it has one. This parameter is used
		 *                            to ensure that the correct version is sent to the client regardless of caching, and so
		 *                            should be included if a version number is available and makes sense for the stylesheet.
		 * @param string      $media  Optional. The media for which this stylesheet has been defined.
		 *                            Default 'all'. Accepts 'all', 'aural', 'braille', 'handheld', 'projection', 'print',
		 *                            'screen', 'tty', or 'tv'.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function enqueue_style( $handle, $src = false, $deps = array(), $ver = false, $media = 'all' ) {
			$this->layouts[ $this->layout ]['css'][] = compact( 'handle', 'src', 'deps', 'ver', 'media' );
		}

		/**
		 * Enqueue the js files of layout
		 *
		 * @param string      $handle    Name of the script.
		 * @param string|bool $src       Path to the script from the root directory of WordPress. Example: '/js/myscript.js'.
		 * @param array       $deps      An array of registered handles this script depends on. Default empty array.
		 * @param string|bool $ver       Optional. String specifying the script version number, if it has one. This parameter
		 *                               is used to ensure that the correct version is sent to the client regardless of caching,
		 *                               and so should be included if a version number is available and makes sense for the script.
		 * @param bool        $in_footer Optional. Whether to enqueue the script before </head> or before </body>.
		 *                               Default 'false'. Accepts 'false' or 'true'.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function enqueue_script( $handle, $src = false, $deps = array(), $ver = false, $in_footer = false ) {
			$this->layouts[ $this->layout ]['js'][] = compact( 'handle', 'src', 'deps', 'ver', 'in_footer' );
		}

		/**
		 * Enqueue the assets for the frontend
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function frontend_assets() {
			global $post;

			// Not single.
			if ( ! is_single() || ! isset( $post->post_type ) || ! $this->is_valid( $post->post_type ) ) {
				$posts = get_posts(
					array(
						'post_type'      => $this->name,
						'posts_per_page' => - 1,
						'post_status'    => 'publish',
						'fields'         => 'ids',
					)
				);

				$enqueued = array();

				foreach ( $posts as $post_id ) {
					$layout = get_post_meta( $post_id, $this->args['layout_option'], true );

					if ( in_array( $layout, array( $enqueued ), true ) || ! isset( $this->layouts[ $layout ]['css'] ) ) {
						continue;
					}

					foreach ( $this->layouts[ $layout ]['css'] as $asset ) {
						if ( empty( $asset ) ) {
							continue;
						}
						yit_enqueue_style( $asset['handle'], empty( $asset['src'] ) ? false : $this->locate_url( $layout ) . $asset['src'], $asset['deps'], $asset['ver'], $asset['media'] );
					}

					$enqueued[] = $layout;
				}
			} else {
				// Load assets of single template.
				$layout = 'single';

				if ( ! isset( $this->layouts[ $layout ]['css'] ) ) {
					return;
				}

				foreach ( $this->layouts[ $layout ]['css'] as $asset ) {
					if ( empty( $asset ) ) {
						continue;
					}
					yit_enqueue_style( $asset['handle'], $this->locate_url( $layout ) . $asset['src'], $asset['deps'], $asset['ver'], $asset['media'] );
				}
			}

		}

		/**
		 * Register Metaboxes options
		 * Add the metabox for the portfolio settings
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_metabox_cptu() {

			// Reorganize layouts.
			if ( $this->args['manage_layouts'] ) {
				$layouts = array();
				foreach ( $this->layouts as $layout_id => $layout ) {
					if ( 'single' === $layout_id ) {
						continue;
					}
					$layouts[ $layout_id ] = $layout['name'];
				}

				$layouts = apply_filters( 'yit_cptu_' . $this->name . '_layout_values', $layouts );
			}

			$single_layouts = apply_filters( 'yit_cptu_' . $this->name . '_single_layout_values', array() );

			$metabox_args = array(
				'label'    => sprintf(
				// translators: %s is the singular name of the post type.
					__( '%s Settings', 'yith-plugin-fw' ),
					$this->labels['singular']
				),
				'pages'    => $this->name,
				'context'  => 'normal',
				'priority' => 'default',
				'tabs'     => array(
					'settings' => array(
						'label'  => __( 'Settings', 'yith-plugin-fw' ),
						'fields' => apply_filters(
							'yit_cptu_fields',
							array(
								'type'             => array(
									'label'   => __( 'Type', 'yith-plugin-fw' ),
									'desc'    => sprintf(
									// translators: %s is the singular name of the post type.
										__( 'Layout for this %s', 'yith-plugin-fw' ),
										strtolower( $this->labels['singular'] )
									),
									'type'    => 'select',
									'options' => isset( $layouts ) ? $layouts : array(),
									'std'     => '',
								),
								'rewrite'          => array(
									'label' => __( 'Rewrite', 'yith-plugin-fw' ),
									'desc'  => __( 'Univocal identification name in the URL for each product (slug from post if empty)', 'yith-plugin-fw' ),
									'type'  => 'text',
									'std'   => '',
								),
								'label_singular'   => array(
									'label' => __( 'Label in Singular', 'yith-plugin-fw' ),
									'desc'  => __( 'Set a label in singular (title of portfolio if empty)', 'yith-plugin-fw' ),
									'type'  => 'text',
									'std'   => '',
								),
								'label_plural'     => array(
									'label' => __( 'Label in Plural', 'yith-plugin-fw' ),
									'desc'  => __( 'Set a label in plural (title of portfolio if empty)', 'yith-plugin-fw' ),
									'type'  => 'text',
									'std'   => '',
								),
								'taxonomy'         => array(
									'label' => __( 'Taxonomy', 'yith-plugin-fw' ),
									'desc'  => __( 'If you want to use categories in the portfolio, set a name for taxonomy. Name should be a slug (must not contain capital letters nor spaces) and must not be more than 32 characters long (database structure restriction).', 'yith-plugin-fw' ),
									'type'  => 'text',
									'std'   => '',
								),
								'taxonomy_rewrite' => array(
									'label' => __( 'Taxonomy Rewrite', 'yith-plugin-fw' ),
									'desc'  => __( 'Set univocal name for each category page URL.', 'yith-plugin-fw' ),
									'type'  => 'text',
									'std'   => '',
								),
								'single_layout'    => array(
									'label'   => __( 'Single layout', 'yith-plugin-fw' ),
									'desc'    => __( 'Layout for single page of this portfolio', 'yith-plugin-fw' ),
									'type'    => 'select',
									'options' => $single_layouts,
									'std'     => '',
								),
							)
						),
					),
				),

			);

			if ( ! $this->args['has_single'] ) {
				unset( $metabox_args['tabs']['settings']['fields']['rewrite'] );
			}

			if ( ! $this->args['has_taxonomy'] ) {
				unset( $metabox_args['tabs']['settings']['fields']['taxonomy'] );
				unset( $metabox_args['tabs']['settings']['fields']['taxonomy_rewrite'] );
			}

			if ( ! empty( $this->args['label_item_sing'] ) ) {
				unset( $metabox_args['tabs']['settings']['fields']['label_singular'] );
			}

			if ( ! empty( $this->args['label_item_plur'] ) ) {
				unset( $metabox_args['tabs']['settings']['fields']['label_plural'] );
			}

			if ( $this->args['manage_layouts'] ) {

				if ( count( $layouts ) < 1 ) {
					unset( $metabox_args['tabs']['settings']['fields']['type'] );
				}

				// Layouts options.
				foreach ( $this->layouts as $layout => $args ) {
					if ( ! isset( $args['fields'] ) ) {
						continue;
					}

					// Section title.
					$metabox_args['tabs']['settings']['fields'][ $layout . '_title' ] = array(
						'desc' => $args['name'] . ' ' . __( 'layout settings', 'yith-plugin-fw' ),
						'type' => 'title',
						'deps' => array(
							'ids'    => '_type',
							'values' => $layout,
						),
					);

					// Options.
					foreach ( $args['fields'] as $field_id => $field ) {
						$metabox_args['tabs']['settings']['fields'][ $field_id ]         = $field;
						$metabox_args['tabs']['settings']['fields'][ $field_id ]['deps'] = array(
							'ids'    => '_type',
							'values' => $layout,
						);
					}
				}
			} else {
				unset( $metabox_args['tabs']['settings']['fields']['type'] );
			}

			if ( count( $single_layouts ) < 1 ) {
				unset( $metabox_args['tabs']['settings']['fields']['single_layout'] );
			}

			// Undo if tab empty.
			if ( empty( $metabox_args['tabs']['settings']['fields'] ) ) {
				return;
			}

			$metabox = YIT_Metabox( $this->name . '_cptu_settings' );
			$metabox->init( $metabox_args );
		}

		/**
		 * Register Metaboxes options
		 * Add the metabox for the portfolio settings
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_metabox_item_fields() {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended,WordPress.WP.GlobalVariablesOverride.Prohibited
			global $pagenow, $post_type;

			// Get the actual post type, to add the metabox only if necessary.
			if ( 'post.php' === $pagenow && isset( $_REQUEST['post'] ) ) {
				$post_type = get_post_type( intval( $_REQUEST['post'] ) );
			} elseif ( 'post.php' === $pagenow && isset( $_REQUEST['post_ID'] ) ) {
				$post_type = get_post_type( intval( $_REQUEST['post_ID'] ) );
			} elseif ( 'post-new.php' === $pagenow && isset( $_REQUEST['post_type'] ) ) {
				$post_type = sanitize_key( wp_unslash( $_REQUEST['post_type'] ) );
			} else {
				return;
			}

			$layout = get_post_meta( $this->get_id_by_name( $post_type ), $this->args['layout_option'], true );

			if ( empty( $this->layouts[ $layout ]['item_fields'] ) ) {
				return;
			}

			$metabox_args = array(
				'label'    => __( 'Settings', 'yith-plugin-fw' ),
				'pages'    => $post_type,
				'context'  => 'normal',
				'priority' => 'default',
				'tabs'     => array(
					'settings' => array(
						'label'  => __( 'Settings', 'yith-plugin-fw' ),
						'fields' => $this->layouts[ $layout ]['item_fields'],
					),
				),
			);

			$metabox = YIT_Metabox( $post_type . '_item_fields' );
			$metabox->init( $metabox_args );

			// phpcs:enable
		}

		/**
		 * Add quick links inside the editing page of CPTU and Custom Post Types
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_quick_links_metaboxes() {
			add_meta_box( $this->name . '_quick_links', __( 'Quick links', 'yith-plugin-fw' ), array( $this, 'quick_links_cptu_inner' ), $this->name, 'side', 'high' );

			$args       = array(
				'post_type'      => $this->name,
				'posts_per_page' => - 1,
				'post_status'    => 'publish',
			);
			$post_types = get_posts( $args );

			foreach ( $post_types as $post ) {
				$post_type = get_post_meta( $post->ID, '_post_type', true );
				add_meta_box( $post->post_type . '_quick_links', __( 'Quick links', 'yith-plugin-fw' ), array( $this, 'quick_links_cpt_inner' ), $post_type, 'side', 'high' );
			}
		}

		/**
		 * Link to: "View Items", inside the CPTU
		 *
		 * @param WP_Post $post The post.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function quick_links_cptu_inner( $post ) {
			extract( $this->cpt_args( $post ) ); //phpcs:ignore WordPress.PHP.DontExtract.extract_extract
			/**
			 * Extracted fields.
			 *
			 * @var string $label_plural The plural label.
			 */
			?>
			<a href="<?php echo esc_url( admin_url( 'edit.php?post_type=' . get_post_meta( $post->ID, '_post_type', true ) ) ); ?>">
				<?php
				echo esc_html(
					sprintf(
					// translators: %s is the plural label of the post type.
						__( 'View %s', 'yith-plugin-fw' ),
						$label_plural
					)
				);
				?>
			</a>
			<?php
		}

		/**
		 * Link to: "Edit %s", inside the CPTU
		 *
		 * @param WP_Post $post The Post.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function quick_links_cpt_inner( $post ) {
			$post = get_post( $this->get_id_by_name( $post->post_type ) );
			$url  = admin_url( "post.php?post={$post->ID}&action=edit" );
			?>
			<a href="<?php echo esc_url( $url ); ?>">
				<?php
				echo esc_html(
					sprintf(
					// translators: %s is the post title.
						__( 'Edit %s', 'yith-plugin-fw' ),
						$post->post_title
					)
				);
				?>
			</a>
			<?php
		}

		/**
		 * Define the columns to use in the list table of main sliders post type
		 *
		 * @param array $columns The columns used in the list table.
		 *
		 * @return array
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function cptu_define_columns( $columns ) {
			unset( $columns['date'] );

			$columns['actions'] = '';

			return $columns;
		}

		/**
		 * Change the content of each column of the table list
		 *
		 * @param string $column  The current column.
		 * @param int    $post_id The current post ID.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function cptu_change_columns( $column, $post_id ) {
			$post = get_post( $post_id );
			extract( $this->cpt_args( $post ) ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract
			/**
			 * Extracted fields.
			 *
			 * @var string $label_plural The plural label.
			 */

			switch ( $column ) {
				case 'actions':
					$edit_url   = admin_url( "post.php?post={$post_id}&action=edit" );
					$view_url   = admin_url( 'edit.php?post_type=' . get_post_meta( $post_id, '_post_type', true ) );
					$edit_label = sprintf(
					// translators: %s is the singular name of the post type.
						__( 'Edit %s', 'yith-plugin-fw' ),
						ucfirst( $this->labels['singular'] )
					);
					$view_label = sprintf(
					// translators: %s is the plural name of the post type.
						__( 'View %s', 'yith-plugin-fw' ),
						$label_plural
					);
					echo '<a href="' . esc_url( $edit_url ) . '" class="button-secondary">' . esc_html( $edit_label ) . '</a> ';
					echo '<a href="' . esc_url( $view_url ) . '" class="button-secondary">' . esc_html( $view_label ) . '</a> ';
					break;
			}
		}

		/**
		 * Retrieve the path of layout specified in parameter
		 *
		 * @param string $layout The layout.
		 * @param string $file   The file to find.
		 *
		 * @return bool|string
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function locate_file( $layout, $file = '' ) {
			if ( ! $this->args['manage_layouts'] ) {
				return $this->template_path() . '/' . ( ! empty( $file ) ? $file . '.php' : '' );
			}

			if ( ! isset( $this->layouts[ $layout ] ) ) {
				$layout = 'default';
			}

			return $this->layouts[ $layout ]['path'] . '/' . ( ! empty( $file ) ? $file . '.php' : '' );
		}

		/**
		 * Retrieve the URL of  layout specified in parameter
		 *
		 * @param string $layout The layout.
		 * @param string $file   The file to find.
		 *
		 * @return bool|string
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function locate_url( $layout, $file = '' ) {
			if ( ! $this->args['manage_layouts'] ) {
				return $this->template_url();

			}

			if ( ! isset( $this->layouts[ $layout ] ) ) {
				$layout = 'default';
			}

			return $this->layouts[ $layout ]['url'] . '/' . ( ! empty( $file ) ? $file . '.php' : '' );
		}

		/**
		 * Retrieve the post ID relative to the post of post type
		 *
		 * @param string $name the name.
		 *
		 * @return mixed
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		protected function get_id_by_name( $name ) {
			global $wpdb;

			return $wpdb->get_var( $wpdb->prepare( "SELECT pm.post_id FROM $wpdb->postmeta AS pm INNER JOIN $wpdb->posts AS p ON p.ID = pm.post_id WHERE pm.meta_key = %s AND pm.meta_value = %s AND p.post_type = %s", '_post_type', $name, $this->name ) );
		}

		/**
		 * Retrieve the post_type of portfolio by portfolio name
		 *
		 * @param string $name the name.
		 *
		 * @return mixed
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		protected function get_post_type_by_name( $name ) {
			global $wpdb;

			return $wpdb->get_var( $wpdb->prepare( "SELECT pm.meta_value FROM $wpdb->postmeta AS pm INNER JOIN $wpdb->posts AS p ON p.ID = pm.post_id WHERE pm.meta_key = %s AND p.post_name = %s AND p.post_type = %s", '_post_type', $name, $this->name ) );
		}

		/**
		 * The shortcode used to show the frontend
		 *
		 * @param array       $atts    Attributes.
		 * @param string|null $content The content.
		 *
		 * @return string|null
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_shortcode( $atts, $content = null ) {
			$atts = wp_parse_args(
				$atts,
				array(
					'name'           => null,
					'cat'            => array(),
					'posts_per_page' => false,
					'style'          => null,
				)
			);

			// Don't show the slider if 'name' is empty or is 'none'.
			if ( empty( $atts['name'] ) || 'none' === $atts['name'] ) {
				return null;
			}

			// Compatibility fix: remove prefix if exists in portfolio object.
			if ( function_exists( 'YIT_Portfolio' ) && method_exists( YIT_Portfolio(), 'is' ) && YIT_Portfolio()->is( $atts['name'] ) ) {
				$atts['name'] = str_replace( YIT_Portfolio()->post_type_prefix, '', $atts['name'] );
			}

			// Pass vars to template.
			$atts['post_type'] = $this->get_post_type_by_name( $atts['name'] );
			$atts['layout']    = $this->args['manage_layouts'] ? get_post_meta( $this->get_id_by_name( $atts['post_type'] ), $this->args['layout_option'], true ) : '';
			extract( apply_filters( 'yit_cptu_frontend_vars', $atts, $this->name ) ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract

			/**
			 * Extracted fields.
			 *
			 * @var string $layout The layout.
			 */

			// Add the javascript assets.
			if ( $this->args['manage_layouts'] && isset( $this->layouts[ $layout ]['js'] ) && ! empty( $this->layouts[ $layout ]['js'] ) ) {
				foreach ( $this->layouts[ $layout ]['js'] as $asset ) {
					if ( empty( $asset ) ) {
						continue;
					}

					if ( empty( $asset['src'] ) ) {
						wp_enqueue_script( $asset['handle'] );
						continue;
					}

					yit_enqueue_script( $asset['handle'], $this->locate_url( $layout ) . $asset['src'], $asset['deps'], $asset['ver'], $asset['in_footer'] );
				}
			}

			// Unique sequential index to differentiate more cpt in the same page.
			++ $this->index;

			ob_start();
			include $this->locate_file( $layout, 'markup' );

			return ob_get_clean();
		}

		/**
		 * Shortcode icon
		 * Return the shortcode icone to display on shortcode panel
		 *
		 * @param string $icon_url Icone url found by yit_shortcode plugin.
		 *
		 * @return string
		 * @since  1.0.0
		 * @author Antonino Scarfi' <antonio.scarfi@yithemes.it>
		 */
		public function shortcode_icon( $icon_url ) {
			return ! empty( $this->args['shortcode_icon'] ) ? $this->args['shortcode_icon'] : $icon_url;
		}

		/**
		 * Return an array with cptu options to shortcode panel
		 * All definition settings to add cptu shortcode to Yit Shortcode Panel
		 *
		 * @param array $shortcodes Shortcodes.
		 *
		 * @return array
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_shortcode_to_box( $shortcodes ) {
			$post_types = array();

			foreach ( $this->get_post_types() as $post ) {
				$post_types[ $post->post_name ] = $post->post_title;
			}

			$args = array(
				$this->args['shortcode_name'] => array(
					'title'              => $this->labels['singular'],
					'description'        => sprintf(
					// translators: %s is the name of the post type.
						__( 'Show frontend of the %s', 'yith-plugin-fw' ),
						$this->labels['main_name']
					),
					'tab'                => 'cpt',
					'create'             => false,
					'has_content'        => false,
					'in_visual_composer' => true,
					'attributes'         => array(
						'name' => array(
							'title'   => __( 'Name', 'yith-plugin-fw' ),
							'type'    => 'select',
							'options' => $post_types,
							'std'     => '',
						),
					),
				),
			);

			return array_merge( $shortcodes, $args );
		}

		/**
		 * Check the post type passed in parameter, if is generated by this CPTU
		 *
		 * @param string $post_type The post type to check.
		 *
		 * @return bool
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		protected function is_valid( $post_type ) {
			return (bool) ( strpos( $post_type, $this->args['post_type_prefix'] ) !== false );
		}

		/**
		 * Add as a valid post type all cptu when importing dummy data
		 *
		 * @param array $post The post object.
		 *
		 * @return array
		 * @since  1.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function add_importer_required_post_type( $post ) {
			// phpcs:disable WordPress.WP.GlobalVariablesOverride.Prohibited
			global $wp_post_types, $wp_taxonomies;

			if ( strpos( $post['post_type'], $this->prefix_cpt ) === false ) {
				return $post;
			}

			if ( ! isset( $wp_post_types[ $post['post_type'] ] ) ) {
				$wp_post_types[ $post['post_type'] ] = array( 'name' => '' );
			}

			if ( ! empty( $post['terms'] ) ) {
				foreach ( $post['terms'] as $term ) {
					if ( ! isset( $wp_taxonomies[ $term['domain'] ] ) ) {
						$wp_taxonomies[ $term['domain'] ] = array( 'name' => '' );
					}
				}
			}

			return $post;
			// phpcs:enable
		}

		/**
		 * Add taxonomy when importing dummy data
		 *
		 * @param array $terms Array of terms.
		 *
		 * @return array
		 * @since  1.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function add_importer_required_taxonomy( $terms ) {
			// phpcs:disable WordPress.WP.GlobalVariablesOverride.Prohibited
			global $wp_taxonomies;

			if ( ! empty( $terms ) ) {
				foreach ( $terms as $term ) {
					if ( isset( $term['domain'] ) && ! isset( $wp_taxonomies[ $term['domain'] ] ) ) {
						$wp_taxonomies[ $term['domain'] ] = array( 'name' => '' );
					}
				}
			}

			return $terms;
			// phpcs:enable
		}

		/**
		 * Force terms recount for imported taxonomy
		 *
		 * @param array  $tt_ids Terms ids.
		 * @param array  $ids    Post ids.
		 * @param string $tax    Taxonomy name.
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function recount_terms_post( $tt_ids, $ids, $tax ) {
			wp_update_term_count( $tt_ids, $tax );
		}

		// ### ASSETS ###

		/**
		 * Enqueue the assets for the admin
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function admin_assets() {
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
			wp_enqueue_media();
			wp_enqueue_script( 'yit-cptu', YIT_CORE_PLUGIN_URL . '/assets/js/yit-cpt-unlimited' . $suffix . '.js', array( 'jquery' ), '1.0.0', true );
		}

		/**
		 * Add the button to the top of the list table page of CPTU
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function add_button_multiuploader() {
			global $pagenow, $post_type, $wpdb;

			if ( 'edit.php' !== $pagenow ) {
				return;
			}

			$cptu = $wpdb->get_var( $wpdb->prepare( "SELECT p.post_type FROM $wpdb->postmeta AS pm INNER JOIN $wpdb->posts AS p ON p.ID = pm.post_id WHERE pm.meta_key = %s AND pm.meta_value = %s", '_post_type', $post_type ) );

			$post = get_post( $this->get_id_by_name( $post_type ) );
			if ( empty( $post ) ) {
				return;
			}
			extract( $this->cpt_args( $post ) ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract

			/**
			 * Extracted fields.
			 *
			 * @var string $label_plural The plural label.
			 */

			if ( $cptu !== $this->name || ! $this->is_valid( $post_type ) ) {
				return;
			}

			$uploader_title = sprintf(
			// translators: %s is the plural name of the post type.
				__( 'Add %s from images', 'yith-plugin-fw' ),
				$label_plural
			);

			$uploader_button_text = sprintf(
			// translators: %s is the plural name of the post type.
				__( 'Add %s', 'yith-plugin-fw' ),
				$label_plural
			);
			?>
			<script>
				( function ( $ ) {
					"use strict";

					var button = $( '<a />', {
						href                       : '#',
						class                      : 'multi-uploader add-new-h2',
						'data-uploader_title'      : '<?php esc_html( $uploader_title ); ?>',
						'data-uploader_button_text': '<?php esc_html( $uploader_button_text ); ?>',
						'data-nonce'               : '<?php echo esc_html( wp_create_nonce( 'cpt-unlimited-multiuploader' ) ); ?>'
					} ).text( '<?php esc_html_e( 'Upload multiple files', 'yith-plugin-fw' ); ?>' );

					var spinner = $( '<span />', {
						class: 'spinner',
						style: 'float: none;'
					} );

					button.appendTo( '.wrap h2, .wrap h1' ).after( spinner );

				} )( jQuery );
			</script>
			<?php
		}

		/**
		 * Add more posts by multiupload
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function post_multiuploader() {
			check_ajax_referer( 'cpt-unlimited-multiuploader' );

			if ( ! isset( $_REQUEST['images'] ) || ! isset( $_REQUEST['post_type'] ) && $this->is_valid( sanitize_key( wp_unslash( $_REQUEST['post_type'] ) ) ) ) {
				return;
			}

			foreach ( $_REQUEST['images'] as $the ) { // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
				// Create post object.
				$arg     = array(
					'post_title' => $the['title'],
					'post_type'  => sanitize_key( wp_unslash( $_REQUEST['post_type'] ) ),
				);
				$post_id = wp_insert_post( $arg );
				set_post_thumbnail( $post_id, $the['id'] );
			}

			die();
		}


		// ###### SINGLE TEMPLATE ######

		/**
		 * Load the single template file
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function single_template() {
			global $post, $wpdb;

			if ( ( ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) && ! is_single() ) || ! isset( $post->post_type ) || ! $this->is_valid( $post->post_type ) ) {
				return;
			}

			// Add the javascript assets.
			if ( $this->args['manage_layouts'] ) {
				foreach ( $this->layouts['single']['js'] as $asset ) {
					yit_enqueue_script( $asset['handle'], $this->locate_url( 'single' ) . $asset['src'], $asset['deps'], $asset['ver'], $asset['in_footer'] );
				}
			}

			$post_name = $wpdb->get_var( $wpdb->prepare( "SELECT p.post_name FROM $wpdb->postmeta AS pm INNER JOIN $wpdb->posts AS p ON p.ID = pm.post_id WHERE pm.meta_key = %s AND pm.meta_value = %s AND p.post_type = %s", '_post_type', $post->post_type, $this->name ) );
			extract( apply_filters( 'yit_cptu_frontend_vars', array( 'name' => $post_name ), $this->name ) ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract

			include $this->locate_file( 'single', 'markup' );
		}

		/**
		 * Load a file for the configuration of single template page of portfolio
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function single_template_config() {
			// phpcs:disable WordPress.Security.NonceVerification.Recommended,WordPress.WP.GlobalVariablesOverride.Prohibited
			global $post, $wpdb;

			if ( defined( 'DOING_AJAX' ) && DOING_AJAX && isset( $_REQUEST['post_id'] ) ) {
				$post = get_post( absint( $_REQUEST['post_id'] ) );
			}

			if ( ( ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) && ! is_single() ) || ! isset( $post->post_type ) || ! $this->is_valid( $post->post_type ) ) {
				return;
			}

			$this->layout = 'single';
			$path         = $this->locate_file( 'single', 'config' );

			if ( file_exists( $path ) ) {
				$post_name = $wpdb->get_var( $wpdb->prepare( "SELECT p.post_name FROM $wpdb->postmeta AS pm INNER JOIN $wpdb->posts AS p ON p.ID = pm.post_id WHERE pm.meta_key = %s AND pm.meta_value = %s AND p.post_type = %s", '_post_type', $post->post_type, $this->name ) );
				extract( apply_filters( 'yit_cptu_frontend_vars', array( 'name' => $post_name ), $this->name ) ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract

				include $path;
			}
			// phpcs:enable
		}

		// ########################## ARCHIVE TEMPLATE ###############################

		/**
		 * Load the template for archive page
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function archive_template() {
			global $wp_query;

			// Check if we are in archive template.
			if ( ! ( ! is_admin() && is_archive() && isset( $wp_query->post ) && $this->is_valid( $wp_query->post->post_type ) ) ) {
				return;
			}

			// Remove the action from loop of theme.
			remove_action( 'yit_content_loop', 'yit_content_loop', 10 );
			add_action( 'yit_content_loop', array( $this, 'archive_template_loop' ), 10 );
		}

		/**
		 * Load loop for the archive template
		 *
		 * @return void
		 * @since  1.0
		 * @author Antonino Scarfi' <antonino.scarfi@yithemes.com>
		 */
		public function archive_template_loop() {
			global $wp_query;
			echo $this->add_shortcode( array( 'name' => $wp_query->post->post_type ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}
}
