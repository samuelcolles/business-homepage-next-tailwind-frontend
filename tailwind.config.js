/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const toRgba = (hexCode, opacity = 50) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

const flattenColorPalette = (obj, sep = '-') => Object.assign(
  {},
  ...function _flatten(o, p = '') {
    return [].concat(...Object.keys(o)
      .map(k =>
        typeof o[k] === 'object' ?
          _flatten(o[k], k + sep) :
          ({ [p + k]: o[k] })
      )
    );
  }(obj)
);

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#C62A34',
          '50': '#F0B8BB',
          '100': '#ECA7AB',
          '200': '#E5858B',
          '300': '#DE646B',
          '400': '#D7424B',
          '500': '#C62A34',
          '600': '#982028',
          '700': '#69161C',
          '800': '#3B0D10',
          '900': '#0D0303'
        },
        'secondary': {
          DEFAULT: '#34C62A',
          '50': '#BBF0B8',
          '100': '#ABECA7',
          '200': '#8BE585',
          '300': '#6BDE64',
          '400': '#4BD742',
          '500': '#34C62A',
          '600': '#289820',
          '700': '#1C6916',
          '800': '#103B0D',
          '900': '#030D03'
        },
        'tertiary': {
          DEFAULT: '#2A34C6',
          '50': '#B8BBF0',
          '100': '#A7ABEC',
          '200': '#858BE5',
          '300': '#646BDE',
          '400': '#424BD7',
          '500': '#2A34C6',
          '600': '#202898',
          '700': '#161C69',
          '800': '#0D103B',
          '900': '#03030D'
        },
      }


    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const utilities = {
        '.bg-stripes': {
          backgroundImage:
            'linear-gradient(45deg, var(--stripes-color) 12%, transparent 12%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62%, transparent 62%, transparent 100%)',
          backgroundSize: '40px 40px',
        },
        '.bg-stripes-reverse': {
          backgroundImage:
            'linear-gradient(135deg, var(--stripes-color) 12%, transparent 12%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62%, transparent 62%, transparent 100%)',
          backgroundSize: '40px 40px',
        }
      }

      const addColor = (name, color) =>
        (utilities[`.bg-stripes-${name}`] = { '--stripes-color': color })

      const colors = flattenColorPalette(theme('backgroundColor'))
      for (let name in colors) {
        try {
          const [r, g, b, a] = toRgba(colors[name])
          if (a !== undefined) {
            addColor(name, colors[name])
          } else {
            addColor(name, `rgba(${r}, ${g}, ${b}, 0.4)`)
          }
        } catch (_) {
          addColor(name, colors[name])
        }
      }

      addUtilities(utilities)
    },
  ],
};
