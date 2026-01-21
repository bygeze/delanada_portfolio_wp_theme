import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

interface Project {
  id: number;
  title: string;
  artist: string;
  year: string;
  cover: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Void Protocol",
    artist: "SYNTH.NULL",
    year: "2024",
    cover: project1,
    role: "Mix & Master",
  },
  {
    id: 2,
    title: "Frequency Shift",
    artist: "Pulse Echo",
    year: "2024",
    cover: project2,
    role: "Production",
  },
  {
    id: 3,
    title: "Dark Matter",
    artist: "Nebula Drift",
    year: "2023",
    cover: project3,
    role: "Mastering",
  },
  {
    id: 4,
    title: "Binary Dreams",
    artist: "CIPHER",
    year: "2023",
    cover: project4,
    role: "Mix & Master",
  },
  {
    id: 5,
    title: "Stellar Collapse",
    artist: "Horizon Event",
    year: "2023",
    cover: project5,
    role: "Production",
  },
  {
    id: 6,
    title: "Resonance",
    artist: "Deep State",
    year: "2022",
    cover: project6,
    role: "Mix & Master",
  },
];

export const ProjectCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container mb-8 md:mb-12">
        <div className="flex items-end justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-2"
            >
              PROJECTS
            </motion.h2>
          </div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-2"
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 cursor-grab active:cursor-grabbing"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[280px] md:w-[300px] group"
          >
            <div className="card-brutal overflow-hidden">
              {/* Cover Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={project.cover}
                  alt={`${project.title} by ${project.artist}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-display text-sm uppercase tracking-widest text-primary">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">
                    {project.artist}
                  </span>
                  <span className="font-display text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Mobile scroll hint */}
      <div className="md:hidden section-container mt-4">
        <p className="text-xs text-muted-foreground text-center">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
};
