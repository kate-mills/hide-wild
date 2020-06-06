module.exports = {
  siteMetadata: {
    title: `Hide + Wild`,
    description: `Custom jewelry designs by Hilary Molloy`,
    author: `Kate Mills`,
  },
  plugins: [
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
        background_color: `#74B652`,
        theme_color: `#74B652`,
        display: `minimal-ui`,
        icon: `static/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
