import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FastForwardIcon from '../../illustrations/icons/fastForwardIcon'
import PriceTagIcon from '../../illustrations/icons/priceTagIcon'
import BoxesIcon from '../../illustrations/icons/boxesIcon'
import GearIcon from '../../illustrations/icons/gearIcon'
import Typography from '@material-ui/core/Typography'


const FeaturesSection: FC = () => {

    return (
    
        <Box component='section' my={ 20 }>

            <Container>

                <Typography component='h2' variant='h2' align='center'>

                    Hallmarks of My Craftmanship

                </Typography>

                <Grid container spacing={ 5 }>

                    <Grid item xs={ 12 } sm={ 6 } lg={ 6 }>

                        <FastForwardIcon />

                        <Typography component='h3' gutterBottom variant='h3'>Performance</Typography>

                        <Typography component='p' gutterBottom paragraph variant='body2'>
                            
                            Performance is extremely important for modern websites and web applications. In fact, according to a <a href='https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf' rel='noreferrer noopener' target='blank'>study</a> made by Google and Deloitte, improving your websites load time by 0.1s can boost conversion rates by 8%. Customers have higher expectations than ever and the use of smartphones is increasing rapidly. That amplifies the need for mobile speed. The competitive gap, between brands who provide great mobile experience and those who don’t, is widening by the day. That is why I put a lot of effort in making every website and web application that I develop blazingly fast.
                            
                        </Typography>

                    </Grid>                    

                    <Grid item xs={ 12 } sm={ 6 } lg={ 6 }>

                        <PriceTagIcon />

                        <Typography component='h3' gutterBottom variant='h3'>Cost efficiency</Typography>

                        <Typography component='p' gutterBottom paragraph variant='body2'>

                            Cost effectiveness is a vital aspect of business maintenance. Traditional website hosting requires you to choose between a shared web host or renting a VPS, which requires monthly payments and maintenance work. This is one of the great advantages of JAMstack. You can host your pages and progressive web apps for a very low cost, even free because of their weight. Additionally, you can use any hosting you like or change it quickly and effortlessly anytime. I can help you choose tailored solutions to hosting integrated with CDN, which will save you alot of money. Money that can be better spent in some other area of your business.
                            
                        </Typography>

                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } lg={ 6 }>

                        <BoxesIcon />

                        <Typography component='h3' gutterBottom variant='h3'>Scalability</Typography>

                        <Typography component='p' gutterBottom paragraph variant='body2'>
                            
                            Scalability is crucial to the life of any web application, or it will simply fail to perform. Business should not have to choose between expensive performant solutions and cheap slow solutions. The goal with the JAMstack approach is to avoid as much server executed code as possible because serving static files is faster and far simpler than executing server-side code. What does this mean for your company? It means that you are able to secure your company's ability to grow without being hampered by its structure or available resources when faced with increased production.
                            
                        </Typography>

                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } lg={ 6 }>

                        <GearIcon />

                        <Typography component='h3' gutterBottom variant='h3'>Security</Typography>

                        <Typography component='p' gutterBottom paragraph variant='body2'>
                            
                            With the traditional approach you usually host you website on a shared or dedicated server. Those servers are far from easy to secure. With the JAMstack architecture, you don’t have an in-built server and a database. Instead, the server-side processes are handled by third-party services (APIs), making it much harder to find vulnerabilities. JAMstack removes the vast majority of security risks that a traditional architecture is prone to having. Websites and web applications built on JAMstack principles are secure by default without costing a fortune.

                        </Typography>

                    </Grid>

                </Grid>

            </Container>
            
        </Box>
    
    )

}


export default FeaturesSection
