import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ink: {
          900: "#0b0d12",
          800: "#11141b",
          700: "#1a1f2b",
          600: "#262d3c",
        },
        accent: {
          DEFAULT: "#d97757",
          soft: "#e8a489",
        },
      },
    },
  },
  plugins: [],
};

export default config;
