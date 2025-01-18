import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Principal Software Engineer - User List Demo",
  description: "User list demo application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground p-4 flex items-center">
          <img src="/logo.svg" alt="Company Logo" className="h-8 w-8 mr-4" />
          <h1 className="text-xl font-bold">
            Principal Software Engineer - User List Demo
          </h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
