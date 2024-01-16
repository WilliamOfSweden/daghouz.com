import React from 'react'

import { Link } from 'gatsby'

import * as skipToContentLinkStyles from './skipToContentLink.module.css'

export interface SkipToContentLinkProps {
  clickHandler: () => void
  linkText: string | null | undefined
}

export const SkipToContentLink = ({
  clickHandler,
  linkText,
}: SkipToContentLinkProps) => (
  <Link
    className={skipToContentLinkStyles.link}
    onClick={clickHandler}
    to='#main-content'
  >
    {linkText}
  </Link>
)
