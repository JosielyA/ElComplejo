/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-linear-to-r': {
          'background-image': 'linear-gradient(to right, var(--tw-gradient-stops))',
        },
        '.bg-linear-to-l': {
          'background-image': 'linear-gradient(to left, var(--tw-gradient-stops))',
        },
        '.bg-linear-to-t': {
          'background-image': 'linear-gradient(to top, var(--tw-gradient-stops))',
        },
        '.bg-linear-to-b': {
          'background-image': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
