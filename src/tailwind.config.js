// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts,css,scss}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        ayur: {
          primary: '#cd8973',
          white: '#ffffff',
          banheading: '#222222',
          para: '#797979',
          text: '#ababab',
          border: '#ffebe4',
          formtext: '#dbd1d9',
          footerbg: '#220f08',
          footertext: '#e4d4cf',
        },
      },
      boxShadow: {
        ayur: '3px 4px 29.6px 0px #0000000f',
      },
      borderRadius: {
        ayur: '70px',
      },
      animation: {
        jump: 'jumpThree 5s infinite linear',
      },
      keyframes: {
        jumpThree: {
          '0%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
