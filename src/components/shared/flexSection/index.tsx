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
  const flexSectionClassNames = reverseFlexDirectionOnDesktop
    ? `${flexSectionStyles.section} ${flexSectionStyles.reverse} container`
    : `${flexSectionStyles.section} container`

  return (
    <section className={flexSectionClassNames}>
      <Illustration mobileImage={mobileImage} scene={scene} />
      {content}
    </section>
  )
}
