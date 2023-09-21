import { Actions, Node } from 'gatsby'

export const createBlockTypeExtension = (actions: Actions) => {
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
}
