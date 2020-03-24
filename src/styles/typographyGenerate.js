const fs = require('fs');
const Typography = require('typography');

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Roboto'],
  bodyFontFamily: ['Roboto'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '400',
      ],
    }
  ],
})

fs.writeFileSync("typography.css", typography.toString());