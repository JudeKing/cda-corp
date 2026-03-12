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

function cda_project_modal_markup() {
    static $printed = false;

    if ($printed) {
        return;
    }

    $printed = true;
    ?>
    <div class="cda-project-modal" id="cdaProjectModal" aria-hidden="true">
        <button class="cda-project-modal__close" type="button" aria-label="Close modal">×</button>

        <!-- <button class="cda-project-modal__nav cda-project-modal__nav--prev" type="button" aria-label="Previous slide">‹</button> -->

        <div class="cda-project-modal__inner">
            <div class="cda-project-modal__track-wrap">
                <div class="cda-project-modal__track" id="cdaProjectModalTrack"></div>
            </div>
        </div>

        <!-- <button class="cda-project-modal__nav cda-project-modal__nav--next" type="button" aria-label="Next slide">›</button> -->
    </div>
    <?php
}
add_action('wp_footer', 'cda_project_modal_markup');

function our_partners_logo_carousel_shortcode($atts) {
    $atts = shortcode_atts([
        'logos' => '',
        'speed' => '25',
    ], $atts);

    if (empty($atts['logos'])) {
        return '<p>No logos added.</p>';
    }

    $logos = array_map('trim', explode(',', $atts['logos']));
    if (empty($logos)) {
        return '<p>No logos added.</p>';
    }

    $unique_id = 'partners-logo-carousel-' . wp_rand(1000, 9999);

    ob_start();
    ?>
    <div id="<?php echo esc_attr($unique_id); ?>" class="partners-logo-carousel" style="--scroll-speed: <?php echo esc_attr($atts['speed']); ?>s;">
        <div class="partners-logo-carousel__track">
            <?php foreach ($logos as $logo) : ?>
                <div class="partners-logo-carousel__item">
                    <img src="<?php echo esc_url($logo); ?>" alt="Partner logo">
                </div>
            <?php endforeach; ?>

            <?php foreach ($logos as $logo) : ?>
                <div class="partners-logo-carousel__item" aria-hidden="true">
                    <img src="<?php echo esc_url($logo); ?>" alt="">
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <style>
        .partners-logo-carousel {
            overflow: hidden;
            width: 100%;
            position: relative;
        }

        .partners-logo-carousel__track {
            display: flex;
            width: max-content;
            gap: 40px;
            align-items: center;
            animation: partners-logo-scroll var(--scroll-speed) linear infinite;
        }

        .partners-logo-carousel__item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .partners-logo-carousel__item img {
            max-height: 70px;
            width: auto;
            display: block;
            object-fit: contain;
        }

        .partners-logo-carousel:hover .partners-logo-carousel__track {
            animation-play-state: paused;
        }

        @keyframes partners-logo-scroll {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-50%);
            }
        }
    </style>
    <?php
    return ob_get_clean();
}
add_shortcode('our_partners_logo_carousel', 'our_partners_logo_carousel_shortcode');

