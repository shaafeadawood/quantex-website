"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Global loading overlay
const LoadingOverlay = ({ isVisible, text }: { isVisible: boolean; text: string }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
          className="bg-background-card border border-border-subtle rounded-2xl p-8 shadow-xl max-w-sm mx-4"
        >
          <div className="text-center space-y-4">
            {/* Animated logo */}
            <motion.div
              className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary rounded-2xl flex items-center justify-center"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-white font-bold text-xl">Q</span>
            </motion.div>

            {/* Loading text */}
            <div className="space-y-2">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-semibold text-text-primary"
              >
                {text}
              </motion.h3>
              
              {/* Animated dots */}
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-brand-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-background-subtle rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const setLoadingTextState = (text: string) => {
    setLoadingText(text);
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
        loadingText,
        setLoadingText: setLoadingTextState,
      }}
    >
      {children}
      <LoadingOverlay isVisible={isLoading} text={loadingText} />
    </LoadingContext.Provider>
  );
};

// Hook for easy loading management
export const useLoadingState = () => {
  const { setLoading, setLoadingText } = useLoading();

  const showLoading = (text = "Loading...") => {
    setLoadingText(text);
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return { showLoading, hideLoading };
};