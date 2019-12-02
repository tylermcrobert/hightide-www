/* eslint-disable no-param-reassign */

const path = require('path')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')

require('dotenv').config()

module.exports = withCSS(
  withFonts({
    // For absolute imports
    webpack(config) {
      config.resolve = config.resolve || {}

      config.resolve.modules = [
        path.join('src'),
        path.join(__dirname, 'node_modules'),
        './',
      ]

      return config
    },

    env: {
      INSTAGRAM_ENDPOINT: process.env.INSTAGRAM_ENDPOINT,
      INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
      PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
      PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
      PIPEDRIVE_ENDPOINT: process.env.PIPEDRIVE_ENDPOINT,
      PIPEDRIVE_TOKEN: process.env.PIPEDRIVE_TOKEN,
    },
  })
)
