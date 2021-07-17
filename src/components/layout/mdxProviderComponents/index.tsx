import React, { FC, ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'


interface Props {
    
    children: ReactNode

}


const MDXheading1: FC<Props> = ({ children }) => <Typography variant='h1'>{ children }</Typography>


const MDXheading2: FC<Props> = ({ children }) => <Typography variant='h2'>{ children }</Typography>


const MDXheading3: FC<Props> = ({ children }) => <Typography variant='h3'>{ children }</Typography>


const MDXparagraph: FC<Props> = ({ children }) => <Typography component='p' paragraph>{ children }</Typography>


const MDXProviderComponentsObject = {

    h1: MDXheading1,

    h2: MDXheading2,

    h3: MDXheading3,

    p: MDXparagraph,

}


export default MDXProviderComponentsObject
