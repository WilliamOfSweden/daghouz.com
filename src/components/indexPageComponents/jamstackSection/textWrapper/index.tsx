import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import { DefaultSectionData } from '../../../../@types/'
import * as textWrapperStyles from './textWrapper.module.css'

interface Props {
  sectionContent: DefaultSectionData
}

export const TextWrapper = ({ sectionContent: { content, title } }: Props) => (
  <div className={textWrapperStyles.textWrapper}>
    <h2>{title}</h2>
    <MDXRenderer>{content.childMdx.body}</MDXRenderer>
    <Link className={textWrapperStyles.link} to='/projects'>
      Projects
    </Link>
  </div>
)
