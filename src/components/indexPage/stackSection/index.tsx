import React from 'react'

import { logoArr } from './logoArr'
import { StyledH2, StyledListGrid } from '../../layout/styledComponents'

const StackSection = () => (
  <section className='container'>
    <StyledH2>Main Tools of Choice</StyledH2>
    <StyledListGrid xs={2} md={logoArr.length / 2}>
      {logoArr.map(logo => (
        <li key={logo.toString()}>{logo}</li>
      ))}
    </StyledListGrid>
  </section>
)

export default StackSection
