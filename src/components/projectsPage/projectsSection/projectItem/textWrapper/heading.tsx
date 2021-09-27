import React from 'react'
import Typography from '@material-ui/core/Typography'

interface Props {
  clientName: string
}

const Heading = ({ clientName }: Props) => {
  return (
    <Typography variant='h4' component='h2'>
      {clientName}
    </Typography>
  )
}

export default Heading
