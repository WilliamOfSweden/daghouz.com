import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const MdxH3 = ({ children }: Props) => <h3>{children}</h3>
