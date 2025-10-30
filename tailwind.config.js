/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue (button)
          600: "#2563EB",
          700: "#1D4ED8",
        },
        accent: "#06B6D4", // optional accent
        surface: "#F8FAFC",
        card: "#FFFFFF",
        muted: "#6B7280",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16,24,40,0.06)",
        card: "0 8px 24px rgba(2,6,23,0.08)",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};
