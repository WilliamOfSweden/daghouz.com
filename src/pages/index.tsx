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
        ...CtaSection
        ...HomepageHeroSection
        ...HomepageTechSection
        ...IconAndTextGridSection
        ...WorldMapSection
      }
      id
      seo {
        description
        ogDescription
        ogImageUrl
        ogSeeAlso
        ogTitle
        ogType
        ogUrl
        title
        twitterCard
        twitterCreator
        twitterDescription
        twitterImageUrl
        twitterTitle
        twitterUrl
      }
    }
  }
`

export default IndexPage
