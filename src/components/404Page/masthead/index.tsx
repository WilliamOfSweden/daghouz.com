import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Button from '@material-ui/core/Button'
import Illustration404 from '../../illustrations/404Illustration'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        desktopOnly: {

            display: 'none',

            [theme.breakpoints.up('sm')]: {

                display: 'inline-flex',

            },

        },

        heroSection: {

            paddingTop: theme.spacing(4),

            [theme.breakpoints.up('sm')]: {

                paddingTop: theme.spacing(15),

            }

        },

        mobileOnly: {

            marginTop: theme.spacing(4),

            [theme.breakpoints.up('sm')]: {

                display: 'none',

            },

        },

    }),

)


const Masthead: FC = () => {

    const { graphCmsPageSection: { buttonText, content: { markdownNode: { childMdx: { body } } } } } = useStaticQuery(graphql`
        query NotFoundPageMastheadQuery {
            graphCmsPageSection(title: {eq: "Not Found Page - Masthead"}) {
                buttonText
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

        <Container className={ classes.heroSection } component='section'>

            <Grid container>

                <Grid item container alignContent='center' justifyContent='center' xs={ 12 } sm={ 7 } md={ 6 }>

                    <Box maxWidth={ '78ch' } my={ `auto` }>

                        <MDXRenderer>

                            { body }

                        </MDXRenderer>

                        <Button 
                            className={ classes.desktopOnly }
                            color='primary'
                            component={ Link}
                            // fullWidth={ false }
                            size='large'
                            to='/'
                            variant='contained'
                        >

                            { buttonText }
   
                        </Button>

                    </Box>

                </Grid>

                <Grid item xs={ 12 } sm={ 5 } md={ 6 }>

                    <Illustration404 />

                </Grid>

            </Grid>

            <Button 
                className={ classes.mobileOnly }
                color='primary'
                component={ Link }
                fullWidth
                size='large'
                to='/'
                variant='contained'
            >

                { buttonText }

            </Button>

        </Container>

    )

}


export default Masthead
