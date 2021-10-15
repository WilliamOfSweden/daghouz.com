import React, { ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'
import Header from './header'
import MDXProviderComponentsObject from './mdxProviderComponents/'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MDXProvider components={MDXProviderComponentsObject}>
        <main>{children}</main>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout
