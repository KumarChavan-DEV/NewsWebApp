'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">📰 NewsApp</span>
          </Link>

          {/* Navigation links */}
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Headlines
            </Link>
          </div>

          {/* Auth section */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">
                  Hi, <strong>{user?.username}</strong>
                </span>
                <button onClick={handleLogout} className="btn-secondary text-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-gray-600 hover:text-blue-600 text-sm">
                  Login
                </Link>
                <Link href="/auth/register" className="btn-primary text-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
