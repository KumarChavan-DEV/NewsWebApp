'use client';

/**
 * Home Page — News Headlines
 *
 * This is the main page. It:
 * 1. Fetches paginated articles from the gateway via Apollo Client
 * 2. Renders them as cards
 * 3. Supports category filtering and pagination
 *
 * useQuery is Apollo's React hook for fetching data.
 * It returns { data, loading, error } — similar to useState + useEffect
 * but specifically designed for GraphQL.
 */

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '@/lib/queries';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';

const CATEGORIES = [
  'all', 'technology', 'politics', 'sports',
  'business', 'health', 'entertainment', 'science',
];

const PAGE_SIZE = 9;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // useQuery sends a GraphQL query to Apollo Client
  // Apollo handles caching, loading state, and re-fetching automatically
  const { data, loading, error } = useQuery(GET_ARTICLES, {
    variables: {
      pagination: { page: currentPage, limit: PAGE_SIZE },
      category: selectedCategory,
    },
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === 'all' ? undefined : category);
    setCurrentPage(1);  // Reset to page 1 when filter changes
  };

  const paginatedData = data?.articles;

  return (
    <div>
      {/* Hero header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Latest Headlines</h1>
        <p className="text-gray-500 mt-2">Stay informed with the latest news</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors capitalize
              ${(cat === 'all' && !selectedCategory) || cat === selectedCategory
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-48 bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-3 bg-gray-200 rounded w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">⚠️ Failed to load articles</p>
          <p className="text-gray-400 text-sm mt-1">{error.message}</p>
          <p className="text-gray-400 text-xs mt-2">Make sure the gateway is running on port 4000</p>
        </div>
      )}

      {/* Articles grid */}
      {paginatedData && (
        <>
          {paginatedData.articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedData.articles.map((article: {
                id: string; title: string; summary: string;
                author: { id: string; username: string }; category: string; imageUrl?: string; publishedAt: string;
              }) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {/* Total count */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Showing {paginatedData.articles.length} of {paginatedData.totalCount} articles
          </p>

          {/* Pagination controls */}
          <Pagination
            currentPage={paginatedData.currentPage}
            totalPages={paginatedData.totalPages}
            hasNextPage={paginatedData.hasNextPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
