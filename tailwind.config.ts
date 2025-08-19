import { defineConfig } from 'tailwindcss'
export default defineConfig({
  theme: {
    extend: {
      colors: {
        purple: '#6a0dad',
        white: '#ffffff',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});