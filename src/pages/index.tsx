import React from 'react'

import { graphql, PageProps } from 'gatsby'

import { Block, SectionFactory } from '@components/sections/'
import { Layout } from '@components/layout/'

interface DataProps {
  homepage: {
    blocks: Block[]
    description: string
    id: string
    title: string
  }
}

const IndexPage = ({ data }: PageProps<DataProps>) => (
  <Layout>
    {data.homepage.blocks.map(block => (
      <SectionFactory key={block.id} block={block} />
    ))}
  </Layout>
)

export const query = graphql`
  {
    homepage {
      blocks: content {
        id
        blockType
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
