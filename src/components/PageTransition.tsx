"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { PageTransitionLoader } from "./GlobalLoader";

// Skeleton loader component for sections
export const SectionSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse space-y-6 ${className}`} role="status" aria-label="Loading content">
    <div className="text-center space-y-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-32 mx-auto"></div>
      <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 max-w-full mx-auto"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 max-w-full mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 space-y-4">
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Enhanced page transition with loading states
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Page transition handling - minimal for navigation
  useEffect(() => {
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 400); // Fast transitions only for navigation

    return () => clearTimeout(timer);
  }, [pathname]);

  const pageVariants = {
    initial: { 
      opacity: 1, // Start visible
      y: 0,
      scale: 1 
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1 
    },
    out: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      y: shouldReduceMotion ? 0 : -10,
      scale: shouldReduceMotion ? 1 : 1.02 
    }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: [0.4, 0, 0.2, 1] as const,
    duration: shouldReduceMotion ? 0.1 : 0.3 // Quick transitions
  };

  return (
    <>
      {/* Page transition loader - only for navigation */}
      <PageTransitionLoader isVisible={isPageTransitioning} />
      
      {/* Page content - starts immediately visible */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen"
          role="main"
          aria-live="polite"
          aria-busy={isPageTransitioning}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
