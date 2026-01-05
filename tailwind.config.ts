import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        // Class for the cards (Sacramento)
        card: ["var(--font-card)"], 
        // Class for the top left header (Great Vibes)
        header: ["var(--font-header)"], 
      },
    },
  },
  plugins: [],
};
export default config;