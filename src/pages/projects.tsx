import React, { Fragment } from 'react'

import SEO from '../components/common/seo'
import Layout from '../components/layout/'
import Masthead from '../components/projectsPage/masthead/'
import ProjectsSection from '../components/projectsPage/projectsSection/'

const ProjectsPage = () => {
  return (
    <Fragment>
      <SEO title='Projects' />
      <Layout>
        <Masthead />
        <ProjectsSection />
      </Layout>
    </Fragment>
  )
}

export default ProjectsPage
