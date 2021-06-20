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

        &.blur {
            overflow: hidden;

            #content > * {
                filter: blur(4px) brightness(0.5);
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                pointer-events: none;
                user-select: none;
            }
        }
    }
`

export default GlobalStyle
