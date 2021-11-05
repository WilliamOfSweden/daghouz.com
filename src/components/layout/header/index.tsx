import React from 'react'

import * as headerStyles from './header.module.css'
import PageNav from './pageNav/'
import SocialNav from './socialNav/'

const Header = () => (
  <header className={`${headerStyles.mainHeader} container`}>
    <SocialNav />
    <PageNav />
  </header>
)

export default Header
