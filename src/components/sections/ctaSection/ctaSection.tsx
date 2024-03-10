import React from 'react'

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { graphql } from 'gatsby'

import * as ctaBannerSectionStyles from './ctaSection.module.css'
import { BlurredCircle } from '@components/atoms/'
import { RichTextContent, SubscriptionForm } from '@components/organisms/'

export interface CtaBannerSectionProps {
  heading: string
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
  submitFormContent: {
    submitButtonText: string | undefined
    emailInputLabelAriaLabel: string | undefined
  }
  emailInputLabelAriaLabel: string | undefined
}

export const CtaSection = ({
  emailInputLabelAriaLabel,
  heading,
  richText,
  submitFormContent,
}: CtaBannerSectionProps) => (
  <section className={ctaBannerSectionStyles.section}>
    <h2 className={ctaBannerSectionStyles.heading}>{heading}</h2>
    <RichTextContent richText={richText} />
    <SubscriptionForm
      buttonText={submitFormContent.submitButtonText}
      emailInputLabelAriaLabel={emailInputLabelAriaLabel}
    />
    <BlurredCircle height='100%' />
  </section>
)

export const ctaSectionQuery = graphql`
  fragment CtaSection on CtaSection {
    submitFormContent: content {
      buttonAriaLabel
      emailInputLabelAriaLabel
      submitButtonText
    }
    heading
    richText
  }
`
