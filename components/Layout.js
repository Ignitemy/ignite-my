import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const StyledMain = styled.main`
  background-color: var(--color-black);
  min-height: calc(100vh - 190px);
`

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'IGNITEMY2022'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="IGNITE Youth Leadership Summit is a collaboration between NextGen, the Youth Ministry of Damansara Utama Methodist Church, and Scripture Union Peninsular Malaysia. Much like its name, IGNITE seeks to inspire Christian students to be catalysts of change in their schools by sparking influence among Malaysian youths."
        ></meta>
        <meta
          property="og:image"
          content="https://ignitemy.live/images/png/og-image.png"
          width={453}
          height={170}
        />
        <meta property="og:type" content="website" />
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
