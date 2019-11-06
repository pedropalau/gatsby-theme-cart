import React from 'react'

import { CartProvider } from 'react-use-cart'

const random = () =>
  Math.random()
    .toString(36)
    .substring(7)

export const wrapRootElement = ({ element }) => (
  <CartProvider id={random()}>{element}</CartProvider>
)
