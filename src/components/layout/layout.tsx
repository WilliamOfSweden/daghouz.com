import React, { Fragment, ReactNode, useRef } from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { Header, HeaderProps } from '@components/organisms/'
import { SkipToContentLink } from '@components/atoms/'
import * as layoutStyles from './layout.module.css'

interface DataProps {
  contentfulLayout: {
    header: HeaderProps
    skipToContentLinkText: string
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
      skipToContentLinkText,
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
        skipToContentLinkText
      }
    }
  `)

  const ref = useRef<HTMLElement>(null)

  const handleClick = () => {
    if (ref.current) {
      ref.current.tabIndex = -1
      ref.current.focus()
    }
  }

  return (
    <Fragment>
      <SkipToContentLink
        clickHandler={handleClick}
        linkText={skipToContentLinkText}
      />
      <Header navLinks={navLinks} socialMediaLinks={socialMediaLinks} />
      <main className={layoutStyles.main} id='main-content' ref={ref}>
        {children}
      </main>
    </Fragment>
  )
}
