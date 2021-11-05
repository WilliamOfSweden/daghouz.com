import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { DefaultSectionData } from '../../../typescript/'
import * as aboutSectionStyles from './aboutSection.module.css'
import { StaticImage } from 'gatsby-plugin-image'

interface Props {
  aboutSectionData: DefaultSectionData
}

const AboutSection = ({ aboutSectionData }: Props) => (
  <section className={`${aboutSectionStyles.section} container`}>
    <div>
      <div>
        <StaticImage
          src='../../../images/about.png'
          alt='Building'
          loading='eager'
          formats={['auto', 'webp', 'avif']}
          placeholder='none'
          layout='fullWidth'
        />
      </div>
      <div>
        <h2>About Me</h2>
        <MDXRenderer>{aboutSectionData.content.childMdx.body}</MDXRenderer>
      </div>
    </div>
  </section>
)

export default AboutSection
