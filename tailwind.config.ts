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
        navy: "#1F1A14",
        graphite: "#1F1A14",
        paper: "#F5F0E6",
        "paper-2": "#E8E0D2",
        "paper-muted": "rgba(245, 240, 230, 0.65)",
        "paper-subtle": "rgba(245, 240, 230, 0.08)",
        copper: "#A67C52",
        "copper-hover": "#8B6642",
        "copper-light": "#A67C52",
        "navy-muted": "#6B5E50",
        "border-on-navy": "rgba(245, 240, 230, 0.12)",
        "border-on-paper": "#D6CDBD",
        destructive: "#C45C4A",
        surface: "#E8E0D2",
        "surface-dark": "#1F1A14",
        ink: "#1F1A14",
        stone: "#6B5E50",
        line: "#D6CDBD",
        "ok-dark": "#1F1A14",
        "on-dark": "#F5F0E6",
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
