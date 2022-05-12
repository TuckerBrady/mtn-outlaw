module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {  
          DEFAULT: '#556151',  
          '50': '#FFFFFF',  
          '100': '#FCFCFC',  
          '200': '#E7EAE6',  
          '300': '#D1D7CF',  
          '400': '#BCC5B9',  
          '500': '#A7B2A3',  
          '600': '#91A08D',  
          '700': '#7C8D77',  
          '800': '#687764',  
          '900': '#556151'
        },
          secondary: {  
            DEFAULT: '#919494',  
            '50': '#FFFFFF',  
            '100': '#FFFFFF',  
            '200': '#FFFFFF',  
            '300': '#FFFFFF',  
            '400': '#F8F9F9',  
            '500': '#E4E4E4',  
            '600': '#CFD0D0',  
            '700': '#BABCBC',  
            '800': '#A6A8A8',  
            '900': '#919494'
          },
      }
    },
  },
  plugins: [],
}
