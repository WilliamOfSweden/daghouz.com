import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './twistedSphereStaticImage.module.css'

export const TwistedSphereStaticImage = () => (
  <StaticImage
    alt='Green twisted sphere'
    className={styles.img}
    src='../../../images/twisted-sphere.png'
  />
)
