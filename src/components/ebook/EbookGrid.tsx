import type { Ebook } from '@/types/ebook';
import EbookCard from './EbookCard';
import { motion } from 'framer-motion';

interface EbookGridProps {
  ebooks: Ebook[];
  onDownloadClick: (ebook: Ebook) => void;
}

export default function EbookGrid({ ebooks, onDownloadClick }: EbookGridProps) {
  if (ebooks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-[400px] text-center"
      >
        <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-4xl">📚</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Ebooks Found</h3>
        <p className="text-gray-500 text-sm max-w-sm">Try adjusting your search or check back later for new content.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {ebooks.map((ebook, index) => (
        <motion.div
          key={ebook._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <EbookCard ebook={ebook} onDownloadClick={onDownloadClick} />
        </motion.div>
      ))}
    </motion.div>
  );
}
