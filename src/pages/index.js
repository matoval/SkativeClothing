import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Commerce from '@chec/commerce.js'

//create context for products to check if active to set add to cart button correctly.
const commerce = new Commerce('pk_185339f64b5221d9e5c4384ec0594b3f4e9810da060f5', true)
commerce.products.list().then((result) => {
  console.log(result.data)
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" /> 
    <div
      className="hero"
    >
    </div>
  </Layout>
)

export default IndexPage
