module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      fontFamily: {
         circeReg: ["CirceReg", "sans-serif"],
         circeBold: ["CirceBold", "sans-serif"],
       },
       colors: {
         "mainColor": "#FE5F5F",
         "secondColor": "#3865A7",
         "blackColor": "#2B2B2B",
         "fonColor": "#F1F2F2",
       },
     },
   },
   plugins: [],
 }