import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Typography from '@material-ui/core/Typography'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Button from '@material-ui/core/Button'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        btn: {
            [theme.breakpoints.up('sm')]: {
                width: `20px !important`,
            },
        },
        projectWrapper: {
            marginBottom: theme.spacing(5),
            marginTop: theme.spacing(15),
            '&:nth-child(odd)': {
                flexDirection: `row-reverse`,
            },
        },
        image: {
            borderRadius: `10px`,
        },
        textWrapper: {
            [theme.breakpoints.down('md')]: {
                paddingTop: `0 !important`,
            },
        },
    })
)

interface DataProps {
    allGraphCmsProject: {
        edges: {
            node: {
                clientName: string
                imageAlt: string
                description: {
                    markdownNode: {
                        childMdx: {
                            body: string
                        }
                    }
                }
                image: {
                    gatsbyImageData: IGatsbyImageData
                }
                projectLink: string
            }
        }[]
    }
}

const ProjectsSection: FC = () => {
    const {
        allGraphCmsProject: { edges },
    } = useStaticQuery<DataProps>(graphql`
        query ProjectsPageProjectsSectionQuery {
            allGraphCmsProject {
                edges {
                    node {
                        clientName
                        imageAlt
                        description {
                            markdownNode {
                                childMdx {
                                    body
                                }
                            }
                        }
                        image {
                            gatsbyImageData
                        }
                        projectLink
                    }
                }
            }
        }
    `)

    const classes = useStyles()

    return (
        <Container component='section'>
            {edges.map(project => {
                return (
                    <Grid
                        key={project.node.clientName}
                        className={classes.projectWrapper}
                        container
                        spacing={8}
                    >
                        <Grid
                            container
                            alignContent='center'
                            item
                            xs={12}
                            md={6}
                        >
                            <a
                                aria-label='Link to project website.'
                                href={`https://${project.node.projectLink}`}
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                <GatsbyImage
                                    className={classes.image}
                                    alt={project.node.imageAlt}
                                    image={project.node.image.gatsbyImageData}
                                />
                            </a>
                        </Grid>
                        <Grid
                            className={classes.textWrapper}
                            container
                            alignContent='center'
                            item
                            xs={12}
                            md={6}
                        >
                            <Typography variant='h4' component='h2'>
                                {project.node.clientName}
                            </Typography>
                            <MDXRenderer>
                                {
                                    project.node.description.markdownNode
                                        .childMdx.body
                                }
                            </MDXRenderer>
                            <Button
                                aria-label='Link to project website.'
                                className={classes.btn}
                                component='a'
                                color='primary'
                                variant='contained'
                                href={`https://${project.node.projectLink}`}
                                size='large'
                                rel='noreferrer noopener'
                                target='_blank'
                                fullWidth
                            >
                                Visit
                                <OpenInNewIcon style={{ marginLeft: `1rem` }} />
                            </Button>
                        </Grid>
                    </Grid>
                )
            })}
        </Container>
    )
}

export default ProjectsSection
