import type { Metadata } from 'next';
import Nav from './components/Nav';
import './globals.css';

export const metadata: Metadata = {
  title: 'Climbing Ministry',
  description: 'GCGCNY UniCol 2026 Climbing Ministry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
