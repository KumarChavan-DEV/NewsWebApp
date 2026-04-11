'use client';

/**
 * Article Detail Page
 *
 * Next.js dynamic routes: [id] in the folder name means this page
 * handles any URL like /articles/abc123
 * The id is available via useParams() hook.
 */

import { useQuery } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import { GET_ARTICLE } from '@/lib/queries';

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data, loading, error } = useQuery(GET_ARTICLE, {
    variables: { id },
  });

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data?.article) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">Article not found</p>
        <button onClick={() => router.back()} className="btn-secondary mt-4">
          ← Go Back
        </button>
      </div>
    );
  }

  const article = data.article;
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-3xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-1 text-sm"
      >
        ← Back to headlines
      </button>

      {/* Category badge */}
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 capitalize">
        {article.category}
      </span>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
        {article.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        <span>By <strong className="text-gray-700">{article.author?.username}</strong></span>
        <span>·</span>
        <span>{formattedDate}</span>
      </div>

      {/* Image */}
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 object-cover rounded-xl mt-6"
        />
      )}

      {/* Summary */}
      <p className="mt-6 text-lg text-gray-600 font-medium leading-relaxed border-l-4 border-blue-500 pl-4">
        {article.summary}
      </p>

      {/* Content */}
      <div className="mt-6 prose prose-gray max-w-none">
        {article.content.split('\n').map((paragraph: string, i: number) => (
          paragraph.trim() ? (
            <p key={i} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ) : null
        ))}
      </div>
    </article>
  );
}
