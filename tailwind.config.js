/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        primarybg : "#ffffff",
        secondarybg:"#19427D",
        tertiarybg:"#041228"
      },
      textColor:{
        primary:"#303972",
        secondary:"#19427D",
        tertiary:"#041228"
      }
    },
    screens:{
      "sm": "576px",
      "md":"768px",
      "lg":"992px",
      "xl":"1200px"
    },
    
  },
  plugins: [],
}