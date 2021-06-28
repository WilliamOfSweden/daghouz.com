import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Heading from '../../illustrations/heading'
import Typography from '@material-ui/core/Typography'
import HeroIllustration from '../../illustrations/heroIllustration'
import ModalComponent from './modal'
import ContactForm from './contactForm'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        heroSection: {

            paddingTop: theme.spacing(12),

            [theme.breakpoints.up('md')]: {

                paddingTop: theme.spacing(5),

            }

        },

        paragraph: {

            marginBottom: theme.spacing(4),

            [theme.breakpoints.up('sm')]: {

                marginBottom: theme.spacing(6),
                
            },

        },

        subheading: {

            marginBottom: theme.spacing(4),

        },

    }),

)


const Masthead: FC = () => {

    const classes = useStyles()

    return (

        <section className={ classes.heroSection }>

            <Container>

                <Grid container>

                    <Grid item container alignContent={ 'center' } justify={ 'center' } xs={ 12 } sm={ 7 } md={ 6 }>

                        <Box maxWidth={ '80ch' } my={ `auto` }>

                            <Heading />

                            <Typography className={ classes.subheading } component='h1' variant='subtitle1'>
                                    
                                JAMstack Developer
                                
                            </Typography>

                            <Typography className={ classes.paragraph } component='p' gutterBottom variant='body1'>
                                
                                I create blazingly fast and artfully appealing websites and progressive web apps.
                                
                            </Typography>

                            <ModalComponent buttonText='Contact'>

                                <ContactForm />

                            </ModalComponent>

                        </Box>

                    </Grid>

                    <Grid item xs={ 12 } sm={ 5 } md={ 6 }>

                        <HeroIllustration />

                    </Grid>

                </Grid>

                <ModalComponent buttonText='Contact' mobileOnly>

                    <ContactForm />

                </ModalComponent>

            </Container>

            <ContactForm hidden />

        </section>
    
    )

}


export default Masthead
