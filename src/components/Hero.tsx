import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl">
          {/* Role tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <span className="font-display text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground border-l-2 border-primary pl-4">
              Sound Engineer / Producer / DJ
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 md:mb-12"
          >
            CRAFTING
            <br />
            <span className="text-accent-glow">SONIC</span>
            <br />
            EXPERIENCES
          </motion.h1>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12 md:mb-16"
          >
            Professional mixing, mastering, and production services. 
            Transforming raw recordings into polished, 
            industry-standard releases.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-brutalist-accent text-center"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToProjects();
              }}
              className="btn-brutalist text-center"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to projects"
      >
        <span className="font-display text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};
