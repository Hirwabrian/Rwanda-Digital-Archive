export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#222023",
        blush: "#D5BFB9",
        cream: "#FBFAF5",
        brown: "#945A23",
      },
      keyframes: {
        autoRun: {
          from: {
            transform:
              "translate(-50%, -50%) perspective(1000px) rotateX(-10deg) rotateY(0deg)",
          },
          to: {
            transform:
              "translate(-50%, -50%) perspective(1000px) rotateX(-10deg) rotateY(360deg)",
          },
        },
      },
      animation: {
        autoRun: "autoRun 30s linear infinite",
      },
    },
  },
  plugins: [],
};
