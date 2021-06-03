import React from 'react'
// import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
// import { Client } from '../prismic-configuration'
import FirebaseContext from '../context/firebase'
import { firebase, FieldValue } from '../lib/firebase'
import { GlobalStyle, theme } from '../styles'

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </FirebaseContext.Provider>
  )
}

export default MyApp
