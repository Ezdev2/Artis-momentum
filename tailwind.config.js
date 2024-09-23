/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        black: "var(--color-black)",
        blackScale: "var(--color-blackScale)",
        bgBlack: "var(--color-bgBlack)",
        bgFooter: "var(--color-bgFooter)",
        gray: "var(--color-gray)",
      },
    },
  },
  plugins: [],
}

