import { useAmp } from 'next/amp';
import Head from 'next/head';
import { ThemeEngine } from '../theme/ThemeEngine';
import strings from './strings.json';

export function MetaInformation() {
  const isAmp = useAmp();

  return (
    <Head>
      <title>{strings.displayName}</title>
      <meta charSet='utf-8' />
      {!isAmp && <meta name='viewport' content='width=device-width, initial-scale=1' />}
      <meta name='theme-color' content={ThemeEngine.getRawValues().colors.primary.dark} />
      <meta name='title' content={strings.name} />
      <meta name='description' content={strings.description} />
      <meta name='keywords' content={strings.keywords.join(', ')} />
      <meta name='robots' content='index, follow' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content={strings.language} />
      <meta name='author' content={strings.name} />
    </Head>
  );
}
