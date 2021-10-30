import React from 'react'

import { StyledHeader, StyledNavbar } from '../styledComponents/'
import IconLinks from './iconsLinks/'
import NavLinks from './navLinks'

const Header = () => (
  <StyledHeader className='container'>
    <StyledNavbar>
      <IconLinks />
      <NavLinks />
    </StyledNavbar>
  </StyledHeader>
)

export default Header
