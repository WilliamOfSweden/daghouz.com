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

const MdxP = ({ children }: Props) => (
  <p className={mdxStyles.paragraph}>{children}</p>
)

const MdxComponents = {
  p: MdxP,
  BoxesIcon,
  FastForwardIcon,
  GearIcon,
  PriceTagIcon,
}

export default MdxComponents
