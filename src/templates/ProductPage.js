import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function ProductPage({ data: { product } }) {
  const cleanDescription = product.description.replace(/(<([^>]+)>)/ig, '')
  const [count, setCount ] = useState('loading...')
  
  function handleClick() {
    setCount('Add to Cart')
  }
  return (
    <Layout>
      <SEO title={product.name} />
      <div
        className="product-page"
      >
        <div className="product-img">
          <img
            src={product.media.source}
          />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <h4>{product.price.formatted_with_symbol}</h4>
          <p>{cleanDescription}</p>
          <button onClick={handleClick} >{count}</button>
        </div>
      </div>
  </Layout>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    product: checProduct(id: { eq: $id }) {
      id
      name
      price {
        formatted_with_symbol
      }
      media {
        source
      }
      description
    }
  }
`
