import { Actions } from 'gatsby'
import { getGatsbyImageResolver } from 'gatsby-plugin-image/graphql-utils'
import { ObjectTypeComposerArgumentConfigMapDefinition } from 'graphql-compose'

export const createImagePassthroughArgsExtension = (actions: Actions) => {
  actions.createFieldExtension({
    name: 'imagePassthroughArgs',
    extend(options: ObjectTypeComposerArgumentConfigMapDefinition) {
      const { args } = getGatsbyImageResolver(() => null, options)

      return {
        args,
      }
    },
  })
}
