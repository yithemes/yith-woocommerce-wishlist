<?php
/**
 * The Template for displaying the Database info page of the System Information.
 *
 * @package YITH\PluginFramework\Templates\SysInfo
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

$database_info = YITH_System_Status()->get_database_info();
$db_error      = version_compare( $database_info['mysql_version'], '5.6', '<' ) && ! strstr( $database_info['mysql_version_string'], 'MariaDB' );
$row_classes   = '';
$solutions     = '';
$icon          = $db_error ? 'warning' : 'yes';

if ( $db_error ) {
	$row_classes = 'has-warning';
	/* Translators: %s: Codex link. */
	$solutions = sprintf( esc_html__( 'WordPress recommends a minimum MySQL version of 5.6. See: %s', 'yith-plugin-fw' ), '<a href="https://wordpress.org/about/requirements/" target="_blank">' . esc_html__( 'WordPress requirements', 'yith-plugin-fw' ) . '</a>' );
}

$sections = array(
	'database-info' => array(
		'title' => esc_html__( 'Database Info', 'yith-plugin-fw' ),
		'class' => 'yith-system-info__table',
		'rows'  => array(
			'sql-version' => array(
				'name'  => esc_html__( 'MySQL version', 'yith-plugin-fw' ),
				'value' => '<span class="dashicons dashicons-' . $icon . '"></span> ' . $database_info['mysql_version'] . ' - ' . $database_info['mysql_version_string'],
				'class' => $row_classes,
				'desc'  => $solutions,
			),
			'total-size'  => array(
				'name'  => esc_html__( 'Total Database Size', 'yith-plugin-fw' ),
				'value' => sprintf( '%.2fMB', esc_html( $database_info['database_size']['data'] + $database_info['database_size']['index'] + $database_info['database_size']['free'] ) ),
			),
			'data-size'   => array(
				'name'  => esc_html__( 'Database Data Size', 'yith-plugin-fw' ),
				'value' => sprintf( '%.2fMB', esc_html( $database_info['database_size']['data'] ) ),
			),
			'index-size'  => array(
				'name'  => esc_html__( 'Database Index Size', 'yith-plugin-fw' ),
				'value' => sprintf( '%.2fMB', esc_html( $database_info['database_size']['index'] ) ),
			),
			'free-size'   => array(
				'name'  => esc_html__( 'Database Free Size', 'yith-plugin-fw' ),
				'value' => sprintf( '%.2fMB', esc_html( $database_info['database_size']['free'] ) ),
			),
		),
	),
);

foreach ( $database_info['database_tables'] as $table => $table_data ) {
	$sections['database-info']['rows'][ $table ] = array(
		'name'  => $table,
		/* Translators: %1$f: Table size, %2$f: Index size, %3$f: Free size, %4$s Engine. */
		'value' => sprintf( esc_html__( 'Data: %1$.2fMB | Index: %2$.2fMB | Free: %3$.2fMB | Engine: %4$s', 'yith-plugin-fw' ), esc_html( number_format( $table_data['data'], 2 ) ), esc_html( number_format( $table_data['index'], 2 ) ), esc_html( number_format( $table_data['free'], 2 ) ), esc_html( $table_data['engine'] ) ),
	);
}

return $sections;
