import React from 'react'

import { Link } from 'gatsby'

import * as navLinkStyles from './navLink.module.css'

export interface NavLinkProps {
  link: string
  name: string
}

export const NavLink = ({ link, name }: NavLinkProps) => (
  <Link
    activeClassName={navLinkStyles.navLinkActive}
    className={navLinkStyles.navLink}
    to={link}
  >
    {name}
  </Link>
)
