/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0E1A",
          subtle: "#0F1419",
          card: "#141B26",
          elevated: "#1A2332",
          overlay: "rgba(10, 14, 26, 0.95)",
        },
        brand: {
          primary: "#3B82F6",
          secondary: "#1D4ED8", 
          accent: "#60A5FA",
          light: "#93C5FD",
          dark: "#1E40AF",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          emerald: "#10B981",
          amber: "#F59E0B",
        },
        "brand-primary": "#3B82F6",
        "brand-secondary": "#1D4ED8", 
        "brand-accent": "#60A5FA",
        "background-subtle": "#0F1419",
        "background-card": "#141B26",
        text: {
          primary: "#F8FAFC",
          secondary: "#E2E8F0",
          muted: "#94A3B8",
          subtle: "#64748B",
          accent: "#3B82F6",
          inverse: "#0F172A",
        },
        "text-primary": "#F8FAFC",
        "text-secondary": "#E2E8F0",
        "text-muted": "#94A3B8",
        "text-accent": "#3B82F6",
        border: {
          subtle: "rgba(59, 130, 246, 0.1)",
          accent: "rgba(59, 130, 246, 0.3)",
          strong: "rgba(59, 130, 246, 0.5)",
          glow: "rgba(59, 130, 246, 0.2)",
        },
        surface: {
          glass: "rgba(255, 255, 255, 0.05)",
          "glass-strong": "rgba(255, 255, 255, 0.1)",
          overlay: "rgba(0, 0, 0, 0.5)",
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
        'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.2) 0px, transparent 0%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.2) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.2) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.2) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.2) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.2) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.2) 0px, transparent 50%)',
        'hero-gradient': 'linear-gradient(135deg, #0A0E1A 0%, #1E293B 50%, #0F172A 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'glow-gradient': 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)',
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

