import React, { useEffect } from 'react'
import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader'

import Head from 'next/head'
import '../styles/globals.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css'
import '@ionic/core/css/float-elements.css'
import '@ionic/core/css/text-alignment.css'
import '@ionic/core/css/text-transformation.css'
import '@ionic/core/css/flex-utils.css'
import '@ionic/core/css/display.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ionDefineCustomElements(window)
  })
  return (
    <>
    
      <ion-app>
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Next.js with Ionic</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content fullscreen>
        <Component {...pageProps} />
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <ion-title>Footer</ion-title>
        </ion-toolbar>
      </ion-footer>
      </ion-app>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
    </>
  )

}

export default MyApp
