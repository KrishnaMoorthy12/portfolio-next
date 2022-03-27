import type { AppProps } from 'next/app';
import { MetaInformation } from '../components/MetaInformation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaInformation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
