import React from 'react'
import OpenExternalIcon from '../../../../illustrations/icons/openExternalIcon'

import * as projectItemStyles from '../projectItem.module.css'

interface Props {
  projectLink: string
}

const Button = ({ projectLink }: Props) => (
  <a
    aria-label='Link to project website.'
    className={projectItemStyles.btn}
    href={projectLink}
    rel='noreferrer noopener'
    target='_blank'
  >
    Visit
    <OpenExternalIcon />
  </a>
)

export default Button
