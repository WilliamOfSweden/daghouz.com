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
    interface Block implements Node {
      blockType: String
      id: ID!
    }

    interface Image implements Node {
      alt: String
      gatsbyImageData: GatsbyImageData @imagePassthroughArgs
      id: ID!
      url: String
    }

    interface SubscriptionForm implements Node {
      id: ID!
      emailInputLabelAriaLabel: String!
      buttonAriaLabel: String!
      submitButtonText: String!
    }

    interface CtaSection implements Node & Block {
      blockType: String
      content: SubscriptionForm
      id: ID!
      heading: String!
      richText: JSON! @richText
    }

    interface HomepageHeroSection implements Node & Block {
      blockType: String
      buttonText: String!
      heading: String!
      id: ID!
      richText: JSON! @richText
    }

    interface HomepageTechSection implements Node & Block {
      blockType: String
      buttonLink: String!
      buttonText: String!
      heading: String!
      id: ID!
      image: Image
      richText: JSON! @richText
    }

    interface Homepage implements Node {
      content: [Block]
      description: String
      id: ID!
      image: Image
      title: String
    }

    interface HomepageFeatureItem implements Node {
      heading: String
      id: ID!
      image: Image
      richText: JSON! @richText
    }

    interface HomepageFeaturesSection implements Node & Block {
      content: [HomepageFeatureItem]
      blockType: String
      heading: String!
      id: ID!
    }

    interface ProjectsPage implements Node {
      content: [Block]
      description: String
      id: ID!
      image: Image
      title: String
    }

    interface ProjectsPageHeroSection implements Node & Block {
      blockType: String
      buttonLink: String!
      buttonText: String!
      heading: String!
      id: ID!
      image: Image
      richText: JSON! @richText
    }

    interface ProjectsPageProjectItem implements Node {
      ariaLabel: String!
      heading: String
      id: ID!
      image: Image
      link: String!
      richText: JSON! @richText
    }

    interface ProjectsPageProjectsSection implements Node & Block {
      blockType: String
      buttonText: String!
      content: [ProjectsPageProjectItem]
      id: ID!
    }

    interface ContactPage implements Node {
      content: [Block]
      description: String
      id: ID!
      image: Image
      title: String
    }

    interface ContactPageHeroSection implements Node & Block {
      blockType: String
      content: ContactForm
      id: ID!
      image: Image
    }

    interface ContactForm implements Node {
      id: ID!
      companyInputLabelText: String!
      emailInputLabelText: String!
      messageInputLabelText: String!
      nameInputLabelText: String!
      submitButtonText: String!
    }

    interface NotFoundPage implements Node {
      content: [Block]
      description: String
      id: ID!
      image: Image
      title: String
    }

    interface NotFoundPageHeroSection implements Node & Block {
      blockType: String
      buttonLink: String!
      buttonText: String!
      heading: String!
      id: ID!
      richText: JSON! @richText
    }
  `)

  actions.createTypes(/* GraphQL */ `
    type ContentfulAsset implements Node & Image {
      alt: String @proxy(from: "title")
      id: ID!
      gatsbyImageData: GatsbyImageData
      url: String @imageUrl
      file: JSON
      title: String
    }

    type ContentfulSubscriptionForm implements Node & SubscriptionForm
      @dontInfer {
      id: ID!
      emailInputLabelAriaLabel: String!
      buttonAriaLabel: String!
      submitButtonText: String!
    }

    type ContentfulCtaSection implements Node & CtaSection & Block @dontInfer {
      blockType: String @blockType
      content: SubscriptionForm @link(from: "content___NODE")
      heading: String!
      id: ID!
      richText: JSON! @richText
    }

    type ContentfulHomepageHeroSection implements Node & HomepageHeroSection & Block
      @dontInfer {
      blockType: String @blockType
      buttonText: String!
      buttonLink: String!
      heading: String!
      id: ID!
      image: Image @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulHomepageTechSection implements Node & HomepageTechSection & Block
      @dontInfer {
      blockType: String @blockType
      buttonText: String!
      buttonLink: String!
      heading: String!
      id: ID!
      image: Image @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulHomepageFeaturesSection implements Node & HomepageFeaturesSection & Block
      @dontInfer {
      blockType: String @blockType
      content: [HomepageFeatureItem] @link(from: "content___NODE")
      heading: String!
      id: ID!
    }

    type ContentfulHomepageFeatureItem implements Node & HomepageFeatureItem
      @dontInfer {
      heading: String
      id: ID!
      image: Image @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulHomepage implements Node & Homepage @dontInfer {
      id: ID!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      content: [Block] @link(from: "content___NODE")
    }
  `)

  actions.createTypes(/* GraphQL */ `
    type ContentfulProjectsPageHeroSection implements Node & ProjectsPageHeroSection & Block
      @dontInfer {
      blockType: String @blockType
      buttonText: String!
      buttonLink: String!
      heading: String!
      id: ID!
      image: Image @link(from: "image___NODE")
      richText: JSON! @richText
    }

    type ContentfulProjectsPage implements Node & ProjectsPage @dontInfer {
      id: ID!
      content: [Block] @link(from: "content___NODE")
      description: String
      image: Image @link(from: "image___NODE")
      title: String
    }

    type ContentfulProjectsPageProjectItem implements Node & ProjectsPageProjectItem
      @dontInfer {
      ariaLabel: String!
      heading: String!
      id: ID!
      image: Image @link(from: "image___NODE")
      link: String!
      richText: JSON! @richText
    }

    type ContentfulProjectsPageProjectsSection implements Node & ProjectsPageProjectsSection & Block
      @dontInfer {
      blockType: String @blockType
      buttonText: String!
      content: [ProjectsPageProjectItem] @link(from: "content___NODE")
      id: ID!
    }
  `)

  actions.createTypes(/* GraphQL */ `
    type ContentfulContactPage implements Node & ContactPage @dontInfer {
      id: ID!
      content: [Block] @link(from: "content___NODE")
      description: String
      image: Image @link(from: "image___NODE")
      title: String
    }

    type ContentfulContactPageHeroSection implements Node & ContactPageHeroSection & Block
      @dontInfer {
      blockType: String @blockType
      content: ContactForm @link(from: "content___NODE")
      id: ID!
      image: Image @link(from: "image___NODE")
    }

    type ContentfulContactForm implements Node & ContactForm @dontInfer {
      id: ID!
      companyInputLabelText: String!
      emailInputLabelText: String!
      messageInputLabelText: String!
      nameInputLabelText: String!
      submitButtonText: String!
    }
  `)

  actions.createTypes(/* GraphQL */ `
    type ContentfulNotFoundPage implements Node & NotFoundPage @dontInfer {
      content: [Block] @link(from: "content___NODE")
      description: String
      id: ID!
      image: Image @link(from: "image___NODE")
      title: String
    }

    type ContentfulNotFoundPageHeroSection implements Node & NotFoundPageHeroSection & Block
      @dontInfer {
      blockType: String @blockType
      buttonText: String!
      buttonLink: String!
      heading: String!
      id: ID!
      richText: JSON! @richText
    }
  `)
}
