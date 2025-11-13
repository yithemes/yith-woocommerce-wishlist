<?php
/**
 * Framework Name: YIT Plugin Framework
 * Version: 4.7.7
 * Author: YITH
 * Text Domain: yith-plugin-fw
 * Domain Path: /languages/
 *
 * @author  YITH <plugins@yithemes.com>
 * @version 4.7.7
 * @package YITH\PluginFramework
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

global $yith_plugin_fw_data, $plugin_upgrade_fw_data;

$default_headers = array(
	'Name'       => 'Framework Name',
	'Version'    => 'Version',
	'Author'     => 'Author',
	'TextDomain' => 'Text Domain',
	'DomainPath' => 'Domain Path',
);

$fw_init_file = __FILE__;
$fw_folder    = trailingslashit( dirname( $fw_init_file ) );
$plugin_path  = trailingslashit( dirname( $fw_folder ) );

$fw_data      = get_file_data( $fw_init_file, $default_headers );
$fw_version   = $fw_data['Version'];
$fw_main_file = $fw_folder . 'yit-plugin.php';

if ( ! empty( $yith_plugin_fw_data ) ) {
	foreach ( $yith_plugin_fw_data as $version => $path ) {
		if ( version_compare( $version, $fw_version, '<' ) ) {
			$yith_plugin_fw_data = array( $fw_version => $fw_main_file );
		}
	}
} else {
	$yith_plugin_fw_data = array( $fw_version => $fw_main_file );
}

// Check for license & upgrade classes.
$upgrade_fw_init_file = $plugin_path . 'plugin-upgrade/init.php';
$upgrade_fw_data      = file_exists( $upgrade_fw_init_file ) ? get_file_data( $upgrade_fw_init_file, $default_headers ) : $fw_data;
$upgrade_fw_version   = $upgrade_fw_data['Version'];
$plugin_license_path  = $plugin_path . 'plugin-upgrade';
$plugin_upgrade_path  = $plugin_path . 'plugin-upgrade';

if ( ! file_exists( $plugin_upgrade_path ) ) {
	// Check path for OLD plugin framework version.
	if ( file_exists( $plugin_path . 'plugin-fw/licence' ) ) {
		$plugin_license_path = $plugin_path . 'plugin-fw/licence';
		$plugin_upgrade_path = $plugin_path . 'plugin-fw/';
	} else {
		$plugin_upgrade_path = false;
		$plugin_license_path = false;
	}
}

if ( file_exists( $plugin_upgrade_path ) ) {
	$upgrade_fw_files = array();

	if ( ! ! $plugin_license_path ) {
		$plugin_upgrade_path = empty( $plugin_upgrade_path ) ? $plugin_license_path : $plugin_upgrade_path;
		$license_files       = array(
			'%yith-license-path%/lib/yit-licence.php',
			'%yith-license-path%/lib/yit-plugin-licence.php',
			'%yith-license-path%/lib/yit-theme-licence.php',
		);

		$upgrade_files = array( '%yith-upgrade-path%/lib/yit-plugin-upgrade.php' );

		$to_include_license = str_replace( '%yith-license-path%', $plugin_license_path, $license_files );
		$to_include_upgrade = str_replace( '%yith-upgrade-path%', $plugin_upgrade_path, $upgrade_files );

		$upgrade_fw_files = array_merge( $to_include_license, $to_include_upgrade );
	}


	if ( ! empty( $plugin_upgrade_fw_data ) ) {
		foreach ( $plugin_upgrade_fw_data as $version => $files ) {
			if ( version_compare( $version, $upgrade_fw_version, '<' ) ) {
				$plugin_upgrade_fw_data = array( $upgrade_fw_version => $upgrade_fw_files );
			}
		}
	} else {
		$plugin_upgrade_fw_data = array( $upgrade_fw_version => $upgrade_fw_files );
	}
}

// Load plugin framework.
add_action(
	'plugins_loaded',
	function () {
		if ( ! defined( 'YIT_CORE_PLUGIN' ) ) {
			global $yith_plugin_fw_data;
			if ( $yith_plugin_fw_data ) {
				require_once array_shift( $yith_plugin_fw_data );
			}
		}
	}
);
