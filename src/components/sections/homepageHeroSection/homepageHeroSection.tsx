import React from 'react'

import { graphql } from 'gatsby'

import { Button, Heading1 } from '../../atoms'
import { RichTextContent, WebGlTwistedSphere } from '../../molecules'
import { LazyCanvas } from '../../organisms'
import * as styles from './homepageHeroSection.module.css'

export interface HomepageHeroSectionProps {
  buttonText: string
  heading: string
  richText: Record<string, null>
}

export const HomepageHeroSection = ({
  buttonText,
  heading,
  richText,
}: HomepageHeroSectionProps) => (
  <section className={styles.section}>
    <LazyCanvas>
      <WebGlTwistedSphere />
    </LazyCanvas>
    <Heading1 headingText={heading} />
    <RichTextContent richText={richText} />
    <Button buttonText={buttonText} />
  </section>
)

export const HomepageHeroSectionQuery = graphql`
  fragment HomepageHeroSection on HomepageHeroSection {
    buttonText
    heading
    richText
  }
`
