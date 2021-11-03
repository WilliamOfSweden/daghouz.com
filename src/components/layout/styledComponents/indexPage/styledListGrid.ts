import styled from 'styled-components'

import THEME from '../../../../styles/theme'

interface Props {
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

const StyledListGrid = styled.ul<Props>`
  display: grid;
  grid-gap: ${THEME.spacing(5)};
  grid-template-columns: repeat(${({ xs }) => xs || 1}, 1fr);

  @media (min-width: ${THEME.breakpoints.sm}) {
    grid-template-columns: repeat(${({ xs, sm }) => sm || xs || 2}, 1fr);
  }

  @media (min-width: ${THEME.breakpoints.md}) {
    grid-template-columns: repeat(
      ${({ xs, sm, md }) => md || sm || xs || 2},
      1fr
    );
  }

  @media (min-width: ${THEME.breakpoints.lg}) {
    grid-template-columns: repeat(
      ${({ xs, sm, md, lg }) => lg || md || sm || xs || 2},
      1fr
    );
  }
`

export default StyledListGrid
