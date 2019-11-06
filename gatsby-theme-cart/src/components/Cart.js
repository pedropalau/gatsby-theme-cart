import React from 'react'
import { useCart } from 'react-use-cart'

import CartItemList from './CartItemList'

function Cart() {
  const { isEmpty } = useCart()

  if (isEmpty) return <p>Your cart is empty</p>

  return <CartItemList />
}

export default Cart

/* <button onClick={() => addItem({ name: 'test item' })}>Add item</button> */
