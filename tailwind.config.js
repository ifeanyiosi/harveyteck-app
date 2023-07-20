/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#333",
        secondary: "#ffffff",
        mint: "#EBFAFA",
        dark: "#1b1b1b",
        hover: "#6993C6",
        muted: "#8FB3AF",
        light: "#333333",
        nav: "#003d29",
      },
    },
  },
  plugins: [],
};
