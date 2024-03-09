import React from 'react'

import { graphql } from 'gatsby'

import { ContactForm, Dialog, LazyCanvas } from '@components/organisms/'
import { Heading1 } from '@components/atoms/'
import { RichTextContent, WebGlTwistedSphere } from '@components/molecules/'
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
    <Dialog dialogTitle={buttonText} triggerButtonText={buttonText}>
      <ContactForm />
    </Dialog>
  </section>
)

export const HomepageHeroSectionQuery = graphql`
  fragment HomepageHeroSection on HomepageHeroSection {
    buttonText
    heading
    richText
  }
`
