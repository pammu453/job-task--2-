/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f0f1fd",
        white: "#fff",
        whitesmoke: "#ebebeb",
        "primary-deepblue": "#08138c",
        navy: {
          "200": "rgba(8, 19, 140, 0)",
          "300": "rgba(8, 19, 140, 0.05)",
        },
        gray: {
          "100": "#212128",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(3, 2, 41, 0.7)",
          "500": "rgba(255, 255, 255, 0.3)",
        },
        lavender: {
          "100": "#dae5f5",
          "200": "#d6d9ff",
          "300": "#d2d6ff",
        },
        snow: "#fffcfa",
        "primary-skyblue": "#2ca6e9",
        deepskyblue: "#44b3e7",
        steelblue: "#2b99cf",
        text: "#030229",
        cornflowerblue: {
          "100": "#9aa3ff",
          "200": "#7c82c5",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        nunito: "Nunito",
      },
      borderRadius: {
        "4xl": "23px",
        "10xl": "29px",
        "81xl": "100px",
        "28xl-7": "47.7px",
        "12xs-9": "0.9px",
        "4xs": "9px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      base: "16px",
      "9xl": "28px",
      "3xl": "22px",
      "3xs": "10px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};