import React, { Fragment, ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'

import Header from './header/'
import MdxComponents from './mdxComponents/'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <MDXProvider components={MdxComponents}>
        <main>{children}</main>
      </MDXProvider>
    </Fragment>
  )
}

export default Layout
