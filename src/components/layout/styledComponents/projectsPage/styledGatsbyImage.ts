import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import THEME from '../../../../styles/theme'

const StyledGatsbyImage = styled(GatsbyImage)`
  & > picture > img {
    border-radius: ${THEME.shapes(2)};
  }
`

export default StyledGatsbyImage
