import React from 'react'

import * as stackSectionStyles from './stackSection.module.css'
import { logoArr } from './logoArr'

const StackSection = () => (
  <section className={`${stackSectionStyles.section} container`}>
    <h2>Main Tools of Choice</h2>
    <ul xs={2} md={logoArr.length / 2}>
      {logoArr.map(logo => (
        <li key={logo.toString()}>{logo}</li>
      ))}
    </ul>
  </section>
)

export default StackSection
