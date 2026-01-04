/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#eff6ff', 500: '#3b82f6', 900: '#1e3a8a' },
        gray: { 50: '#f9fafb', 900: '#111827' },
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      spacing: { '18': '4.5rem' },
      borderRadius: { 'xl': '1rem' }, // SaaS button corners
    },
  },
  plugins: [],
  darkMode: 'class', // Add class="dark" for dark mode
}
