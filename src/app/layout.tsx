'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/lib/store/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Principle Software Engineer - User List Demo</title>
      </head>
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground flex items-center p-4">
          <img src="/logo.svg" alt="Company Logo" className="mr-4 h-8 w-8" />
          <h1 className="text-xl font-bold">Principal Software Engineer - User List Demo</h1>
        </header>
        <ReduxProvider>
          <main className="container mx-auto p-4">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
