import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Heading from './heading'
import Button from './button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textWrapper: {
      paddingTop: `0 !important`,
      [theme.breakpoints.up('md')]: {
        paddingTop: `1.6rem !important`,
      },
    },
  })
)

interface Props {
  body: string
  clientName: string
  projectLink: string
}

const TextWrapper = ({ body, clientName, projectLink }: Props) => {
  const classes = useStyles()

  return (
    <Grid
      className={classes.textWrapper}
      container
      alignContent='center'
      item
      xs={12}
      md={6}
    >
      <Heading clientName={clientName} />
      <MDXRenderer>{body}</MDXRenderer>
      <Button projectLink={projectLink} />
    </Grid>
  )
}

export default TextWrapper
