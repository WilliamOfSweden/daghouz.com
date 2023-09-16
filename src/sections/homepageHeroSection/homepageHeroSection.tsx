import React from 'react'

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { graphql } from 'gatsby'

import {
  Button,
  Heading1,
  TwistedSphereStaticImage,
} from '../../components/atoms/'
import {
  RichTextContent,
  WebGlTwistedSphere,
} from '../../components/molecules/'
import { LazyCanvas } from '../../components/organisms/'
import * as styles from './homepageHeroSection.module.css'

export interface HomepageHeroSectionProps {
  buttonText: string | null
  heading: string | null
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference> | null
}

export const HomepageHeroSection = ({
  buttonText,
  heading,
  richText,
}: HomepageHeroSectionProps) => (
  <section className={styles.section}>
    <TwistedSphereStaticImage />
    <Heading1 headingText={heading} />
    <RichTextContent richText={richText} />
    <Button buttonText={buttonText} />
    <LazyCanvas>
      <WebGlTwistedSphere />
    </LazyCanvas>
  </section>
)

export const HomepageHeroSectionQuery = graphql`
  fragment HomepageHeroSection on HomepageHeroSection {
    buttonText
    heading
    richText
  }
`
