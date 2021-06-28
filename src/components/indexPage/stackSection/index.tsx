import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import JAMstackLogo from '../../illustrations/jamStackLogo'
import GatsbyLogo from '../../illustrations/gatsbyLogo'
import TypeScriptLogo from '../../illustrations/typeScriptLogo'
import ReactLogo from '../../illustrations/reactLogo'
import NetlifyLogo from '../../illustrations/netlifyLogo'
import GraphQLLogo from '../../illustrations/graphQLLogo'


const StackSection: FC = () => {

    return (

        <Box my={ 15 } component='section'>

            <Container>

                <Typography component='h2' variant='h2' align='center'>

                    Main Tools of Choice

                </Typography>

                <Grid container spacing={ 5 }>

                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>

                        <TypeScriptLogo />

                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>

                        <ReactLogo />

                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>

                        <GraphQLLogo />

                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>

                        <GatsbyLogo />

                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>

                        <JAMstackLogo />

                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>

                        <NetlifyLogo />

                    </Grid>

                </Grid>

            </Container>
            
        </Box>
    
    )

}


export default StackSection
