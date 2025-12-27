'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PageContainer, PageHeader, Section } from '@/components/layout';
import { SearchInput, SegmentedControl, Select } from '@/components/ui';
import { CameraGrid } from '@/components/features';
import { cameras } from '@/data';
import { CameraType } from '@/types';
import { Camera, SlidersHorizontal } from 'lucide-react';

type CameraTypeFilter = 'all' | CameraType;

const typeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'slr', label: 'SLR' },
  { value: 'rangefinder', label: 'Rangefinder' },
  { value: 'point-and-shoot', label: 'Point & Shoot' },
  { value: 'medium-format', label: 'Medium Format' },
  { value: 'tlr', label: 'TLR' },
];

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'brand', label: 'Brand' },
  { value: 'year-new', label: 'Year (Newest)' },
  { value: 'year-old', label: 'Year (Oldest)' },
];

export default function CamerasPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<CameraTypeFilter>('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(cameras.map((c) => c.brand))].sort();
    return [{ value: 'all', label: 'All Brands' }, ...uniqueBrands.map((b) => ({ value: b, label: b }))];
  }, []);

  const filteredCameras = useMemo(() => {
    let result = [...cameras];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (camera) =>
          camera.name.toLowerCase().includes(searchLower) ||
          camera.brand.toLowerCase().includes(searchLower) ||
          camera.type.toLowerCase().includes(searchLower) ||
          camera.features.some((f) => f.toLowerCase().includes(searchLower))
      );
    }

    // Type filter
    if (typeFilter !== 'all') {
      result = result.filter((camera) => camera.type === typeFilter);
    }

    // Brand filter
    if (brandFilter !== 'all') {
      result = result.filter((camera) => camera.brand === brandFilter);
    }

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'brand':
        result.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case 'year-new':
        result.sort((a, b) => (b.yearIntroduced || 0) - (a.yearIntroduced || 0));
        break;
      case 'year-old':
        result.sort((a, b) => (a.yearIntroduced || 0) - (b.yearIntroduced || 0));
        break;
    }

    return result;
  }, [search, typeFilter, brandFilter, sortBy]);

  const typeStats = useMemo(() => {
    const stats: Record<string, number> = { all: cameras.length };
    typeOptions.slice(1).forEach((opt) => {
      stats[opt.value] = cameras.filter((c) => c.type === opt.value).length;
    });
    return stats;
  }, []);

  return (
    <PageContainer>
      <PageHeader
        title="Film Cameras"
        description="From classic SLRs to modern point-and-shoots, find the perfect camera for your shooting style. Each camera has been selected for its reliability and image quality."
      />

      <Section>
        {/* Search and Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Search cameras by name, brand, or features..."
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
              options={typeOptions.slice(0, 5).map((opt) => ({
                ...opt,
                label: `${opt.label} (${typeStats[opt.value] || 0})`,
              }))}
              value={typeFilter}
              onChange={(v) => setTypeFilter(v as CameraTypeFilter)}
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
                onChange={(v) => setTypeFilter(v as CameraTypeFilter)}
                label="Camera Type"
              />
              <Select
                options={brands}
                value={brandFilter}
                onChange={setBrandFilter}
                label="Brand"
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
              options={brands}
              value={brandFilter}
              onChange={setBrandFilter}
              className="w-44"
            />
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              className="w-44"
            />
            {(search || typeFilter !== 'all' || brandFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearch('');
                  setTypeFilter('all');
                  setBrandFilter('all');
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
            Showing {filteredCameras.length} of {cameras.length} cameras
          </p>
        </div>

        {/* Camera Grid */}
        {filteredCameras.length > 0 ? (
          <CameraGrid cameras={filteredCameras} />
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No cameras found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearch('');
                setTypeFilter('all');
                setBrandFilter('all');
              }}
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>
    </PageContainer>
  );
}
