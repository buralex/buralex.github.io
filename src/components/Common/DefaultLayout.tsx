import React, { ReactNode } from 'react';
import Head from 'next/head';

import TopNavbar from './TopNavbar';
import Footer from './Footer';

interface Props {
  children?: ReactNode;
  title?: string;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Uplium</title>
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="any" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Software for your business"></meta>
        {/* <link rel="canonical" href="https://uplium.com" /> */}
      </Head>

      <TopNavbar />

      <div className="pt-5 pb-5" />
      {children}
      <div className="pt-5 pb-5" />

      <Footer />
    </>
  );
};
export const getDefaultLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
