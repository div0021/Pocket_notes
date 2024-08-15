/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-background':'var(--primary-background)',
        'secondary-background':'var(--secondary-background)'
      }
    },
  },
  plugins: [],
}

