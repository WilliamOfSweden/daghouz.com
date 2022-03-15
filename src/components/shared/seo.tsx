import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

interface Props {
  description?: string
  title?: string
}

export const SEO = ({ description, title }: Props) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          ogDescription
          ogImageUrl
          ogType
          siteDescription
          siteTitle
          siteTitleShort
          siteUrl
          twitterCard
          twitterCreator
          twitterTitle
        }
      }
    }
  `)

  const {
    ogDescription,
    ogImageUrl,
    ogType,
    siteDescription,
    siteTitle,
    siteTitleShort,
    siteUrl,
    twitterCard,
    twitterCreator,
    twitterTitle,
  } = data.site.siteMetadata

  return (
    <Helmet>
      <html lang='en-GB' />
      <meta charSet='UTF-8' />
      <meta
        name='description'
        content={description ? description : siteDescription}
      />
      <title>{title ? `${title} | ${siteTitleShort}` : siteTitle}</title>
      <meta property='og:url' content={siteUrl} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImageUrl} />
      <meta property='og:url' content={siteUrl} />
      <meta
        property='og:see_also'
        content='https://twitter.com/WilliamDaghouz'
      />
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:creator' content={twitterCreator} />
      <meta name='twitter:title' content={twitterTitle} />
      <meta name='twitter:description' content={ogDescription} />
      <meta name='twitter:url' content={siteUrl} />
      <meta property='twitter:image' content={ogImageUrl} />
    </Helmet>
  )
}
