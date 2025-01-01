import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WNRS - We\'re Not Really Strangers',
  description: 'A digital adaptation of the WNRS card game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
