import React from 'react'

import * as projectInfoStyles from './projectInfo.module.css'

interface Props {
  clientName: string
}

export const Heading = ({ clientName }: Props) => (
  <h2 className={projectInfoStyles.title}>{clientName}</h2>
)
