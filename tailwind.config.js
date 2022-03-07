module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    extend: {
      width: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundColor: {
        body: "#ffffff",
      },
      backgroundImage: {
        "aurora-bg": "url(/images/aurora-bg-2.svg)",
        "grad-1":
          "linear-gradient(45deg, rgba(40,111,107,1) 49%,rgba(242,100,65,1) 93%,rgba(239,192,73,1) 100%)",
      },
      colors: {
        primary: {
          100: "#d4e2e2",
          200: "#a9c5c4",
          300: "#7fa9a7",
          400: "#548c89",
          500: "#296f6c",
          600: "#215956",
          700: "#194341",
          800: "#102c2b",
          900: "#081616",
        },
        yellow: {
          100: "#fcf2da",
          200: "#f8e5b6",
          300: "#f5d991",
          400: "#f1cc6d",
          500: "#eebf48",
          600: "#be993a",
          700: "#8f732b",
          800: "#5f4c1d",
          900: "#30260e",
        },
        red: {
          100: "#fce0d9",
          200: "#fac1b3",
          300: "#f7a28c",
          400: "#f58366",
          500: "#f26440",
          600: "#c25033",
          700: "#913c26",
          800: "#61281a",
          900: "#30140d",
        },
        dark: {
          100: "#d3d3d9",
          200: "#a7a8b3",
          300: "#7c7c8c",
          400: "#505166",
          500: "#242540",
          600: "#1d1e33",
          700: "#161626",
          800: "#0e0f1a",
          900: "#07070d",
        },
      },
      fontFamily: {
        exo: ["Exo", "sans-serif"],
        exo2: ["Exo 2", "sans-serif"],
      },
      animation: {
        fadeInTop: "fadeInTop 1s ease-in forwards",
        "tracking-out-contract-bck":
          "tracking-out-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "tracking-in-contract-bck":
          "tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
      },
      keyframes: {
        fadeInTop: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "tracking-out-contract-bck": {
          "0%": {
            transform: "translateZ(0)",
            opacity: 1,
          },
          "40%": {
            opacity: 0.6,
          },
          "100%": {
            "letter-spacing": "1em",
            transform: " translateZ(400px)",
            opacity: 0,
          },
        },
        "tracking-in-contract-bck": {
          "0%": {
            "letter-spacing": "1em",
            transform: "translateZ(400px)",
            opacity: 0,
          },
          "40%": {
            opacity: 0.6,
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: 1,
          },
        },
      },
    },
    zIndex: {
      "-1": "-1",
      0: 0,
      1: 1,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
    },
  },
  plugins: [require("tailwindcss-children")],
};
