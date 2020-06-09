import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shell"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact Page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
