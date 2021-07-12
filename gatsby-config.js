module.exports = {
    siteMetadata: {
        ogDescription: `I create blazingly fast and artfully appealing websites and progressive web apps.`,
        ogImageUrl: `https://daghouz.com/banner.png`,
        ogType: 'website',
        siteDescription: `Personal website for William Daghouz, JAMstack Developer.`,
        siteTitle: `William Daghouz | JAMstack Developer`,
        siteUrl: `https://daghouz.com`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
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
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: `${__dirname}/content/`,
            },
        },
        `gatsby-plugin-mdx`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
}
  