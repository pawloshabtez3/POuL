import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        // Premium Dark Theme Palette
        obsidian: "#050505", // Deepest background
        charcoal: "#0a0a0a", // Slightly lighter background
        navy: "#0f172a", // Rich accent background
        
        // Accents
        gold: "#FFD700",
        "gold-dim": "#C5A000",
        teal: "#00E5FF",
        "teal-dim": "#00B8CC",
        
        // Text
        mist: "#94a3b8", // Subtext
        ink: "#f8fafc", // Main text (inverted for dark mode)
      },
      boxShadow: {
        card: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 20px rgba(0, 229, 255, 0.15)",
        "glow-gold": "0 0 20px rgba(255, 215, 0, 0.15)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #0f172a 0deg, #050505 180deg, #0f172a 360deg)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    }
  },
  plugins: []
};

export default config;
