/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: [`'Poppins', sans-serif`],
      serif: [`'Inter', sans-serif`],
      sen: [`'Sen', sans-serif`],
    },
    colors: {
      orange: "#F66F4D",
      darkGray: "#2D3134",
      lightGray: "#5B5F62",
      softGray: "#EAEAEB",
      white: "#FFFFFF",
      offWhite: "#FAF8ED",
      ash: "#939597",
      cream: "#FFD482",
    },
    
    extend: {
      backgroundImage: {
        footerPattern: 'url("../src/assets/Intersect.png  )',
      },
    },
  },
  plugins: [],
};
