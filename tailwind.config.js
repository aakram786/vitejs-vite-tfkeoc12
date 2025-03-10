import { type Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F4B8E',
        secondary: '#2A9D8F',
      },
    },
  },
  plugins: [],
} satisfies Config