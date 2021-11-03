import React, { Fragment, ReactNode } from 'react'
import GlobalStyle from '../../styles/globalStyles'
import { MDXProvider } from '@mdx-js/react'

import Header from './header/'
import MdxComponents from './mdxComponents/'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <MDXProvider components={MdxComponents}>
        <main>{children}</main>
      </MDXProvider>
    </Fragment>
  )
}

export default Layout
