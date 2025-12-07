import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText, ArrowUpRight } from 'lucide-react';
import type { Ebook } from '@/types/ebook';
import { API_BASE_URL } from '@/config/api';
import { motion } from 'framer-motion';

interface EbookCardProps {
  ebook: Ebook;
  onDownloadClick: (ebook: Ebook) => void;
}

export default function EbookCard({ ebook, onDownloadClick }: EbookCardProps) {
  const apiBaseUrl = API_BASE_URL?.replace('/api', '') || API_BASE_URL;
  const imageUrl = ebook.image.startsWith('http')
    ? ebook.image
    : `${apiBaseUrl}/uploads/ebook/${ebook.image}`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="group overflow-hidden bg-white border border-gray-200/80 hover:border-gray-300 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={imageUrl}
            alt={ebook.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Tag - Minimal style */}
          {ebook.category && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 shadow-sm">
                {ebook.category}
              </span>
            </div>
          )}

          {/* Featured indicator */}
          {ebook.featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#19a951] text-white shadow-sm">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-5">
          {/* Title */}
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-[#0b3259] transition-colors">
            {ebook.name}
          </h3>

          {/* Author - Minimal */}
          {ebook.author && (
            <p className="text-sm text-gray-500 mb-3 truncate">
              by {ebook.author}
            </p>
          )}

          {/* Meta - Clean inline style */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            {ebook.pageCount && (
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" />
                {ebook.pageCount} pages
              </span>
            )}
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5" />
              {ebook.downloadCount || 0}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {ebook.viewCount || 0}
            </span>
          </div>

          {/* CTA Button - Vercel style */}
          <Button
            onClick={() => onDownloadClick(ebook)}
            className="w-full h-10 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all duration-200 group/btn"
          >
            <span className="flex items-center justify-center gap-2">
              Download
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
