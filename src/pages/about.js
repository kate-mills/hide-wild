import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import SEO from '../components/seo'
import Banner from '../components/Banner'


const AboutPage  = props => {
  return (
    <Layout>
      <SEO title="About" />
      <StyledHero home img={props.data.img.childImageSharp.fluid} >
      <Banner
        title="About Hilary"
        info="Hil this is just a placeholder"
      />
    </StyledHero>


    </Layout>
  )
}

export default AboutPage


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
