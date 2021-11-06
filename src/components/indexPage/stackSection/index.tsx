import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import * as stackSectionStyles from './stackSection.module.css'
import { logoArr } from './logoArr'

const StackSection = () => (
  <section className={`${stackSectionStyles.section} container`}>
    <h2>Main Tools of Choice</h2>
    <ul>
      {logoArr.map(logo => (
        <li key={uuidv4()}>{logo}</li>
      ))}
    </ul>
  </section>
)

export default StackSection
