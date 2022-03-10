import React, { ReactNode } from 'react'

import * as flexSectionStyles from './flexSection.module.css'

interface Props {
  children: ReactNode
}

export const FlexSection = ({ children }: Props) => (
  <section className={`${flexSectionStyles.section} container`}>
    {children}
  </section>
)
