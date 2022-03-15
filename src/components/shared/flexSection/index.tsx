import React, { ReactNode } from 'react'

import * as flexSectionStyles from './flexSection.module.css'
import { Illustration } from './illustration/'

interface Props {
  content: ReactNode
  mobileImage: ReactNode
  reverseFlexDirectionOnDesktop?: boolean
  scene: ReactNode
}

export const FlexSection = ({
  content,
  mobileImage,
  reverseFlexDirectionOnDesktop,
  scene,
}: Props) => {
  const flexDirectionClassName = reverseFlexDirectionOnDesktop ? 'reverse' : ''

  return (
    <section
      className={`${flexSectionStyles.section} ${flexSectionStyles[flexDirectionClassName]} container`}
    >
      <Illustration mobileImage={mobileImage} scene={scene} />
      {content}
    </section>
  )
}
