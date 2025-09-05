<?php
/**
 * View for react-only option notice
 */

?>

<span class="yith-wcwl-react-only-option__notice">
	<?php echo yith_wcwl_kses_icon( yith_wcwl_get_icon( 'warning-triangle' ) ); ?>
	<p>
		<?php
		echo wp_kses_post( sprintf(
		// translators: %1$s is the placeholder for the HTML opening tag to hyperlink the text; %2$s is the placeholder for the HTML closing tag to hyperlink the text;
			__( 'This option is available only in the new React templates. %1$s Convert your templates now to unlock all the new features > %2$s', 'yith-woocommerce-wishlist' ),
			'<a role="button" tabindex="0">',
			'</a>'
		) );
		?>
	</p>
</span>
