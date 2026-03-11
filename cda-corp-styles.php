<?php
/**
 * Plugin Name: CDA Corp Styles
 * Description: Custom SCSS and JS loader for the site.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

function cda_corp_assets_enqueue() {
    $plugin_url  = plugin_dir_url(__FILE__);
    $plugin_path = plugin_dir_path(__FILE__);

    $css_file = $plugin_path . 'build/style.css';
    $js_file  = $plugin_path . 'build/bundle.js';

    if (file_exists($css_file)) {
        wp_enqueue_style(
            'my-custom-assets-style',
            $plugin_url . 'build/style.css',
            array(),
            filemtime($css_file)
        );
    }

    if (file_exists($js_file)) {
        wp_enqueue_script(
            'my-custom-assets-script',
            $plugin_url . 'build/bundle.js',
            array(),
            filemtime($js_file),
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'cda_corp_assets_enqueue');
