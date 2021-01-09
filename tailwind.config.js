// const tailwindcss = require('tailwindcss')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      minHeight: (theme) => theme('spacing'),
    },
  },
  variants: {},
  plugins: [],
}
