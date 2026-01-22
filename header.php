<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <?php wp_head(); ?>

        <!-- TODO: Set the document title to the name of your application -->
        <title>Lovable App</title>
        <meta name="description" content="Lovable Generated Project" />
        <meta name="author" content="Lovable" />

        <!-- TODO: Update og:title to match your application name -->
        <meta property="og:title" content="Lovable App" />
        <meta property="og:description" content="Lovable Generated Project" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Lovable" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    </head>

    <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <!-- <div id="root"> // removed for not loading react spa page -->
        <div className="min-h-screen bg-background text-foreground">
        <span>this is just a test</span>
        <header class="site-header">
            <?php get_template_part('./template-parts/navigation'); ?>
        </header>        
        <main class="site-main">
            
            <!--<Hero />
            <ProjectCarousel />
            <About />
            <Contact />-->






