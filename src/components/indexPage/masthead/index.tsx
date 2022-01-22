import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import { DefaultSectionData } from '../../../@types/'
import * as mastheadStyles from './masthead.module.css'
import Canvas from './canvas/'
import { StaticImage } from 'gatsby-plugin-image'

interface MastheadData extends DefaultSectionData {
  coloredTitle: string
}

interface Props {
  mastheadData: MastheadData
}

const Masthead = ({ mastheadData }: Props) => (
  <section className={`${mastheadStyles.flexSection} container`}>
    <div className={mastheadStyles.textWrapper}>
      <h1>
        <span className={mastheadStyles.colored}>
          {mastheadData.coloredTitle}
        </span>{' '}
        {mastheadData.title}
      </h1>
      <MDXRenderer>{mastheadData.content.childMdx.body}</MDXRenderer>
      <Link className={`${mastheadStyles.link} desktop-only`} to='/contact'>
        Contact Me
      </Link>
    </div>
    <div>
      <StaticImage
        alt='Isometric web development items and rocket.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        layout='fullWidth'
        placeholder='tracedSVG'
        src='../../../images/rocket.svg'
      />
      <Canvas />
    </div>
    <Link className={`${mastheadStyles.link} mobile-only`} to='/contact'>
      Contact Me
    </Link>
  </section>
)

export default Masthead
