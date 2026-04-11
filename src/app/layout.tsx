/**
 * Root Layout
 *
 * In Next.js App Router, layout.tsx wraps ALL pages.
 * This is where we put providers that need to be available everywhere:
 * - ApolloProvider: makes Apollo Client available to all components
 * - AuthProvider: makes auth state available to all components
 */

import type { Metadata } from 'next';
import './globals.css';
import { ApolloWrapper } from '@/components/ApolloWrapper';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'NewsApp — Latest Headlines',
  description: 'Stay updated with the latest news from around the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {/*
          ApolloWrapper must be a Client Component (it uses Apollo's React hooks).
          But layout.tsx can be a Server Component — it just renders ApolloWrapper.
        */}
        <ApolloWrapper>
          <AuthProvider>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
          </AuthProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
