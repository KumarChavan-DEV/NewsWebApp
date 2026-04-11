'use client';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { CREATE_ARTICLE, GET_ARTICLES } from '@/lib/queries';
import { useAuth } from '@/context/AuthContext';

const CATEGORIES = ['technology', 'politics', 'sports', 'business', 'health', 'entertainment', 'science', 'general'];

export default function CreateArticlePage() {
  const { isAdmin, isAuthenticated } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    content: '',
    summary: '',
    author: '',
    category: 'general',
    imageUrl: '',
  });
  const [formError, setFormError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // useMutation also lets you refetch queries after a mutation succeeds
  const [createArticle, { loading }] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [{ query: GET_ARTICLES, variables: { pagination: { page: 1, limit: 9 } } }],
    onCompleted: (data) => {
      setSuccessMsg(`Article "${data.createArticle.title}" created!`);
      setTimeout(() => router.push('/'), 1500);
    },
    onError: (err) => setFormError(err.message),
  });

  // Redirect non-admins
  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">⛔ Admin access required</p>
        <button onClick={() => router.push('/')} className="btn-secondary mt-4">
          Go Home
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!form.title || !form.content || !form.summary || !form.author) {
      setFormError('Please fill in all required fields');
      return;
    }

    createArticle({
      variables: {
        input: {
          ...form,
          imageUrl: form.imageUrl || undefined,
        },
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Article</h1>

      {formError && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 mb-4">
          {formError}
        </div>
      )}

      {successMsg && (
        <div className="bg-green-50 border border-green-200 text-green-600 rounded-lg px-4 py-3 mb-4">
          ✅ {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input name="title" value={form.title} onChange={handleChange}
            className="input-field" placeholder="Enter article title" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
          <input name="author" value={form.author} onChange={handleChange}
            className="input-field" placeholder="Author name" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
          <select name="category" value={form.category} onChange={handleChange} className="input-field">
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat} className="capitalize">{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (optional)</label>
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange}
            className="input-field" placeholder="https://..." type="url" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Summary * (max 500 chars)</label>
          <textarea name="summary" value={form.summary} onChange={handleChange}
            className="input-field resize-none" rows={3}
            placeholder="Brief summary of the article..." required maxLength={500} />
          <p className="text-xs text-gray-400 mt-1">{form.summary.length}/500</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
          <textarea name="content" value={form.content} onChange={handleChange}
            className="input-field resize-none" rows={10}
            placeholder="Full article content..." required />
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={loading} className="btn-primary flex-1">
            {loading ? 'Publishing...' : 'Publish Article'}
          </button>
          <button type="button" onClick={() => router.back()} className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
