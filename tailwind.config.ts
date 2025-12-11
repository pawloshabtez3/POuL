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
        ink: "#0b1520",
        mist: "#e2e8f0",
        gold: "#d6a400",
        teal: "#0ea5e9",
        sand: "#f5f1e8"
      },
      boxShadow: {
        card: "0 16px 40px rgba(12, 20, 31, 0.12)",
        glow: "0 0 0 1px rgba(14, 165, 233, 0.25), 0 18px 60px rgba(14, 165, 233, 0.25)"
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(214,164,0,0.08), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
