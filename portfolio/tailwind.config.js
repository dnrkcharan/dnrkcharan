import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Sora", "Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        "charan-primary": "#5b7cfa",
        "charan-secondary": "#8f67ff",
        "charan-accent": "#00f5ff",
        "charan-dark": "#05010a",
        "charan-light": "#f5f7ff"
      },
      backgroundImage: {
        "neural-grid": "radial-gradient(circle at 20% 20%, rgba(91,124,250,0.15) 0, transparent 45%), radial-gradient(circle at 80% 10%, rgba(0,245,255,0.2) 0, transparent 55%), radial-gradient(circle at 50% 80%, rgba(143,103,255,0.18) 0, transparent 60%)"
      },
      boxShadow: {
        "glow": "0 0 40px rgba(91,124,250,0.35)",
        "inner-glow": "inset 0 0 30px rgba(0,245,255,0.2)"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(143,103,255,0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(0,245,255,0.6)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
