module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    fontFamily: {
      'dancing': ['Dancing Script', 'cursive'],
      'barlow': ['Barlow Condensed', 'sans-serif'],
      'fraunces': ['Fraunces', 'serif']
    },

    extend: {
      transitionProperty: {
        left : 'left',
      },
        keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
    },
  
  plugins: [ ],
}