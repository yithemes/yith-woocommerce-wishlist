<p align="center"><a href="https://yithemes.com/"><img src="https://docs.yithemes.com/wp-content/uploads/2018/02/logo-1.png" alt="yithemes.com"></a></p>

<p align="center">
<img src="https://img.shields.io/github/v/release/yithemes/yith-woocommerce-wishlist?label=stable" alt="Latest release">
<img src="https://img.shields.io/github/license/yithemes/yith-woocommerce-wishlist" alt="License">
<img src="https://img.shields.io/github/last-commit/yithemes/yith-woocommerce-wishlist" alt="Last commit">
<img src="https://img.shields.io/github/languages/code-size/yithemes/yith-woocommerce-wishlist" alt="Code size">
</p>

Welcome to the YITH WooCommerce Wishlist repository on GitHub. Here you can browse the source, look at open issues and keep track of the development.

If you are not a developer, please, use the [YITH WooCommerce Wishlist plugin page](https://wordpress.org/plugins/yith-woocommerce-wishlist/) on WordPress.org.

## About plugin

What can really make the difference in conversions and amount of sales is without a doubt the freedom to share your own wishlist, even on social networks, and increase indirect sales: can you imagine the sales volume you can generate during holidays or birthdays, when relatives and friends will be looking for the wishlist of your clients to buy a gift?

OOffer to your visitors a chance to add the products of your WooCommerce store to a wishlist page. With YITH WooCommerce Wishlist you can add a link on each product detail page
 to add the products to the wishlist page. The plugin will create the specific page for you and the products will be added on this page. Afterwards, you will be able to add them to the cart or remove them.

## Getting started

* [Installation Guide](#quick-guide)
* [Languages](#available-languages)
* [Documentation](#documentation)
* [Changelog](#changelog)
* [Support](#support)
* [Reporting Security Issue](#reporting-security-issues)

## Installation guide

Clone the plugin directly into `wp-content/plugins/` directory of your WordPress site.

Otherwise, you can 

1. Download the repository .zip file.
2. Unzip the downloaded package.
3. Upload the plugin folder into the `wp-content/plugins/` directory of your WordPress site.

Finally, you'll need to activate `YITH WooCommerce Wishlist` from Plugins page.

## Available Languages

* Chinese - CHINA
* Chinese - TAIWAN
* Croatian - CROATIA
* Danish - DENMARK
* Dutch - NETHERLANDS
* English - UNITED KINGDOM (Default)
* French - FRANCE
* German - GERMANY
* Hebrew - ISRAEL
* Italian - ITALY
* Korean - KOREA
* Persian - IRAN, ISLAMIC REPUBLIC OF
* Polish - POLAND
* Portuguese - BRAZIL
* Portuguese - PORTUGAL
* Russian - RUSSIAN FEDERATION
* Spanish - ARGENTINA
* Spanish - SPAIN
* Spanish - MEXICO
* Swedish - SWEDEN
* Turkish - TURKEY
* Ukrainian - UKRAINE

## Documentation

You can find the official documentation of the plugin [here](https://docs.yithemes.com/yith-woocommerce-wishlist/)

We're also working hard to release a developer guide; please, follow our [social channels](http://twitter.com/yithemes) to be informed about any update.

## Changelog

### 3.0.0 - Released on 09 December 2019

* New: option to show Add to Wishlist button on loops
* New: Add to Wishlist button style when placed over product image
* New: Add to Wishlist button can now turn into Remove from Wishlist after addition
* New: plugin will add variation to wishlist, if user selected one before pressing the button
* New: option to load wishlist templates via Ajax
* New: select add to wishlist icon and/or upload  custom image
* New: guest wishlists are now stored on db, within session id
* New: unified experience for guests and logged in users
* Tweak: improved admin panel, and settings UX
* Dev: code refactoring of the entire plugin
* Dev: new YITH_WCWL_Wishlist and YITH_WCWL_Wishlist_Item objects
* Dev: now using Data_store classes to handle db operations
* Dev: added filter yith_wcwl_loop_positions
* Dev: added filter yith_wcwl_custom_css_rules
* Dev: added filter yith_wcwl_session_cookie
* Dev: added filter yith_wcwl_item_formatted_price
* Dev: added filter yith_wcwl_wishlist_formatted_title
* Dev: added filter yith_wcwl_wishlist_get_items
* Dev: added filter yith_wcwl_user_cannot_add_to_wishlist_message
* Dev: added filter yith_wcwl_can_user_add_to_wishlist
* Dev: added filters yith_wcwl_add_wishlist_{property}
* Dev: added filters yith_wcwl_adding_to_wishlist_{property}

## Support

This repository should be considered as a development tool.
Please, post any support request about this plugin on [wp.org support forum](https://wordpress.org/support/plugin/yith-woocommerce-wishlist/)

If you have purchased the premium version and need support, please, refer to our [support desk](https://yithemes.com/my-account/support/dashboard/)

## Reporting Security Issues
To disclose a security issue to our team, please, contact us from our [contact form](https://yithemes.com/contact-form/).