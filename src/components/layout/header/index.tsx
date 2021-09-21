import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import { Link } from 'gatsby'
import Logo from '../../illustrations/logo'
import LinkedInIcon from '../../illustrations/icons/social/linkedInIcon'
import GitHubIcon from '../../illustrations/icons/social/githubIcon'
import TwitterIcon from '../../illustrations/icons/social/twitterIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activeLink: {
      color: `#fff !important`,
    },
    desktopOnly: {
      display: `none`,
      [theme.breakpoints.up('sm')]: {
        display: 'initial',
      },
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
    mainHeader: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    nav: {
      display: 'flex',
      alignItems: `center`,
      justifyContent: `space-between`,
    },
    socialIcons: {
      marginRight: `1rem`,
    },
  })
)

const Header: FC = () => {
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
    <AppBar
      className={classes.mainHeader}
      color='default'
      elevation={0}
      position='static'
    >
      <Container className={classes.nav} component='nav'>
        <div>
          <Link
            aria-label='Link to main page.'
            className={classes.socialIcons}
            to='/'
          >
            <Logo />
          </Link>
          <a
            aria-label='Link to Linkedin account.'
            className={`${classes.socialIcons} ${classes.desktopOnly}`}
            href='https://linkedin.com/in/william-daghouz/'
            rel='noreferrer noopener'
            target='_blank'
          >
            <LinkedInIcon />
          </a>
          <a
            aria-label='Link to GitHub account.'
            className={`${classes.socialIcons} ${classes.desktopOnly}`}
            href='https://github.com/WilliamOfSweden/'
            rel='noreferrer noopener'
            target='_blank'
          >
            <GitHubIcon />
          </a>
          <a
            aria-label='Link to Twitter account.'
            className={`${classes.socialIcons} ${classes.desktopOnly}`}
            href='https://twitter.com/WilliamDaghouz/'
            rel='noreferrer noopener'
            target='_blank'
          >
            <TwitterIcon />
          </a>
        </div>
        <div>
          {' '}
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
      </Container>
    </AppBar>
  )
}

export default Header
