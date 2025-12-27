'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PageContainer, PageHeader, Section } from '@/components/layout';
import { SearchInput, SegmentedControl, Select } from '@/components/ui';
import { FilmGrid } from '@/components/features';
import { films } from '@/data';
import { FilmType, FilmFormat } from '@/types';
import { Film, SlidersHorizontal } from 'lucide-react';

type FilmTypeFilter = 'all' | FilmType;
type FormatFilter = 'all' | FilmFormat;

const typeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'color-negative', label: 'Color Negative' },
  { value: 'black-white', label: 'B&W' },
  { value: 'slide', label: 'Slide' },
];

const formatOptions = [
  { value: 'all', label: 'All Formats' },
  { value: '35mm', label: '35mm' },
  { value: '120', label: '120' },
  { value: '4x5', label: '4x5' },
];

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'iso-low', label: 'ISO (Low to High)' },
  { value: 'iso-high', label: 'ISO (High to Low)' },
  { value: 'brand', label: 'Brand' },
];

export default function FilmsPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<FilmTypeFilter>('all');
  const [formatFilter, setFormatFilter] = useState<FormatFilter>('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredFilms = useMemo(() => {
    let result = [...films];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (film) =>
          film.name.toLowerCase().includes(searchLower) ||
          film.brand.toLowerCase().includes(searchLower) ||
          film.characteristics.some((c) => c.toLowerCase().includes(searchLower))
      );
    }

    // Type filter
    if (typeFilter !== 'all') {
      result = result.filter((film) => film.type === typeFilter);
    }

    // Format filter
    if (formatFilter !== 'all') {
      result = result.filter((film) => film.format.includes(formatFilter));
    }

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'iso-low':
        result.sort((a, b) => Math.min(...a.iso) - Math.min(...b.iso));
        break;
      case 'iso-high':
        result.sort((a, b) => Math.max(...b.iso) - Math.max(...a.iso));
        break;
      case 'brand':
        result.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
    }

    return result;
  }, [search, typeFilter, formatFilter, sortBy]);

  const typeStats = useMemo(() => {
    const stats = {
      all: films.length,
      'color-negative': films.filter((f) => f.type === 'color-negative').length,
      'black-white': films.filter((f) => f.type === 'black-white').length,
      'slide': films.filter((f) => f.type === 'slide').length,
    };
    return stats;
  }, []);

  return (
    <PageContainer>
      <PageHeader
        title="Film Stocks"
        description="Explore our comprehensive collection of film stocks. From vibrant color negatives to classic black and white, find the perfect film for your vision."
      />

      <Section>
        {/* Search and Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Search films by name, brand, or characteristics..."
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Type Tabs */}
          <div className="hidden sm:block">
            <SegmentedControl
              options={typeOptions.map((opt) => ({
                ...opt,
                label: `${opt.label} (${typeStats[opt.value as keyof typeof typeStats] || 0})`,
              }))}
              value={typeFilter}
              onChange={(v) => setTypeFilter(v as FilmTypeFilter)}
            />
          </div>

          {/* Mobile Filters */}
          <motion.div
            initial={false}
            animate={{ height: showFilters ? 'auto' : 0 }}
            className="sm:hidden overflow-hidden"
          >
            <div className="space-y-4 pt-2">
              <Select
                options={typeOptions}
                value={typeFilter}
                onChange={(v) => setTypeFilter(v as FilmTypeFilter)}
                label="Film Type"
              />
              <Select
                options={formatOptions}
                value={formatFilter}
                onChange={(v) => setFormatFilter(v as FormatFilter)}
                label="Format"
              />
              <Select
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                label="Sort By"
              />
            </div>
          </motion.div>

          {/* Desktop Filters Row */}
          <div className="hidden sm:flex items-center gap-4">
            <Select
              options={formatOptions}
              value={formatFilter}
              onChange={(v) => setFormatFilter(v as FormatFilter)}
              className="w-40"
            />
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              className="w-48"
            />
            {(search || typeFilter !== 'all' || formatFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearch('');
                  setTypeFilter('all');
                  setFormatFilter('all');
                }}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredFilms.length} of {films.length} films
          </p>
        </div>

        {/* Film Grid */}
        {filteredFilms.length > 0 ? (
          <FilmGrid films={filteredFilms} />
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎞️</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No films found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearch('');
                setTypeFilter('all');
                setFormatFilter('all');
              }}
              className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>
    </PageContainer>
  );
}
