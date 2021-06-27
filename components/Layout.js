import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const StyledMain = styled.main`
  background-color: var(--color-black);
`

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
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

export default Layout
