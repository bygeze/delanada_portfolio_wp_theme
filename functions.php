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

function mi_tema_scripts() {
    // CSS compilado de Vite
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/main.css', array(), filemtime(get_template_directory() . '/assets/main.css'));

    // JS compilado de Vite (si lo necesitas)
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/main.js', array(), filemtime(get_template_directory() . '/assets/main.js'), true);
}
add_action('wp_enqueue_scripts', 'mi_tema_scripts');