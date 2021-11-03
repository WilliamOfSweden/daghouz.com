import { PageProps } from 'gatsby'
import { SectionData } from './'

export default interface PageData extends PageProps {
  data: {
    allGraphCmsPageSection: {
      edges: {
        node: {
          content: SectionData
          title: string
        }
      }[]
    }
  }
}
