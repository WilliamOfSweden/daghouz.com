import React from 'react'

import { graphql, PageProps } from 'gatsby'

import { Block, SectionFactory } from '@components/sections/'
import { Layout } from '@components/layout/'
import { Meta } from '@components/Meta/'

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
        ...CtaSection
        ...HomepageHeroSection
        ...HomepageTechSection
        ...IconAndTextGridSection
        ...PartnersSection
        ...WorldMapSection
      }
      id
      seo {
        description
        title
      }
    }
  }
`

export default IndexPage

export const Head = ({ data: { homepage } }: PageProps<DataProps>) => (
  <Meta description={homepage.description} title={homepage.title} />
)
