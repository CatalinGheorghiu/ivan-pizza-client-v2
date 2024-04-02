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
      },
      colors: {
        "custom-red-1": "#af4a38",
        "custom-gray-1": "#dfddd5",
        "custom-brown-1": "#b4a79d"
      }
    }
  },
  plugins: []
};
