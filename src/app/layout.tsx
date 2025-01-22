'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/lib/store/StoreProvider';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { ThemeSelector } from '@/components/common/ThemeSelector';
import { PageNavigateMenu } from '@/components/common/PageNavigateMenu';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>User List Demo</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="bg-primary text-primary-foreground flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">User List Demo</h1>
              <PageNavigateMenu />
            </div>
            <div>
              <ThemeSelector />
            </div>
          </header>

          <ReduxProvider>
            <main className="container mx-auto p-4">{children}</main>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
