import dotenv from 'dotenv'
import { GatsbyConfig } from 'gatsby'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyConfig: GatsbyConfig = {
  partytownProxiedURLs: [`https://static.hotjar.com/c/hotjar-3033272.js?sv=6`],
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          backgroundColor: `transparent`,
          formats: [`auto`, `webp`, `avif`],
          placeholder: `none`,
        },
      },
    },
    'gatsby-transformer-inline-svg',
    `gatsby-transformer-sharp`,
  ],
  siteMetadata: {
    navLinks: [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'Articles',
        to: '/articles',
      },
    ],
    ogDescription: `I create blazingly fast and artfully appealing websites and progressive web apps.`,
    ogImageUrl: `https://daghouz.com/banner.png`,
    ogSeeAlso: 'https://twitter.com/WilliamDaghouz',
    ogType: 'website',
    siteDescription: `Personal website for William Daghouz, Web Developer.`,
    siteTitle: `William Daghouz | Web Developer`,
    siteTitleShort: `William Daghouz`,
    siteUrl: `https://daghouz.com`,
    twitterCard: 'summary_large_image',
    twitterCreator: '@tughuz',
    twitterTitle: 'Web Developer | William Daghouz',
  },
}

export default gatsbyConfig
