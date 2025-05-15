
import type { Metadata } from 'next';
import { Inter as Geist } from 'next/font/google'; // Using Inter as Geist is not directly in next/font/google. If Geist is custom, ensure it's set up. For now, using Inter as a proxy for a clean sans-serif.
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Swarobo Hub - Revolutionizing Swarm Robotics',
  description: 'Explore the future of autonomous systems with Swarobo Hub. Discover demos, learn about our mission, and get in touch.',
  icons: {
    icon: '/favicon.ico', // Assuming a favicon might be added later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          geistSans.variable, 
          geistMono.variable
        )}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
