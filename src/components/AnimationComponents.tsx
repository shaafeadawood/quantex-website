"use client";

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Animation variants for different reveal patterns
export const revealVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  },
  
  slideInLeft: {
    hidden: { 
      opacity: 0, 
      x: -80,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },
  
  slideInRight: {
    hidden: { 
      opacity: 0, 
      x: 80,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },
  
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },
  
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

// Scroll-triggered reveal component
interface ScrollRevealProps {
  children: ReactNode;
  variant?: keyof typeof revealVariants;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal = ({ 
  children, 
  variant = 'fadeUp', 
  delay = 0,
  className = "",
  once = true
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: "-20% 0px -20% 0px"
  });

  return (
    <motion.div
      ref={ref}
      variants={revealVariants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
      style={{ 
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered grid animation
export const StaggerGrid = ({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: { 
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px -10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item
export const StaggerItem = ({ 
  children, 
  className = "",
  variant = 'fadeUp'
}: { 
  children: ReactNode;
  className?: string;
  variant?: keyof typeof revealVariants;
}) => {
  return (
    <motion.div
      variants={revealVariants[variant]}
      className={className}
      style={{ 
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax scroll effect
export const ParallaxElement = ({ 
  children, 
  className = ""
}: { 
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform'
      }}
      whileInView={{
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Floating animation for hero elements
export const FloatingElement = ({ 
  children, 
  duration = 6,
  intensity = 10,
  className = ""
}: { 
  children: ReactNode;
  duration?: number;
  intensity?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-intensity, intensity, -intensity],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};

// Professional hover effect for cards
export const HoverCard = ({ 
  children, 
  className = "",
  scale = 1.02,
  glow = true
}: { 
  children: ReactNode;
  className?: string;
  scale?: number;
  glow?: boolean;
}) => {
  return (
    <motion.div
      className={`${className} cursor-pointer`}
      whileHover={{
        scale,
        y: -8,
        boxShadow: glow 
          ? "0 25px 50px -12px rgba(24, 0, 173, 0.25)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      style={{
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};