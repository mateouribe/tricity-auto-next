import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1C1C1C",
        white: "#FAF8F6",
        main: "#F18637",
        grayMouse: "#6E6E6E",
        lightOrange: "#F9F2EC",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      padding: {
        mobile: "20px",
        tablet: "50px",
        desktop: "100px",
      },
      fontSize: {
        70: "70px",
        48: "48px",
        36: "36px",
        30: "30px",
        26: "26px",
        22: "22px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
      },
      spacing: {
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        100: "100px",
        view: "100vh",
      },
      screens: {
        lg: "1180px",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
        button: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
