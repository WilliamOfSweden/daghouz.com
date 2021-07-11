import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Heading from '../../illustrations/heading'
import Typography from '@material-ui/core/Typography'
import ModalComponent from './modal'
import ContactForm from './contactForm'
import HeroIllustration from '../../illustrations/heroIllustration'


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

        <Container className={ classes.heroSection } component='section'>

            <Grid container>

                <Grid item container alignContent='center' justifyContent='center' xs={ 12 } sm={ 7 } md={ 6 }>

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

            <ContactForm hidden />

        </Container>

    )

}


export default Masthead
