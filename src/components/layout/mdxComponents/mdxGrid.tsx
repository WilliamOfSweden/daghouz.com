import React, { ReactNode } from 'react'

import * as mdxStyles from './mdx.module.css'

interface Props {
  children: ReactNode
}

export const MdxGrid = ({ children }: Props) => (
  <ul className={mdxStyles.grid}>{children}</ul>
)
