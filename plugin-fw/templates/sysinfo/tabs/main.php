<?php
/**
 * The Template for displaying the Main page of the System Information.
 *
 * @package YITH\PluginFramework\Templates\SysInfo
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

$system_info    = get_option( 'yith_system_info' );
$output_ip      = YITH_System_Status()->get_output_ip();
$labels         = YITH_System_Status()->requirement_labels;
$plugin_fw_info = YITH_System_Status()->get_plugin_fw_info();
$requirements   = array();

foreach ( $system_info['system_info'] as $key => $item ) {
	$has_errors   = isset( $item['errors'] );
	$has_warnings = isset( $item['warnings'] );
	$solutions    = '';
	if ( $has_errors ) {
		$solutions = YITH_System_Status()->print_error_messages( $key, $item, $labels[ $key ] );
	} elseif ( $has_warnings ) {
		$solutions = YITH_System_Status()->print_warning_messages( $key );
	}

	$icon                 = ( $has_errors || $has_warnings ) ? 'warning' : 'yes';
	$row_classes          = array(
		$has_errors ? 'has-errors' : '',
		$has_warnings ? 'has-warnings' : '',
	);
	$requirements[ $key ] = array(
		'name'  => $labels[ $key ],
		'value' => YITH_System_Status()->format_requirement_value( $key, $item['value'], $icon ),
		'class' => implode( ' ', array_filter( $row_classes ) ),
		'desc'  => $solutions,
	);
}

$sections = array(
	'system-info'  => array(
		'title' => esc_html__( 'Site Info', 'yith-plugin-fw' ),
		'class' => 'yith-system-info__table',
		'rows'  => array(
			'site-url'     => array(
				'name'  => esc_html__( 'Site URL', 'yith-plugin-fw' ),
				'value' => get_site_url(),
			),
			'output-ip'    => array(
				'name'  => esc_html__( 'Output IP Address', 'yith-plugin-fw' ),
				'value' => $output_ip,
			),
			'cache'        => array(
				'name'  => esc_html__( 'Defined WP_CACHE', 'yith-plugin-fw' ),
				'value' => ( defined( 'WP_CACHE' ) && WP_CACHE ? esc_html__( 'Yes', 'yith-plugin-fw' ) : esc_html__( 'No', 'yith-plugin-fw' ) ),
			),
			'object-cache' => array(
				'name'  => esc_html__( 'External object cache', 'yith-plugin-fw' ),
				'value' => ( wp_using_ext_object_cache() ? esc_html__( 'Yes', 'yith-plugin-fw' ) : esc_html__( 'No', 'yith-plugin-fw' ) ),
			),
			'fw-version'   => array(
				'name'  => esc_html__( 'YITH Plugin Framework Version', 'yith-plugin-fw' ),
				'value' => sprintf(
					'%s (%s)',
					$plugin_fw_info['version'],
					// translators: %s is the name of the plugin that is loading the framework.
					sprintf( __( 'loaded by %s', 'yith-plugin-fw' ), $plugin_fw_info['loaded_by'] )
				),
			),
		),
	),
	'requirements' => array(
		'title' => esc_html__( 'Plugins Requirements', 'yith-plugin-fw' ),
		'class' => 'yith-system-info__table',
		'rows'  => $requirements,
	),
);

return $sections;
