import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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

    * {
    -webkit-font-smoothing: antialiased;
    }

    *,
    *::before,
    *::after {
    box-sizing: content-box;
    }

    ::selection {
    background: #fff7c7; /* WebKit/Blink Browsers */
    }
    ::-moz-selection {
    background: #fff7c7; /* Gecko Browsers */
    }

    /*
    * Globals
    */
    body {
    color: #72767b;
    font-family: "Gotham", sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
    line-height: 28px;
    margin: 0;
    }
    a {
    color: #72767b;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.35px;
    line-height: 28px;
    text-decoration: none;
    }
    p a {
    text-decoration: underline;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-family: "Gotham", sans-serif;
    }
    h1 {
    font-size: 42px;
    font-weight: normal;
    color: #484d52;
    line-height: 52px;
    letter-spacing: 1.14px;
    margin-bottom: 1rem;
    }
    h2,
    h2 a {
    margin-bottom: 1rem;
    color: #484d52;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.85px;
    line-height: 42px;
    }
    h3,
    h3 a {
    margin-bottom: 1rem;
    color: #484d52;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.52px;
    line-height: 34px;
    }
    p,
    pre,
    ul,
    ol {
    margin-bottom: 2rem;
    }
    ul {
    padding-left: 35px;
    list-style: initial;
    }
    ol {
    padding-left: 35px;
    list-style: decimal;
    }
    strong {
    font-weight: bold;
    }
    em {
    font-style: italic;
    }
    img {
    max-width: 100%;
    }

    /* General */
    header,
    footer {
    max-width: 980px;
    margin: auto;
    }
    .container {
    max-width: 980px;
    margin: auto;
    margin-bottom: 3.75rem;
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 32px;
            line-height: 40px;
        }
        h2 {
            font-size: 26px;
        }
        h3 {
            font-size: 18px;
        }
        ul {
            padding-left: 20px;
        }
    }
`;

export default GlobalStyle;
