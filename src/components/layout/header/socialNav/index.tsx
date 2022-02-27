import React from 'react'
import { Link } from 'gatsby'

import * as socialNavStyles from './socialNav.module.css'
import Logo from '../../../illustrations/logo/'
import SocialMediaLinks from './socialMediaLinks/'

const SocialNav = () => (
  <nav className={`${socialNavStyles.socialNav} desktop-only`}>
    <Link aria-label='Link to main page.' to='/'>
      <Logo />
    </Link>
    <SocialMediaLinks />
  </nav>
)

export default SocialNav
