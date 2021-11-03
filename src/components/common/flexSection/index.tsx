import React, { ReactNode } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { SectionData } from '../../../typescript'
import {
  StyledGatsbyLink,
  StyledFlexSection,
} from '../../layout/styledComponents/'

interface Props {
  children: ReactNode
  content: SectionData
  notFound?: boolean
}

const FlexSection = ({ children, content, notFound }: Props) => (
  <StyledFlexSection notFound={notFound} className='container'>
    <div>
      <MDXRenderer>{content.markdownNode.childMdx.body}</MDXRenderer>
      <StyledGatsbyLink className='desktop-only' to='/contact'>
        Contact Me
      </StyledGatsbyLink>
    </div>
    <div>{children}</div>
    <StyledGatsbyLink className='mobile-only' to={!notFound ? '/contact' : '/'}>
      {!notFound ? 'Contact Me' : 'Home'}
    </StyledGatsbyLink>
  </StyledFlexSection>
)

export default FlexSection
