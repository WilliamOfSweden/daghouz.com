import styled from 'styled-components'

import THEME from '../../../styles/theme'

interface Props {
  notFound?: boolean
}

const StyledFlexSection = styled.section<Props>`
  padding-top: ${THEME.spacing(4)};
  width: 100%;

  & > div:nth-child(2) {
    width: 100%;
  }

  @media (min-width: ${THEME.breakpoints.sm}) {
    display: flex;
    padding-top: ${THEME.spacing(0)};

    & > div:first-child {
      flex: 7;
      max-width: 78ch;
      margin: auto 0;
    }

    & > div:nth-child(2) {
      flex: 5;
    }
  }

  @media (min-width: ${THEME.breakpoints.md}) {
    ${({ notFound }) =>
      notFound &&
      `
        padding-top: ${THEME.spacing(20)};
      `}

    & > div:first-child {
      flex: 6;
    }

    & > div:nth-child(2) {
      flex: 6;
    }
  }
`

export default StyledFlexSection
