import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const useStyles = makeStyles(() =>
  createStyles({
    activeLink: {
      color: `#fff !important`,
    },
    link: {
      color: `#ddd`,
      fontFamily: `Mulish`,
      fontSize: `0.8rem`,
      letterSpacing: `1px`,
      marginLeft: `3rem`,
      textTransform: `uppercase`,
      '&:hover': {
        color: `#fff`,
      },
    },
  })
)

const NavLinks = () => {
  interface DataProps {
    site: {
      siteMetadata: {
        navLinks: {
          name: string
          link: string
        }[]
      }
    }
  }

  const {
    site: {
      siteMetadata: { navLinks },
    },
  } = useStaticQuery<DataProps>(graphql`
    query SiteMetaData {
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

  const classes = useStyles()

  return (
    <div>
      {navLinks.map(link => {
        return (
          <Link
            activeClassName={classes.activeLink}
            className={classes.link}
            key={link.link}
            to={link.link}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLinks
