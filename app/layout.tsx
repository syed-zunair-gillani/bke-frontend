import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainLayout from './components/main-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elite Flatbed Solutions | Professional Freight Brokerage',
  description: 'Specialized flatbed freight brokerage services with nationwide coverage and dedicated customer support',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}  
        </MainLayout>
      </body>
    </html>
  );
}