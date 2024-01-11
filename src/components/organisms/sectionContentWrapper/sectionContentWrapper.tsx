import React, { ReactNode } from 'react'

import * as styles from './sectionContentWrapper.module.css'

interface Props {
  children: ReactNode
}

export const SectionContentWrapper = ({ children }: Props) => (
  <div className={styles.textWrapper}>{children}</div>
)
