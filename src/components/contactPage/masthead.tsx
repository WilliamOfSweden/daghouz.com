import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import styled from 'styled-components'
import THEME from '../../styles/theme'
import ContactForm from './contactForm'

const StyledDiv = styled.div`
  display: none;

  @media (min-width: ${THEME.breakpoints.md}) {
    display: block;
    flex: 1;
  }
`

const Masthead = () => (
  <section className='container' style={{ display: 'flex', gap: '2rem' }}>
    <ContactForm />
    <StyledDiv>
      <StaticImage
        src='../../images/contact.png'
        alt='Building'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
    </StyledDiv>
  </section>
)

export default Masthead
