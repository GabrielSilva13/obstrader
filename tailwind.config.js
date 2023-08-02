/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      container: {
        center: true,
      },
      colors: {
        primary: '#171717',
        secondary: '#666666',
        'orange-250': '#FAA61A',
        'border-color': '#E5E5E5',
      },
    },
  },
  plugins: [],
}
