import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Grid from '@material-ui/core/Grid'

import TextWrapper from './textWrapper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectWrapper: {
      marginBottom: theme.spacing(10),
      '&:nth-child(odd)': {
        flexDirection: `row-reverse`,
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(20),
      },
    },
    img: {
      '& > picture > img': {
        borderRadius: `10px`,
      },
    },
  })
)

interface DataProps {
  node: {
    clientName: string
    imageAlt: string
    description: {
      markdownNode: {
        childMdx: {
          body: string
        }
      }
    }
    image: {
      gatsbyImageData: IGatsbyImageData
    }
    projectLink: string
  }
}

const ProjectItem = ({
  node: {
    clientName,
    description: {
      markdownNode: {
        childMdx: { body },
      },
    },
    image: { gatsbyImageData },
    imageAlt,
    projectLink,
  },
}: DataProps) => {
  const classes = useStyles()

  return (
    <Grid
      key={clientName}
      className={classes.projectWrapper}
      container
      spacing={8}
    >
      <Grid item xs={12} md={6}>
        <a
          aria-label='Link to project website.'
          href={`https://${projectLink}`}
          rel='noreferrer noopener'
          target='_blank'
        >
          <GatsbyImage
            className={classes.img}
            alt={imageAlt}
            image={gatsbyImageData}
          />
        </a>
      </Grid>
      <TextWrapper
        body={body}
        clientName={clientName}
        projectLink={projectLink}
      />
    </Grid>
  )
}

export default ProjectItem
