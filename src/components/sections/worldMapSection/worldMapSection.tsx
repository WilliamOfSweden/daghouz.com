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

export const WorldMapSection = ({ richText }: WorldMapSectionProps) => {
  console.log('-=================', richText)
  return (
    <section className={styles.section}>
      <RichTextContent richText={richText} />
      {/*<h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>*/}
      {/*  */}
      {/*  Collaborated with Companies Across*/}
      {/*  <strong style={{ borderBottom: '4px solid var(--color-primary)' }}>*/}
      {/*    4 Continents*/}
      {/*  </strong>*/}
      {/*</h2>*/}
      <LazyCanvas2D />
    </section>
  )
}

export const WorldMapSectionQuery = graphql`
  fragment WorldMapSection on WorldMapSection {
    richText
  }
`
