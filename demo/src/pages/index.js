import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useCart } from 'gatsby-theme-cart'

export default function IndexPage() {
  const { products } = useStaticQuery(graphql`
    {
      products: allProductsYaml {
        nodes {
          id
          name
        }
      }
    }
  `)

  const { addItem } = useCart()

  return (
    <>
      <h1>Products</h1>

      {products.nodes.map(product => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <button onClick={() => addItem(product, 1)}>Add to Cart</button>
        </div>
      ))}
    </>
  )
}
