/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#7a123a",
          "primary-content": "#ffffff",
          "secondary": "#bf573f",
          "secondary-content": "#ffffff",
          "accent": "#fcb9a9",
          "accent-content": "#000000",
          "neutral": "#755668",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-300": "#e5e5e5",
          "base-content": "#1f2937",
          "info": "#3abff8",
          "info-content": "#ffffff",
          "success": "#36d399",
          "success-content": "#ffffff",
          "warning": "#fbbd23",
          "warning-content": "#ffffff",
          "error": "#f87272",
          "error-content": "#ffffff",
        },
      },
    ],
  },
} 