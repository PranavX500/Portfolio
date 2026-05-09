import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicking, setIsClicking] = React.useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll('button, a, .clickable, .project-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-text/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicking ? 0.8 : isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? 'rgba(215, 226, 234, 0.1)' : 'transparent',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-brand-text rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  key?: React.Key;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  x = 0, 
  y = 20,
  className
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay, 
        duration, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  key?: React.Key;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const characters = text.split("");
  
  return (
    <p className={cn("flex flex-wrap overflow-hidden", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.02,
            ease: "easeOut"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
};

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  factor?: number;
  key?: React.Key;
}

export const Magnet: React.FC<MagnetProps> = ({ children, className, factor = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * factor;
    const distanceY = (clientY - centerY) * factor;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("magnetic-area", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  key?: React.Key;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  className, 
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary' 
}) => {
  return (
    <Magnet factor={0.2}>
      <motion.button
        type={type}
        disabled={disabled}
        className={cn(
          "group relative flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-500 overflow-hidden",
          variant === 'primary' ? "bg-brand-text text-brand-bg" : "bg-transparent text-brand-text border border-white/10",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          className
        )}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#646973] to-[#BBCCD7] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && !disabled && (
          <div className="absolute -inset-1 bg-brand-text/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        )}
      </motion.button>
    </Magnet>
  );
};

interface TechBadgeProps {
  icon: any;
  label: string;
  key?: React.Key;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ icon: Icon, label }) => {
  return (
    <motion.div
      className="glass flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/[0.08] transition-colors duration-300 group"
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <Icon className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm font-medium tracking-wide">{label}</span>
      <div className="absolute inset-0 bg-brand-accent/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    </motion.div>
  );
};
