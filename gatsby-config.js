const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `SkativeClothing.Com`,
    description: `Skate clothes designed by skaters for skaters.`,
    author: `SkativeClothing.Com`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SK8-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@chec/gatsby-source-chec',
        options: {
          publicKey: 'pk_185339f64b5221d9e5c4384ec0594b3f4e9810da060f5'
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'checProduct',
        name: 'allItemImages',
        imagePath: 'nodes[].media.source',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
