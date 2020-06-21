exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type PluginOptions {
      enableCartPage: Boolean
    }

    type SitePlugin implements Node {
      pluginOptions: PluginOptions
    }
  `

  createTypes(typeDefs)
}

exports.createPages = async ({ actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { enableCartPage = true } = themeOptions

  if (enableCartPage) {
    reporter.info(`[gatsby-theme-cart] creating cart page`)

    createPage({
      path: `/cart`,
      component: require.resolve(`./src/cart-page.js`),
    })
  }
}
