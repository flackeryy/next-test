import 'assets/css/main.scss'

import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { DEV } from 'config'
import t from 'locales/en/translations.json'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { Toaster } from 'react-hot-toast'
import { SWRConfig } from 'swr'
import { SWRConfiguration } from 'swr'
import createEmotionCache from 'theme/createEmotionCache'
import theme from 'theme/theme'

const swrConfig: SWRConfiguration = {
  revalidateOnFocus: !DEV
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <SWRConfig value={swrConfig}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{t.common.header}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Toaster position="top-right" />

          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SWRConfig>
  )
}
