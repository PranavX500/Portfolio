import React from 'react';
import { motion } from 'motion/react';
import { FadeIn, AnimatedText } from './Core';

const stats = [
  { label: "Projects Built", value: "6+" },
  { label: "APIs Developed", value: "50+" },
  { label: "Tech Stack", value: "15+" },
  { label: "Commitment", value: "100%" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 bg-brand-bg">
      <div className="container max-w-5xl mx-auto">
        <FadeIn className="mb-20 text-center">
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.5em] font-black text-brand-accent mb-4">
            About Me
          </h2>
          <div className="h-px w-20 bg-brand-accent/30 mx-auto" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <AnimatedText
              className="text-2xl md:text-4xl font-light tracking-tight leading-normal md:leading-relaxed text-brand-text/90"
              text="I’m a backend-focused software engineer passionate about building scalable systems, secure APIs, cloud-native applications, and modern digital experiences. I enjoy solving complex engineering problems and creating systems that are performant, reliable, and production-ready."
            />
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1} className="glass p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.05] transition-colors group">
                <div className="text-3xl md:text-4xl font-black mb-1 group-hover:scale-110 transition-transform origin-left text-gradient uppercase">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-brand-text/40 font-medium">
                  {stat.label}
                </div>
                <div className="mt-4 w-8 h-0.5 bg-brand-accent/20 group-hover:w-full transition-all duration-500" />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="noise-bg absolute inset-0" />
    </section>
  );
}
