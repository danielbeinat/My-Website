/** @type {import('tailwindcss').Config} */
import { backIn } from "framer-motion";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #3b82f6, #06b6d4, #14b8a6)',

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
