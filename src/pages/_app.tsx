import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { Page } from '@/types';
import NextNProgress from 'nextjs-progressbar';
import { getDefaultLayout } from '@/components/Common/DefaultLayout';
import { Roboto } from 'next/font/google';

const robotoFont = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/app.scss';

type Props = AppProps & {
  Component: NextPage & Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? getDefaultLayout;
  return (
    <div className={`${robotoFont.className} wrapper container`}>
      <NextNProgress
        options={{ showSpinner: false }}
        color="#f8f9fa"
        height={2}
      />
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
