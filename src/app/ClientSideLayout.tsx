'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { Footer } from '@/components/Footer';
import { TopNavbar } from '@/components/TopNavbar';
import React from 'react';

export function ClientSideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper container">
      <TopNavbar />

      <ProgressProvider
        height="1px"
        color="#fcfcfcec"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>

      <Footer />
    </div>
  );
}
