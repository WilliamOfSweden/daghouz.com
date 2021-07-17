import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TypeScriptLogo from '../../illustrations/brandLogos/typeScriptLogo'
import ReactLogo from '../../illustrations/brandLogos/reactLogo'
import GraphQLLogo from '../../illustrations/brandLogos/graphQLLogo'
import GatsbyLogo from '../../illustrations/brandLogos/gatsbyLogo'
import JAMstackLogo from '../../illustrations/brandLogos/jamStackLogo'
import NetlifyLogo from '../../illustrations/brandLogos/netlifyLogo'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        container: {

            marginBottom: theme.spacing(15),
            marginTop: theme.spacing(15),

        },

        grid: {

            paddingTop: theme.spacing(3.5),

        },

    })

)


const StackSection: FC = () => {

    const classes = useStyles()

    const logos = [

        { 
            key: 0,
            component : <TypeScriptLogo />,
        },
        { 
            key: 1,
            component : <ReactLogo />,
        },
        { 
            key: 2,
            component : <GraphQLLogo />,
        },
        { 
            key: 3,
            component : <GatsbyLogo />,
        },
        { 
            key: 4,
            component : <JAMstackLogo />,
        },
        { 
            key: 5,
            component : <NetlifyLogo />,
        },
    
    ]

    return (

        <Container className={ classes.container } component='section'>

            <Typography component='h2' variant='h2' align='center'>

                Main Tools of Choice

            </Typography>

            <Grid className={ classes.grid } container spacing={ 5 }>

                {

                    logos.map(logo => {

                        return (

                            <Grid item key={ logo.key } xs={ 12 } sm={ 6 } md={ 4 }>

                                { logo.component }
    
                            </Grid>

                        )

                    })

                }

            </Grid>

        </Container>
    
    )

}


export default StackSection
