import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#217575",
        customGreen1: "#F0F5F5",
      },
      fontFamily: {
        besley: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
