import React from 'react'

import { graphql } from 'gatsby'

import * as styles from './partnersSection.module.css'

export interface PartnersSectionProps {
  heading: string
  logos: {
    alt: string
    id: string
    svg: { content: string }
  }[]
}

export const PartnersSection = ({ heading, logos }: PartnersSectionProps) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{heading}</h2>
    {logos.map(l => (
      <figure
        key={l.id}
        className={styles.figure}
        dangerouslySetInnerHTML={{ __html: l.svg.content }}
      />
    ))}
  </section>
)

export const PartnersSectionQuery = graphql`
  fragment PartnersSection on PartnersSection {
    heading
    id
    logos {
      alt
      gatsbyImageData
      id
      url
      ... on ContentfulAsset {
        id
        svg {
          absolutePath
          content
          dataURI
          originalContent
          relativePath
        }
      }
    }
  }
`
