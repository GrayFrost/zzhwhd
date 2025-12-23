import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F5E6D3",
          yellow: "#E9AF44",
          black: "#1A1A1A",
          white: "#FFFFFF",
          beige: "#FDF6EC",
          "yellow-light": "#F3D092",
        }
      },
      boxShadow: {
        card: ".4em .4em .8em #99b5d2, -.4em -.4em .8em #fff",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;
