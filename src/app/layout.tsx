import type { Metadata } from 'next';

import './globals.css';

import NextTopLoader from 'nextjs-toploader';

import { robotoCondensed, volkhov } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';
import { ScrollTopTopTrigger } from '@/components/shared/scroll-to-top-trigger';

export const metadata: Metadata = {
  icons: {
    icon: 'favicon.png',
  },
  title: 'BIRI World | Bali International Research Institute',
  description:
    "Bali International Research Institute for the World (BiriWorld) is an independent research institute dedicated to enhancing society's understanding of environmental sustainability, education, and conservation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(robotoCondensed.variable, volkhov.variable)}>
        <NextTopLoader color='white' showSpinner={false} />

        <Navbar />
        {children}
        <Footer />

        <ScrollTopTopTrigger />
      </body>
    </html>
  );
}
