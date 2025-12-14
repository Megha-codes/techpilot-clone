import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1E3B",     // deep navy
        secondary: "#1E4FD8",   // main blue
        accent: "#4F8CFF",      // highlights
        muted: "#F4F7FB",       // light background
        border: "#E5E7EB",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
