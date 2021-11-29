// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      green: {
        default: '#24F5CB',
        dark: '#00B98F',
        tint: '#75FFE3',
      },
      yellow: {
        default: '#FFD771',
        dark: '#CDA53F',
        tint: '#FFFFA3',
      },
      red: {
        default: '#FF8481',
        dark: '#D75C59',
        tint: '#FFACA9',
      },
      gray: {
        100: '#343938',
        200: '#3E4342',
        300: '#525756',
        400: '#666B6A',
        500: '#7A7F7E',
        600: '#8E9392',
        700: '#ACB1B0',
        800: '#CACFCE',
        900: '#E8EDEC'
      },
      dark: {
        default: '#0B0917',
        100: '#151321',
        200: '#1F1D2B',
        300: '#242136',
        400: '#2E2B40',
        500: '#38354A',
        600: '#4C495E',
        700: '#605D72',
        800: '#7E7B90',
        900: '#A6A3B8'
      }
    },
    fontSize: {
      titleL: '1.375rem',
      titleM: '1.25rem',
      titleS: '1.125rem',
      bodyL: '1rem',
      bodyM: '0.875rem',
      bodyS: '0.75rem',
      small: '0.625rem',
    },
    fontFamily: {
      logo: ['"Baloo 2"', 'cursive'],
    }
  }
})
