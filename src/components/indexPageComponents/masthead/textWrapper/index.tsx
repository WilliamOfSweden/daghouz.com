import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import { IndexPageMastheadData } from '../../../../@types/'
import * as textWrapperStyles from './textWrapper.module.css'
import Heading from './heading/'

interface Props {
  sectionContent: IndexPageMastheadData
}

const TextWrapper = ({ sectionContent }: Props) => (
  <div className={textWrapperStyles.textWrapper}>
    <Heading
      coloredTitle={sectionContent.coloredTitle}
      title={sectionContent.title}
    />
    <MDXRenderer>{sectionContent.content.childMdx.body}</MDXRenderer>
    <Link className={textWrapperStyles.link} to='/contact'>
      Contact Me
    </Link>
  </div>
)

export default TextWrapper
