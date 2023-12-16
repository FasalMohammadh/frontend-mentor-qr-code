/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(var(--white))",
        "body-background": "hsl(var(--body-background))",
        "body-text-secondary": "hsl(var(--body-text-secondary))",
        "body-text-primary": "hsl(var(--body-text-primary))",
      },
      fontFamily: {
        outfit: "var(--font-outfit)",
      },
    },
  },
  plugins: [],
};
