import { useAmp } from 'next/amp';
import Head from 'next/head';

export function MetaInformation() {
  const isAmp = useAmp();

  return (
    <Head>
      <title>Krish</title>
      <meta charSet='utf-8' />
      {!isAmp && <meta name='viewport' content='width=device-width, initial-scale=1' />}
      <meta name='theme-color' content='#7000FF' />
      <meta name='title' content='Krishna Moorthy' />
      <meta
        name='description'
        content='Krishna Moorthy is an aspiring UI/ UX designer & Full stack web developer, interested in designing  and building beautiful and functional websites and web applications.'
      />
      <meta
        name='keywords'
        content='krish, krishna, portfolio, personal website, krishna moorthy'
      />
      <meta name='robots' content='index, follow' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='author' content='Krishna Moorthy' />
    </Head>
  );
}
