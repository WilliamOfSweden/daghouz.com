import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../../@types/'
import * as textWrapperStyles from './textWrapper.module.css'
import Heading from './heading/'
import ContactButton from '../contactButton/'

interface MastheadData extends DefaultSectionData {
  coloredTitle: string
}

interface Props {
  sectionContent: MastheadData
}

const TextWrapper = ({ sectionContent }: Props) => (
  <div className={textWrapperStyles.textWrapper}>
    <Heading
      coloredTitle={sectionContent.coloredTitle}
      title={sectionContent.title}
    />
    <MDXRenderer>{sectionContent.content.childMdx.body}</MDXRenderer>
    <ContactButton limitedVisibility='desktop-only' />
  </div>
)

export default TextWrapper
