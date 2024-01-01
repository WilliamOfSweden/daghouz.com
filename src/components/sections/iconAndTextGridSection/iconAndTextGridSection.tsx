import React from 'react'

import { graphql } from 'gatsby'

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

import * as styles from './iconAndTextGridSection.module.css'
import { HeadingWithIcon, HeadingWithIconProps } from '@components/molecules/'
import { RichTextContent } from '@components/organisms/'

interface Content extends HeadingWithIconProps {
  id: string
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

export interface IconAndTextGridSectionProps {
  content: Content[]
}

export const IconAndTextGridSection = ({
  content,
}: IconAndTextGridSectionProps) => (
  <section className={styles.section}>
    <ul>
      {content.map(({ heading, id, image, richText }) => (
        <li key={id}>
          <HeadingWithIcon heading={heading} image={image} />
          <RichTextContent richText={richText} />
        </li>
      ))}
    </ul>
  </section>
)

export const IconAndTextGridSectionQuery = graphql`
  fragment IconAndTextGridSection on IconAndTextGridSection {
    content {
      heading
      id
      image {
        alt
        gatsbyImageData
        id
        url
        ... on ContentfulAsset {
          id
          svg {
            content
            originalContent
            dataURI
            absolutePath
            relativePath
          }
        }
      }
      richText
    }
    id
  }
`
