/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#002F6D',
          'custom-orange': '#FF9202',
        },
      },
    },
    plugins: [],
  };
  