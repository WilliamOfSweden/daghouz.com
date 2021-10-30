import styled from 'styled-components'

import THEME from '../../../styles/theme'

const StyledNavLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  a {
    color: ${THEME.palette.textAlt};
    font-family: Mulish;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin-left: 3rem;
    text-transform: uppercase;

    &:hover {
      color: ${THEME.palette.text};
    }
  }

  .active-link {
    color: ${THEME.palette.text};
  }
`

export default StyledNavLinkWrapper
