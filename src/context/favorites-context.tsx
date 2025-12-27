'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserPreferences } from '@/types';

type FavoriteType = 'films' | 'cameras' | 'lenses';

interface FavoritesContextType {
  favorites: UserPreferences['favorites'];
  toggleFilmFavorite: (id: string) => void;
  toggleCameraFavorite: (id: string) => void;
  toggleLensFavorite: (id: string) => void;
  isFilmFavorite: (id: string) => boolean;
  isCameraFavorite: (id: string) => boolean;
  isLensFavorite: (id: string) => boolean;
  // Generic methods for FavoriteButton component
  toggleFavorite: (type: FavoriteType, id: string) => void;
  isFavorite: (type: FavoriteType, id: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const STORAGE_KEY = 'film-photography-favorites';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<UserPreferences['favorites']>({
    films: [],
    cameras: [],
    lenses: []
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse favorites:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when favorites change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const toggleFilmFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      films: prev.films.includes(id)
        ? prev.films.filter(f => f !== id)
        : [...prev.films, id]
    }));
  };

  const toggleCameraFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      cameras: prev.cameras.includes(id)
        ? prev.cameras.filter(c => c !== id)
        : [...prev.cameras, id]
    }));
  };

  const toggleLensFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      lenses: prev.lenses.includes(id)
        ? prev.lenses.filter(l => l !== id)
        : [...prev.lenses, id]
    }));
  };

  const toggleFavorite = (type: FavoriteType, id: string) => {
    setFavorites(prev => ({
      ...prev,
      [type]: prev[type].includes(id)
        ? prev[type].filter(item => item !== id)
        : [...prev[type], id]
    }));
  };

  const isFilmFavorite = (id: string) => favorites.films.includes(id);
  const isCameraFavorite = (id: string) => favorites.cameras.includes(id);
  const isLensFavorite = (id: string) => favorites.lenses.includes(id);
  
  const isFavorite = (type: FavoriteType, id: string) => favorites[type].includes(id);

  const clearFavorites = () => {
    setFavorites({
      films: [],
      cameras: [],
      lenses: []
    });
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      toggleFilmFavorite,
      toggleCameraFavorite,
      toggleLensFavorite,
      isFilmFavorite,
      isCameraFavorite,
      isLensFavorite,
      toggleFavorite,
      isFavorite,
      clearFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
