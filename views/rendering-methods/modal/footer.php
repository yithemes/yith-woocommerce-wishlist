<?php
/**
 * Rendering methods Modal footer
 *
 * @var string $preview_url          The preview url including the query arg to switch in preview mode
 * @var string $convert_to_react_url The url to convert the rendering method in react mode
 *
 * @package YITH\Wishlist\Views\Modal
 */

?>

<a id="yith-wcwl-rendering-method-react-preview" class="yith-plugin-fw__button--secondary yith-plugin-fw__button--xl" href="<?php echo esc_attr( $preview_url ); ?>" target="_blank">
	<?php esc_html_e( 'Preview your site in a new tab', 'yith-woocommerce-wishlist' ); ?>
</a>
<a id="yith-wcwl-rendering-method-convert-to-react" class="yith-plugin-fw__button--primary yith-plugin-fw__button--xl" href="<?php echo esc_html( $convert_to_react_url ) ?>">
	<?php esc_html_e( 'Convert PHP templates to React', 'yith-woocommerce-wishlist' ); ?>
</a>
<a id="yith-wcwl-rendering-method-close-modal" href="#">
	<?php esc_html_e( "No, thanks, I'll wait until the next update", 'yith-woocommerce-wishlist' ); ?>
</a>
