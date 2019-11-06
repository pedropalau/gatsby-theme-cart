import React from 'react'
import { useCart } from 'react-use-cart'

import CartItem from './CartItem'

function Cart() {
  const { items } = useCart()

  return <div>{items.map(CartItem)}</div>
}

export default Cart
