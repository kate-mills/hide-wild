import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import SEO from '../components/seo'
import Banner from '../components/Banner'


const JewelryPage  = props => {
  return (
    <Layout>
      <SEO title="Jewelry" />
      <StyledHero home img={props.data.img.childImageSharp.fluid} >
      <Banner
        title="Shop Jewelry"
        info="Hil this is where we could have your store, but TOTally can change ANYTHING!!"
      />
    </StyledHero>


    </Layout>
  )
}

export default JewelryPage

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
