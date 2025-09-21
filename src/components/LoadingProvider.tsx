"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingText: string;
  setLoadingText: (text: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

// Global loading overlay - Clean professional version
const LoadingOverlay = ({ isVisible }: { isVisible: boolean }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
          className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-md flex items-center justify-center"
          role="status"
          aria-busy="true"
          aria-label="Loading content"
        >
          <motion.div
            initial={{ scale: shouldReduceMotion ? 1 : 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: shouldReduceMotion ? 1 : 0.9, opacity: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.1 : 0.3, 
              type: "spring", 
              stiffness: 400, 
              damping: 30 
            }}
            className="text-center"
          >
            {/* Clean logo animation */}
            <motion.div
              className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1800ad] to-[#6366f1] rounded-2xl flex items-center justify-center shadow-lg"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 8px 25px rgba(24, 0, 173, 0.15)",
                  "0 12px 35px rgba(24, 0, 173, 0.25)",
                  "0 8px 25px rgba(24, 0, 173, 0.15)"
                ]
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 2,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-white font-bold text-xl">Q</span>
            </motion.div>

            {/* Simple loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
              className="mt-6"
            >
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-[#1800ad] rounded-full"
                    animate={shouldReduceMotion ? {} : {
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1.2,
                      repeat: shouldReduceMotion ? 0 : Infinity,
                      delay: shouldReduceMotion ? 0 : i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  // Prevent body scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        loadingText: "", // Deprecated - keeping for compatibility
        setLoadingText: () => {}, // Deprecated - keeping for compatibility
      }}
    >
      {children}
      <LoadingOverlay isVisible={isLoading} />
    </LoadingContext.Provider>
  );
};

// Hook for easy loading management
export const useLoadingState = () => {
  const { setLoading } = useLoading();

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return { showLoading, hideLoading };
};