import React from 'react'

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { graphql } from 'gatsby'

import * as homepageTechSectionStyles from './homepageTechSection.module.css'
import {
  RichTextContent,
  SectionContentWrapper,
  WebGLParticles,
} from '@components/organisms/'

export interface HomepageTechSectionProps {
  heading: string
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

export const HomepageTechSection = ({
  heading,
  richText,
}: HomepageTechSectionProps) => (
  <section className={homepageTechSectionStyles.section}>
    <WebGLParticles />
    <SectionContentWrapper>
      <h2>{heading}</h2>
      <RichTextContent richText={richText} />
    </SectionContentWrapper>
  </section>
)

export const HomepageTechSectionQuery = graphql`
  fragment HomepageTechSection on HomepageTechSection {
    heading
    id
    image {
      alt
      gatsbyImageData(layout: FULL_WIDTH)
      id
    }
    richText
  }
`
