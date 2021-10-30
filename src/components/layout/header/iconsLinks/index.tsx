import React from 'react'
import { Link } from 'gatsby'

import { StyledIconLinksWrapper } from '../../styledComponents/'
import Logo from '../../../illustrations/logo'
import SocialMediaLinks from './socialMediaLinks'

const IconLinks = () => (
  <StyledIconLinksWrapper className='desktop-only'>
    <Link aria-label='Link to main page.' to='/'>
      <Logo />
    </Link>
    <SocialMediaLinks />
  </StyledIconLinksWrapper>
)

export default IconLinks
