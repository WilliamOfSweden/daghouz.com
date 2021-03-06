import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import { DefaultSectionData } from '../../../../@types/'
import * as textWrapperStyles from './textWrapper.module.css'
import { Heading } from './heading/'

interface Props {
  sectionContent: DefaultSectionData
}

export const TextWrapper = ({ sectionContent }: Props) => (
  <div className={textWrapperStyles.textWrapper}>
    <Heading title={sectionContent.title} />
    <MDXRenderer>{sectionContent.content.childMdx.body}</MDXRenderer>
    <Link className={textWrapperStyles.link} to='/contact'>
      Contact Me
    </Link>
  </div>
)
