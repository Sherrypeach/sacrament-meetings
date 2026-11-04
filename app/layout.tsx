import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Merriweather, Source_Sans_3 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// next/font downloads the fonts at build time and serves them from our own domain.
const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const headingFont = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sacrament Meeting Planner | Palermo Ward',
    template: '%s | Palermo Ward',
  },
  description: 'Plan, review, and print sacrament meeting programs for the Palermo Ward.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}