import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ContactForm from '../contactForm'
import * as mastheadStyles from './masthead.module.css'

const Masthead = () => (
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

export default Masthead
