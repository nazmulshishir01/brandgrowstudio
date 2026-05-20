/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E8F8EE',
          100: '#D0F1DD',
          200: '#A8E6C0',
          300: '#6DD898',
          400: '#3CC76A',
          500: '#2AAF58',
          600: '#1E9648',
          700: '#167A3A',
          800: '#105E2D',
          900: '#0A4220',
        },
        surface: {
          primary: '#FFFFFF',
          secondary: '#F8FAF8',
          tertiary: '#F0F5F1',
        },
        ink: {
          primary: '#1A1A1A',
          secondary: '#444444',
          muted: '#888888',
          faint: '#BBBBBB',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 40px rgba(60, 199, 106, 0.15)',
        'glow-lg': '0 0 80px rgba(60, 199, 106, 0.2)',
        soft: '0 2px 20px rgba(0, 0, 0, 0.04)',
        medium: '0 8px 40px rgba(0, 0, 0, 0.06)',
        heavy: '0 20px 60px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'grain': 'grain 8s steps(10) infinite',
        'marquee': 'marquee 30s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
