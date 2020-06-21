import React from 'react'
import { useCart } from 'react-use-cart'

import CartItemList from './cart-item-list'

function Cart() {
  const { isEmpty } = useCart()

  if (isEmpty) return <p>Your cart is empty</p>

  return <CartItemList />
}

export default Cart
