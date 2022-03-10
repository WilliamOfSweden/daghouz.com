import React, { Fragment } from 'react'

import { SEO } from '../components/shared/'
import Layout from '../components/layout/'
import {
  Masthead,
  ProjectsSection,
} from '../components/projectsPageComponents/'

const Projects = () => (
  <Fragment>
    <SEO title='Projects' />
    <Layout>
      <Masthead />
      <ProjectsSection />
    </Layout>
  </Fragment>
)

export default Projects
