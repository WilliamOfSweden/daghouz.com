import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import * as eCommerceSectionStyles from './eCommerceSection.module.css'

const ECommerceSection = () => (
  <section className={`${eCommerceSectionStyles.section} container`}>
    <div className={eCommerceSectionStyles.imgWrapper}>
      <StaticImage
        src='../../../images/e-commerce.svg'
        alt='Isometric web development items.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='tracedSVG'
        layout='fullWidth'
      />
    </div>
    <div className={eCommerceSectionStyles.textWrapper}>
      <h2>E-commerce</h2>
      <p>
        Allow your business to reach new heights and drive revenue by providing
        your customer with compelling and fast e-commerce experiences with
        near-instant page loads.
      </p>
      <Link className={eCommerceSectionStyles.link} to='/contact'>
        Contact Me
      </Link>
    </div>
  </section>
)

export default ECommerceSection
