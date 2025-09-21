"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Get actual theme (resolving 'system' to 'light' or 'dark')
  const getActualTheme = (theme: Theme): 'light' | 'dark' => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };

  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = savedTheme || 'light';
    
    setThemeState(initialTheme);
    setActualTheme(getActualTheme(initialTheme));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const newActualTheme = getActualTheme(theme);
    
    // Remove previous theme class
    root.classList.remove('light', 'dark');
    
    // Add new theme class
    root.classList.add(newActualTheme);
    
    // Update CSS custom properties for smooth transitions
    if (newActualTheme === 'dark') {
      root.style.setProperty('--background', '3 7 18'); // #030712
      root.style.setProperty('--background-subtle', '17 24 39'); // #111827
      root.style.setProperty('--background-card', '31 41 55'); // #1f2937
      root.style.setProperty('--background-elevated', '55 65 81'); // #374151
      root.style.setProperty('--text-primary', '249 250 251'); // #f9fafb
      root.style.setProperty('--text-secondary', '156 163 175'); // #9ca3af
      root.style.setProperty('--text-muted', '107 114 128'); // #6b7280
      root.style.setProperty('--text-subtle', '75 85 99'); // #4b5563
      root.style.setProperty('--text-inverse', '17 24 39'); // #111827
      root.style.setProperty('--border-subtle', '55 65 81, 0.3'); // #374151 with opacity
      root.style.setProperty('--surface-glass', '255 255 255, 0.05');
      root.style.setProperty('--surface-glass-strong', '255 255 255, 0.1');
    } else {
      root.style.setProperty('--background', '255 255 255'); // #ffffff
      root.style.setProperty('--background-subtle', '249 250 251'); // #f9fafb
      root.style.setProperty('--background-card', '255 255 255'); // #ffffff
      root.style.setProperty('--background-elevated', '249 250 251'); // #f9fafb
      root.style.setProperty('--text-primary', '17 24 39'); // #111827
      root.style.setProperty('--text-secondary', '107 114 128'); // #6b7280
      root.style.setProperty('--text-muted', '156 163 175'); // #9ca3af
      root.style.setProperty('--text-subtle', '209 213 219'); // #d1d5db
      root.style.setProperty('--text-inverse', '249 250 251'); // #f9fafb
      root.style.setProperty('--border-subtle', '229 231 235, 0.6'); // #e5e7eb with opacity
      root.style.setProperty('--surface-glass', '255 255 255, 0.8');
      root.style.setProperty('--surface-glass-strong', '255 255 255, 0.95');
    }
    
    setActualTheme(newActualTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      setActualTheme(getActualTheme('system'));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(actualTheme === 'light' ? 'dark' : 'light');
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}