module.exports = {
  plugins: [
    'gatsby-theme-cart',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    },
    'gatsby-plugin-postcss',
  ],
}
