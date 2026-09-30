import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#0038E0", lime: "#D4FF1E", ink: "#1C1C1E" },
      fontFamily: { heading: ["var(--font-poppins)"], sans: ["var(--font-urbanist)"] },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
