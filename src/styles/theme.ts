const THEME = {
  breakpoints: {
    xs: 0,
    sm: '600px',
    md: '900px',
    lg: '1280px',
    xl: '1536px',
  },
  fonts: {
    body: 'Roboto',
    headings: 'Mulish',
  },
  palette: {
    bg: '#fafafa',
    primary: '#66a6ff',
    secondary: '#00bfff',
    text: `#707070`,
    textAlt: '#dddddd',
    ternary: '#00bfff',
  },
  shapes(num: number) {
    return `${num * 4}px`
  },
  spacing(num: number) {
    return `${num * 8}px`
  },
}

export default THEME
