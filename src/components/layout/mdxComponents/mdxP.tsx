import React, { ReactNode } from 'react'

import * as mdxStyles from './mdx.module.css'

interface Props {
  children: ReactNode
}

export const MdxP = ({ children }: Props) => (
  <p className={mdxStyles.paragraph}>{children}</p>
)
