import React from "react"
import {graphql, Link} from 'gatsby'
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
        info="Hil, we can write something or nothing, maybe a little informational text here."
      >
        <Link 
          to="/jewelry"
          className="btn-white">
          shop jewelry
        </Link>
      </Banner>
      </SimpleHero>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: {eq: "defaultBcg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
