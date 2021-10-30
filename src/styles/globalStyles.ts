import { createGlobalStyle } from 'styled-components'
import THEME from './theme'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        --primary: ${THEME.palette.primary};
        
        background-color: ${THEME.palette.bg};
        color: ${THEME.palette.text};
        font-family: ${THEME.fonts.body}, Helvetica, Arial, Sans-Serif;
        line-height: 1.5;
        overflow-x: hidden;
        overflow-y: scroll;

        #gatsby-focus-wrapper {
          overflow-x: hidden;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${THEME.fonts.headings}, Arial, Sans-Serif;
        }

        a {
          text-decoration: none;
        }

        .container {
          width: min(${THEME.breakpoints.lg}, 100% - ${THEME.spacing(4)});
          margin-inline: auto;
          
          @media (min-width: ${THEME.breakpoints.sm}) {
            padding-left: ${THEME.spacing(1)};
            padding-right: ${THEME.spacing(1)};
          }
        }

        .desktop-only {
          display: none;

          @media (min-width: ${THEME.breakpoints.sm}) {
            display: inherit
          }
        }
    }
`
