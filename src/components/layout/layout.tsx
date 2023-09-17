import React, { Fragment, ReactNode, useRef } from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { Header, HeaderProps } from '@components/organisms/'
import * as layoutStyles from './layout.module.css'

interface DataProps {
  contentfulLayout: {
    header: HeaderProps
  }
}

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const {
    contentfulLayout: { header },
  } = useStaticQuery<DataProps>(graphql`
    query Layout {
      contentfulLayout {
        header {
          socialMediaLinks {
            ariaLabel: ariaName
            icon {
              svg {
                content
              }
            }
            id
            link
          }
        }
      }
    }
  `)

  const ref = useRef<HTMLElement>(null)

  return (
    <Fragment>
      <Header socialMediaLinks={header.socialMediaLinks} />
      <main className={layoutStyles.main} id='main-content' ref={ref}>
        {children}
      </main>
    </Fragment>
  )
}
