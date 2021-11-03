import styled from 'styled-components'

import THEME from '../../../../styles/theme'

const StyledProjectFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${THEME.spacing(5)};
  margin-bottom: ${THEME.spacing(20)};

  @media (min-width: ${THEME.breakpoints.md}) {
    flex-direction: row;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    & > div,
    & > a {
      flex: 1;
    }

    & > div {
      margin: auto 0;
    }
  }
`

export default StyledProjectFlexbox
