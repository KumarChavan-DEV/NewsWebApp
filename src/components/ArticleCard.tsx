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
  categoryColorMap?: Record<string, string>;
}

export default function ArticleCard({ article, categoryColorMap = {} }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const categoryColor = categoryColorMap[article.category] || 'bg-gray-100 text-gray-700';

  return (
    <Link href={`/articles/${article.id}`}>
      <div className="card group cursor-pointer">
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

        <div className="p-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColor}`}>
            {article.category}
          </span>

          <h2 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h2>

          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {article.summary}
          </p>

          <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
            <span>By {article.author?.username}</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
