module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@themesberg/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'd-blue': '#1e6dd0',
        'd-lBlue': '#a4e4db',
        'd-Black': '#0a2229',
        'd-ltBg': '#fff8f3',
        'd-beige': '#f4dfd0',
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
        nexa: ['nexa_demo_light'],
        ambit_bold: ['ambit_semi_bold'],
        ambit_italic: ['ambit_semi_bold_italic'],
      },
      fontSize: {
        15: '15px',
        16: '16px',
        17: '17px',
        20: '20px',
        22: '22px',
        24: '24px',
        25: '25px',
        26: '26px',
        38: '38px', 
        40: '40px',
        48: '48px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
