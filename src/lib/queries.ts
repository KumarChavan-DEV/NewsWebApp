/**
 * GraphQL Queries and Mutations
 *
 * All GraphQL operations are defined here in one place.
 * The `gql` template tag parses the query string into an AST
 * that Apollo Client can understand.
 *
 * Good practice: define all queries in a central file and import them
 * into components. This makes it easy to see what data each component needs.
 */

import { gql } from '@apollo/client';

// ─────────────────────────────────────────────
// NEWS QUERIES
// ─────────────────────────────────────────────

export const GET_ARTICLES = gql`
  query GetArticles($pagination: PaginationInput, $category: String) {
    articles(pagination: $pagination, category: $category) {
      articles {
        id
        title
        summary
        author { id username }
        category
        imageUrl
        publishedAt
      }
      totalCount
      currentPage
      totalPages
      hasNextPage
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      id
      title
      content
      summary
      author { id username }
      category
      imageUrl
      publishedAt
      createdAt
    }
  }
`;

export const SEARCH_ARTICLES = gql`
  query SearchArticles($keyword: String!, $pagination: PaginationInput) {
    searchArticles(keyword: $keyword, pagination: $pagination) {
      articles {
        id
        title
        summary
        author { id username }
        category
        publishedAt
      }
      totalCount
      currentPage
      totalPages
      hasNextPage
    }
  }
`;

// ─────────────────────────────────────────────
// USER QUERIES & MUTATIONS
// ─────────────────────────────────────────────

export const GET_ME = gql`
  query GetMe {
    me {
      id
      email
      username
      role
      createdAt
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        username
        role
      }
    }
  }
`;

export const REGISTER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        email
        username
        role
      }
    }
  }
`;
