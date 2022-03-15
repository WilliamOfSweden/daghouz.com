import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Heading } from './heading'
import { Button } from './button'

interface Props {
  body: string
  clientName: string
  projectLink: string
}

export const ProjectInfo = ({ body, clientName, projectLink }: Props) => (
  <div>
    <Heading clientName={clientName} />
    <MDXRenderer>{body}</MDXRenderer>
    <Button projectLink={projectLink} />
  </div>
)
