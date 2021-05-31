import React from 'react'
import NextApp from 'next/app'
import { Client } from '../prismic-configuration'
import FirebaseContext from '../context/firebase'
import { firebase, FieldValue } from '../lib/firebase'

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
        <Component {...pageProps} menu={props.menu} />
      </FirebaseContext.Provider>
    )
  }
}
