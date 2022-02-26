import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ProjectData {
  content: {
    childMdx: {
      body: string
    }
  }
  id: string
  image: {
    gatsbyImageData: IGatsbyImageData
    description: string
  }
  link: string
  title: string
}
