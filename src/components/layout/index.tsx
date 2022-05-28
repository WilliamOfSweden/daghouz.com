import React, { Fragment, ReactNode, useRef } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { Header } from './header/'
import { MdxComponents } from './mdxComponents'
import { SkipToContentLink } from './skipToContentLink/'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const ref = useRef<HTMLElement>(null)

  const clickHandler = () => {
    if (ref.current) {
      ref.current.tabIndex = -1
      ref.current.focus()
    }
  }

  return (
    <Fragment>
      <SkipToContentLink onClick={clickHandler} />
      <Header />
      <MDXProvider components={MdxComponents}>
        <main ref={ref} id='main-content' style={{ outline: 'none' }}>
          {children}
        </main>
      </MDXProvider>
    </Fragment>
  )
}
