import React, { ReactNode } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typescript'
import {
  StyledGatsbyLink,
  StyledFlexSection,
  StyledH1,
} from '../../layout/styledComponents/'

interface Props {
  children: ReactNode
  sectionContent: DefaultSectionData
  notFound?: boolean
}

const FlexSection = ({ children, sectionContent, notFound }: Props) => (
  <StyledFlexSection notFound={notFound} className='container'>
    <div>
      <StyledH1>{sectionContent.title}</StyledH1>
      <MDXRenderer>{sectionContent.content.childMdx.body}</MDXRenderer>
      <StyledGatsbyLink
        className='desktop-only'
        to={!notFound ? '/contact' : '/'}
      >
        {!notFound ? 'Contact Me' : 'Home'}
      </StyledGatsbyLink>
    </div>
    <div>{children}</div>
    <StyledGatsbyLink className='mobile-only' to={!notFound ? '/contact' : '/'}>
      {!notFound ? 'Contact Me' : 'Home'}
    </StyledGatsbyLink>
  </StyledFlexSection>
)

export default FlexSection
