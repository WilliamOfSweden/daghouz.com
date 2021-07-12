import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { MDXProvider } from '@mdx-js/react'


interface Props {

    children: ReactNode

}


const MDXheading3: FC<Props> = ({ children }) => <Typography component='h3' gutterBottom variant='h3'>{ children }</Typography>


const MDXheading2: FC<Props> = ({ children }) => <Typography component='h2' variant='h2' paragraph>{ children }</Typography>


const MDXparagraph: FC<Props> = ({ children }) => <Typography component='p' gutterBottom paragraph variant='body2'>{ children }</Typography>


const Layout: FC<Props> = ({ children }) => {

    return (

        <ThemeProvider theme={ theme }>

            <CssBaseline />

            <MDXProvider
                components={{
                    h2: MDXheading2,
                    h3: MDXheading3,
                    p: MDXparagraph,
                }}
            >

                <main>

                    { children }

                </main>
        
            </MDXProvider>
   
        </ThemeProvider>

    )

}


export default Layout
