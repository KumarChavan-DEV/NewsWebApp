'use client';

/**
 * Apollo Wrapper — Client Component
 *
 * ApolloProvider must be a Client Component because it uses React context.
 * Next.js Server Components can't use React context directly.
 *
 * By wrapping ApolloProvider in this client component and rendering it
 * in layout.tsx, we get Apollo available everywhere while keeping the
 * root layout as a Server Component.
 */

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
