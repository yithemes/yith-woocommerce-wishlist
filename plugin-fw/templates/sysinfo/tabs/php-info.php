<?php
/**
 * The Template for displaying PHP Information.
 *
 * @package YITH\PluginFramework\Templates\SysInfo
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

ob_start();
phpinfo( 61 ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.prevent_path_disclosure_phpinfo
$php_info = ob_get_contents();
ob_end_clean();

$php_info = preg_replace( '%^.*<div class="center">(.*)</div>.*$%ms', '$1', $php_info );
$php_info = preg_replace( '%^<h1>(.*)</h1>$%ms', '', $php_info );
$php_info = preg_replace( '%(^.*)<a name=\".*\">(.*)</a>(.*$)%m', '$1$2$3', $php_info );
$php_info = preg_replace( '%^<h2>((\w*-*\w*)|(\w*\s*\w*))</h2>$%m', '</div></div><div class="yith-plugin-fw__panel__section"><div class="yith-plugin-fw__panel__section__title"><h2>$1</h2></div><div class="yith-plugin-fw__panel__section__content yith-system-info__php-info">', $php_info );
$php_info = str_replace( '<hr />', '', $php_info );

preg_match( '%^(<a href\=\".*\">.*<\/h1>)$%m', $php_info, $phpversion );

//phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="yith-plugin-fw__panel__section yith-system-info__php-info-main-section">
	<div class="yith-plugin-fw__panel__section__title">
		<?php echo $phpversion[0]; ?>
	</div>
	<div class="yith-plugin-fw__panel__section__content yith-system-info__php-info">
		<?php echo $php_info; ?>
	</div>
</div>
