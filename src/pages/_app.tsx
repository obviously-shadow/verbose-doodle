import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Layout } from '../components/layout';
import '../styles/global.css';
import { ShellProvider } from '../utils/shellProvider';
import { ThemeProvider } from '../utils/themeProvider';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    localStorage.setItem('visitedAt', new Date().toString());
  }, []);

  return (
    <ThemeProvider>
      <SpeedInsights />
      <ShellProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <title>Umar Khorami | Terminal</title>
        </Head>
        
        <Layout onClick={onClickAnywhere}>
          <Component {...pageProps} inputRef={inputRef} />
        </Layout>
      </ShellProvider>
    </ThemeProvider>
  );
};

export default App;