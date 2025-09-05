<?php
/**
 * Template for displaying the notice component
 *
 * @var array $component The component.
 * @package YITH\PluginFramework\Templates\Components
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

list ( $component_id, $class, $attributes, $data, $notice_type, $banner_title, $message, $animate, $inline ) = yith_plugin_fw_extract( $component, 'id', 'class', 'attributes', 'data', 'notice_type', 'title', 'message', 'animate', 'inline' );

$allowed_types = array( 'info', 'warning', 'error' );

$notice_type  = in_array( $notice_type ?? '', $allowed_types, true ) ? $notice_type : 'info';
$banner_title = $banner_title ?? '';
$message      = $message ?? '';
$inline       = $inline ?? true;
$animate      = $animate ?? true;
$class        = $class ?? '';

$icons = array(
	'info'    => '<svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path></svg>',
	'warning' => '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>',
	'error'   => '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>',
);

$icon = $icons[ $notice_type ] ?? '';

$allowed_icon_tags = array_merge( wp_kses_allowed_html( 'post' ), yith_plugin_fw_kses_allowed_svg_tags() );

$classes = array(
	'yith-plugin-fw__notice-banner',
	"yith-plugin-fw__notice-banner--{$notice_type}",
	$inline ? 'yith-plugin-fw--inline' : '',
	$animate ? 'yith-plugin-fw-animate__appear-from-top' : '',
	$class,
);

$class = implode( ' ', array_filter( $classes ) );
?>
<div
		id="<?php echo esc_attr( $component_id ); ?>"
		class="<?php echo esc_attr( $class ); ?>"
	<?php echo yith_plugin_fw_html_attributes_to_string( $attributes ); ?>
	<?php echo yith_plugin_fw_html_data_to_string( $data ); ?>
>
	<div class="yith-plugin-fw__notice-banner__icon">
		<?php echo wp_kses( $icon, $allowed_icon_tags ); ?>
	</div>
	<div class="yith-plugin-fw__notice-banner__content">
		<div class="yith-plugin-fw__notice-banner__title">
			<?php echo wp_kses_post( $banner_title ); ?>
		</div>
		<div class="yith-plugin-fw__notice-banner__message">
			<?php echo wp_kses_post( $message ); ?>
		</div>
	</div>
</div>
