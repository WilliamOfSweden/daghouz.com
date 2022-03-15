import React, { Fragment, ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { Header } from './header/'
import { MdxComponents } from './mdxComponents'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <Fragment>
    <Header />
    <MDXProvider components={MdxComponents}>
      <main>{children}</main>
    </MDXProvider>
  </Fragment>
)
