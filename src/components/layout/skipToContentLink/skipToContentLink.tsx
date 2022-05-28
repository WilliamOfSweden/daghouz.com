import React from 'react'
import { Link } from 'gatsby'

import * as skipToContentLinkStyles from './skipToContentLink.module.css'

interface Props {
  onClick: () => void
}

export const SkipToContentLink = ({ onClick }: Props) => (
  <Link
    className={skipToContentLinkStyles.link}
    onClick={onClick}
    to='#main-content'
  >
    Skip to main content
  </Link>
)
