import React from 'react'

import CartProvider from './src/components/CartProvider'

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)
