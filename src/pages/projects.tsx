import React, { FC, Fragment } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/projectsPage/masthead'
import SEO from '../components/seo'

const ProjectsPage: FC<PageProps> = () => {
    return (
        <Fragment>
            <SEO title='Projects' />
            <Layout>
                <Masthead />
            </Layout>
        </Fragment>
    )
}

export default ProjectsPage
