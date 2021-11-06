import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import * as stackSectionStyles from './stackSection.module.css'
import { logoArr } from './logoArr'

const StackSection = () => (
  <section
    style={{
      background: '#f1f4f8',
      paddingBottom: '60px',
      paddingTop: '60px',
      marginBottom: 0,
    }}
  >
    <div className={`${stackSectionStyles.section} container`}>
      <h2>Main Tools of Choice</h2>
      <ul>
        {logoArr.map(logo => (
          <li key={uuidv4()}>{logo}</li>
        ))}
      </ul>
    </div>
  </section>
)

export default StackSection
