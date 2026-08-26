#!/usr/bin/env bash
set -euo pipefail

cd /var/www/html

echo "Installing WordPress Importer..."
wp plugin install wordpress-importer --activate

echo "Configuring WooCommerce..."
wp option set woocommerce_store_address 'Example Address Line 1'
wp option set woocommerce_store_address_2 'Example Address Line 2'
wp option set woocommerce_store_city 'Example City'
wp option set woocommerce_default_country 'US:CA'
wp option set woocommerce_store_postcode '94110'
wp option set woocommerce_currency 'USD'
wp option set woocommerce_allow_tracking 'no'
wp option set woocommerce_coming_soon 'no'
wp wc --user=admin tool run install_pages

PRODUCT_COUNT=$(wp post list --post_type=product --post_status=publish --field=ID --porcelain 2>/dev/null | grep -c . || true)
if [ "$PRODUCT_COUNT" -eq 0 ]; then
	echo "Importing WooCommerce sample products..."
	wp import wp-content/plugins/woocommerce/sample-data/sample_products.xml --authors=skip
else
	echo "Products already present ($PRODUCT_COUNT); skipping import."
fi

echo "Setup complete. Shop is populated with sample products."
