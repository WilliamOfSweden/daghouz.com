import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import Logo from '../../illustrations/logo'
import LinkedInIcon from '../../illustrations/icons/social/linkedInIcon'
import GitHubIcon from '../../illustrations/icons/social/githubIcon'
import TwitterIcon from '../../illustrations/icons/social/twitterIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialIcons: {
      display: `none`,
      marginRight: `1rem`,
      [theme.breakpoints.up('sm')]: {
        display: 'initial',
      },
    },
  })
)

const SocialMedia = () => {
  const classes = useStyles()

  return (
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
        className={classes.socialIcons}
        href='https://linkedin.com/in/william-daghouz/'
        rel='noreferrer noopener'
        target='_blank'
      >
        <LinkedInIcon />
      </a>
      <a
        aria-label='Link to GitHub account.'
        className={classes.socialIcons}
        href='https://github.com/WilliamOfSweden/'
        rel='noreferrer noopener'
        target='_blank'
      >
        <GitHubIcon />
      </a>
      <a
        aria-label='Link to Twitter account.'
        className={classes.socialIcons}
        href='https://twitter.com/WilliamDaghouz/'
        rel='noreferrer noopener'
        target='_blank'
      >
        <TwitterIcon />
      </a>
    </div>
  )
}

export default SocialMedia
