import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'


interface Props {

    description?: string

    title?: string

}


const SEO: FC<Props> = ({

    description,
    title,


}) => {

    const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    siteTitle
                    siteDescription
                }
            }
        }
    `)
  
    return (
    
        <Helmet>
            
            <html lang='en-GB' />

            <meta charSet='UTF-8' />

            <meta name='description' content={ description ? description : data.site.siteMetadata.siteDescription } />

            <title>{ title ? title : data.site.siteMetadata.siteTitle }</title>

            <meta property='og:url' content='https://www.daghouz.com' />
            
            <meta property='og:type' content='website' />
            
            <meta property='og:title' content='William Daghouz | Frontend Developer' />
            
            <meta property='og:description' content='I create blazingly fast and artfully appealing websites and progressive web apps.' />
            
            <meta property='og:image' content='https://daghouz.com/website.png' />

        </Helmet>

    )

}


export default SEO
