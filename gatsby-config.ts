import { GatsbyConfig } from 'gatsby'
import path from 'path'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    ogDescription: `I create blazingly fast and artfully appealing websites and progressive web apps.`,
    ogImageUrl: `https://daghouz.com/banner.png`,
    ogType: 'website',
    siteDescription: `Personal website for William Daghouz, Jamstack Developer.`,
    siteTitle: `William Daghouz | Front-end Developer`,
    siteTitleShort: `William Daghouz`,
    siteUrl: `https://daghouz.com`,
    twitterCard: 'summary_large_image',
    twitterCreator: '@WilliamDaghouz',
    twitterTitle: 'Web Developer | William Daghouz',
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
  partytownProxiedURLs: [`https://static.hotjar.com/c/hotjar-3033272.js?sv=6`],
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images/`),
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

export default gatsbyConfig
