module.exports = {
  siteMetadata: {
    siteUrl: `https://www.festvisor.se`,
    title: `Festvisor och musikfrågesport  för alla tillfällen.`,
    description: `Liv upp festen med härliga festvisor och musikfrågesport!`,
    author: `@gatsbyjs`,
  },
  pathPrefix: "/",
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/festvisor-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
