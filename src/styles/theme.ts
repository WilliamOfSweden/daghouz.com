import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const PALETTE = {
    bg: '#00003f',
    primary: '#8755eb',
    secondary: `#fff`,
    ternary: '#00bfff',
}

const theme = responsiveFontSizes(
    createTheme({
        overrides: {
            MuiAppBar: {
                colorDefault: {
                    backgroundColor: PALETTE.bg,
                },
            },
            MuiButton: {
                containedPrimary: {
                    letterSpacing: `2px`,
                    minWidth: `250px`,
                },
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
                h2: {
                    fontFamily: `Mulish`,
                    marginBottom: `2rem`,
                    fontWeight: 800,
                },
                h3: {
                    fontFamily: `Mulish`,
                    fontWeight: 700,
                    marginBottom: `1rem`,
                },
                h4: {
                    fontFamily: `Mulish`,
                },
                paragraph: {
                    marginBottom: `2rem`,
                },
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
            },
        },
    })
)

export default theme
