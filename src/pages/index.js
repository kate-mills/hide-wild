import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import StyledHero from "../components/StyledHero"
import Banner from '../components/Banner'

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero home imgage="defaultBcg.jpg">
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
      </StyledHero>
    </Layout>
  )
}

export default Index
