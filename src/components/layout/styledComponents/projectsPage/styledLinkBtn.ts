import styled from 'styled-components'

import THEME from '../../../../styles/theme'

const StyledLinkBtn = styled.a`
  align-items: center;
  background: ${THEME.palette.primary};
  border: none;
  border-radius: ${THEME.shapes(1)};
  color: ${THEME.palette.text};
  cursor: pointer;
  display: flex;
  font-family: ${THEME.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 2px;
  margin-top: ${THEME.spacing(4)};
  padding: ${THEME.spacing(1.5)};
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.33s ease;
  width: 100%;

  &:hover {
    background: ${THEME.palette.primary}cc;
  }

  @media (min-width: ${THEME.breakpoints.md}) {
    width: 238px;
  }
`

export default StyledLinkBtn
