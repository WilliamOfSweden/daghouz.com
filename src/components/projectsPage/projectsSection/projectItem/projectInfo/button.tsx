import React from 'react'
import OpenExternalIcon from '../../../../illustrations/icons/openExternalIcon'

import { StyledLinkBtn } from '../../../../layout/styledComponents'

interface Props {
  projectLink: string
}

const Button = ({ projectLink }: Props) => (
  <StyledLinkBtn
    aria-label='Link to project website.'
    href={`https://${projectLink}`}
    rel='noreferrer noopener'
    target='_blank'
  >
    Visit
    <OpenExternalIcon />
  </StyledLinkBtn>
)

export default Button
