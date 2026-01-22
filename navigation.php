<?php
/**
 * Template part for site navigation
 */
?>


<nav
  class="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border"
  data-nav
>
  <div class="section-container">
    <div class="flex items-center justify-between h-16 md:h-20">

      <!-- Site title / logo -->
      <h1 class="site-title font-display font-bold text-lg md:text-xl tracking-tight">
        <a
          href="<?php echo esc_url(home_url('/')); ?>"
          class="hover:opacity-80 transition-opacity"
        >
          <?php bloginfo('name'); ?><span class="text-primary">.</span>
        </a>
      </h1>

      <!-- Desktop navigation -->
      <div class="hidden md:block site-nav">
        <?php
        wp_nav_menu([
          'theme_location' => 'primary',
          'container'      => false,
          'menu_class'     => 'flex items-center gap-8',
          'link_before'    => '<span class="font-display text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200">',
          'link_after'     => '</span>',
        ]);
        ?>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden p-2 text-foreground"
        aria-label="Toggle menu"
        data-nav-toggle
      >
        ☰
      </button>

    </div>
  </div>

  <!-- Mobile menu -->
  <div
    class="md:hidden bg-background border-b border-border overflow-hidden hidden"
    data-nav-menu
  >
    <div class="section-container py-6 flex flex-col gap-4">
      <?php
      wp_nav_menu([
        'theme_location' => 'primary',
        'container'      => false,
        'menu_class'     => 'flex flex-col gap-4',
        'link_before'    => '<span class="font-display text-lg uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200">',
        'link_after'     => '</span>',
      ]);
      ?>
    </div>
  </div>
</nav>
