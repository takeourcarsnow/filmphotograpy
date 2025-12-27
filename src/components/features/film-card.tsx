'use client';

import { Film } from '@/types';
import { Card, CardContent, Badge, FavoriteButton } from '@/components/ui';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FilmCardProps {
  film: Film;
  index?: number;
}

export function FilmCard({ film, index = 0 }: FilmCardProps) {
  const typeColors: Record<string, string> = {
    'color-negative': 'bg-amber-500',
    'black-white': 'bg-gray-500',
    'slide': 'bg-blue-500',
    'instant': 'bg-purple-500'
  };

  const typeLabels: Record<string, string> = {
    'color-negative': 'Color Negative',
    'black-white': 'Black & White',
    'slide': 'Slide Film',
    'instant': 'Instant'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/films/${film.id}`}>
        <Card interactive className="h-full overflow-hidden group">
          {/* Color band based on film type */}
          <div className={`h-2 ${typeColors[film.type]}`} />
          
          {/* Sample colors if available */}
          {film.sampleColors && (
            <div className="flex h-8">
              {film.sampleColors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
          
          <CardContent className="relative">
            {/* Favorite button */}
            <div className="absolute -top-4 right-4">
              <FavoriteButton
                type="film"
                id={film.id}
                size="sm"
              />
            </div>

            {/* Brand & Name */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {film.brand}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {film.name}
            </h3>

            {/* Type & ISO */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline">
                {typeLabels[film.type]}
              </Badge>
              <Badge variant="default">
                ISO {film.iso.join('/')}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {film.description}
            </p>

            {/* Formats */}
            <div className="mt-4 flex gap-2">
              {film.format.map((format) => (
                <span
                  key={format}
                  className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {format}
                </span>
              ))}
            </div>

            {/* Discontinued indicator */}
            {film.discontinued && (
              <div className="mt-3 flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Discontinued
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

interface FilmGridProps {
  films: Film[];
}

export function FilmGrid({ films }: FilmGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {films.map((film, index) => (
        <FilmCard key={film.id} film={film} index={index} />
      ))}
    </div>
  );
}
