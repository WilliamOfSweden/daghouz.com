import styled from 'styled-components'

import THEME from '../../../styles/theme'

const StyledIconLinksWrapper = styled.div`
  display: inline-flex;

  & > a {
    margin-right: ${THEME.spacing(2)};
  }
`

export default StyledIconLinksWrapper
