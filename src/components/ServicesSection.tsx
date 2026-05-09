import React from 'react';
import { FadeIn } from './Core';

const services = [
  {
    num: "01",
    title: "Backend Development",
    desc: "Building scalable and secure backend systems using Java, Spring Boot, REST APIs, and Microservices."
  },
  {
    num: "02",
    title: "API Development",
    desc: "Creating production-ready APIs with authentication, validation, and high-performance architecture."
  },
  {
    num: "03",
    title: "Cloud & DevOps",
    desc: "Deploying and managing applications using Docker, Kubernetes, Jenkins, and AWS."
  },
  {
    num: "04",
    title: "Database Design",
    desc: "Designing optimized relational and NoSQL database architectures using MySQL, MongoDB, and Redis."
  },
  {
    num: "05",
    title: "System Architecture",
    desc: "Designing distributed systems and scalable backend infrastructure for high-traffic environments."
  },
  {
    num: "06",
    title: "Full Stack Development",
    desc: "Building modern applications with React, backend APIs, authentication, and cloud deployment."
  }
];

export function ServicesSection() {
  return (
    <section className="relative py-32 px-6 bg-brand-text text-brand-bg rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <FadeIn className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.6em] font-black mb-4 opacity-50">
            Services
          </h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Specialized in <br /> Modern Backend.
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group cursor-default">
              <div className="text-7xl md:text-8xl font-black text-brand-bg/5 stroke-text mb-6">
                {service.num}
              </div>
              <h4 className="text-xl md:text-2xl font-black uppercase mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h4>
              <p className="text-brand-bg/70 leading-relaxed font-light">
                {service.desc}
              </p>
              <div className="mt-8 h-px w-full bg-brand-bg/10 origin-left group-hover:bg-brand-bg transition-colors duration-500" />
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(12, 12, 12, 0.1);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
