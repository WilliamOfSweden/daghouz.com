import { CreateSchemaCustomizationArgs, Node } from 'gatsby'
import { getGatsbyImageResolver } from 'gatsby-plugin-image/graphql-utils'
import { ObjectTypeComposerArgumentConfigMapDefinition } from 'graphql-compose'

exports.createSchemaCustomization = async ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  actions.createFieldExtension({
    name: 'blocktype',
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
      blocktype: String
      id: ID!
    }

    interface HomepageHeroSection implements Node & Block {
      blocktype: String
      buttonText: String!
      heading: String!
      id: ID!
      richText: JSON! @richText
    }

    interface Homepage implements Node {
      content: [Block]
      description: String
      id: ID!
      image: HomepageImage
      title: String
    }
  `)

  actions.createTypes(/* GraphQL */ `
    type ContentfulHomepageHeroSection implements Node & HomepageHeroSection & Block
      @dontInfer {
      blocktype: String @blocktype
      buttonText: String!
      heading: String!
      id: ID!
      richText: JSON! @richText
    }
  `)
}
