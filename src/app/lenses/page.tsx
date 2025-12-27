'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { SearchInput, SegmentedControl, Select } from '@/components/ui';
import { LensGrid } from '@/components/features';
import { lenses } from '@/data';
import { Aperture, SlidersHorizontal } from 'lucide-react';
import { LensType } from '@/types';

type LensTypeFilter = 'all' | LensType;
type MountFilter = string;

const typeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'prime', label: 'Prime' },
  { value: 'zoom', label: 'Zoom' },
  { value: 'wide-angle', label: 'Wide Angle' },
  { value: 'telephoto', label: 'Telephoto' },
  { value: 'macro', label: 'Macro' },
  { value: 'standard', label: 'Standard' },
  { value: 'fisheye', label: 'Fisheye' },
];

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'brand', label: 'Brand' },
  { value: 'focal-low', label: 'Focal Length (Shortest)' },
  { value: 'focal-high', label: 'Focal Length (Longest)' },
  { value: 'aperture', label: 'Aperture (Fastest)' },
];

export default function LensesPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<LensTypeFilter>('all');
  const [mountFilter, setMountFilter] = useState<MountFilter>('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const mounts = useMemo(() => {
    const uniqueMounts = [...new Set(lenses.map((l) => l.mount))].sort();
    return [{ value: 'all', label: 'All Mounts' }, ...uniqueMounts.map((m) => ({ value: m, label: m }))];
  }, []);

  const filteredLenses = useMemo(() => {
    let result = [...lenses];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (lens) =>
          lens.name.toLowerCase().includes(searchLower) ||
          lens.brand.toLowerCase().includes(searchLower) ||
          lens.mount.toLowerCase().includes(searchLower) ||
          lens.characteristics.some((c) => c.toLowerCase().includes(searchLower))
      );
    }

    // Type filter
    if (typeFilter !== 'all') {
      result = result.filter((lens) => lens.type === typeFilter);
    }

    // Mount filter
    if (mountFilter !== 'all') {
      result = result.filter((lens) => lens.mount === mountFilter);
    }

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'brand':
        result.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case 'focal-low':
        result.sort((a, b) => {
          const focalA = parseInt(a.focalLength);
          const focalB = parseInt(b.focalLength);
          return focalA - focalB;
        });
        break;
      case 'focal-high':
        result.sort((a, b) => {
          const focalA = parseInt(a.focalLength);
          const focalB = parseInt(b.focalLength);
          return focalB - focalA;
        });
        break;
      case 'aperture':
        result.sort((a, b) => {
          const apA = parseFloat(a.maxAperture.replace('f/', ''));
          const apB = parseFloat(b.maxAperture.replace('f/', ''));
          return apA - apB;
        });
        break;
    }

    return result;
  }, [search, typeFilter, mountFilter, sortBy]);

  const typeStats = useMemo(() => {
    const stats: Record<string, number> = { all: lenses.length };
    typeOptions.slice(1).forEach((opt) => {
      stats[opt.value] = lenses.filter((l) => l.type === opt.value).length;
    });
    return stats;
  }, []);

  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Aperture className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lenses</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Discover legendary glass for your film camera. From fast primes to versatile zooms, find the perfect lens to complement your shooting style.
          </p>
        </div>
      </Section>

      <Section>
        {/* Search and Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Search lenses by name, brand, or mount..."
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
          <div className="hidden sm:block overflow-x-auto">
            <SegmentedControl
              options={typeOptions.map((opt) => ({
                ...opt,
                label: `${opt.label} (${typeStats[opt.value] || 0})`,
              }))}
              value={typeFilter}
              onChange={(v) => setTypeFilter(v as LensTypeFilter)}
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
                onChange={(v) => setTypeFilter(v as LensTypeFilter)}
                label="Lens Type"
              />
              <Select
                options={mounts}
                value={mountFilter}
                onChange={setMountFilter}
                label="Mount"
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
              options={mounts}
              value={mountFilter}
              onChange={setMountFilter}
              className="w-48"
            />
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              className="w-52"
            />
            {(search || typeFilter !== 'all' || mountFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearch('');
                  setTypeFilter('all');
                  setMountFilter('all');
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
            Showing {filteredLenses.length} of {lenses.length} lenses
          </p>
        </div>

        {/* Lens Grid */}
        {filteredLenses.length > 0 ? (
          <LensGrid lenses={filteredLenses} />
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No lenses found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearch('');
                setTypeFilter('all');
                setMountFilter('all');
              }}
              className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>
    </PageContainer>
  );
}
