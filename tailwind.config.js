/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        canvas: {
          light: "#f5efe6",
          mist: "#ebe4d8",
          dark: "#121812",
          night: "#0c100c",
        },
        brand: {
          DEFAULT: "#7a3d4a",
          soft: "#9a5a68",
          glow: "rgba(122, 61, 74, 0.12)",
        },
        leaf: {
          DEFAULT: "#4a5a44",
          soft: "#6b7d63",
          mist: "rgba(74, 90, 68, 0.14)",
        },
        cream: {
          DEFAULT: "#f0e8dc",
          deep: "#e5d9c8",
        },
      },
      letterSpacing: {
        hero: "0.18em",
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122, 61, 74, 0.08), transparent 55%), radial-gradient(ellipse 70% 50% at 100% 50%, rgba(74, 90, 68, 0.06), transparent 50%), radial-gradient(ellipse 60% 40% at 0% 80%, rgba(240, 232, 220, 0.5), transparent 45%)",
        "soft-radial-dark":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(154, 90, 104, 0.12), transparent 55%), radial-gradient(ellipse 70% 50% at 100% 40%, rgba(74, 90, 68, 0.15), transparent 50%), radial-gradient(ellipse 50% 35% at 20% 90%, rgba(122, 61, 74, 0.08), transparent 50%)",
      },
    },
  },
  plugins: [],
};
