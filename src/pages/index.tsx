import React, { FC, Fragment } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import AboutSection from '../components/indexPage/aboutSection/'
import FeaturesSection from '../components/indexPage/featuresSection/'
import StackSection from '../components/indexPage/stackSection'
import SEO from '../components/seo'


const IndexPage: FC<PageProps> = () => {

    return (

        <Fragment>

            <SEO />

            <Layout>

                <Masthead />

                <AboutSection />

                <FeaturesSection />

                <StackSection />
            
            </Layout>

        </Fragment>

    )

}


export default IndexPage
