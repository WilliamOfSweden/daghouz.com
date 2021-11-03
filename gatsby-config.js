require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    ogDescription: `I create blazingly fast and artfully appealing websites and progressive web apps.`,
    ogImageUrl: `https://daghouz.com/banner.png`,
    ogType: 'website',
    siteDescription: `Personal website for William Daghouz, JAMstack Developer.`,
    siteTitle: `William Daghouz | Full Stack Web Developer`,
    siteUrl: `https://daghouz.com`,
    navLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GCMS_ENDPOINT,
        buildMarkdownNodes: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
