import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { GlobalStyle, theme } from '../styles'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Ignite 2021'}</title>
        <link
          rel="preload"
          href="/fonts/Gotham-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Gotham-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Gotham-UltraItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
