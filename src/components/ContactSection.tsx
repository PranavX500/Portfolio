import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { FadeIn, Magnet, GlowButton } from './Core';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using Web3Forms for real email delivery
      // Get your Access Key from: https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Uses key from .env file
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Message from Portfolio: ${formData.name}`,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error(result);
        alert("Something went wrong. Please try again or email me directly.");
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection.");
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-brand-bg overflow-hidden border-t border-white/[0.05]">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <FadeIn>
              <h2 className="text-xs uppercase tracking-[0.5em] font-black text-brand-accent mb-6">
                Connect
              </h2>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10 text-gradient">
                Let's evolve <br /> the systems.
              </h3>
            </FadeIn>

            <div className="space-y-12">
              <FadeIn delay={0.2} className="flex gap-6 items-center group cursor-pointer clickable">
                <div className="w-14 h-14 glass rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-brand-accent/50 mb-1">Email Me</div>
                  <div className="text-xl md:text-2xl font-black tracking-tight">ps5840432@gmail.com</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="flex gap-6 items-center group cursor-pointer clickable">
                <div className="w-14 h-14 glass rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-brand-accent/50 mb-1">Location</div>
                  <div className="text-xl md:text-2xl font-black tracking-tight">Ambala, India</div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} className="mt-20">
              <div className="flex gap-4">
                <Magnet factor={0.4}>
                  <a href="https://github.com/PranavX500" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors clickable">
                    <Github className="w-6 h-6" />
                  </a>
                </Magnet>
                <Magnet factor={0.4}>
                  <a href="https://www.linkedin.com/in/pranav-sharma-329337325/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors clickable">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Magnet>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} y={40} className="glass p-8 md:p-12 rounded-[3rem] relative min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className="text-center space-y-6 py-10"
                >
                  <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-brand-accent" />
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tight text-gradient">Message Received</h4>
                  <p className="text-brand-text/60 max-w-xs mx-auto text-sm leading-relaxed">
                    System logs updated. I'll get back to you faster than a Redis cache hit.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs uppercase tracking-widest font-black text-brand-accent hover:text-white transition-colors pt-4"
                  >
                    Send Another?
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="absolute top-8 right-8 text-[10px] uppercase tracking-widest font-black text-brand-accent/30">
                    New Message
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-brand-accent/60 ml-4">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-brand-text placeholder:text-brand-text/20 focus:outline-hidden focus:border-brand-accent/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-brand-accent/60 ml-4">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-brand-text placeholder:text-brand-text/20 focus:outline-hidden focus:border-brand-accent/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-brand-accent/60 ml-4">Message</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="How can I help you?"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-brand-text placeholder:text-brand-text/20 focus:outline-hidden focus:border-brand-accent/50 transition-colors resize-none"
                      />
                    </div>

                    <GlowButton
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-5 text-lg gap-3"
                    >
                      {status === 'submitting' ? (
                        <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                        <>Send Message <Send className="w-5 h-5" /></>
                      )}
                    </GlowButton>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>

      <div className="noise-bg absolute inset-0" />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-brand-bg flex flex-col items-center">
      <div className="w-full max-w-6xl h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-12" />

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl font-black tracking-tighter mb-2">PRANAV<span className="text-brand-accent">.</span>SHARMA</div>
          <p className="text-xs uppercase tracking-widest font-medium text-brand-text/40">Backend Engineer & Systems Architect</p>
        </div>

        <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-brand-text/30">
          © {new Date().getFullYear()} All Rights Reserved
        </div>

        <div className="flex gap-8">
          <a href="https://github.com/PranavX500" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-black text-brand-text/40 hover:text-brand-accent transition-colors">
            Github
          </a>
          <a href="https://www.linkedin.com/in/pranav-sharma-329337325/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-black text-brand-text/40 hover:text-brand-accent transition-colors">
            Linkedin
          </a>
          <a href="https://drive.google.com/file/d/10kreXeYJQ895RwefAxyuu82dJyAGKmuu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-black text-brand-text/40 hover:text-brand-accent transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
