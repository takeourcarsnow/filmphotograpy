'use client';

import { useState, useMemo } from 'react';
import { GlossaryTerm } from '@/types';
import { SearchInput, Card, CardContent, Badge } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';

interface GlossaryListProps {
  terms: GlossaryTerm[];
}

export function GlossaryList({ terms }: GlossaryListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return [...new Set(terms.map(t => t.category))];
  }, [terms]);

  const filteredTerms = useMemo(() => {
    return terms.filter(term => {
      const matchesSearch = !searchQuery || 
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || term.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [terms, searchQuery, selectedCategory]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach(term => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  const categoryLabels: Record<string, string> = {
    exposure: '📸 Exposure',
    film: '🎞️ Film',
    camera: '📷 Camera',
    lens: '🔭 Lens',
    development: '🧪 Development',
    technique: '🎨 Technique'
  };

  return (
    <div className="space-y-6">
      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <SearchInput
            placeholder="Search terms..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              !selectedCategory
                ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {filteredTerms.length} terms found
      </p>

      {/* Terms list */}
      <div className="space-y-8">
        {Object.entries(groupedTerms).sort().map(([letter, letterTerms]) => (
          <div key={letter}>
            <h3 className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-4">
              {letter}
            </h3>
            <div className="space-y-3">
              <AnimatePresence>
                {letterTerms.map((term, index) => (
                  <motion.div
                    key={term.term}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <Card>
                      <CardContent className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {term.term}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {term.definition}
                            </p>
                            {term.relatedTerms && term.relatedTerms.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                <span className="text-xs text-gray-500 dark:text-gray-500">
                                  Related:
                                </span>
                                {term.relatedTerms.map(rt => (
                                  <span
                                    key={rt}
                                    className="text-xs text-gray-600 dark:text-gray-400 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full"
                                  >
                                    {rt}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <Badge variant="outline" size="sm">
                            {term.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No terms found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
