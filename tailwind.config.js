/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E3A5F',
          light: '#2A4D7F',
          dark: '#152B47',
          deeper: '#0F1F34',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-spotlight': 'radial-gradient(ellipse 70% 60% at 75% 50%, rgba(245,158,11,0.08) 0%, transparent 65%), radial-gradient(ellipse 50% 70% at 85% 20%, rgba(42,77,127,0.25) 0%, transparent 55%)',
      },
    },
  },
  plugins: [],
}
