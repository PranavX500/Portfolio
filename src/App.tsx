import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CustomCursor } from './components/Core';
import { LoaderScreen } from './components/LoaderScreen';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceTimelineSection } from './components/ExperienceTimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection, Footer } from './components/ContactSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <main className="relative bg-[#0C0C0C] min-h-screen selection:bg-brand-text selection:text-brand-bg">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoaderScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />

            <AboutSection />
            <TechStackSection />
            <ExperienceTimelineSection />
            <ServicesSection />
            <ProjectsSection />
            
            {/* CTA Section Integrated within Contact or as a separate component */}
            <section className="py-32 px-6 text-center overflow-hidden relative">
               <div className="container max-w-4xl mx-auto relative z-10">
                 <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gradient mb-12">
                   Let’s Build Something <br /> Incredible Together
                 </h2>
                 <div className="flex flex-wrap justify-center gap-6">
                    <a href="#contact">
                      <button className="px-10 py-5 bg-brand-text text-brand-bg rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                        Get In Touch
                      </button>
                    </a>
                    <a href="https://github.com/PranavX500" target="_blank" rel="noopener noreferrer">
                      <button className="px-10 py-5 glass border border-white/10 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                        Github Profile
                      </button>
                    </a>
                 </div>
               </div>
               
               {/* Background Elements */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-accent/5 rounded-full blur-[150px] -z-10" />
               <div className="noise-bg absolute inset-0" />
            </section>

            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
