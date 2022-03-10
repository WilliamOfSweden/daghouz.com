import React, { ReactNode } from 'react'

import * as flexSectionStyles from './flexSection.module.css'

interface Props {
  children: ReactNode
  reverseFlexDirectionOnDesktop?: boolean
}

export const FlexSection = ({
  children,
  reverseFlexDirectionOnDesktop,
}: Props) => {
  const flexDirectionClassName = reverseFlexDirectionOnDesktop ? 'reverse' : ''

  return (
    <section
      className={`${flexSectionStyles.section} ${flexSectionStyles[flexDirectionClassName]} container`}
    >
      {children}
    </section>
  )
}
