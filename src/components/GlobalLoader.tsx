"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlobalLoaderProps {
  isVisible: boolean;
  onComplete?: () => void;
}

export default function GlobalLoader({ isVisible, onComplete }: GlobalLoaderProps) {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete?.(), 300); // Smoother completion timing
            return 100;
          }
          return prev + Math.random() * 20 + 12; // Consistent progress speed
        });
      }, 80); // Balanced update frequency

      return () => clearInterval(interval);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1] // Custom easing for smoother exit
          }}
          className="fixed inset-0 z-[200] bg-white dark:bg-gray-950 flex items-center justify-center"
          style={{ 
            background: "var(--background)",
          }}
          role="status"
          aria-busy="true"
          aria-label="Loading Quantex application"
        >
          <div className="flex flex-col items-center space-y-8">
            {/* Main Logo with Sophisticated Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              transition={{ 
                duration: shouldReduceMotion ? 0.2 : 0.6, 
                ease: "easeOut" 
              }}
              className="relative"
            >
              {/* Outer Ring with Enhanced Design */}
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 w-28 h-28 rounded-full border border-gradient-to-r from-[#1800ad]/30 to-[#6366f1]/30"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(24, 0, 173, 0.3) 90deg, transparent 180deg)',
                    borderRadius: '50%',
                    padding: '2px'
                  }}
                />
              )}
              
              {/* Logo Container with Enhanced Design */}
              <motion.div
                animate={shouldReduceMotion ? {} : { 
                  boxShadow: [
                    "0 0 20px rgba(24, 0, 173, 0.1)",
                    "0 0 40px rgba(24, 0, 173, 0.2)",
                    "0 0 20px rgba(24, 0, 173, 0.1)"
                  ]
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 2,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 bg-gradient-to-br from-[#1800ad] to-[#6366f1] rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl"
              >
                {/* Shimmer Effect */}
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{ transform: "skewX(-45deg)" }}
                  />
                )}
                
                {/* Enhanced Q Logo */}
                <span className="text-white font-bold text-3xl relative z-10">Q</span>
                
                {/* Inner glow */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Brand Name with Better Typography */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0.2 : 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1800ad] to-[#6366f1] bg-clip-text text-transparent tracking-tight">
                Quantex
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                AI Innovation Platform
              </p>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, width: shouldReduceMotion ? "12rem" : 0 }}
              animate={{ opacity: 1, width: "12rem" }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0.2 : 0.8 }}
              className="relative"
            >
              {/* Progress Track */}
              <div className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                {/* Progress Bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-[#1800ad] to-[#6366f1] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Shimmer on Progress Bar */}
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1800ad]/10 via-transparent to-[#6366f1]/10" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Minimal Page Transition Loader
export function PageTransitionLoader({ isVisible }: { isVisible: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Top Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: "100%", opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-[#1800ad] to-[#6366f1] z-[80]"
          />
          
          {/* Logo Pulse in Header Area - removed as it conflicts with header */}
        </>
      )}
    </AnimatePresence>
  );
}