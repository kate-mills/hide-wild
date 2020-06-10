module.exports = {
  siteMetadata: {
    title: `Hide + Wild`,
    description: `Custom jewelry designs by Hilary Molloy, located in the Napa Valley`,
    author: `Kate Mills`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rock Salt`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Noto Sans`,
            variants: [`400`, `700`]
          },
          {
            family: `Antic Slab`,
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hide + Wild`,
        short_name: `hide+wild`,
        start_url: `/`,
        background_color: `#d5b891`, //customCream
        theme_color: `#877a6d`,  //customTaupe
        display: `minimal-ui`,
        icon: `static/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
