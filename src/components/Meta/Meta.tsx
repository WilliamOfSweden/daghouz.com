import React, { Fragment } from 'react'

import { useStaticQuery, graphql } from 'gatsby'

interface SeoContent {
  site: {
    siteMetadata: {
      ogDescription: string
      ogImageUrl: string
      ogSeeAlso: string
      ogType: string
      siteDescription: string
      siteTitle: string
      siteTitleShort: string
      siteUrl: string
      twitterCard: string
      twitterCreator: string
      twitterTitle: string
    }
  }
}

interface Props {
  description: string | null | undefined
  title: string | null | undefined
}

export const Meta = ({ description, title }: Props) => {
  const data = useStaticQuery<SeoContent>(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          ogDescription
          ogImageUrl
          ogSeeAlso
          ogType
          siteDescription
          siteTitle
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
    ogSeeAlso,
    ogType,
    siteDescription,
    siteTitle,
    siteUrl,
    twitterCard,
    twitterCreator,
    twitterTitle,
  } = data.site.siteMetadata

  return (
    <Fragment>
      <meta content={description ?? siteDescription} name='description' />
      <meta content={ogDescription} name='twitter:description' />
      <meta content={ogDescription} property='og:description' />
      <meta content={ogImageUrl} property='og:image' />
      <meta content={ogImageUrl} property='twitter:image' />
      <meta content={ogSeeAlso} property='og:see_also' />
      <meta content={ogType} property='og:type' />
      <meta content={siteTitle} property='og:title' />
      <meta content={siteUrl} name='twitter:url' />
      <meta content={siteUrl} property='og:url' />
      <meta content={twitterCard} name='twitter:card' />
      <meta content={twitterCreator} name='twitter:creator' />
      <meta content={twitterTitle} name='twitter:title' />
      <title>{title ?? siteTitle}</title>
    </Fragment>
  )
}
