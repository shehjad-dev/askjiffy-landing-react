/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2F5D8C",
                secondary: "#D55E2D",
                accentOne: "#EAEAE8",
                accentTwo: "#A0B3C1",
            },
            fontFamily: {
                lora: ["Lora", "serif"],
                passionOne: ["Passion One", "cursive"],
                montSerrat: ["Montserrat", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-5px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                ...defaultTheme.keyframes,
            },
            animation: {
                "fade-in-down": "fade-in-down 0.25s ease-out",
                ...defaultTheme.animation,
            },
            screens: {
                xs: "370px",
            },
        },
    },
    plugins: [],
};
