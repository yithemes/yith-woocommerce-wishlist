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

$system_info = get_option( 'yith_system_info' );
$saved_ip    = get_transient( 'yith-sysinfo-ip' );
$output_ip   = ( '' === (string) $saved_ip ? 'n/a' : $saved_ip );
$labels      = YITH_System_Status()->requirement_labels;

// Get Output IP Address.
if ( 'n/a' === $output_ip && function_exists( 'curl_init' ) && apply_filters( 'yith_system_status_check_ip', true ) ) {
	//phpcs:disable
	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_URL, 'https://ifconfig.co/ip' );
	curl_setopt( $ch, CURLOPT_SSL_VERIFYHOST, 0 );
	curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, 0 );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
	$data = curl_exec( $ch );
	curl_close( $ch );
	//phpcs:enable

	// CHECK IF IS IPv4.
	preg_match( '/((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/', $data, $matches );
	// CHECK IF IS IPv6.
	if ( empty( $matches ) ) {
		preg_match( '/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/', $data, $matches );
	}
	$output_ip = ! empty( $matches ) ? $matches[0] : 'n/a';

	set_transient( 'yith-sysinfo-ip', $output_ip, 300 );
}

?>
<h2>
	<?php esc_html_e( 'Site Info', 'yith-plugin-fw' ); ?>
</h2>
<table class="form-table" role="presentation">
	<tr>
		<th scope="row">
			<?php esc_html_e( 'Site URL', 'yith-plugin-fw' ); ?>
		</th>
		<td class="info-value">
			<?php echo esc_attr( get_site_url() ); ?>
		</td>

	</tr>
	<tr>
		<th scope="row">
			<?php esc_html_e( 'Output IP Address', 'yith-plugin-fw' ); ?>
		</th>
		<td class="info-value">
			<?php echo esc_attr( $output_ip ); ?>
		</td>
	</tr>
	<tr>
		<th scope="row">
			<?php esc_html_e( 'Defined WP_CACHE', 'yith-plugin-fw' ); ?>
		</th>
		<td class="info-value">
			<?php echo( defined( 'WP_CACHE' ) && WP_CACHE ? esc_html__( 'Yes', 'yith-plugin-fw' ) : esc_html__( 'No', 'yith-plugin-fw' ) ); ?>
		</td>
	</tr>
	<tr>
		<th scope="row">
			<?php esc_html_e( 'External object cache', 'yith-plugin-fw' ); ?>
		</th>
		<td class="info-value">
			<?php echo( wp_using_ext_object_cache() ? esc_html__( 'Yes', 'yith-plugin-fw' ) : esc_html__( 'No', 'yith-plugin-fw' ) ); ?>
		</td>
	</tr>
</table>

<h2>
	<?php esc_html_e( 'Plugins Requirements', 'yith-plugin-fw' ); ?>
</h2>
<table class="form-table" role="presentation">
	<?php foreach ( $system_info['system_info'] as $key => $item ) : ?>
		<?php
		$has_errors   = isset( $item['errors'] );
		$has_warnings = isset( $item['warnings'] );
		?>
		<tr>
			<th scope="row">
				<?php echo esc_attr( $labels[ $key ] ); ?>
			</th>
			<td class="requirement-value <?php echo( $has_errors ? 'has-errors' : '' ); ?> <?php echo( $has_warnings ? 'has-warnings' : '' ); ?>">
				<span class="dashicons dashicons-<?php echo( $has_errors || $has_warnings ? 'warning' : 'yes' ); ?>"></span>
				<?php
				YITH_System_Status()->format_requirement_value( $key, $item['value'] );
				?>
			</td>
			<td class="requirement-messages">
				<?php
				if ( $has_errors ) {
					YITH_System_Status()->print_error_messages( $key, $item, $labels[ $key ] );
					YITH_System_Status()->print_solution_suggestion( $key, $item, $labels[ $key ] );
				} elseif ( $has_warnings ) {
					YITH_System_Status()->print_warning_messages( $key );
				}
				?>
			</td>
		</tr>
	<?php endforeach; ?>
</table>

