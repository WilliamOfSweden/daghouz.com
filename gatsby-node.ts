import {
  CreateSchemaCustomizationArgs,
  CreateWebpackConfigArgs,
  Node,
} from 'gatsby'
import { getGatsbyImageResolver } from 'gatsby-plugin-image/graphql-utils'
import { ObjectTypeComposerArgumentConfigMapDefinition } from 'graphql-compose'
import path from 'path'

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
      },
    },
  })
}

exports.createSchemaCustomization = async ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  actions.createFieldExtension({
    name: 'blockType',
    extend() {
      return {
        resolve(source: Node) {
          return source.internal.type.replace('Contentful', '')
        },
      }
    },
  })

  actions.createFieldExtension({
    name: 'imagePassthroughArgs',
    extend(options: ObjectTypeComposerArgumentConfigMapDefinition) {
      const { args } = getGatsbyImageResolver(() => null, options)
      return {
        args,
      }
    },
  })

  actions.createFieldExtension({
    name: 'imageUrl',
    extend() {
      const addURLSchema = (str: string) => {
        if (str.startsWith('//')) return `https:${str}`

        return str
      }

      return {
        resolve(source: { file: { url: string } }) {
          return addURLSchema(source.file.url)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: 'richText',
    extend() {
      return {
        resolve(source: Node) {
          return source.paragraph
        },
      }
    },
  })

  actions.createTypes(/* GraphQL */ `
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

    interface Image implements Node {
      alt: String!
      gatsbyImageData: GatsbyImageData @imagePassthroughArgs
      id: ID!
      url: String!
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

    interface Homepage implements Node {
      content: [Block]!
      id: ID!
      seo: SEO!
    }

    interface HomepageFeatureItem implements Node {
      heading: String!
      id: ID!
      image: Image!
      richText: JSON! @richText
    }

    interface HomepageFeaturesSection implements Node & Block {
      blockType: String!
      content: [HomepageFeatureItem]!
      heading: String!
      id: ID!
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

    type ContentfulHomepageFeaturesSection implements Node & HomepageFeaturesSection & Block
      @dontInfer {
      blockType: String! @blockType
      content: [HomepageFeatureItem]! @link(from: "content___NODE")
      heading: String!
      id: ID!
    }

    type ContentfulHomepageFeatureItem implements Node & HomepageFeatureItem
      @dontInfer {
      heading: String!
      id: ID!
      image: Image! @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulHomepage implements Node & Homepage @dontInfer {
      id: ID!
      content: [Block]! @link(from: "content___NODE")
      seo: SEO! @link(from: "seo___NODE")
    }
  `)
}
