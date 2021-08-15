import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import useStore from '../../../stores/contactModalStore'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Button from '@material-ui/core/Button'
import MyCanvas from './canvas'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        desktopOnly: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'inherit',
            },
        },
        heroSection: {
            paddingTop: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                marginBottom: theme.spacing(10),
            },
            [theme.breakpoints.up('md')]: {
                paddingTop: theme.spacing(0),
            },
        },
        mobileOnly: {
            marginTop: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
    })
)

const Masthead: FC = () => {
    const {
        graphCmsPageSection: {
            content: {
                markdownNode: {
                    childMdx: { body },
                },
            },
        },
    } = useStaticQuery(graphql`
        query ProjectsPageMastheadQuery {
            graphCmsPageSection(title: { eq: "Projects Page - Masthead" }) {
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

    interface StateProps {
        activeContactModal: boolean
        openContactModal: () => void
    }

    const openContactModal = useStore(
        (state: StateProps) => state.openContactModal
    )

    const classes = useStyles()

    return (
        <Container className={classes.heroSection} component='section'>
            <Grid container>
                <Grid
                    item
                    container
                    alignContent='center'
                    justifyContent='center'
                    xs={12}
                    sm={7}
                    md={6}
                >
                    <Box maxWidth={'78ch'} my={`auto`}>
                        <MDXRenderer>{body}</MDXRenderer>
                        <Button
                            className={classes.desktopOnly}
                            color='primary'
                            onClick={openContactModal}
                            variant='contained'
                            size='large'
                        >
                            {'Contact Me'}
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                    <Box position='relative' paddingTop='97.375%'>
                        <MyCanvas />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Masthead
