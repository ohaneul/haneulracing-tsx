/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff3e78',
        'primary-darker': '#ff1458',
        'bg-gradient-1': '#0f1218',
        'bg-gradient-2': '#1a0f1e',
        'bg-gradient-3': '#120f24',
      },
      animation: {
        'gradient-flow': 'gradientFlow 6s ease infinite',
      },
      keyframes: {
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};