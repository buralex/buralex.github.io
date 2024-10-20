'use client';
import Footer from '@/components/Common/Footer';
import TopNavbar from '@/components/Common/TopNavbar';
import React from 'react';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper container">
      <TopNavbar />

      <div className="pt-5 pb-5" />
      {children}
      <div className="pt-5 pb-5" />

      <Footer />
    </div>
  );
}
