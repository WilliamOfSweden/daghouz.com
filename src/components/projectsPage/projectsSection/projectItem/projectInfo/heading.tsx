import React from 'react'

import * as projectItemStyles from '../projectItem.module.css'

interface Props {
  clientName: string
}

const Heading = ({ clientName }: Props) => (
  <h2 className={projectItemStyles.title}>{clientName}</h2>
)

export default Heading
