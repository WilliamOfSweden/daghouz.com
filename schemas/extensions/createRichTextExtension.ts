import { Actions, Node } from 'gatsby'

export const createRichTextExtension = (actions: Actions) => {
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
}
