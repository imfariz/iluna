/* eslint-disable quote-props */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        // eslint-disable-next-line quote-props
        '12': '3.5rem',
      },
      boxShadow: {
        // eslint-disable-next-line quote-props
        'vertical': '5px 15px 40px -15px rgba(0, 0, 0, 0.3)',
      },
      height: {
        '128': '38rem',
      },
    },
    fontFamily: {
      // eslint-disable-next-line quote-props
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
