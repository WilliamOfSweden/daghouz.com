import { CreateSchemaCustomizationArgs } from 'gatsby'

import {
  createBlockTypeExtension,
  createImagePassthroughArgsExtension,
  createImageUrlExtension,
  createRichTextExtension,
} from './schemas'
import { createWebpackConfig } from './webpack'

export const onCreateWebpackConfig = createWebpackConfig(__dirname)

export const createSchemaCustomization = async ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  createBlockTypeExtension(actions)
  createImagePassthroughArgsExtension(actions)
  createImageUrlExtension(actions)
  createRichTextExtension(actions)

  actions.createTypes(/* GraphQL */ `
    interface Image implements Node {
      alt: String!
      gatsbyImageData: GatsbyImageData @imagePassthroughArgs
      id: ID!
      url: String!
    }

    interface SEO implements Node {
      description: String!
      id: ID!
      ogDescription: String!
      ogImageUrl: String!
      ogSeeAlso: String!
      ogTitle: String!
      ogType: String!
      ogUrl: String!
      title: String!
      twitterCard: String!
      twitterCreator: String!
      twitterDescription: String!
      twitterImageUrl: String!
      twitterTitle: String!
      twitterUrl: String!
    }

    interface Block implements Node {
      blockType: String!
      id: ID!
    }

    interface Homepage implements Node {
      content: [Block]!
      id: ID!
      seo: SEO!
    }

    interface SubscriptionForm implements Node {
      id: ID!
      emailInputLabelAriaLabel: String!
      buttonAriaLabel: String!
      submitButtonText: String!
    }

    interface CtaSection implements Node & Block {
      blockType: String!
      content: SubscriptionForm
      id: ID!
      heading: String!
      richText: JSON! @richText
    }

    interface HomepageHeroSection implements Node & Block {
      blockType: String!
      buttonText: String!
      heading: String!
      id: ID!
      richText: JSON! @richText
    }

    interface HomepageTechSection implements Node & Block {
      blockType: String!
      buttonLink: String!
      buttonText: String!
      heading: String!
      id: ID!
      image: Image!
      richText: JSON! @richText
    }

    interface IconAndTextItem implements Node {
      heading: String!
      id: ID!
      image: Image!
      richText: JSON! @richText
    }

    interface IconAndTextGridSection implements Node & Block {
      blockType: String!
      content: [IconAndTextItem]!
      heading: String!
      id: ID!
    }

    interface WorldMapSection implements Node & Block {
      blockType: String!
      id: ID!
      richText: JSON! @richText
    }
  `)

  actions.createTypes(/* GraphQL */ `
    type ContentfulAsset implements Node & Image {
      alt: String! @proxy(from: "title")
      id: ID!
      gatsbyImageData: GatsbyImageData
      url: String! @imageUrl
      file: JSON!
      title: String!
    }

    type ContentfulSeo implements Node & SEO @dontInfer {
      description: String!
      id: ID!
      ogDescription: String!
      ogImageUrl: String!
      ogSeeAlso: String!
      ogTitle: String!
      ogType: String!
      ogUrl: String!
      title: String!
      twitterCard: String!
      twitterCreator: String!
      twitterDescription: String!
      twitterImageUrl: String!
      twitterTitle: String!
      twitterUrl: String!
    }

    type ContentfulSubscriptionForm implements Node & SubscriptionForm
      @dontInfer {
      id: ID!
      emailInputLabelAriaLabel: String!
      buttonAriaLabel: String!
      submitButtonText: String!
    }

    type ContentfulCtaSection implements Node & CtaSection & Block @dontInfer {
      blockType: String! @blockType
      content: SubscriptionForm! @link(from: "content___NODE")
      heading: String!
      id: ID!
      richText: JSON! @richText
    }

    type ContentfulHomepageHeroSection implements Node & HomepageHeroSection & Block
      @dontInfer {
      blockType: String! @blockType
      buttonText: String!
      buttonLink: String!
      heading: String!
      id: ID!
      image: Image! @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulHomepageTechSection implements Node & HomepageTechSection & Block
      @dontInfer {
      blockType: String! @blockType
      buttonText: String!
      buttonLink: String!
      heading: String!
      id: ID!
      image: Image! @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulIconAndTextGridSection implements Node & IconAndTextGridSection & Block
      @dontInfer {
      blockType: String! @blockType
      content: [IconAndTextItem]! @link(from: "content___NODE")
      heading: String!
      id: ID!
    }

    type ContentfulIconAndTextItem implements Node & IconAndTextItem
      @dontInfer {
      heading: String!
      id: ID!
      image: Image! @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulWorldMapSection implements Node & WorldMapSection & Block
      @dontInfer {
      blockType: String! @blockType
      id: ID!
      richText: JSON! @richText
    }

    type ContentfulHomepage implements Node & Homepage @dontInfer {
      id: ID!
      content: [Block]! @link(from: "content___NODE")
      seo: SEO! @link(from: "seo___NODE")
    }
  `)
}
