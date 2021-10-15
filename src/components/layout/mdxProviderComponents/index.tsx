import React, { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'

import FastForwardIcon from '../../illustrations/icons/fastForwardIcon'
import PriceTagIcon from '../../illustrations/icons/priceTagIcon'
import BoxesIcon from '../../illustrations/icons/boxesIcon'
import GearIcon from '../../illustrations/icons/gearIcon'

interface Props {
  children: ReactNode
}

const MDXheading1 = ({ children }: Props) => (
  <Typography component='h1' variant='h2' style={{ fontWeight: 900 }}>
    {children}
  </Typography>
)

const MDXheading2 = ({ children }: Props) => (
  <Typography align='center' variant='h2'>
    {children}
  </Typography>
)

const MDXheading3 = ({ children }: Props) => (
  <Typography variant='h3'>{children}</Typography>
)

const MDXparagraph = ({ children }: Props) => (
  <Typography component='p' paragraph>
    {children}
  </Typography>
)

export const MDXheading2small = ({ children }: Props) => (
  <Typography component='h2' variant='h3'>
    {children}
  </Typography>
)

const MDXProviderComponentsObject = {
  h1: MDXheading1,
  h2: MDXheading2,
  h3: MDXheading3,
  p: MDXparagraph,
  FastForwardIcon,
  PriceTagIcon,
  BoxesIcon,
  GearIcon,
}

export default MDXProviderComponentsObject
