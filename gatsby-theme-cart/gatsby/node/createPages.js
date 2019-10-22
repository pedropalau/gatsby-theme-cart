const createPages = async ({ actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { enableCartPage = true } = themeOptions

  if (enableCartPage) {
    reporter.info(`[gatsby-theme-cart] creating cart page`)

    createPage({
      path: `/cart`,
      component: require.resolve(`../../src/templates/CartPage.js`),
    })
  }
}

module.exports = createPages
