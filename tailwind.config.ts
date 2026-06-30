import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        moss: "var(--moss)",
        blueprint: "var(--blueprint)",
        line: "var(--line)",
        brand: {
          cream: "#F4F1E8",
          yellow: "#D7A92F",
          black: "#202124",
          white: "#FBFAF5",
          beige: "#F4F1E8",
          "yellow-light": "#E8C86B",
          moss: "#63715C",
          blueprint: "#315E7B",
          mist: "#E3E0D8",
        }
      },
      boxShadow: {
        card: "0 16px 40px rgba(32, 33, 36, 0.08)",
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
