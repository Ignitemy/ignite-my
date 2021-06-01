import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}

    @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham-Light.woff2") format('woff2 supports variations'),
         url("/fonts/Gotham-Light.woff2") format('woff2-variations');
    font-style: normal;
    font-weight: 100 700;
    font-display: swap;
    }

    @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham-Black.woff2") format('woff2 supports variations'),
         url("/fonts/Gotham-Black.woff2") format('woff2-variations');
    font-style: bold;
    font-weight: 100 700;
    font-display: swap;
    }

    @font-face {
    font-family: "Gotham";
    src: url("/fonts/Gotham-UltraItalic.woff2") format('woff2 supports variations'),
         url("/fonts/Gotham-UltraItalic.woff2") format('woff2-variations');
    font-style: italic;
    font-weight: 100 700;
    font-display: swap;
    }

    i { font-style: italic }
    * {
        font-family: "Gotham", sans-serif;
        -webkit-font-smoothing: antialiased;

        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */
        box-sizing: border-box;
    }
    body {
        font-family: "Gotham", sans-serif;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
