/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jeju: ["JejuMyeongjo"],
        roboto: ["Roboto"],
        rage: ["Road Rage"],
        alatsi: ["Alatsi"],
      },
      colors: {
        background: "#02191D",
        cardColor: "#041E23",
        secondary: "#08252B",
        accent: "#12464E",
        button: "#24A0B5",
        white: "#ffffff",
        btnText: "#0A0C11",
        grey: "#FAFAFA",
        deepgreen: "#0E464F",
        darkgreen: "#052228",
        deepergreen: "#07374F",
        black: "#0E464F",
        frame: "#031E21",
        table: "#08343C",
      },
    },
  },
  plugins: [],
};
