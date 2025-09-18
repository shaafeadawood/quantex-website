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
        },
        brand: {
          primary: "#3B82F6",
          secondary: "#1D4ED8", 
          accent: "#60A5FA",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
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
          accent: "#3B82F6",
        },
        "text-primary": "#F8FAFC",
        "text-secondary": "#E2E8F0",
        "text-muted": "#94A3B8",
        "text-accent": "#3B82F6",
        border: {
          subtle: "rgba(59, 130, 246, 0.1)",
          accent: "rgba(59, 130, 246, 0.3)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif", 
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0A0E1A 0%, #1E293B 50%, #0F172A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fade-up 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
}

