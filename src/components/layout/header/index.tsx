import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import { Link } from 'gatsby'
import Logo from '../../illustrations/logo'
import LinkedInIcon from '../../illustrations/icons/social/linkedInIcon'
import GitHubIcon from '../../illustrations/icons/social/githubIcon'
import TwitterIcon from '../../illustrations/icons/social/twitterIcon'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        mainHeader: {

            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2),

        },

        socialIcons: {

            marginRight: `1rem`,

        }

    }),

)


const Header: FC = () => {

    const classes = useStyles()
    
    return (
    
        <AppBar
            className={ classes.mainHeader }
            color='default'
            elevation={ 0 }
            position='static'
        >

            <Container>

                <Link
                    aria-label='Link to main page.'
                    className={ classes.socialIcons } to='/'
                >

                    <Logo />

                </Link>

                <a
                    aria-label='Link to Linkedin account.'
                    className={ classes.socialIcons }
                    href='https://linkedin.com/in/william-daghouz/'
                    rel='noreferrer noopener'
                    target='_blank'
                >

                    <LinkedInIcon />

                </a>

                <a
                    aria-label='Link to GitHub account.'
                    className={ classes.socialIcons }
                    href='https://github.com/WilliamOfSweden/'
                    rel='noreferrer noopener'
                    target='_blank'
                >

                    <GitHubIcon />

                </a>

                <a
                    aria-label='Link to Twitter account.'
                    className={ classes.socialIcons }
                    href='https://twitter.com/WilliamDaghouz/'
                    rel='noreferrer noopener'
                    target='_blank'
                >

                    <TwitterIcon />

                </a>

            </Container>
            
        </AppBar>
    
    )

}


export default Header
