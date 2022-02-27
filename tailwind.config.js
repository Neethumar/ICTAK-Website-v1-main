module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 4s ease-in-out',
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.black') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
      },
    }),
  },
},
  variants: {},
  plugins: [],
}