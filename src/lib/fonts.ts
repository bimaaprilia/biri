import { Roboto_Condensed, Volkhov } from 'next/font/google';

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
});

export const volkhov = Volkhov({
  subsets: ['latin'],
  variable: '--font-volkhov',
  weight: ['400', '700'],
});
