"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Enhanced loading component
const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
  >
    {/* Main logo animation */}
    <div className="text-center space-y-6">
      <motion.div
        className="w-20 h-20 mx-auto bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary rounded-2xl flex items-center justify-center shadow-xl shadow-brand-primary/25"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
          boxShadow: [
            "0 10px 25px rgba(var(--brand-primary-rgb), 0.25)",
            "0 20px 40px rgba(var(--brand-primary-rgb), 0.4)",
            "0 10px 25px rgba(var(--brand-primary-rgb), 0.25)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-white font-bold text-3xl">Q</span>
      </motion.div>
      
      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <h3 className="font-display text-xl font-semibold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
          Quantex
        </h3>
        <p className="text-text-muted text-sm">Initializing AI Experience...</p>
      </motion.div>

      {/* Loading progress bar */}
      <motion.div className="w-48 h-1 bg-background-card rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>

    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-primary/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + Math.sin(i) * 40}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  </motion.div>
);

// Skeleton loader component for sections
export const SectionSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse space-y-6 ${className}`}>
    <div className="text-center space-y-4">
      <div className="h-4 bg-background-card rounded-full w-32 mx-auto"></div>
      <div className="h-12 bg-background-card rounded-lg w-96 max-w-full mx-auto"></div>
      <div className="h-6 bg-background-card rounded-lg w-64 max-w-full mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-background-card rounded-xl p-6 space-y-4">
          <div className="h-12 w-12 bg-background-subtle rounded-xl"></div>
          <div className="h-6 bg-background-subtle rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-background-subtle rounded w-full"></div>
            <div className="h-4 bg-background-subtle rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Enhanced page transition with loading states
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (in real app, this would be based on actual content loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98 
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1 
    },
    out: { 
      opacity: 0, 
      y: -20,
      scale: 1.02 
    }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.6
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
