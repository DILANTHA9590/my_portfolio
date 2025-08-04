// tailwind.config/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // If you're using React
    "./public/index.html", // Optional: for public HTML files
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#0A101A", // Example: your own custom color
        primary: "#0A101A", // Indigo-600
        secondary: "#17263A", // Emerald-500
        accent: "#8B5CFF", // Purple-500
        primary_white: "#d9dcdf", // White
        secondary_white: "#eaeaea", //
      },

      fontSize: {
        main_title: "1.875rem", // already default, but you can override if needed
        secondary_title: "1.4rem",
        secondarytitle: "1.875rem", // Example: a secondary title size
        description: "1.2rem", // Example: a description size
        small: "xl",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Optional font
      },

      textColor: {
        textwhite: "#FFFFFF",
        textblack: "#000000",
      },
    },
  },
  plugins: [],
};
