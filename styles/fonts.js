import { css } from 'styled-components'

const Fonts = css`
  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Light.woff2') format('woff2');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Black.woff2') format('woff2');
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-UltraItalic.woff2') format('woff2');
    font-style: italic;
    font-weight: normal;
    font-display: swap;
  }
`

export default Fonts
