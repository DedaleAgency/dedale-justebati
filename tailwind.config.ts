import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1623",
        graphite: "#1E2A38",
        paper: "#EDE9E1",
        "paper-muted": "rgba(237, 233, 225, 0.65)",
        "paper-subtle": "rgba(237, 233, 225, 0.08)",
        copper: "#B87333",
        "copper-hover": "#945c28",
        "copper-light": "#d4924a",
        "navy-muted": "rgba(11, 22, 35, 0.70)",
        "border-on-navy": "rgba(237, 233, 225, 0.12)",
        "border-on-paper": "rgba(11, 22, 35, 0.12)",
        destructive: "#C45C4A",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "0px",
        md: "2px",
        lg: "0px",
      },
      transitionTimingFunction: {
        "out-custom": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "400ms",
      },
      keyframes: {
        "ken-burns": {
          "0%, 100%": { transform: "scale(1.03)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 14s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
