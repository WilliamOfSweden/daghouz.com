import React from 'react'

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { graphql } from 'gatsby'

import { LazyCanvas2D, RichTextContent } from '@components/organisms/'
import * as styles from './worldMapSection.module.css'

export interface WorldMapSectionProps {
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

export const WorldMapSection = ({ richText }: WorldMapSectionProps) => (
  <section className={styles.section}>
    <RichTextContent richText={richText} />
    <LazyCanvas2D />
  </section>
)

export const WorldMapSectionQuery = graphql`
  fragment WorldMapSection on WorldMapSection {
    richText
  }
`
