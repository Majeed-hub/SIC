/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff", // White for contrast
      gray: colors.gray, // Light Gray
      maroon: {
        100: "#f4e3e3",  // Lightest Maroon
        200: "#e3bcbc",  // Soft Maroon
        300: "#c98888",  // Muted Maroon
        400: "#a14d4d",  // Medium Maroon
        500: "#800000",  // Main Maroon (Qatar Flag)
        600: "#6b0000",  // Deep Maroon
        700: "#630f41",  // Dark Maroon
        800: "#3a0000",  // Darker Maroon
        900: "#290000",  // Darkest Maroon
      },
      gold: {
        500: "#F5C700", // Gold accent
      },
      neutral: colors.neutral, // Neutral text color
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
