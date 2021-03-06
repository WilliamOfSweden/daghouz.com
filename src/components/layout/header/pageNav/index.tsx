import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { LinksData } from '../../../../@types/'
import * as pageNavStyles from './pageNav.module.css'

export const PageNav = () => {
  const {
    site: {
      siteMetadata: { navLinks },
    },
  } = useStaticQuery<LinksData>(graphql`
    query NavLinks {
      site {
        siteMetadata {
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <nav className={pageNavStyles.pageNav}>
      {navLinks.map(({ link, name }) => (
        <Link
          activeClassName={pageNavStyles.pageNav__activeLink}
          className={pageNavStyles.pageNav__link}
          key={link}
          to={link}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
