'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Card, CardContent, Button, Badge } from '@/components/ui';
import { FilmCard, CameraCard, LensCard } from '@/components/features';
import { useFavorites } from '@/context';
import { films, cameras, lenses } from '@/data';
import { Heart, Film, Camera, Aperture, Trash2 } from 'lucide-react';

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();

  const favoriteFilms = films.filter((f) => favorites.films.includes(f.id));
  const favoriteCameras = cameras.filter((c) => favorites.cameras.includes(c.id));
  const favoriteLenses = lenses.filter((l) => favorites.lenses.includes(l.id));

  const totalFavorites = favoriteFilms.length + favoriteCameras.length + favoriteLenses.length;

  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Favorites</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Your saved films, cameras, and lenses all in one place. Build your dream kit list!
          </p>
        </div>
      </Section>

      {totalFavorites === 0 ? (
        <Section>
          <div className="text-center py-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-gray-400" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No favorites yet
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start exploring and save your favorite films, cameras, and lenses 
              by clicking the heart icon on any item.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/films">
                <Button>
                  <Film className="w-4 h-4 mr-2" />
                  Browse Films
                </Button>
              </Link>
              <Link href="/cameras">
                <Button variant="secondary">
                  <Camera className="w-4 h-4 mr-2" />
                  Browse Cameras
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      ) : (
        <>
          {/* Summary */}
          <Section className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" size="lg">
                  {totalFavorites} items saved
                </Badge>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFavorites}
                className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          </Section>

          {/* Favorite Films */}
          {favoriteFilms.length > 0 && (
            <Section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Film className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Films
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {favoriteFilms.length} saved
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteFilms.map((film, index) => (
                  <FilmCard key={film.id} film={film} index={index} />
                ))}
              </div>
            </Section>
          )}

          {/* Favorite Cameras */}
          {favoriteCameras.length > 0 && (
            <Section className={favoriteFilms.length > 0 ? 'bg-gray-50 dark:bg-gray-900/50' : ''}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Cameras
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {favoriteCameras.length} saved
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteCameras.map((camera, index) => (
                  <CameraCard key={camera.id} camera={camera} index={index} />
                ))}
              </div>
            </Section>
          )}

          {/* Favorite Lenses */}
          {favoriteLenses.length > 0 && (
            <Section className={(favoriteFilms.length > 0 && favoriteCameras.length === 0) || (favoriteCameras.length > 0) ? '' : 'bg-gray-50 dark:bg-gray-900/50'}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Aperture className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Lenses
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {favoriteLenses.length} saved
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteLenses.map((lens, index) => (
                  <LensCard key={lens.id} lens={lens} index={index} />
                ))}
              </div>
            </Section>
          )}

          {/* Share Your Kit */}
          <Section className="bg-gray-50 dark:bg-gray-900/50">
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Share Your Kit List
                </h3>
                <p className="text-gray-400 mb-4">
                  Export or share your favorite gear with fellow photographers
                </p>
                <Button variant="secondary" size="sm" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </Section>
        </>
      )}
    </PageContainer>
  );
}
