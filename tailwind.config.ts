import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#129AA3",
          bright: "#1EC8D0",
          mid: "#0E8087",
          deep: "#0B6E74",
        },
        ink: "#06191B",
        paper: "#F7FBFC",
        stone: "#E6EEEF",
        body: "#122326",
        muted: "#4A5E62",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      screens: { xs: "360px" },
      maxWidth: {
        content: "76rem",
        prose: "42rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(6,25,27,.04), 0 12px 32px -12px rgba(6,25,27,.16)",
        lift: "0 2px 4px rgba(6,25,27,.05), 0 24px 56px -20px rgba(6,25,27,.28)",
        glow: "0 0 0 1px rgba(30,200,208,.35), 0 12px 40px -12px rgba(18,154,163,.55)",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.2,.7,.3,1) both",
        "fade-in": "fade-in .4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
