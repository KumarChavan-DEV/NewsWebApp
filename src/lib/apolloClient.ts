/**
 * Apollo Client Configuration
 *
 * Apollo Client is the GraphQL client for React. It handles:
 * - Sending queries and mutations to the gateway
 * - Caching responses (so the same query doesn't refetch unnecessarily)
 * - Managing loading/error states
 * - Authentication (attaching the JWT token to requests)
 *
 * How the auth link works:
 * Apollo uses a "link chain" — middleware that processes requests in order.
 * authLink → httpLink
 *   1. authLink reads the token from localStorage
 *   2. Adds it to the Authorization header
 *   3. httpLink sends the actual HTTP request to the gateway
 */

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:4000/graphql';

// HTTP link — the actual network connection to the gateway
const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

// Auth link — middleware that adds the JWT to every request
const authLink = setContext((_, { headers }) => {
  // Read the token stored after login
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

  return {
    headers: {
      ...headers,
      // Only add Authorization header if token exists
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  };
});

// Error link — global error handler for GraphQL and network errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions }) => {
      console.error(`[GraphQL error]: ${message}`);

      // If the server says we're not authenticated, clear the stored token
      if (extensions?.code === 'UNAUTHENTICATED') {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
        }
      }
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// InMemoryCache — stores query results in memory
// This prevents re-fetching the same data unnecessarily
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // Custom merge for paginated articles
        articles: {
          keyArgs: ['category'],  // separate cache per category
          merge(existing, incoming) {
            return incoming;  // always replace (we handle pagination ourselves)
          },
        },
      },
    },
  },
});

// Combine the links: error → auth → http
const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      // 'cache-and-network': show cached data immediately, then update from network
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
