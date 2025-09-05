<?php
/**
 * React preview mode toggle
 *
 * @var bool $user_can_manage_rendering_method Whether the current user can manage rendering method
 * @var bool $convert_rendering_method_url     The url to convert the rendering method.
 * @var bool $exit_from_preview_url                The url to close preview mode.
 *
 * @page YITH\Wishlist\templates
 */

?>

<div class="yith-wcwl-react-preview-toggle__wrapper collapsed">
	<div class="yith-wcwl-react-preview-toggle__header">
		<span class="yith-wcwl-react-preview-toggle__header-icon">
			<?php echo yith_wcwl_kses_icon( yith_wcwl_get_icon( 'eye' ) ); ?>
		</span>
		<span class="yith-wcwl-react-preview-toggle__header-title">
			<?php esc_html_e( 'Preview mode', 'yith-woocommerce-wishlist' ); ?>
		</span>
		<span class="yith-wcwl-react-preview-toggle__header-toggle-button" tabindex="0">
			<?php echo yith_wcwl_kses_icon( yith_wcwl_get_icon( 'arrow-down' ) ); ?>
		</span>
	</div>
	<div class="yith-wcwl-react-preview-toggle__content">
		<p class="yith-wcwl-react-preview-toggle__content-text">
			<?php echo wp_kses_post( __( 'Your site is in preview mode: in this way, you can see how the new React Components would work on your site.<br><br>Is everything working smoothly?', 'yith-woocommerce-wishlist' ) ); ?>
		</p>
		<?php if ( $user_can_manage_rendering_method ): ?>
			<div class="yith-wcwl-react-preview-toggle__content-buttons">
				<a id="yith-wcwl-preview-toggle-convert-to-react" href="<?php echo esc_attr( $convert_rendering_method_url ); ?>">
					<?php esc_html_e( 'Yes! Convert PHP templates to React', 'yith-woocommerce-wishlist' ); ?>
				</a>
				<a id="yith-wcwl-preview-toggle-no-thanks" href="<?php echo esc_attr( $exit_from_preview_url ); ?>">
					<?php esc_html_e( 'No, thanks, close the preview', 'yith-woocommerce-wishlist' ); ?>
				</a>
			</div>
		<?php endif; ?>
	</div>
</div>
