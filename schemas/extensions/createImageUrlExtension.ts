import { Actions } from 'gatsby'

export const createImageUrlExtension = (actions: Actions) => {
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
}
