import React, { ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Button from './button'
import ModalComponent from '../animatedModal'
import ContactForm from '../contactForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopOnly: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'inherit',
      },
    },
    heroSection: {
      paddingTop: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(0),
      },
    },
    mobileOnly: {
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
)

interface Props {
  children: ReactNode
  content: string
}

const FlexSection = ({ children, content }: Props) => {
  const classes = useStyles()

  return (
    <Container className={classes.heroSection} component='section'>
      <Grid container>
        <Grid
          item
          container
          alignContent='center'
          justifyContent='center'
          xs={12}
          sm={7}
          md={6}
        >
          <Box maxWidth={'78ch'} my={`auto`}>
            <MDXRenderer>{content}</MDXRenderer>
            <Button visibleOn='desktopOnly' />
            <ModalComponent>
              <ContactForm />
            </ModalComponent>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={6}>
          {children}
        </Grid>
      </Grid>
      <Button fullWidth visibleOn='mobileOnly' />
      <ContactForm hidden />
    </Container>
  )
}

export default FlexSection
