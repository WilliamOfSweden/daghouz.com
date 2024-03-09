import React from 'react'

import {
  IconLinkList,
  IconLinkListProps,
  MainNav,
  MainNavProps,
} from '@components/molecules/'
import * as styles from './header.module.css'

export interface HeaderProps {
  navLinks: MainNavProps['navLinks']
  socialMediaLinks: IconLinkListProps['links']
}

export const Header = ({ navLinks, socialMediaLinks }: HeaderProps) => (
  <header className={styles.header}>
    <IconLinkList links={socialMediaLinks} />
    {/*<MainNav navLinks={navLinks} />*/}
  </header>
)
