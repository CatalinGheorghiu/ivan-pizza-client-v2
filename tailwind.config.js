/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('@/assets/work.jpg')"
      },
      aspectRatio: {
        "4/3": "4 / 3"
      }
    }
  },
  plugins: []
};
