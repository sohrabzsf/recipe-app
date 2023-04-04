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
        daymode: {
          primary: "#ff5e0d",
          secondary: "#ff9e0d",
          accent: "#88d90f",
          neutral: "#ffdbbd",
          "neutral-content": "#1a1a1a",
          "base-100": "#ffedde",
          "base-content": "#1a1a1a",
          info: "#66cdff",
          success: "#0fb84d",
          warning: "#ffcf0f",
          error: "#e82525",
        },
      },
      {
        nightmode: {
          primary: "#ff5e0d",
          secondary: "#ff9e0d",
          accent: "#88d90f",
          neutral: "#262626",
          "neutral-content": "#eeeeee",
          "base-100": "#323232",
          "base-content": "#eeeeee",
          info: "#66cdff",
          success: "#0fb84d",
          warning: "#ffcf0f",
          error: "#e82525",
        },
      },
    ],
  },
};
