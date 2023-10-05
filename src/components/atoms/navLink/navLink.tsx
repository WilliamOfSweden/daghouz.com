import React from 'react'

import { GatsbyLinkProps, Link } from 'gatsby'

import * as navLinkStyles from './navLink.module.css'

export interface NavLinkProps
  extends Omit<GatsbyLinkProps<{}>, 'children' | 'ref'> {
  readonly name: string | null
}

export const NavLink = ({ name, ...restProps }: NavLinkProps) => (
  <Link
    activeClassName={navLinkStyles.linkActive}
    className={navLinkStyles.link}
    {...restProps}
  >
    {name}
  </Link>
)
