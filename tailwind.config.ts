import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['"Audiowide"', "cursive"],
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        testpink: "#ff00ff",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: '"Audiowide", cursive',
              fontWeight: "700",
              fontSize: "2.25rem",
            },
            h2: {
              fontFamily: '"Audiowide", cursive',
              fontWeight: "600",
              fontSize: "1.875rem",
            },
            h3: {
              fontFamily: '"Audiowide", cursive',
              fontWeight: "500",
              fontSize: "1.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
