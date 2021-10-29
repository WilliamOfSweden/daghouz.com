import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'

import SocialMedia from './socialMedia'
import NavLinks from './navLinks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainHeader: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    nav: {
      display: 'flex',
      alignItems: `center`,
      justifyContent: `space-between`,
    },
  })
)

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar
      className={classes.mainHeader}
      color='default'
      elevation={0}
      position='static'
    >
      <Container className={classes.nav} component='nav'>
        <SocialMedia />
        <NavLinks />
      </Container>
    </AppBar>
  )
}

export default Header
