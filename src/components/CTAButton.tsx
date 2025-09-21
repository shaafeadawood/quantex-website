"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTAButton({
  label = "Get Started",
  onClick,
  variant = "primary",
  size = "md",
  icon,
  loading = false,
}: {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  loading?: boolean;
}) {
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  const variantClasses = {
    primary: "bg-gradient-primary text-white shadow-primary",
    secondary: "bg-background-card border border-border-subtle text-text-primary",
    ghost: "text-primary-900 hover:bg-gradient-surface",
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={loading}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={{ 
        scale: 1.02,
        boxShadow: variant === "primary" 
          ? "0 20px 25px -5px rgba(24, 0, 173, 0.4), 0 10px 10px -5px rgba(24, 0, 173, 0.04)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17,
        mass: 0.8
      }}
      className={`
        font-medium relative overflow-hidden group inline-flex items-center justify-center gap-2
        transition-all duration-300 transform-gpu
        ${sizeClasses[size]} ${variantClasses[variant]}
        ${loading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
        ${variant === "primary" ? 'hover:shadow-primary-lg' : ''}
        ${variant === "secondary" ? 'hover:bg-background-elevated hover:border-primary-900/30' : ''}
      `}
    >
      {/* Animated background layers */}
      {variant === "primary" && (
        <>
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          {/* Gradient shift on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-primary-hover opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Pulse effect on press */}
          {isPressed && (
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-xl"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </>
      )}

      {/* Content container with enhanced animations */}
      <motion.span 
        className="relative z-10 flex items-center gap-2"
        animate={loading ? { opacity: 0.7 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Loading spinner */}
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        )}
        
        {/* Icon with micro-animation */}
        {icon && !loading && (
          <motion.span
            whileHover={{ 
              scale: 1.1,
              rotate: variant === "primary" ? [0, -2, 2, 0] : 0
            }}
            transition={{ 
              duration: 0.3,
              rotate: { duration: 0.5 }
            }}
          >
            {icon}
          </motion.span>
        )}
        
        {/* Text with subtle animation */}
        <motion.span
          animate={loading ? { x: loading ? 4 : 0 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {loading ? 'Loading...' : label}
        </motion.span>
        
        {/* Arrow animation for primary buttons */}
        {variant === "primary" && !loading && !icon && (
          <motion.span
            className="inline-block ml-1"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            →
          </motion.span>
        )}
      </motion.span>

      {/* Floating particles effect for primary variant */}
      {variant === "primary" && (
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [-2, -6, -2],
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
}
