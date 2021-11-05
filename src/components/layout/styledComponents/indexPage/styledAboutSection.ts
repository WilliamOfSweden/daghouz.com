import styled from 'styled-components'

import THEME from '../../../../styles/theme'

const StyledAboutSection = styled.section`
  & > div {
    border-radius: ${THEME.shapes(5)};
    background: ${THEME.palette.primary}22;
    color: #333;
    padding: ${THEME.spacing(2)};

    p {
      margin-bottom: 0;
    }

    @media (min-width: ${THEME.breakpoints.sm}) {
      display: flex;
      flex-direction: row-reverse;
      gap: ${THEME.spacing(2)};

      & > div:first-child {
        flex: 5;
      }

      & > div:nth-child(2) {
        display: flex;
        flex: 7;
        flex-direction: column;
        justify-content: center;
      }
    }

    @media (min-width: ${THEME.breakpoints.sm}) {
      & > div:first-child {
        flex: 6;
      }

      & > div:nth-child(2) {
        flex: 6;
      }
    }
  }
`

export default StyledAboutSection
