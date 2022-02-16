import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage } from 'gatsby-plugin-image'

import { DefaultSectionData } from '../../../@types/'
import * as aboutSectionStyles from './aboutSection.module.css'

interface Props {
  aboutSectionData: DefaultSectionData
}

const AboutSection = ({ aboutSectionData }: Props) => (
  <section className={aboutSectionStyles.aboutSection}>
    <div className='container'>
      <div>
        <div>
          <StaticImage
            src='../../../images/about.png'
            alt='Building'
            loading='lazy'
            formats={['auto', 'webp', 'avif']}
            placeholder='tracedSVG'
            layout='fullWidth'
          />
        </div>
        <div>
          <h2>About Me</h2>
          <MDXRenderer>{aboutSectionData.content.childMdx.body}</MDXRenderer>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
