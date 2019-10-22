import React, { useContext } from 'react'

import { CartContext } from '../context/CartContext'

function Cart() {
  const { isEmpty, items } = useContext(CartContext)

  return (
    <div>
      <h1>Cart</h1>

      {isEmpty && <p>Your cart is empty</p>}

      {items.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </div>
  )
}

export default Cart
