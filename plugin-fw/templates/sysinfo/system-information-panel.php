<?php
/**
 * This file belongs to the YIT Framework.
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package YIT Plugin Framework
 */

$section_tabs = array(
	'main'      => esc_html__( 'System Status', 'yith-plugin-fw' ),
	'php-info'  => esc_html__( 'PHPInfo', 'yith-plugin-fw' ),
	'error-log' => esc_html__( 'Log Files', 'yith-plugin-fw' ),
);

$current_tab = isset( $_GET['tab'] ) ? $_GET['tab'] : 'main'; //phpcs:ignore
$tab_path    = defined( 'YIT_CORE_PLUGIN_PATH' ) ? YIT_CORE_PLUGIN_PATH : get_template_directory() . '/core/plugin-fw/';

?>
<div id="yith-sysinfo" class="wrap yith-system-info yith-plugin-ui">
	<h2 class="yith-sysinfo-title">
		<span class="yith-logo"><img src="<?php echo esc_attr( yith_plugin_fw_get_default_logo() ); ?>" /></span> <?php esc_html_e( 'YITH System Information', 'yith-plugin-fw' ); ?>
	</h2>

	<h2 class="nav-tab-wrapper">
		<ul class="yith-plugin-fw-tabs">
			<?php

			foreach ( $section_tabs as $key => $tab_value ) {
				$active_class = ( $current_tab === $key ) ? ' nav-tab-active' : '';
				$url          = add_query_arg( array( 'tab' => $key ) );

				echo '<li class="yith-plugin-fw-tab-element">';
				echo '<a class="nav-tab' . esc_attr( $active_class ) . '" href="' . esc_attr( $url ) . '">' . esc_attr( $tab_value ) . '</a>';
				echo '</li>';
			}

			?>
		</ul>
	</h2>
	<div id="wrap" class="yith-plugin-fw plugin-option yit-admin-panel-container">
		<div class="yith-system-info-wrap">

			<?php
			require_once $tab_path . "/templates/sysinfo/tabs/$current_tab.php";
			?>

		</div>
	</div>

</div>
