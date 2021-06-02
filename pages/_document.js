import Document, { Html, Head, Main, NextScript } from "next/document";

import { createResolver } from "next-slicezone/resolver";
import { ServerStyleSheets } from '@material-ui/core/styles';
import { apiEndpoint } from "./../sm.json"; // import the endpoint name
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint)[1] //Regex to get repo ID

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

/* This solves the issue with SSR with Next.js which produces the style fragment before the page is rendered.
This clashes with Material UI. Solution provided by Material UI here:
https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
`getInitialProps` belongs to `_document` (instead of `_app`),
it's compatible with server-side generation (SSG).*/
MyDocument.getInitialProps = async (ctx) => {
  /*
  Resolution order
  On the server:
  1. app.getInitialProps
  2. page.getInitialProps
  3. document.getInitialProps
  4. app.render
  5. page.render
  6. document.render

  On the server with error:
  1. document.getInitialProps
  2. app.render
  3. page.render
  4. document.render

  On the client
  1. app.getInitialProps
  2. page.getInitialProps
  3. app.render
  4. page.render
  */
  
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
