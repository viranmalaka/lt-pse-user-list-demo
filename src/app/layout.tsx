'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/lib/store/StoreProvider';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { MainLayout } from '@/components/common/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>User List Demo</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReduxProvider>
            <MainLayout>
              <main className="container mx-auto p-4">{children}</main>
            </MainLayout>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
