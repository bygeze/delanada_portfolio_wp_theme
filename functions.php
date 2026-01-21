<?php
if (!defined('ABSPATH')) {
    exit;
}

// Cargar archivos del theme
require_once get_template_directory() . '/styles.php';

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