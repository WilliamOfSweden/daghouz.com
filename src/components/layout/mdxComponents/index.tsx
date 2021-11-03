import React, { ReactNode } from 'react'

import {
  StyledListGrid,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledP,
} from '../styledComponents/'
import {
  BoxesIcon,
  GearIcon,
  FastForwardIcon,
  PriceTagIcon,
} from '../../illustrations/icons/'

interface Props {
  children: ReactNode
}

export const MdxGrid = ({ children }: Props) => (
  <StyledListGrid>{children}</StyledListGrid>
)

export const MdxH2Small = ({ children }: Props) => (
  <StyledH2 small>{children}</StyledH2>
)

const MdxH1 = ({ children }: Props) => <StyledH1>{children}</StyledH1>

const MdxH2 = ({ children }: Props) => <StyledH2>{children}</StyledH2>

const MdxH3 = ({ children }: Props) => <StyledH3>{children}</StyledH3>

const MdxP = ({ children }: Props) => <StyledP>{children}</StyledP>

const MdxComponents = {
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  p: MdxP,
  BoxesIcon,
  FastForwardIcon,
  GearIcon,
  PriceTagIcon,
}

export default MdxComponents
