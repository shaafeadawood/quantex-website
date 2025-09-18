"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface LazyImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  className?: string;
  skeletonClassName?: string;
  showSkeleton?: boolean;
}

const ImageSkeleton = ({ className }: { className?: string }) => (
  <div className={`bg-background-card animate-pulse rounded-lg ${className}`}>
    <div className="flex items-center justify-center h-full">
      <svg 
        className="w-8 h-8 text-text-muted/50" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
          clipRule="evenodd" 
        />
      </svg>
    </div>
  </div>
);

export default function LazyImage({ 
  className = "", 
  skeletonClassName = "",
  showSkeleton = true,
  ...props 
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loader */}
      {isLoading && showSkeleton && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 ${skeletonClassName}`}
        >
          <ImageSkeleton className="w-full h-full" />
        </motion.div>
      )}

      {/* Error state */}
      {hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-background-card rounded-lg flex items-center justify-center"
        >
          <div className="text-center text-text-muted">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </motion.div>
      )}

      {/* Actual image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoading || hasError ? 0 : 1,
          scale: isLoading || hasError ? 1.05 : 1
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeOut" 
        }}
      >
        <Image
          {...props}
          alt={props.alt || ""}
          onLoad={handleLoad}
          onError={handleError}
          className={className}
        />
      </motion.div>

      {/* Loading shimmer effect */}
      {isLoading && showSkeleton && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
}