import React, { useReducer } from 'react'

import { CartContext } from '../context/CartContext'

function reducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

const initialState = {
  items: [],
  count: 0,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isEmpty = state.count === 0

  return (
    <CartContext.Provider
      value={{
        ...state,
        isEmpty,
        sayHello: () =>
          dispatch({ type: 'SAY_HELLO', payload: { hello: 'world' } }),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
