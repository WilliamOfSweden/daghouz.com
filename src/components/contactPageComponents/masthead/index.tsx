import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as mastheadStyles from './masthead.module.css'
import { ContactForm } from '../contactForm'

export const Masthead = () => (
  <section className={`container ${mastheadStyles.masthead}`}>
    <ContactForm />
    <div className={mastheadStyles.masthead__imgWrapper}>
      <StaticImage
        src='../../../images/contact.svg'
        alt='Building'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='tracedSVG'
        layout='fullWidth'
      />
    </div>
  </section>
)
