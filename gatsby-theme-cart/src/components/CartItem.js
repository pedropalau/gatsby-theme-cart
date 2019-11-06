import React from 'react'
import { useCart } from 'react-use-cart'

function Cart({ id, name, description, quantity }) {
  const { updateItemQuantity, removeItem } = useCart()

  const increment = () => updateItemQuantity(id, quantity + 1)
  const decrement = () => updateItemQuantity(id, quantity - 1)
  const remove = () => removeItem(id)

  return (
    <div key={id}>
      <strong>
        {name} x{quantity}
      </strong>

      <p>{description}</p>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>

      <button onClick={remove}>&times; Remove item</button>
    </div>
  )
}

export default Cart
