import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../mui-config/theme';
import createEmotionCache from '../mui-config/create-emotion-cache';
import { store } from '../stores/store';
import { Provider } from 'react-redux';
import { NotificationToast } from '@/components';
import { SessionProvider } from 'next-auth/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
          <NotificationToast />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
