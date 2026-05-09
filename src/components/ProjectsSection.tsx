import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, ExternalLink, Code2, Cpu, Globe, Server } from 'lucide-react';
import { FadeIn, Magnet, GlowButton } from './Core';

const projects = [
  {
    num: "01",
    title: "UrbanMart",
    category: "Microservices Platform",
    desc: "A fully modular Ecommerce Backend built using complete Microservices Architecture. Every service is independently deployable and scalable.",
    tech: ["Spring Boot", "Spring Cloud", "Kafka", "Docker", "MySQL", "Redis"],
    features: ["Discovery (Eureka)", "API Gateway", "Distributed Auth", "Kafka Events"],
    github: "https://github.com/PranavX500/UrbanMart-Frontend.git",
    // Updated to a high-end, modern urban shopping/ecommerce visual
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600",
    color: "from-blue-600/20 to-indigo-600/20"
  },
  {
    num: "02",
    title: "LiveScore",
    category: "Sports Management",
    desc: "A full-stack sports tournament platform designed for real-time match tracking and tournament lifecycle management.",
    tech: ["Flutter", "Spring Boot", "Spring Security", "Firebase", "Docker"],
    features: ["Live Updates", "Role-based Access", "Schedule Engine", "Points Table"],
    github: "https://github.com/PranavX500",
    // Updated to a cricket-specific high-quality image
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800&h=600",
    color: "from-emerald-600/20 to-blue-600/20"
  },
  {
    num: "03",
    title: "BMS Clone",
    category: "Booking Architecture",
    desc: "A backend clone of BookMyShow that handles cinema listings, show scheduling, and complex seat allocation logic.",
    tech: ["Spring Boot", "JPA", "Hibernate", "MySQL", "Maven"],
    features: ["Seat Lock Logic", "DTO Pattern", "Global Exception Handler"],
    github: "https://github.com/PranavX500/BookMYShow-Backend-clone.git",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800&h=600",
    color: "from-purple-500/10 to-indigo-500/10"
  }
];

interface ProjectCardProps {
  project: any;
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 w-full mb-12 md:mb-24 h-[100vh] sm:h-[80vh] md:h-[70vh] pointer-events-none"
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full h-full glass rounded-[2.5rem] md:rounded-[4rem] overflow-hidden pointer-events-auto shadow-2xl relative group"
      >
        <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20 pointer-events-none`} />

        <div className="relative h-full grid grid-cols-1 lg:grid-cols-2">
          {/* Content Area */}
          <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl md:text-2xl font-black text-brand-accent/40">{project.num}</span>
                <div className="h-px w-8 bg-brand-accent/20" />
                <span className="text-xs uppercase tracking-widest font-bold text-brand-accent">{project.category}</span>
              </div>

              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                {project.title}
              </h3>

              <p className="text-brand-text/60 font-light text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider font-bold text-brand-text/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Magnet factor={0.2}>
                <a href={project.github} target="_blank" className="flex items-center gap-2 group/btn">
                  <GlowButton variant="secondary" className="px-6 py-3 text-sm">
                    <Github className="w-4 h-4" /> Code
                  </GlowButton>
                </a>
              </Magnet>
              <Magnet factor={0.2}>
                <a href="#" target="_blank" className="flex items-center gap-2">
                  <GlowButton className="px-6 py-3 text-sm">
                    <ExternalLink className="w-4 h-4" /> Visit
                  </GlowButton>
                </a>
              </Magnet>
            </div>
          </div>

          {/* Visual Area */}
          <div className="relative overflow-hidden order-1 lg:order-2 h-64 lg:h-full bg-white/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brand-bg/90 blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />

            {/* Floating Info Boxes */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {project.features.map((f: string, i: number) => (
                <div key={i} className="glass px-4 py-3 rounded-2xl flex items-center gap-3 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-widest">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-brand-bg">
      <div className="container max-w-6xl mx-auto">
        <FadeIn className="text-center mb-32">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-brand-accent mb-4">
            Showcase
          </h2>
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gradient leading-tight">
            Curated Backend <br className="hidden md:block" /> Masterpieces
          </h3>
        </FadeIn>

        <div className="relative">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} total={projects.length} />
          ))}
        </div>
      </div>

      <div className="noise-bg absolute inset-0" />
    </section>
  );
}
