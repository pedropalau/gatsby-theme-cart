# gatsby-theme-cart

- Shopping cart logic for Gatsby 🛒
- Minimal configuration! 🛠
- Built on [Gatsby](https://www.gatsbyjs.org/docs/themes) 🚀
- Made by [Jamie Barton](https://twitter.com/notrab) 👋
- It's free! 💰

This Gatsby Theme uses [react-use-cart](https://github.com/notrab/react-use-cart) under the hood.

## Install

```bash
yarn add gatsby-theme-cart
```

```js
// In your gatsby-config.js

plugins: [
  {
    resolve: `gatsby-theme-cart`,
    options: {
      // ...
    },
  },
]
```

### Options

| Option           | Default | Required | Description                                                                       |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------- |
| `enableCartPage` | `true`  | No       | Useful if you wish to use the exported `Cart />` component in your existing page. |
