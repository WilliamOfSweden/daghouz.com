import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { StaticImage } from 'gatsby-plugin-image'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import theme from '../../../styles/theme'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

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

        image: {

            display: `block`,

        },

        sant: {

            display: 'flex',
            alignItems: 'center',

        }

    }),

)


const AboutSection: FC = () => {

    const classes = useStyles()

    return (

        <Box component='section' mt={ 15 }>
            
            <Container>

                <Box borderRadius={ 15 } bgcolor={ theme.palette.primary.main } py={ 2 }>

                    <Grid className={ classes.flexContainer } container>

                        <Grid className={ classes.sant } item xs={ 12 } sm={ 5 } md={ 6 }>

                            <Box borderRadius={ 15 } overflow='hidden' width='100%'>

                                <StaticImage
                                    className={ classes.image }
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

                                <Typography component='h2' variant='h2' paragraph>
                                        
                                    About me
                                    
                                </Typography>

                                <Typography component='p' gutterBottom={ false } variant='body1'>
                                    
                                    I'm William Daghouz, a professional freelance web developer living in Norrköping, Sweden. In 2019 I decided to switch careers from law to web development. It's perhaps the best professional decision I've made so far. I now get to work with what i love, mainly creating stunning web experiences. It's the intersection of design and technology that I find so fascinating. Being able to solve problems with efficient and elegant solutions is what drives me in my work life every day.
                                    
                                </Typography>

                            </Box>

                        </Grid>

                    </Grid>

                </Box>

            </Container>

        </Box>
    
    )

}


export default AboutSection
