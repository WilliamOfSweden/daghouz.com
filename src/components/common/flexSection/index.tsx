import React, { ReactNode } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typescript'
import * as flexSectionStyles from './flexSection.module.css'
import { Link } from 'gatsby'

interface Props {
  children: ReactNode
  sectionContent: DefaultSectionData
  notFound?: boolean
}

const FlexSection = ({ children, sectionContent, notFound }: Props) => (
  <section className={`${flexSectionStyles.flexSection} container`}>
    <div className={flexSectionStyles.textWrapper}>
      <h1 className={flexSectionStyles.mainHeading}>{sectionContent.title}</h1>
      <MDXRenderer>{sectionContent.content.childMdx.body}</MDXRenderer>
      <Link
        className={`${flexSectionStyles.link} desktop-only`}
        to={!notFound ? '/contact' : '/'}
      >
        {!notFound ? 'Contact Me' : 'Home'}
      </Link>
    </div>
    <div className={flexSectionStyles.imgWrapper}>{children}</div>
    <Link
      className={`${flexSectionStyles.link} mobile-only`}
      to={!notFound ? '/contact' : '/'}
    >
      {!notFound ? 'Contact Me' : 'Home'}
    </Link>
  </section>
)

export default FlexSection
