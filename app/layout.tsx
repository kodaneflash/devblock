import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'DevBlock',
  description: 'Your hub for the latest finance, technology & business.',
  openGraph: {
    title: 'DevBlock',
    description: 'Your hub for the latest finance, technology & business.',
    images: ['/opengraph-image.png'], // Ensure this is the correct path in the public directory
    type: 'website',
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://www.devblock.pro' : 'http://localhost:3000'),
  // Additional metadata options
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Analytics /> {/* Vercel Analytics component */}
          <main className="max-w-2xl mx-auto px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
