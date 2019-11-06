const createSchemaCustomization = ({ actions }) => {
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

module.exports = createSchemaCustomization
