import React from 'react'
import { useCart } from 'react-use-cart'

function AddToCart({ name, price }) {
  const { addItem } = useCart()

  const handleClick = () => addItem({ name, price })

  return <button onClick={handleClick}>Add to Cart</button>
}

export default AddToCart
