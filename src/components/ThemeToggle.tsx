"use client";

import { motion } from 'framer-motion';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
    { value: 'system' as const, icon: Monitor, label: 'System' },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-1 p-1 bg-background-card border border-border-subtle rounded-xl">
        {themes.map(({ value, icon: Icon, label }) => {
          const isActive = theme === value;
          
          return (
            <button
              key={value}
              onClick={() => setTheme(value)}
              className={`
                relative flex items-center justify-center p-2 rounded-lg
                transition-all duration-300 ease-out
                ${isActive 
                  ? 'text-primary-900' 
                  : 'text-text-muted hover:text-text-primary hover:bg-background-subtle'
                }
              `}
              aria-label={`Switch to ${label} theme`}
              title={`Switch to ${label} theme`}
            >
              {isActive && (
                <motion.div
                  layoutId="theme-toggle-bg"
                  className="absolute inset-0 bg-gradient-primary rounded-lg"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
              <Icon 
                className={`
                  relative z-10 w-4 h-4 transition-colors duration-200
                  ${isActive ? 'text-white' : ''}
                `} 
                strokeWidth={1.5}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Simplified toggle for header/footer
export function SimpleThemeToggle() {
  const { actualTheme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        p-2 rounded-xl
        bg-background-card border border-border-subtle
        text-text-muted hover:text-text-primary
        hover:bg-background-subtle
        transition-all duration-300 ease-out
        group
      "
      aria-label={`Switch to ${actualTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: actualTheme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {actualTheme === 'light' ? (
          <Moon className="w-4 h-4 group-hover:text-primary-900 transition-colors duration-200" strokeWidth={1.5} />
        ) : (
          <Sun className="w-4 h-4 group-hover:text-primary-900 transition-colors duration-200" strokeWidth={1.5} />
        )}
      </motion.div>
    </motion.button>
  );
}