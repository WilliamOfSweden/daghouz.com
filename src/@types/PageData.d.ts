import { PageProps } from 'gatsby'
import { DefaultSectionData } from './'

export interface PageData extends PageProps {
  data: {
    allGraphCmsPageSection: {
      edges: {
        node: {
          content: DefaultSectionData
          title: string
        }
      }[]
    }
  }
}
