/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'gray-1': '#F4F5F5',
      'gray-2': '#E9E9E9',
      'gray-3': '#D9D9D9',
      'gray-4': '#4D4D4D',
      'blue-1': '#56A2FC',
      'blue-2': '#0666DF',
      'red': '#F36957',
      'yellow': '#FABD38',
      'green': '#59C448',
      'blue-600': '#2563eb',
      'blue-400': '#60a5fa',
      'blue-200': '#bfdbfe',
    },
    screens: {
      'sm': '640px',
      'md': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
