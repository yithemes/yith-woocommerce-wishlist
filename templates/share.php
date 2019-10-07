<?php
/**
 * Share template
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.13
 */

if ( ! defined( 'YITH_WCWL' ) ) {
    exit;
} // Exit if accessed directly
?>

<div class="yith-wcwl-share">
    <h4 class="yith-wcwl-share-title"><?php echo $share_title ?></h4>
    <ul>
        <?php if( $share_facebook_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a target="_blank" class="facebook" href="http://www.facebook.com/sharer.php?u=<?php echo urlencode($share_link_url)?>&p[title]=<?php echo $share_link_title ?>" title="<?php _e( 'Facebook', 'yith-woocommerce-wishlist' ) ?>"></a>
            </li>
        <?php endif; ?>

        <?php if( $share_twitter_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a target="_blank" class="twitter" href="https://twitter.com/share?url=<?php echo urlencode( $share_link_url ) ?>&amp;text=<?php echo $share_twitter_summary ?>" title="<?php _e( 'Twitter', 'yith-woocommerce-wishlist' ) ?>"></a>
            </li>
        <?php endif; ?>

        <?php if( $share_pinterest_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a target="_blank" class="pinterest" href="http://pinterest.com/pin/create/button/?url=<?php echo urlencode( $share_link_url ) ?>&amp;description=<?php echo $share_summary ?>&amp;media=<?php echo $share_image_url ?>" title="<?php _e( 'Pinterest', 'yith-woocommerce-wishlist' ) ?>" onclick="window.open(this.href); return false;"></a>
            </li>
        <?php endif; ?>

        <?php if( $share_googleplus_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a target="_blank" class="googleplus" href="https://plus.google.com/share?url=<?php echo urlencode( $share_link_url ) ?>&amp;title=<?php echo $share_link_title ?>" title="<?php _e( 'Google+', 'yith-woocommerce-wishlist' ) ?>" onclick='javascript:window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");return false;'></a>
            </li>
        <?php endif; ?>

        <?php if( $share_email_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a class="email" href="mailto:?subject=<?php echo urlencode( apply_filters( 'yith_wcwl_email_share_subject', $share_link_title ) )?>&amp;body=<?php echo apply_filters( 'yith_wcwl_email_share_body', urlencode( $share_link_url ) ) ?>&amp;title=<?php echo $share_link_title ?>" title="<?php _e( 'Email', 'yith-woocommerce-wishlist' ) ?>"></a>
            </li>
        <?php endif; ?>

        <?php if( $share_whatsapp_enabled && wp_is_mobile() ):
            ?>
            <li style="list-style-type: none; display: inline-block;">
                <a class="whatsapp" href="whatsapp://send?text=<?php _e( 'My wishlist on ', 'yith-woocommerce-wishlist' ); ?> – <?php urlencode($share_link_url); ?>" data-action="share/whatsapp/share" target="_blank" title="<?php _e( 'WhatsApp', 'yith-woocommerce-wishlist' ) ?>"></a>
            </li>
        <?php endif;
        ?>
    </ul>
</div>

<?php if( $share_url_enabled ): ?>
    <div class="yith-wcwl-after-share-section">
         <input class="copy-target" readonly="readonly" type="url" name="yith_wcwl_share_url" id="yith_wcwl_share_url" value="<?php echo $share_link_url ?>" />
        <?php echo ( ! empty( $share_link_url ) ) ? sprintf( '<small>%s <span class="copy-trigger">%s</span> %s</small>', __( '(Now', 'yith-woocommerce-wishlist' ), __( 'copy', 'yith-woocommerce-affiliates' ), __( 'this wishlist link and share it anywhere)', 'yith-woocommerce-wishlist' ) ) : '' ?>
    </div>
<?php endif; ?>

<?php do_action('yith_wcwl_after_share_buttons',$share_link_url,$share_title,$share_link_title) ?>