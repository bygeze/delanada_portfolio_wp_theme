<section
    id="home"
    class="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
>
    <!-- Background subtle grid -->
    <div class="absolute inset-0 opacity-5">
        <div
            class="w-full h-full"
            style="
                background-image: 
                    linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px);
                background-size: 60px 60px;
            "
        ></div>
    </div>

    <div class="section-container relative z-10">
        <div class="max-w-5xl">
            <!-- Role tag -->
            <div class="mb-6 md:mb-8">
                <span class="font-display text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground border-l-2 border-primary pl-4">
                    Sound Engineer / Producer / DJ
                </span>
            </div>

            <!-- Main headline -->
            <h1 class="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12">
                CRAFTING<br>
                <span class="text-accent-glow">SONIC</span><br>
                EXPERIENCES
            </h1>

            <!-- Statement -->
            <p class="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12 md:mb-16">
                Professional mixing, mastering, and production services. 
                Transforming raw recordings into polished, 
                industry-standard releases.
            </p>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="#contact" class="btn-brutalist-accent text-center">
                    Get in Touch
                </a>
                <a href="#projects" class="btn-brutalist text-center">
                    View Work
                </a>
            </div>
        </div>
    </div>

    <!-- Scroll indicator -->
    <button
        onclick="document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to projects"
    >
        <span class="font-display text-xs uppercase tracking-widest">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 5v14m0 0l-6-6m6 6l6-6"/>
        </svg>
    </button>
</section>
