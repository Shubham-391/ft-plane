/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url('/src/assets/images/headerbg.webp')",
        footerbg: "url('/src/assets/images/footerbg.webp')",
      },
      listStyleImage: {
        bluelist: 'url("/src/assets/images/bluelist.webp")',
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      inter: ["Inter"],
      rubik: ["Rubik"],
    },
  },
  plugins: [],
};
