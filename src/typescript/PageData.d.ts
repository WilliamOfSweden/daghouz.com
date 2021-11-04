import { PageProps } from 'gatsby'
import { MastheadData } from './'

export default interface PageData extends PageProps {
  data: {
    allGraphCmsPageSection: {
      edges: {
        node: {
          content: MastheadData
          title: string
        }
      }[]
    }
  }
}
