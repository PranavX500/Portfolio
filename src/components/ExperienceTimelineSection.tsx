import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { FadeIn } from './Core';

const steps = [
  { title: "The Foundation", desc: "Started with C++ and complex algorithmic problem solving." },
  { title: "Java Core", desc: "Transitioned into enterprise-grade Java backend development." },
  { title: "API Architecture", desc: "Built scalable REST APIs using Spring Boot frameworks." },
  { title: "Security Systems", desc: "Learned authentication protocols and JWT security systems." },
  { title: "Distributed Web", desc: "Worked with complex Microservices architecture at scale." },
  { title: "Event Driven", desc: "Integrated Kafka and high-performance event-driven systems." },
  { title: "Cloud Native", desc: "Mastered Docker and Kubernetes for containerized deployment." },
  { title: "Next Gen AI", desc: "Exploring AI integrations in modern backend infrastructures." },
];

export function ExperienceTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="relative py-32 px-6 bg-brand-bg overflow-hidden" ref={containerRef}>
      <div className="container max-w-4xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gradient">
            Engineering Journey
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-accent/20 origin-top"
            style={{ scaleY }}
          />
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Connector Dot */}
                <div className="absolute left-[15px] md:left-1/2 -translate-x-[50%] w-3 h-3 rounded-full bg-brand-accent border-4 border-brand-bg z-10 shadow-[0_0_15px_rgba(187,204,215,0.5)]" />
                
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <FadeIn x={i % 2 === 0 ? -30 : 30} className="glass p-8 rounded-[2rem] hover:bg-white/[0.04] transition-all duration-500 hover:border-brand-accent/20 group">
                    <div className="text-[10px] uppercase font-black tracking-widest text-brand-accent/50 mb-2">
                       Phase 0{i + 1}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black uppercase mb-3 leading-tight tracking-tight group-hover:text-brand-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-brand-text/60 leading-relaxed text-sm md:text-base font-light">
                      {step.desc}
                    </p>
                    <div className="mt-6 w-8 h-[1px] bg-brand-accent/30 group-hover:w-full transition-all duration-700" />
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="noise-bg absolute inset-0" />
    </section>
  );
}
