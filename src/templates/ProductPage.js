import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function ProductPage({ data: { product } }) {
  const cleanDescription = product.description.replace(/(<([^>]+)>)/ig, '')
  return (
    <Layout>
      <div
        className="product-page"
      >
        <img
          src={product.assets[0].url}
          style={{
            height: `500px`
          }}
        />
        <h1>{product.name}</h1>
        <h4>{product.price.formatted_with_symbol}</h4>
        <p>{cleanDescription}</p>
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
      assets {
        url
      }
      description
    }
  }
`
