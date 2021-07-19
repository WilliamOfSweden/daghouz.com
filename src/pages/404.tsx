import React, { FC, Fragment } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Illustration404 from '../components/illustrations/404illustration'
import Masthead from '../components/404Page/masthead'


const NotFoundPage: FC<PageProps> = () => {

    return (

        <Fragment>

            <SEO title='Page Not Found' />

            <Layout>

                <Masthead />

            </Layout>
            
        </Fragment>
    
    )

}


export default NotFoundPage
