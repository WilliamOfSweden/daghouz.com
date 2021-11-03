import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { StyledNavLinkWrapper } from '../styledComponents/'
import { LinksData } from '../../../typescript/'

const NavLinks = () => {
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
    <StyledNavLinkWrapper>
      {navLinks.map(({ link, name }) => (
        <Link activeClassName='active-link' key={link} to={link}>
          {name}
        </Link>
      ))}
    </StyledNavLinkWrapper>
  )
}

export default NavLinks
