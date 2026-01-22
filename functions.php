<?php
if (!defined('ABSPATH')) {
    exit;
}

// Setup del theme
function mytheme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ]);

    register_nav_menus([
        'primary' => __('Primary Menu', 'my-theme'),
    ]);
}
add_action('after_setup_theme', 'mytheme_setup');

/* add vite css and js */
function mi_tema_scripts() {
    $theme_dir = get_template_directory();
    $theme_uri = get_template_directory_uri();

    // CSS
    $css_path = $theme_dir . '/dist/assets/index.css';
    if (file_exists($css_path)) {
        wp_enqueue_style(
            'main-style',
            $theme_uri . '/dist/assets/index.css',
            [],
            filemtime($css_path)
        );
    }

    // JS
    $js_path = $theme_dir . '/dist/assets/main.js';
    if (file_exists($js_path)) {
        wp_enqueue_script(
            'main-js',
            $theme_uri . '/dist/assets/main.js',
            [],
            filemtime($js_path),
            true
        );
    }
}

add_action('wp_enqueue_scripts', 'mi_tema_scripts');

/* menus */
function delanada_register_menus() {
    register_nav_menus([
        'primary' => __('Primary Menu', 'delanada'),
    ]);
}
add_action('after_setup_theme', 'delanada_register_menus');

