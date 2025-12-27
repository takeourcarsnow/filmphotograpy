'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/favorites-context';

export interface FavoriteButtonProps {
  type: 'film' | 'camera' | 'lens';
  id: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FavoriteButton({ type, id, size = 'md', className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const favoriteType = type === 'film' ? 'films' : type === 'camera' ? 'cameras' : 'lenses';
  const isFav = isFavorite(favoriteType, id);
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(favoriteType, id);
      }}
      className={cn(
        'flex items-center justify-center rounded-full transition-all duration-200',
        'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
        'border border-gray-200 dark:border-gray-700',
        'hover:bg-gray-100 dark:hover:bg-gray-700',
        'shadow-sm hover:shadow-md',
        sizes[size],
        className
      )}
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isFav ? 'filled' : 'empty'}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <Heart
            className={cn(
              iconSizes[size],
              'transition-colors duration-200',
              isFav
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400 dark:text-gray-500'
            )}
          />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
