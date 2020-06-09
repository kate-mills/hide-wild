import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const JewelryPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Jewelry Page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JewelryPage
