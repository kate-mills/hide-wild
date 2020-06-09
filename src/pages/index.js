import React from "react"
import Img  from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: {eq: "transparent-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
