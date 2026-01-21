import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Artists Collaborated" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Heading */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-2"
            >
              THE
              <br />
              <span className="text-accent-glow">ENGINEER</span>
            </motion.h2>
          </div>

          {/* Right column - Bio */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
            >
              A decade of experience shaping sound across electronic, hip-hop, 
              and experimental genres. From underground clubs to major label 
              releases, every project receives the same meticulous attention 
              to detail.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-base text-muted-foreground leading-relaxed mb-8"
            >
              Specializing in mixing and mastering for streaming platforms, 
              vinyl, and broadcast. My approach combines technical precision 
              with creative intuition—enhancing the artist's vision while 
              ensuring commercial viability.
            </motion.p>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {["Mixing", "Mastering", "Production", "DJ Sets", "Sound Design"].map(
                (service) => (
                  <span
                    key={service}
                    className="px-4 py-2 border border-border font-display text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {service}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 border-t border-border"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-display text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
