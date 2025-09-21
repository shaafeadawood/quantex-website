/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Quantex Blue (#1800ad) as primary brand color
        primary: {
          50: '#f0f0ff',
          100: '#e1e1ff',
          200: '#c9c9ff',
          300: '#a6a6ff',
          400: '#8080ff',
          500: '#5f5fff',
          600: '#4d4dff',
          700: '#3333ff',
          800: '#1f1fff',
          900: '#1800ad',
          950: '#100073',
        },
        // Legacy brand colors updated to use Quantex Blue
        brand: {
          primary: "#1800ad",
          secondary: "#4f46e5", 
          accent: "#6366f1",
          light: "#8b8bff",
          dark: "#100073",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          emerald: "#10B981",
          amber: "#F59E0B",
        },
        "brand-primary": "#1800ad",
        "brand-secondary": "#4f46e5", 
        "brand-accent": "#6366f1",
        // Modern background system for light/dark mode
        background: {
          DEFAULT: "rgb(var(--background))",
          subtle: "rgb(var(--background-subtle))",
          card: "rgb(var(--background-card))",
          elevated: "rgb(var(--background-elevated))",
          overlay: "rgba(var(--background), 0.95)",
        },
        "background-subtle": "rgb(var(--background-subtle))",
        "background-card": "rgb(var(--background-card))",
        // Modern text system for light/dark mode
        text: {
          primary: "rgb(var(--text-primary))",
          secondary: "rgb(var(--text-secondary))",
          muted: "rgb(var(--text-muted))",
          subtle: "rgb(var(--text-subtle))",
          accent: "#1800ad",
          inverse: "rgb(var(--text-inverse))",
        },
        "text-primary": "rgb(var(--text-primary))",
        "text-secondary": "rgb(var(--text-secondary))",
        "text-muted": "rgb(var(--text-muted))",
        "text-accent": "#1800ad",
        // Modern border system for light/dark mode
        border: {
          subtle: "rgba(var(--border-subtle))",
          accent: "rgba(24, 0, 173, 0.3)",
          strong: "rgba(24, 0, 173, 0.5)",
          glow: "rgba(24, 0, 173, 0.2)",
        },
        "border-subtle": "rgba(var(--border-subtle))",
        surface: {
          glass: "rgba(var(--surface-glass))",
          "glass-strong": "rgba(var(--surface-glass-strong))",
          overlay: "rgba(0, 0, 0, 0.5)",
        },
        // Gradient accent colors that pair with Quantex Blue
        accent: {
          purple: '#6366f1',
          indigo: '#4f46e5',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif", 
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Quantex Blue gradients
        'gradient-primary': 'linear-gradient(135deg, #1800ad 0%, #4f46e5 50%, #6366f1 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #100073 0%, #3730a3 50%, #4f46e5 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #3b82f6 100%)',
        'gradient-surface': 'linear-gradient(135deg, rgba(24, 0, 173, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
        'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(240, 100%, 34%, 0.2) 0px, transparent 0%), radial-gradient(at 97% 21%, hsla(260, 98%, 72%, 0.2) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(280, 98%, 61%, 0.2) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.2) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(240, 60%, 74%, 0.2) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(260, 67%, 73%, 0.2) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(280, 68%, 79%, 0.2) 0px, transparent 50%)',
        'hero-gradient': 'linear-gradient(135deg, rgb(var(--background)) 0%, rgb(var(--background-subtle)) 50%, rgb(var(--background-card)) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(var(--surface-glass)) 0%, rgba(var(--surface-glass-strong)) 100%)',
        'glow-gradient': 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(24, 0, 173, 0.15), transparent 40%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(24, 0, 173, 0.3)',
        'glow-lg': '0 0 40px rgba(24, 0, 173, 0.2)',
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(255, 255, 255, 0.05) inset',
        'soft': '0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'primary': '0 4px 16px rgba(24, 0, 173, 0.2)',
        'primary-lg': '0 8px 32px rgba(24, 0, 173, 0.25)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(255, 255, 255, 0.05) inset',
        'soft': '0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'fade-up': 'fade-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

