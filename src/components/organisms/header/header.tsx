import React from 'react'

import { IconLinkList, IconLinkListProps } from '@components/molecules/'
import * as styles from './header.module.css'

export interface HeaderProps {
  socialMediaLinks: IconLinkListProps['links']
}

export const Header = ({ socialMediaLinks }: HeaderProps) => (
  <header className={styles.header}>
    <IconLinkList links={socialMediaLinks} />
  </header>
)
