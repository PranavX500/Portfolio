import { 
  Database, 
  Server, 
  Cloud, 
  Layers, 
  Settings, 
  Layout, 
  Shield, 
  Workflow,
  Cpu,
  Terminal,
  Container,
  GitBranch,
  Search,
  MessageSquare,
  Globe,
  Zap
} from 'lucide-react';
import { FadeIn, TechBadge } from './Core';

const stack = {
  backend: [
    { icon: Server, label: "Java" },
    { icon: Workflow, label: "Spring Boot" },
    { icon: Shield, label: "Spring Security" },
    { icon: Database, label: "Hibernate" },
    { icon: Globe, label: "REST APIs" },
    { icon: Layers, label: "Microservices" },
    { icon: MessageSquare, label: "Kafka" },
  ],
  frontend: [
    { icon: Layout, label: "React" },
    { icon: Layers, label: "Tailwind CSS" },
    { icon: Terminal, label: "JavaScript" },
    { icon: Cpu, label: "Framer Motion" }
  ],
  devops: [
    { icon: Container, label: "Docker" },
    { icon: Container, label: "Kubernetes" },
    { icon: Settings, label: "Jenkins" },
    { icon: Cloud, label: "AWS" },
  ],
  databases: [
    { icon: Database, label: "MySQL" },
    { icon: Database, label: "MongoDB" },
    { icon: Zap, label: "Redis" },
  ],
  tools: [
    { icon: GitBranch, label: "Git" },
    { icon: Search, label: "Postman" },
    { icon: Terminal, label: "Linux" },
  ]
};

export function TechStackSection() {
  return (
    <section id="stack" className="relative min-h-screen py-32 px-6 overflow-hidden bg-brand-bg">
      <div className="container max-w-6xl mx-auto relative z-10">
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-gradient">
            Tech Ecosystem
          </h2>
          <p className="text-brand-text/50 uppercase tracking-[0.2em] text-xs font-medium">
            Building with a modern engineering stack
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(stack).map(([category, items], i) => (
            <FadeIn 
              key={category} 
              delay={i * 0.1}
              className="glass p-8 rounded-[2.5rem] flex flex-col items-start hover:bg-white/[0.04] transition-colors border-white/[0.03]"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] font-black text-brand-accent/60 mb-10 border-b border-brand-accent/20 pb-2 w-full">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((tech, idx) => (
                  <TechBadge key={idx} icon={tech.icon} label={tech.label} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Background beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent blur-[1px]" />
      
      <div className="noise-bg absolute inset-0" />
    </section>
  );
}
