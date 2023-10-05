import dotenv from 'dotenv'
import { GatsbyConfig } from 'gatsby'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyConfig: GatsbyConfig = {
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
  },
}

export default gatsbyConfig
