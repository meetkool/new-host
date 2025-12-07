import { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Fuse from 'fuse.js';
import EbookGrid from '@/components/ebook/EbookGrid';
import DownloadModal from '@/components/ebook/DownloadModal';
import { ebookApi } from '@/api/ebookApi';
import type { Ebook } from '@/types/ebook';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Search, Loader2, BookOpen, Download, Mail, X } from 'lucide-react';

export default function Ebooks() {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch all ebooks for fuzzy search
  const { data: ebooksData, isLoading, refetch } = useQuery({
    queryKey: ['ebooks'],
    queryFn: () => ebookApi.getEbooks({ page: 1, limit: 1000 }),
  });

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    if (!ebooksData?.data) return null;

    return new Fuse(ebooksData.data, {
      keys: [
        { name: 'name', weight: 2 },
        { name: 'description', weight: 1 },
        { name: 'author', weight: 1.5 },
        { name: 'tags', weight: 1.2 },
        { name: 'category', weight: 1 },
      ],
      threshold: 0.4, // Lower = more strict, Higher = more fuzzy
      includeScore: true,
      minMatchCharLength: 2,
      ignoreLocation: true,
    });
  }, [ebooksData?.data]);

  // Perform fuzzy search
  const searchResults = useMemo(() => {
    if (!ebooksData?.data) return [];

    if (!searchQuery.trim()) {
      return ebooksData.data;
    }

    if (!fuse) return ebooksData.data;

    const results = fuse.search(searchQuery);
    return results.map(result => result.item);
  }, [ebooksData?.data, searchQuery, fuse]);

  // Paginate results
  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResults.slice(startIndex, endIndex);
  }, [searchResults, currentPage]);

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleDownloadClick = (ebook: Ebook) => {
    setSelectedEbook(ebook);
    setShowDownloadModal(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Vercel Style */}
      <section className="relative bg-white py-20 lg:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge - Minimal */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
              Free Resources
            </div>

            {/* Title - Clean typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Free Ebooks for
              <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Your Success</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
              Access high-quality study materials, expert guides, and comprehensive resources to accelerate your learning journey.
            </p>

            {/* CTA Buttons - Vercel style */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                className="h-12 px-6 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all"
                onClick={() => {
                  const ebookSection = document.querySelector('#ebooks-section');
                  ebookSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Browse Ebooks
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm font-medium rounded-lg transition-all"
              >
                Learn More
              </Button>
            </div>

            {/* Stats - Minimal inline */}
            <div className="flex justify-center gap-8 mt-12 text-sm">
              <div className="text-center">
                <div className="font-semibold text-gray-900">100+</div>
                <div className="text-gray-400">Ebooks</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">Free</div>
                <div className="text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">Expert</div>
                <div className="text-gray-400">Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section - Vercel Style */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search Input - Clean minimal */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search ebooks..."
                className="w-full pl-11 pr-10 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-gray-300 focus:ring-0 transition-all placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-gray-500">
                <span className="font-medium text-gray-900">{searchResults.length}</span> results for "{searchQuery}"
              </span>
              <button
                onClick={clearSearch}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content - Vercel Style */}
      <section className="py-12 bg-white" id="ebooks-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Minimal */}
          {!isLoading && searchResults.length > 0 && (
            <div className="mb-10">
              <div className="flex items-end justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    {searchQuery ? 'Search Results' : 'Ebooks'}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {paginatedResults.length} of {searchResults.length} ebooks
                  </p>
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      className="h-9 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-40"
                    >
                      Previous
                    </Button>
                    <span className="px-3 text-sm text-gray-400">
                      {currentPage} / {totalPages}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      className="h-9 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-40"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Ebook Grid */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
              <Loader2 className="h-12 w-12 animate-spin text-[#0b3259]" />
              <p className="text-muted-foreground text-lg">Loading ebooks...</p>
            </div>
          ) : paginatedResults.length > 0 ? (
            <EbookGrid
              ebooks={paginatedResults}
              onDownloadClick={handleDownloadClick}
            />
          ) : searchQuery ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">No ebooks found</h3>
              <p className="text-muted-foreground mb-4">
                No results found for "{searchQuery}"
              </p>
              <Button onClick={clearSearch} variant="outline">
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">No ebooks available</h3>
              <p className="text-muted-foreground">Check back later for new content</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA - Vercel Style */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">
            Stay updated
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Subscribe to get notified when we add new ebooks and learning resources.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-11 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-gray-300 focus:ring-0 transition-all"
              />
            </div>
            <Button
              className="h-[46px] px-6 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Download Modal - Simple, No OTP */}
      {selectedEbook && (
        <DownloadModal
          open={showDownloadModal}
          onClose={() => {
            setShowDownloadModal(false);
            // Refetch to update download counts
            refetch();
          }}
          ebook={selectedEbook}
        />
      )}

      <Footer />
    </div>
  );
}


