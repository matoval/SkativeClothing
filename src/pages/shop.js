import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { colors } from '@material-ui/core';

const pageQuery = graphql`
  {
    products: allChecProduct {
      nodes {
        name
        assets {
          url
        }
        permalink
        price {
          formatted_with_symbol
        }
      }
    }
  }
`;

const ShopPage = () => {
  const { merchant, products } = useStaticQuery(pageQuery)

  return (
    <Layout>
      <SEO title="Shop" />
        <React.Fragment>
        <ul
          style={{
            display: `grid`,
            paddingTop: `10px`
          }}
        >
            {products.nodes.map(product => (
              <li
                key={product.permalink}
                style={{
                  height: `300px`,
                  width: `300px`,
                  display: `block`,
                  textAlign: `center`
                }}
              >
                <Link
                  to={`/products/${product.permalink}`}
                  className="product-card"
                  style={{
                    textDecoration: `none`
                  }}
                >
                  <img
                    src={product.assets[0].url}
                    style={{
                      height: `200px`,
                      width: `auto`,
                      borderRadius: `10px`,
                      margin: `0`
                    }} /><br />
                  <span
                    style={{
                      fontWeight: `bold`,
                      color: `var(--dark-font)`
                    }}
                  >{product.name}</span> <br />
                  <span
                    style={{
                      color: `var(--dark-font)`
                    }}
                  >{product.price.formatted_with_symbol}</span>
                </Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
    </Layout>
  )
}

export default ShopPage