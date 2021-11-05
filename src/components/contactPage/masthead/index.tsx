import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ContactForm from '../contactForm'
import * as mastheadStyles from './masthead.module.css'

const Masthead = () => (
  <section className='container' style={{ display: 'flex', gap: '3rem' }}>
    <ContactForm />
    <div className={mastheadStyles.imgWrapper}>
      <StaticImage
        src='../../images/contact.png'
        alt='Building'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
    </div>
  </section>
)

export default Masthead
