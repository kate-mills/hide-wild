import React from "react"
import {graphql} from 'gatsby'
import Img  from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <SimpleHero>
      <Banner 
        title="Designs  by Hilary Molloy" 
        info="Hil, lets put some informational text here."
      />
      </SimpleHero>
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
