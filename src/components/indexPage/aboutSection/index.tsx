import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import theme from '../../../styles/theme'
import Grid from '@material-ui/core/Grid'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        container: {

            marginTop: theme.spacing(15),

        },

        flexContainer: {

            [theme.breakpoints.up('sm')]: {

                flexDirection: 'row-reverse',
                
            },

        },

        flexItem: {

            [theme.breakpoints.up('sm')]: {
            
                padding: theme.spacing(5),

            }

        },

        imageWrapper: {

            display: 'flex',
            alignItems: 'center',

        }

    }),

)


interface MDXparagraphProps {

    children: ReactNode

}


const MDXparagraph: FC<MDXparagraphProps> = ({ children }) => <Typography>{ children }</Typography>


const AboutSection: FC = () => {

    const { mdx: { body, frontmatter: { title } } } = useStaticQuery(graphql`
        query AboutSectionQuery {
            mdx(fileAbsolutePath: {regex: "/indexPage\/aboutSection\/index/"}) {
                frontmatter {
                  title
                }
                body
            }
        }
    `)

    const classes = useStyles()

    return (
            
        <Container className={ classes.container } component='section'>

            <Box borderRadius={ 15 } bgcolor={ theme.palette.primary.main } py={ 2 }>

                <Grid className={ classes.flexContainer } container>

                    <Grid className={ classes.imageWrapper } item xs={ 12 } sm={ 5 } md={ 6 }>

                        <Box borderRadius={ 15 } overflow='hidden' width='100%'>

                            <StaticImage
                                src='../../../images/space.png'
                                alt='Building'
                                loading='eager'
                                formats={ ['auto', 'webp', 'avif'] }
                                placeholder='none'
                                layout='fullWidth'
                            />

                        </Box>

                    </Grid>

                    <Grid item xs={ 12 } sm={ 7 } md={ 6 }>

                        <Box
                            className={ classes.flexItem }
                            display='flex'
                            flexDirection='column'
                            height='100%'
                            justifyContent='center'
                            px={ 2 }
                        >

                        <Typography component='h2' variant='h2' paragraph>{ title }</Typography>

                            <MDXProvider
                                components={{
                                    p: MDXparagraph,
                                }}
                            >

                                <MDXRenderer>{ body }</MDXRenderer>

                            </MDXProvider>

                        </Box>

                    </Grid>

                </Grid>

            </Box>

        </Container>
    
    )

}


export default AboutSection
