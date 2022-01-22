import React from 'react'
import { Link } from 'gatsby'

import * as mobileButtonStyles from './contactButton.module.css'

interface Props {
  limitedVisibility?: 'mobile-only' | 'desktop-only'
}

const ContactButton = ({ limitedVisibility }: Props) => {
  let classNames = `${mobileButtonStyles.link}`

  limitedVisibility && (classNames += ` ${limitedVisibility}`)

  return (
    <Link className={classNames} to='/contact'>
      Contact Me
    </Link>
  )
}

export default ContactButton
