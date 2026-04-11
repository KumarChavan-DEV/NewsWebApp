import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  summary: string;
  author: { id: string; username: string };
  category: string;
  imageUrl?: string | null;
  publishedAt: string;
}

interface ArticleCardProps {
  article: Article;
}

const categoryColors: Record<string, string> = {
  technology: 'bg-blue-100 text-blue-700',
  politics: 'bg-red-100 text-red-700',
  sports: 'bg-green-100 text-green-700',
  business: 'bg-yellow-100 text-yellow-700',
  health: 'bg-pink-100 text-pink-700',
  entertainment: 'bg-purple-100 text-purple-700',
  science: 'bg-indigo-100 text-indigo-700',
  general: 'bg-gray-100 text-gray-700',
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const categoryColor = categoryColors[article.category] || categoryColors.general;

  return (
    <Link href={`/articles/${article.id}`}>
      <div className="card group cursor-pointer">
        {/* Article image */}
        <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl opacity-30">
              📰
            </div>
          )}
        </div>

        {/* Article content */}
        <div className="p-4">
          {/* Category badge */}
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColor}`}>
            {article.category}
          </span>

          {/* Title */}
          <h2 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h2>

          {/* Summary */}
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {article.summary}
          </p>

          {/* Meta */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
            <span>By {article.author?.username}</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
