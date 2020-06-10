import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import StyledHero from '../components/StyledHero'
import SEO from '../components/seo'
import Banner from '../components/Banner'

const Index = props => {
  return (
    <Layout>
      <SEO title="Hide + Wild" />
      <StyledHero home img={props.data.img.childImageSharp.fluid} >
      <Banner 
        title="Designs  by Hilary Molloy" 
        info="Hil, we can have a little info here, with shopping options below."
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

export const query = graphql`
  query {
    img: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

