import React, { ReactNode } from 'react'

import * as mdxStyles from './mdx.module.css'
import {
  BoxesIcon,
  GearIcon,
  FastForwardIcon,
  PriceTagIcon,
} from '../../illustrations/icons/'

interface Props {
  children: ReactNode
}

export const MdxGrid = ({ children }: Props) => (
  <ul className={mdxStyles.grid}>{children}</ul>
)

const MdxH3 = ({ children }: Props) => (
  <h3 className={mdxStyles.h3}>{children}</h3>
)

const MdxP = ({ children }: Props) => (
  <p className={mdxStyles.paragraph}>{children}</p>
)

const MdxComponents = {
  p: MdxP,
  h3: MdxH3,
  BoxesIcon,
  FastForwardIcon,
  GearIcon,
  PriceTagIcon,
}

export default MdxComponents
