import React from 'react'

import * as projectInfoStyles from './projectInfo.module.css'
import { OpenExternalIcon } from '../../../../illustrations/icons/'

interface Props {
  projectLink: string
}

export const Button = ({ projectLink }: Props) => (
  <a
    aria-label='Link to project website.'
    className={projectInfoStyles.btn}
    href={projectLink}
    rel='noreferrer noopener'
    target='_blank'
  >
    Visit
    <OpenExternalIcon />
  </a>
)
