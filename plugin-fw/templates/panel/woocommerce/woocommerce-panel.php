<?php add_thickbox();?>
<div class="wrap <?php echo $wrap_class?>">
    <div id="icon-users" class="icon32"><br/></div>
	<?php do_action('yith_plugin_fw_before_woocommerce_panel', $page )?>
    <?php if( ! empty( $available_tabs ) ): ?>
        <h2 class="nav-tab-wrapper woo-nav-tab-wrapper">
            <?php foreach( $available_tabs as $id => $label ):
	            $active_class = ( $current_tab == $id ) ? ' nav-tab-active' : '';
	            $active_class .= 'premium' == $id ? ' yith-premium ': '';
                ?>
                <a href="?page=<?php echo $page ?>&tab=<?php echo $id ?>" class="nav-tab <?php echo $active_class ?>"><?php echo $label ?></a>
            <?php endforeach; ?>
        </h2>
        <?php $this->print_panel_content() ?>
    <?php endif; ?>
</div>