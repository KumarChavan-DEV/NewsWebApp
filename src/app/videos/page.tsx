'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { GET_VIDEOS, GET_CATEGORIES } from '@/lib/queries';
import VideoPlayer from '@/components/VideoPlayer';

interface Video {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  videoType: 'mp4' | 'hls' | 'youtube';
  thumbnailUrl?: string;
  category: string;
  duration?: string;
  publishedAt: string;
}

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [isPip, setIsPip] = useState(false);
  const [pipDismissed, setPipDismissed] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const { data: catData } = useQuery(GET_CATEGORIES);
  const { data, loading } = useQuery(GET_VIDEOS, {
    variables: {
      pagination: { page: 1, limit: 50 },
      ...(category ? { category } : {}),
    },
  });

  const videos: Video[] = data?.videos?.videos || [];
  const categories = catData?.categories || [];
  const categoryColorMap: Record<string, string> = {};
  categories.forEach((c: { name: string; color: string }) => {
    categoryColorMap[c.name] = c.color;
  });

  // Set first video as active when data loads
  useEffect(() => {
    if (videos.length > 0 && !activeVideo) {
      setActiveVideo(videos[0]);
    }
  }, [videos, activeVideo]);

  // Reset active video when category changes
  useEffect(() => {
    setActiveVideo(null);
  }, [category]);

  // IntersectionObserver for PIP mode — watches the sentinel placeholder
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (!entry.isIntersecting && activeVideo) {
        setIsPip(true);
      } else {
        setIsPip(false);
        setPipDismissed(false);
      }
    },
    [activeVideo]
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [observerCallback]);

  const handleVideoClick = (video: Video) => {
    setActiveVideo(video);
    setPipDismissed(false);
    if (isPip && sentinelRef.current) {
      sentinelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClosePip = () => {
    setPipDismissed(true);
  };

  const handleBackToMain = () => {
    setPipDismissed(false);
    sentinelRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const showPip = isPip && activeVideo && !pipDismissed;

  // The player wrapper classes — this is the key: ONE element, CSS moves it
  const playerWrapperClasses = showPip
    ? 'fixed bottom-4 right-4 w-96 z-50 shadow-2xl rounded-xl overflow-hidden border border-gray-700 bg-black animate-slide-in'
    : 'relative w-full aspect-video bg-black rounded-xl overflow-hidden';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Videos</h1>

      {/* Category Filter Tabs — above the player */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((cat: { name: string; color: string }) => (
          <button
            key={cat.name}
            onClick={() => setCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === cat.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
          </button>
        ))}
      </div>

      {/* Sentinel — always in the main player area to track scroll position */}
      <div ref={sentinelRef} className="mb-8">
        {activeVideo ? (
          <div>
            {/* When in PIP mode, show placeholder in main area */}
            {isPip && (
              <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Playing in mini player</p>
                  <button
                    onClick={handleBackToMain}
                    className="mt-2 text-blue-400 hover:text-blue-300 text-sm underline"
                  >
                    Back to full player
                  </button>
                </div>
              </div>
            )}

            {/*
              SINGLE player container — CSS moves it between inline and fixed PIP.
              The <video> element is NEVER destroyed, so playback continues seamlessly.
            */}
            <div className={playerWrapperClasses}>
              <div className="relative aspect-video">
                <VideoPlayer
                  key={activeVideo.id}
                  videoUrl={activeVideo.videoUrl}
                  videoType={activeVideo.videoType}
                  title={activeVideo.title}
                  autoPlay
                />
              </div>

              {/* PIP overlay controls — only visible in PIP mode */}
              {showPip && (
                <>
                  <div className="absolute top-2 right-2 flex gap-1.5 z-10">
                    <button
                      onClick={handleBackToMain}
                      className="bg-black/70 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs hover:bg-black/90 transition-colors"
                      title="Back to main player"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleClosePip}
                      className="bg-black/70 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs hover:bg-black/90 transition-colors"
                      title="Close mini player"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-gray-900 px-3 py-2">
                    <p className="text-sm font-medium text-white truncate">
                      {activeVideo.title}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Video info — always in the main area */}
            <div className="mt-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {activeVideo.title}
              </h2>
              <div className="flex items-center gap-3 mt-1">
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    categoryColorMap[activeVideo.category] ||
                    'bg-gray-100 text-gray-700'
                  }`}
                >
                  {activeVideo.category}
                </span>
                {activeVideo.duration && (
                  <span className="text-sm text-gray-500">
                    {activeVideo.duration}
                  </span>
                )}
                <span className="text-sm text-gray-400">
                  {new Date(
                    Number(activeVideo.publishedAt)
                  ).toLocaleDateString()}
                </span>
              </div>
              {activeVideo.description && (
                <p className="text-gray-600 mt-2 text-sm">
                  {activeVideo.description}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">
              {loading ? 'Loading...' : 'No videos available'}
            </p>
          </div>
        )}
      </div>

      {/* Video Grid */}
      {loading && (
        <div className="text-center py-12 text-gray-500">Loading videos...</div>
      )}

      {!loading && videos.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">
            No videos found{category ? ` in "${category}"` : ''}.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => handleVideoClick(video)}
            className={`cursor-pointer rounded-xl overflow-hidden border transition-all hover:shadow-lg ${
              activeVideo?.id === video.id
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200'
            }`}
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-100 relative">
              {video.thumbnailUrl ? (
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
              {video.duration && (
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              )}
              <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded uppercase">
                {video.videoType}
              </span>
            </div>
            {/* Info */}
            <div className="p-3">
              <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    categoryColorMap[video.category] ||
                    'bg-gray-100 text-gray-700'
                  }`}
                >
                  {video.category}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(Number(video.publishedAt)).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
