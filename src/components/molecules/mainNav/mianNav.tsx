import React from 'react'

import { NavLink } from '@components/atoms/'
import * as mainNavStyles from './mainNav.module.css'

export interface MainNavProps {
  navLinks: ReadonlyArray<{
    name: string
    to: string
  }>
}

export const MainNav = ({ navLinks }: MainNavProps) => (
  <nav className={mainNavStyles.nav}>
    {navLinks?.map(
      navLink => navLink && <NavLink key={navLink.to} {...navLink} />,
    )}
  </nav>
)
