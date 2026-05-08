// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts,css,scss}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Inter', 'sans-serif'],
        heading: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        ayur: {
          primary: '#d89a7a',
          white: '#ffffff',
          banheading: '#2b2b2b',
          para: '#6f665e',
          text: '#6f665e',
          border: '#e7dfd3',
          formtext: '#dbd1d9',
          footerbg: '#2f3e2c',
          footertext: 'rgba(255, 255, 255, 0.82)',
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
