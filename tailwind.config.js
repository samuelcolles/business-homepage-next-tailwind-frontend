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
          DEFAULT: '#DC2331',
          '50': '#F5C1C5',
          '100': '#F2B0B5',
          '200': '#ED8D94',
          '300': '#E76973',
          '400': '#E24652',
          '500': '#DC2331',
          '600': '#AC1B26',
          '700': '#7B141B',
          '800': '#4B0C11',
          '900': '#1A0406'
        },
        'secondary': {
          DEFAULT: '#8DDC23',
          '50': '#DFF5C1',
          '100': '#D6F2B0',
          '200': '#C4ED8D',
          '300': '#B1E769',
          '400': '#9FE246',
          '500': '#8DDC23',
          '600': '#6EAC1B',
          '700': '#4F7B14',
          '800': '#304B0C',
          '900': '#111A04'
        },
        'tertiary': {
          DEFAULT: '#23DCCE',
          '50': '#C1F5F1',
          '100': '#B0F2ED',
          '200': '#8DEDE6',
          '300': '#69E7DE',
          '400': '#46E2D6',
          '500': '#23DCCE',
          '600': '#1BACA1',
          '700': '#147B73',
          '800': '#0C4B46',
          '900': '#041A19'
        },
        'quaternary': {
          DEFAULT: '#7223DC',
          '50': '#D8C1F5',
          '100': '#CCB0F2',
          '200': '#B68DED',
          '300': '#9F69E7',
          '400': '#8946E2',
          '500': '#7223DC',
          '600': '#591BAC',
          '700': '#40147B',
          '800': '#270C4B',
          '900': '#0E041A'
        }
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
