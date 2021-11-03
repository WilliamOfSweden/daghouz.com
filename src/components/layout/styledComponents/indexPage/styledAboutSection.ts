import styled from 'styled-components'

import THEME from '../../../../styles/theme'

const StyledAboutSection = styled.section`
  border-radius: ${THEME.shapes(5)};
  background: ${THEME.palette.primary};
  padding-bottom: ${THEME.spacing(2)};
  padding-top: ${THEME.spacing(2)};

  & > div:nth-child(2) {
    padding: 0 ${THEME.spacing(2)};
  }

  @media (min-width: ${THEME.breakpoints.sm}) {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;

    & > div:first-child {
      align-items: center;
      display: flex;
      flex: 5;

      & > div {
        width: 100%;
      }
    }

    & > div:nth-child(2) {
      flex: 7;
    }
  }

  @media (min-width: ${THEME.breakpoints.md}) {
    & > div:first-child {
      flex: 6;
    }

    & > div:nth-child(2) {
      flex: 6;
    }
  }
`

export default StyledAboutSection
