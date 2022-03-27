import type { AppProps } from 'next/app';
import { GlobalStyles, MetaInformation, ThemeEngine } from '../base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaInformation />
      <ThemeEngine>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeEngine>
    </>
  );
}

export default MyApp;
