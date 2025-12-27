'use client';

import { Camera } from '@/types';
import { Card, CardContent, Badge, FavoriteButton } from '@/components/ui';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Camera as CameraIcon, 
  Focus, 
  Square, 
  Box,
  Zap
} from 'lucide-react';

interface CameraCardProps {
  camera: Camera;
  index?: number;
}

export function CameraCard({ camera, index = 0 }: CameraCardProps) {
  const typeIcons: Record<string, React.ReactNode> = {
    'slr': <CameraIcon className="w-4 h-4" />,
    'rangefinder': <Focus className="w-4 h-4" />,
    'point-and-shoot': <Zap className="w-4 h-4" />,
    'tlr': <Square className="w-4 h-4" />,
    'medium-format': <Box className="w-4 h-4" />,
    'large-format': <Box className="w-4 h-4" />,
    'instant': <Zap className="w-4 h-4" />
  };

  const typeLabels: Record<string, string> = {
    'slr': 'SLR',
    'rangefinder': 'Rangefinder',
    'point-and-shoot': 'Point & Shoot',
    'tlr': 'TLR',
    'medium-format': 'Medium Format',
    'large-format': 'Large Format',
    'instant': 'Instant'
  };

  const skillColors: Record<string, 'success' | 'warning' | 'danger' | 'info'> = {
    'beginner': 'success',
    'intermediate': 'warning',
    'advanced': 'danger',
    'professional': 'info'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/cameras/${camera.id}`}>
        <Card interactive className="h-full group">
          <CardContent className="relative">
            {/* Favorite button */}
            <div className="absolute top-0 right-0">
              <FavoriteButton
                type="camera"
                id={camera.id}
                size="sm"
              />
            </div>

            {/* Camera icon and type */}
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                {typeIcons[camera.type]}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {typeLabels[camera.type]}
              </span>
            </div>

            {/* Brand & Name */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {camera.brand}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {camera.name}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant={skillColors[camera.skill]}>
                {camera.skill}
              </Badge>
              {camera.popular && (
                <Badge variant="info">Popular</Badge>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
              {camera.description}
            </p>

            {/* Format */}
            <div className="flex gap-2">
              {camera.format.map((format) => (
                <span
                  key={format}
                  className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {format}
                </span>
              ))}
            </div>

            {/* Years */}
            {camera.yearIntroduced && (
              <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                {camera.yearIntroduced}
                {camera.yearDiscontinued ? ` - ${camera.yearDiscontinued}` : ' - present'}
              </p>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

interface CameraGridProps {
  cameras: Camera[];
}

export function CameraGrid({ cameras }: CameraGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cameras.map((camera, index) => (
        <CameraCard key={camera.id} camera={camera} index={index} />
      ))}
    </div>
  );
}
