import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Client } from '../prismic-configuration'
import FirebaseContext from '../context/firebase'
import { firebase, FieldValue } from '../lib/firebase'
import { GlobalStyle, theme } from '../styles'

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client()
    const menu = (await client.getSingle('menu')) || {}
    return {
      props: {
        menu: menu
      }
    }
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} menu={props.menu} />
        </ThemeProvider>
      </FirebaseContext.Provider>
    )
  }
}
