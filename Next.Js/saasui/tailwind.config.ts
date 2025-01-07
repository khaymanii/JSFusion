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
        customPurple: "#9747FF",
        customPurple1: "#324972",
      },
      background: {
        "linear-gradient":
          "linear-gradient(87.99deg, #BB86FC 42.9%, #4DC9B1 56.1%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
