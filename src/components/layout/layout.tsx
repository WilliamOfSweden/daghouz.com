import React, { Fragment, ReactNode, useRef } from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { Header, HeaderProps } from '@components/organisms/'
import * as layoutStyles from './layout.module.css'

interface DataProps {
  contentfulLayout: {
    header: HeaderProps
  }
  site: {
    siteMetadata: {
      navLinks: ReadonlyArray<{
        name: string
        to: string
      }>
    }
  }
}

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const {
    contentfulLayout: {
      header: { socialMediaLinks },
    },
    site: {
      siteMetadata: { navLinks },
    },
  } = useStaticQuery<DataProps>(graphql`
    query Layout {
      site {
        siteMetadata {
          navLinks {
            name
            to
          }
        }
      }
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
      <Header navLinks={navLinks} socialMediaLinks={socialMediaLinks} />
      <main className={layoutStyles.main} id='main-content' ref={ref}>
        {children}
      </main>
    </Fragment>
  )
}
