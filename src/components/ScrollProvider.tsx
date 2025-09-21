"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollContextType {
  scrollY: number;
  scrollProgress: number;
  isScrolling: boolean;
  direction: 'up' | 'down' | null;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollProgress: 0,
  isScrolling: false,
  direction: null,
});

export const useScrollContext = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrollY(currentScrollY);
      setIsScrolling(true);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setDirection('up');
      }
      setLastScrollY(currentScrollY);

      // Clear scrolling state after delay
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
        setDirection(null);
      }, 150);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const contextValue = {
    scrollY,
    scrollProgress: smoothProgress.get(),
    isScrolling,
    direction,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

// Scroll progress indicator
export const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Section separator with gradient transition
export const SectionSeparator = ({ 
  fromColor = "from-transparent", 
  toColor = "to-transparent",
  className = "" 
}: { 
  fromColor?: string; 
  toColor?: string; 
  className?: string; 
}) => {
  return (
    <div className={`relative h-16 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${fromColor} ${toColor}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent" />
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary-500/10 rounded-full"
            style={{
              left: `${30 + i * 40}%`,
              top: '50%',
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced section wrapper with intersection observer
export const StorySection = ({ 
  children, 
  className = "",
  background = "bg-white dark:bg-gray-950",
  id
}: { 
  children: ReactNode;
  className?: string;
  background?: string;
  id?: string;
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        } else {
          setIsInView(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const element = document.getElementById(id || '');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id, hasAnimated]);

  return (
    <motion.section
      id={id}
      className={`relative ${background} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isInView ? 1 : 0.3,
      }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
};