import React from 'react'

import { StyledH2 } from '../../../../layout/styledComponents/'

interface Props {
  clientName: string
}

const Heading = ({ clientName }: Props) => (
  <StyledH2 small>{clientName}</StyledH2>
)

export default Heading
