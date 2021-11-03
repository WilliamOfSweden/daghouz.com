import { IGatsbyImageData } from 'gatsby-plugin-image'

export default interface ProjectData {
  clientName: string
  description: {
    markdownNode: {
      childMdx: {
        body: string
      }
    }
  }
  image: {
    gatsbyImageData: IGatsbyImageData
  }
  imageAlt: string
  projectLink: string
}
