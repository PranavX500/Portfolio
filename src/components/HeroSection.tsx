import { motion } from 'motion/react';
import { Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { FadeIn, Magnet, GlowButton } from './Core';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-linear-to-b from-[#0C0C0C] to-transparent">
        <Magnet factor={0.1}>
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-brand-text">
            P<span className="text-brand-accent">.</span>S
          </div>
        </Magnet>
        
        <div className="hidden md:flex gap-10">
          {['About', 'Stack', 'Projects', 'Contact'].map((item) => (
            <Magnet key={item} factor={0.1}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] font-medium text-brand-text/60 hover:text-brand-text transition-colors"
              >
                {item}
              </a>
            </Magnet>
          ))}
        </div>

        <Magnet factor={0.1}>
          <a href="#contact" className="hidden md:block">
            <GlowButton className="px-6 py-2 py-2 text-sm">Hire Me</GlowButton>
          </a>
        </Magnet>
      </nav>

      {/* Background Light Beams */}
      <div className="absolute top-0 left-1/4 w-[1px] h-[70vh] bg-linear-to-b from-transparent via-brand-accent/20 to-transparent blur-[2px]" />
      <div className="absolute top-20 right-1/3 w-[1px] h-[50vh] bg-linear-to-b from-transparent via-brand-accent/10 to-transparent blur-[4px]" />

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <FadeIn delay={0.2}>
          <div className="inline-block px-4 py-1.5 glass rounded-full mb-8">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-brand-accent">
              Available for new projects
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={40} className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter uppercase mb-6 text-gradient">
            HI, I'M <br className="hidden md:block" /> PRANAV
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} y={20} className="max-w-2xl text-center mb-12 px-4">
          <p className="text-base md:text-xl font-light tracking-wide text-brand-text/70 leading-relaxed uppercase">
            A backend engineer building scalable microservices, <br className="hidden md:block" />
            cloud-native systems, and modern digital experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} y={20} className="flex flex-wrap justify-center gap-6">
          <GlowButton className="gap-2">
            View Projects <ArrowUpRight className="w-4 h-4" />
          </GlowButton>
          
          <div className="flex gap-4">
            <Magnet factor={0.4}>
              <a href="https://github.com/PranavX500" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-white/10 transition-colors block clickable">
                <Github className="w-5 h-5" />
              </a>
            </Magnet>
            <Magnet factor={0.4}>
              <a href="https://www.linkedin.com/in/pranav-sharma-329337325/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-white/10 transition-colors block clickable">
                <Linkedin className="w-5 h-5" />
              </a>
            </Magnet>
            <Magnet factor={0.4}>
              <a href="https://drive.google.com/file/d/10kreXeYJQ895RwefAxyuu82dJyAGKmuu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-white/10 transition-colors block clickable">
                <FileText className="w-5 h-5" />
              </a>
            </Magnet>
          </div>
        </FadeIn>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 left-10 md:left-20 glass p-4 md:p-6 rounded-2xl hidden sm:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <div className="text-[10px] md:text-xs">
            <div className="text-brand-text/50 uppercase tracking-widest font-medium">Uptime</div>
            <div className="font-bold">99.99%</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 md:right-20 glass p-4 md:p-6 rounded-2xl hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="text-[10px] md:text-xs text-right">
            <div className="text-brand-text/50 uppercase tracking-widest font-medium">Location</div>
            <div className="font-bold">India</div>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0C0C0C] to-transparent pointer-events-none" />
      <div className="noise-bg absolute inset-0" />
    </section>
  );
}
