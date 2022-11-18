const { fontFamily } = require('tailwindcss/defaultTheme')
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
      fontFamily: {
        parisienne: ['var(--font-parisienne)'],
        satisfy: ['var(--font-satisfy)'],
      },
      colors: {
        'primary': {
          DEFAULT: '#E91716',
          '50': '#F9BEBE',
          '100': '#F7ABAB',
          '200': '#F48686',
          '300': '#F06161',
          '400': '#ED3C3B',
          '500': '#E91716',
          '600': '#B61211',
          '700': '#820D0C',
          '800': '#4F0807',
          '900': '#1C0303'
        },
        'secondary': {
          DEFAULT: '#21DE26',
          '50': '#C1F6C2',
          '100': '#AFF3B1',
          '200': '#8CEE8E',
          '300': '#68E96B',
          '400': '#45E349',
          '500': '#21DE26',
          '600': '#1AAD1E',
          '700': '#127C15',
          '800': '#0B4B0D',
          '900': '#041B05'
        },
        'tertiary': {
          DEFAULT: '#2621DE',
          '50': '#C2C1F6',
          '100': '#B1AFF3',
          '200': '#8E8CEE',
          '300': '#6B68E9',
          '400': '#4945E3',
          '500': '#2621DE',
          '600': '#1E1AAD',
          '700': '#15127C',
          '800': '#0D0B4B',
          '900': '#05041B'
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const utilities = {
        '.bg-crosshatch': {
          backgroundImage:
            'linear-gradient(135deg, var(--stripes-color) 12%, transparent 12%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62%, transparent 62%, transparent 100%), linear-gradient(45deg, var(--stripes-color) 12%, transparent 12%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62%, transparent 62%, transparent 100%)',
          backgroundSize: '40px 40px',
        },
        '.bg-stripes': {
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
            addColor(name, `rgba(${r}, ${g}, ${b}, 0.2)`)
          }
        } catch (_) {
          addColor(name, colors[name])
        }
      }

      addUtilities(utilities)
    },
  ],
};
