import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'


const PALETTE = {

    bg: '#00003f',
    primary: '#8755eb',
    secondary: `#fff`,
    ternary: '#00bfff',

}


const theme = responsiveFontSizes(createTheme({

    overrides: {

        MuiButton: {

            containedPrimary: {

                letterSpacing: `2px`,
                minWidth: `250px`,

            }

        },
        
        MuiCssBaseline: {
            
            '@global': {

                body: {

                    overflowY: `scroll`,
                    overflowX: `hidden`,

                },

                '#gatsby-focus-wrapper': {

                    overflowX: `hidden`,

                },

                a: {

                    color: PALETTE.ternary,
                    textDecoration: `none`,
    
                },

            },

        },

        MuiTypography: {

            body1: {

                fontSize: `17px`,

            },

            h1: {

                fontFamily: `Comfortaa`,
                fontSize: `calc(0.9rem + 2.3vw) !important`,
                fontWeight: 600,
                letterSpacing: `4px`

            },

            h2: {

                fontFamily: `Comfortaa`,
                fontSize: `calc(1.3rem + 1.3vw) !important`,
                marginBottom: `3rem`,

            },

            h3: {

                fontFamily: `Comfortaa`,
                fontSize: `calc(1rem + 0.67vw) !important`,
                fontWeight: 600,

            },

            h4: {

                fontFamily: `Comfortaa`,

            },

            subtitle1: {

                fontFamily: `Comfortaa`,
                fontSize: `calc(1.1rem + 1.1vw) !important`,
                letterSpacing: `3px`,
                marginBottom: `0.33rem`,

            }

        },

    },

    palette: {

        type: 'dark',
        
        primary: {

            main: PALETTE.primary,

        },

        secondary: {

            main: PALETTE.secondary,

        },

        background: {

            default: PALETTE.bg,

        }
      
    },

}))


export default theme
