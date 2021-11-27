import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'
import Fonts from './fonts'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}
    ${Fonts}

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

        .MuiMenuItem-root {
            font-size: 1.4rem;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }
    
`

export default GlobalStyle
