import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(20),
        },
        grid: {
            paddingTop: theme.spacing(3.5),
        },
    })
)

interface Props {
    children: ReactNode
}

const GridContainer: FC<Props> = ({ children }) => {
    const classes = useStyles()

    return (
        <Grid className={classes.grid} container spacing={5}>
            {children}
        </Grid>
    )
}

const GridItem: FC<Props> = ({ children }) => (
    <Grid item xs={12} sm={6}>
        {children}
    </Grid>
)

const FeaturesSection: FC = () => {
    const {
        graphCmsPageSection: {
            content: {
                markdownNode: {
                    childMdx: { body },
                },
            },
        },
    } = useStaticQuery(graphql`
        query IndexPageFeaturesSectionQuery {
            graphCmsPageSection(
                title: { eq: "Index Page - Features-section" }
            ) {
                content {
                    markdownNode {
                        childMdx {
                            body
                        }
                    }
                }
            }
        }
    `)

    const classes = useStyles()

    return (
        <Container className={classes.container} component='section'>
            <MDXProvider components={{ ul: GridContainer, li: GridItem }}>
                <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
        </Container>
    )
}

export default FeaturesSection
