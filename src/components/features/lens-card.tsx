'use client';

import { Lens } from '@/types';
import { Card, CardContent, Badge, FavoriteButton } from '@/components/ui';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Aperture } from 'lucide-react';

interface LensCardProps {
  lens: Lens;
  index?: number;
}

export function LensCard({ lens, index = 0 }: LensCardProps) {
  const typeLabels: Record<string, string> = {
    'prime': 'Prime',
    'zoom': 'Zoom',
    'macro': 'Macro',
    'telephoto': 'Telephoto',
    'wide-angle': 'Wide Angle',
    'fisheye': 'Fisheye',
    'standard': 'Standard'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/lenses/${lens.id}`}>
        <Card interactive className="h-full group">
          <CardContent className="relative">
            {/* Favorite button */}
            <div className="absolute top-0 right-0">
              <FavoriteButton
                type="lens"
                id={lens.id}
                size="sm"
              />
            </div>

            {/* Lens icon */}
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Aperture className="w-4 h-4" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {typeLabels[lens.type]}
              </span>
            </div>

            {/* Brand & Name */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {lens.brand}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {lens.name}
            </h3>

            {/* Specs */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="default">
                {lens.focalLength}
              </Badge>
              <Badge variant="outline">
                {lens.maxAperture}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
              {lens.description}
            </p>

            {/* Mount */}
            <span className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {lens.mount}
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

interface LensGridProps {
  lenses: Lens[];
}

export function LensGrid({ lenses }: LensGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {lenses.map((lens, index) => (
        <LensCard key={lens.id} lens={lens} index={index} />
      ))}
    </div>
  );
}
