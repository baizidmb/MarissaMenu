import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types/menu';

interface BackToTopButtonProps {
  lang?: Language;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({ lang = 'ro' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const tooltip = lang === 'hu' ? 'Ugrás a tetejére' : lang === 'en' ? 'Back to Top' : 'Înapoi sus';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-30 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-[#C19B77] border border-[#C19B77]/40 hover:border-[#C19B77] shadow-lg hover:shadow-xl backdrop-blur-md transition-all cursor-pointer no-print flex items-center justify-center group"
          title={tooltip}
          aria-label={tooltip}
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#C19B77] group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
export default BackToTopButton;
