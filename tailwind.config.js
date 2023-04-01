/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oxygen", "system-ui", "ui-sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customlight: {
          primary: "#a78bfa",
          secondary: "#e879f9",
          accent: "#fb923c",
          neutral: "#c1c4d9",
          "base-100": "#dddfed",
          info: "#7dd3fc",
          success: "#16a34a",
          warning: "#fde047",
          error: "#dc2626",
        },
      },
      {
        customdark: {
          primary: "#a78bfa",
          secondary: "#e879f9",
          accent: "#fb923c",
          neutral: "#303240",
          "base-100": "#242630",
          info: "#7dd3fc",
          success: "#16a34a",
          warning: "#fde047",
          error: "#dc2626",
        },
      },
    ],
  },
};
