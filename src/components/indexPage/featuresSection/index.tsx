import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        container: {

            marginTop: theme.spacing(20),

        },

        grid: {

            paddingTop: theme.spacing(3.5),

        }

    }),

)


const FeaturesSection: FC = () => {

    const { allMdx: { edges }, mdx: { frontmatter: { title } } } = useStaticQuery(graphql`
        query FeaturesSectionQuery {
            allMdx(
                sort: {fields: frontmatter___key}
                filter: {fileAbsolutePath: {regex: "/indexPage\/featuresSection\/features/"}}
                ) {
                edges {
                    node {
                        frontmatter {
                            key
                            title
                        }
                        body
                    }
                }
            }
            mdx(fileAbsolutePath: {regex: "indexPage\/featuresSection\/index.mdx/"}) {
                frontmatter {
                  title
                }
            }
        }
    `)

    interface FeatureProps {

        node: {

            frontmatter: {

                key: number

                title: string

            }

            body: string

        }

    }

    const classes = useStyles()

    return (

        <Container className={ classes.container } component='section'>

            <Typography align='center' component='h2' variant='h2'>

                { title }

            </Typography>

            <Grid className={ classes.grid } container spacing={ 5 }>

                {

                    edges.map((feature: FeatureProps) => {

                        const { body, frontmatter: { key } } = feature.node
 
                        return (

                            <Grid key={ key.toString() } item xs={ 12 } sm={ 6 }>

                                <MDXRenderer>{ body }</MDXRenderer>

                            </Grid>               

                        )

                    })

                }

            </Grid>

        </Container>

    )

}


export default FeaturesSection
