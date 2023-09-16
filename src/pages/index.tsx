import React, { Fragment } from 'react'

import { graphql, PageProps } from 'gatsby'

import { Block, SectionFactory } from '../sections/'

interface DataProps {
  homepage: {
    blocks: Block[]
    description: string
    id: string
    title: string
  }
}

const IndexPage = ({ data }: PageProps<DataProps>) => (
  <Fragment>
    {data.homepage.blocks.map(block => (
      <SectionFactory key={block.id} block={block} />
    ))}
  </Fragment>
)

export const query = graphql`
  {
    homepage {
      blocks: content {
        id
        blocktype
        ...HomepageHeroSection
      }
      description
      id
      image {
        id
        url
      }
      title
    }
  }
`

export default IndexPage
