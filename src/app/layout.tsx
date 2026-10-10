import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { zenMaruGothic, googleSans, univers, antonio, montserrat } from '@/src/lib/fonts';
import styles from '@/src/styles/home.module.css';

export const metadata: Metadata = {
  title: 'VOD',
  description: 'VOD',
  metadataBase: new URL('https://www.ctavkep.com'),
  openGraph: {
    title: 'VOD',
    description: 'VOD',
    url: 'https://vod.com',
    siteName: 'VOD',
    // images: [{ url: '/images/logoblack.png', width: 1075, height: 441 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,  
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${zenMaruGothic.variable} ${univers.variable} ${antonio.variable} ${montserrat.variable} ${googleSans.variable}`}>
        <main className={["flex-grow w-full md:px-24", styles.pageColor].join(" ")}>{children}</main>
      </body>
    </html>
  );
}
