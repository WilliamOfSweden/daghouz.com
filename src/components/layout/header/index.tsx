import React from 'react'

import * as headerStyles from './header.module.css'
import { SocialNav } from './socialNav/'
import { PageNav } from './pageNav/'

export const Header = () => (
  <header className={`${headerStyles.mainHeader} container`}>
    <SocialNav />
    <PageNav />
  </header>
)
