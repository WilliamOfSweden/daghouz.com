import styled from 'styled-components'

import THEME from '../../../../styles/theme'

interface Props {
  small?: boolean
}

const StyledH2 = styled.h2<Props>`
  ${({ small }) =>
    small
      ? `
      font-size: calc(1.6rem + 1vw);
      font-weight: 700;
      margin-bottom: ${THEME.spacing(2)};
      text-align: left;
    `
      : `
      font-size: calc(1.6rem + 2vw);
      font-weight: 800;
      margin-bottom: ${THEME.spacing(4)};
      text-align: center;
    `}
`

export default StyledH2
