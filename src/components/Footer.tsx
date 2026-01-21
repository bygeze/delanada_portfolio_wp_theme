import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="font-display text-xs text-muted-foreground tracking-wider">
            © {currentYear} Gustavo Martínez
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Volver Arriba ↑
          </button>
        </motion.div>
      </div>
    </footer>
  );
};