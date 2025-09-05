<?php
/**
 * The Template for displaying the Error Log.
 *
 * @package YITH\PluginFramework\Templates\SysInfo
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

$debug_files = array(
	// WordPress' debug.log file.
	'debug.log' => array(
		'label' => __( 'WP debug.log file', 'yith-plugin-fw' ),
		'path'  => WP_CONTENT_DIR . '/debug.log',
	),
	// PHP error_log file.
	'error_log' => array(
		'label' => __( 'PHP error_log file', 'yith-plugin-fw' ),
		'path'  => ABSPATH . 'error_log',
	),
);

global $wp_filesystem;

if ( empty( $wp_filesystem ) ) {
	require_once ABSPATH . '/wp-admin/includes/file.php';
	WP_Filesystem();
}

$max_file_size = 8388608; // 8 MB.
$log_files     = array();
$desc          = '';

foreach ( $debug_files as $key => $debug_file ) {
	if ( ! file_exists( $debug_file['path'] ) ) {
		continue;
	}

	$file_size = filesize( $debug_file['path'] );

	if ( $file_size > $max_file_size ) {
		$content = yith_plugin_fw_get_field(
			array(
				'id'      => $key,
				'type'    => 'buttons',
				'buttons' => array(
					array(
						'name'  => __( 'Download', 'yith-plugin-fw' ),
						'class' => 'yith-download-log',
						'data'  => array(
							'action' => 'yith_create_log_file',
							'file'   => $key,
							'nonce'  => wp_create_nonce( 'yith-export-log' ),
						),
					),
				),
			),
		);
		$desc    = '<span class="description">' . esc_html__( 'The file size exceeds 8 megabytes so it must be downloaded', 'yith-plugin-fw' ) . '</span>';
	} else {
		$content = yith_plugin_fw_get_field(
			array(
				'id'                => $key,
				'type'              => 'textarea',
				'value'             => $wp_filesystem->get_contents( $debug_file['path'] ),
				'class'             => 'yith-system-info-debug',
				'custom_attributes' => 'readonly',
			),
		);
	}

	$log_files[ $key ] = array(
		'name'  => $debug_file['label'],
		'value' => $content,
		'desc'  => $desc,
	);
}

if ( empty( $log_files ) ) {

	ob_start();
	?>
	<div class="debug-disabled">
		<?php
		// translators: %s file name.
		printf( esc_html__( 'No Log file available. Enable the WordPress debug by adding this in the %s file of your installation', 'yith-plugin-fw' ), '<code>wp-config.php</code>' );
		?>
		<br/>
		<br/>
		<span class="debug-code">
		define( 'WP_DEBUG', true );<br/>
		define( 'WP_DEBUG_LOG', true );<br/>
		define( 'WP_DEBUG_DISPLAY', false );<br/>
	</span>
		<a href="#" data-tooltip="<?php esc_attr_e( 'Copied!', 'yith-plugin-fw' ); ?>" class="copy-link"><?php esc_html_e( 'Copy Code', 'yith-plugin-fw' ); ?></a>
	</div>
	<?php
	$content            = ob_get_clean();
	$log_files['empty'] = array(
		'name'  => '',
		'value' => $content,
		'desc'  => '',
	);
}

return array(
	'log-files' => array(
		'title' => esc_html__( 'Log Files', 'yith-plugin-fw' ),
		'class' => 'yith-system-info__log-files',
		'rows'  => $log_files,
	),
);
