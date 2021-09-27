import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MuiButton from '@material-ui/core/Button'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      [theme.breakpoints.up('sm')]: {
        width: `initial`,
      },
    },
  })
)

interface Props {
  projectLink: string
}

const Button = ({ projectLink }: Props) => {
  const classes = useStyles()

  return (
    <MuiButton
      aria-label='Link to project website.'
      className={classes.btn}
      component='a'
      color='primary'
      variant='contained'
      href={`https://${projectLink}`}
      size='large'
      rel='noreferrer noopener'
      target='_blank'
      fullWidth
    >
      Visit
      <OpenInNewIcon style={{ marginLeft: `1rem` }} />
    </MuiButton>
  )
}

export default Button
