import React from 'react'
import { Link } from 'gatsby'
import { useCart } from 'gatsby-theme-cart'

export default function Header() {
  const { totalItems, totalUniqueItems } = useCart()

  return (
    <header className="container mx-auto p-6">
      <ul>
        <li>
          <Link to="/">All Products</Link>
          <Link to="/cart">
            Cart ({totalItems} - {totalUniqueItems} unique items)
          </Link>
        </li>
      </ul>
    </header>
  )
}
