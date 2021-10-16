import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MuiButton from '@material-ui/core/Button'

import useStore from '../../../stores/contactModalStore'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopOnly: {
      display: 'none',
      maxWidth: 'initial',
      [theme.breakpoints.up('sm')]: {
        display: 'inherit',
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
  fullWidth?: boolean
  visibleOn: 'mobileOnly' | 'desktopOnly'
}

const Button = ({ fullWidth, visibleOn }: Props) => {
  interface StateProps {
    activeContactModal: boolean
    openContactModal: () => void
  }

  const openContactModal = useStore(
    (state: StateProps) => state.openContactModal
  )

  const classes = useStyles()

  return (
    <MuiButton
      className={classes[visibleOn]}
      color='primary'
      fullWidth={fullWidth}
      onClick={openContactModal}
      variant='contained'
      size='large'
    >
      Contact Me
    </MuiButton>
  )
}

export default Button
