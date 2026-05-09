import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoaderScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0C0C0C] flex flex-col items-center justify-center p-6 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Background Glows */}
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="text-8xl md:text-9xl font-black text-brand-text mb-8 flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            animate={{ 
              x: [-10, 0, -10],
              filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            P
          </motion.span>
          <motion.span
            animate={{ 
              x: [10, 0, 10],
              filter: ["blur(2px)", "blur(0px)", "blur(2px)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            S
          </motion.span>
        </motion.div>

        <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-brand-text"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.div 
          className="text-brand-text/50 font-mono text-sm tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Initialising Systems — {progress}%
        </motion.div>
      </div>

      <div className="noise-bg absolute inset-0" />
    </motion.div>
  );
}
