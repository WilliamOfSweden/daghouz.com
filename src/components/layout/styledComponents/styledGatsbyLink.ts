import styled from 'styled-components'
import { Link } from 'gatsby'

import THEME from '../../../styles/theme'

const StyledGatsbyLink = styled(Link)`
  background: ${THEME.palette.primary};
  border: none;
  border-radius: ${THEME.shapes(1)};
  color: ${THEME.palette.text};
  cursor: pointer;
  font-family: ${THEME.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: ${THEME.spacing(4)};
  padding: ${THEME.spacing(1.5)};
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.33s ease;

  &:hover {
    background: ${THEME.palette.primary}cc;
  }

  @media (min-width: ${THEME.breakpoints.sm}) {
    width: 238px;
  }
`

export default StyledGatsbyLink
