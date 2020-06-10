import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import SEO from '../components/seo'
import Banner from '../components/Banner'


const contact = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero home img={props.data.contactBcg.childImageSharp.fluid} >
      <Banner
        title="Contact us"
        info="Hil this is just a placeholder"
      />
      </StyledHero>

    </Layout>
  )
}

export default contact


export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contact2Bcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
