import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { LinksData } from '../../../../typescript/'
import * as pageNavStyles from './pageNav.module.css'

const PageNav = () => {
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
          activeClassName={pageNavStyles.activeLink}
          className={pageNavStyles.link}
          key={link}
          to={link}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default PageNav
