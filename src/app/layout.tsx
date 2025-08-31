import type { Metadata } from 'next';
import React from 'react';
import { Roboto } from 'next/font/google';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/bootstrap-variables.css';
import '@/styles/custom-variables.css';
import '@/styles/global.css';

import { ClientLayout } from '@/app/clientLayout';

const robotoFont = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Alex Burlachenko',
  description: 'Software for your business',
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
