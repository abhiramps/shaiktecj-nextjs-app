module.exports = {
  content: [], content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  // prefix: 'tw-',
  important: true,
  theme: {
    container: {
      padding: '1rem'
    },
    screens: {
      sm: '480px',
      sm_l: '600px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        dark1: '#21201E',
        orange: '#ED9902'
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['rubik', 'sans-serif'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}
