import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import * as textWrapperStyles from './textWrapper.module.css'

interface Props {
  data: {
    body: {
      childMdx: {
        body: string
      }
    }
    title: string
  }
}

const TextWrapper = ({ data: { body, title } }: Props) => (
  <div className={textWrapperStyles.textWrapper}>
    <h2>{title}</h2>
    <MDXRenderer>{body.childMdx.body}</MDXRenderer>
    <Link className={textWrapperStyles.link} to='/projects'>
      Projects
    </Link>
  </div>
)

export default TextWrapper
