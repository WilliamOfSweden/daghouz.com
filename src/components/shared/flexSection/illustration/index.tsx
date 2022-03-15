import React, { Fragment, ReactNode } from 'react'

import { Canvas } from './canvas/'

interface Props {
  mobileImage: ReactNode
  scene: ReactNode
}

export const Illustration = ({ mobileImage, scene }: Props) => (
  <Fragment>
    <Canvas>{scene}</Canvas>
    {mobileImage}
  </Fragment>
)
