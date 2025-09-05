<?php
/**
 * The Template for displaying the System Information Panel.
 *
 * @package YITH\PluginFramework\Templates\SysInfo
 * @var array $tabs
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

if ( ! apply_filters( 'yith_system_status_enable_phpinfo', true ) ) {
	unset( $tabs['php-info'] );
}

$current_tab       = isset( $_GET['tab'] ) ? sanitize_key( wp_unslash( $_GET['tab'] ) ) : 'main'; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
$current_tab       = array_key_exists( $current_tab, $tabs ) ? $current_tab : array_key_first( $tabs );
$base_path         = defined( 'YIT_CORE_PLUGIN_PATH' ) ? YIT_CORE_PLUGIN_PATH : get_template_directory() . '/core/plugin-fw/';
$template_path     = $base_path . "/templates/sysinfo/tabs/$current_tab.php";
$collapsed_class   = get_user_setting( 'yithFwSidebarFold', 'o' ) === 'f' ? 'yith-plugin-fw__panel__sidebar--collapsed' : '';
$allowed_icon_tags = array_merge( wp_kses_allowed_html( 'post' ), yith_plugin_fw_kses_allowed_svg_tags() );
?>
<div class="yith-plugin-fw__wrap wrap yith-plugin-ui ">
	<div class="yith-plugin-fw__panel">
		<div class="yith-plugin-fw__panel__sidebar <?php echo esc_attr( $collapsed_class ); ?>">
			<div class="yith-plugin-fw__panel__sidebar__header">
				<img class="yith-plugin-fw__panel__sidebar__header__logo" src="<?php echo esc_url( YIT_CORE_PLUGIN_URL . '/assets/images/yith-logo.svg' ); ?>"/>
				<div class="yith-plugin-fw__panel__sidebar__header__name"><?php esc_html_e( 'YITH System Information', 'yith-plugin-fw' ); ?></div>
			</div>
			<div class="yith-plugin-fw__panel__menu__wrapper">
				<div class="yith-plugin-fw__panel__menu">
					<?php foreach ( $tabs as $tab_key => $tab_data ) : ?>
						<div id="'yith-plugin-fw__panel__menu-item-'<?php echo esc_attr( $tab_key ); ?>" class="yith-plugin-fw__panel__menu-item <?php echo $current_tab === $tab_key ? 'yith-plugin-fw--active' : ''; ?>">
							<a class="yith-plugin-fw__panel__menu-item__content" href="<?php echo esc_url( add_query_arg( array( 'tab' => $tab_key ) ) ); ?>">
								<span class="yith-plugin-fw__panel__menu-item__icon"><?php echo wp_kses( $tab_data['icon'], $allowed_icon_tags ); ?></span>
								<span class="yith-plugin-fw__panel__menu-item__name"><?php echo wp_kses_post( $tab_data['title'] ); ?></span>
							</a>
						</div>
					<?php endforeach; ?>
					<div id="yith-plugin-fw__panel__menu-item-collapse" class="yith-plugin-fw__panel__menu-item">
						<a class="yith-plugin-fw__panel__menu-item__content yith-plugin-fw__panel__sidebar__collapse" href="#">
							<span class="yith-plugin-fw__panel__menu-item__icon">
								<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z"></path>
								</svg>
							</span>
							<span class="yith-plugin-fw__panel__menu-item__name"><?php esc_html_e( 'Collapse', 'yith-plugin-fw' ); ?></span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div id="yith-sysinfo-<?php echo esc_attr( $current_tab ); ?>" class="yith-plugin-fw__panel__content">
			<div class="yith-plugin-fw__panel__content__page yith-plugin-fw__panel__content__page--options">
				<div class="yith-plugin-fw__panel__content__page__heading">
					<h1 class="yith-plugin-fw__panel__content__page__title">
						<?php echo wp_kses_post( $tabs[ $current_tab ]['title'] ); ?>
					</h1>
					<?php if ( isset( $tabs[ $current_tab ]['desc'] ) ) : ?>
						<div class="yith-plugin-fw__panel__content__page__description">
							<?php echo wp_kses_post( $tabs[ $current_tab ]['desc'] ); ?>
						</div>
					<?php endif; ?>
				</div>
				<div class="yith-system-info__container">
					<?php
					if ( file_exists( $template_path ) ) {
						if ( 'php-info' !== $current_tab ) {
							$sections = require_once $template_path;
							foreach ( $sections as $section ) {
								?>
								<div class="yith-plugin-fw__panel__section">
									<div class="yith-plugin-fw__panel__section__title">
										<h2><?php echo esc_html( $section['title'] ); ?></h2>
										<?php if ( ! empty( $section['description'] ) ) : ?>
											<div class="yith-plugin-fw__panel__section__description">
												<?php echo wp_kses_post( wpautop( wptexturize( $section['description'] ) ) ); ?>
											</div>
										<?php endif; ?>
									</div>
									<div class="yith-plugin-fw__panel__section__content <?php echo isset( $section['class'] ) ? esc_attr( $section['class'] ) : ''; ?>">
										<?php foreach ( $section['rows'] as $row ) : ?>
											<div class="yith-plugin-fw__panel__option yith-system-info__info-row">
												<div class="yith-plugin-fw__panel__option__label yith-system-info__info-label">
													<label><?php echo wp_kses_post( $row['name'] ); ?></label>
												</div>
												<div class="yith-plugin-fw__panel__option__content yith-system-info__info-value <?php echo isset( $row['class'] ) ? esc_attr( $row['class'] ) : ''; ?>">
													<?php echo wp_kses_post( $row['value'] ); ?>
												</div>
												<?php if ( isset( $row['desc'] ) ) : ?>
													<div class="yith-plugin-fw__panel__option__description yith-system-info__info-desc">
														<?php echo wp_kses_post( $row['desc'] ); ?>
													</div>
												<?php endif; ?>
											</div>
										<?php endforeach; ?>
									</div>
								</div>
								<?php
							}
						} else {
							require_once $template_path;
						}
					}
					?>
				</div>
			</div>
		</div>
	</div>
</div>
