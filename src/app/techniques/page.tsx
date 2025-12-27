'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { SearchInput, SegmentedControl, Card, CardContent, Badge } from '@/components/ui';
import { techniques } from '@/data';
import { BookOpen, BarChart, ListChecks } from 'lucide-react';
import { SkillLevel, TechniqueCategory } from '@/types';

type DifficultyFilter = 'all' | SkillLevel;
type CategoryFilterType = 'all' | TechniqueCategory;

const difficultyOptions = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'professional', label: 'Professional' },
];

const categoryOptions = [
  { value: 'all', label: 'All Categories' },
  { value: 'exposure', label: 'Exposure' },
  { value: 'composition', label: 'Composition' },
  { value: 'lighting', label: 'Lighting' },
  { value: 'development', label: 'Development' },
  { value: 'scanning', label: 'Scanning' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TechniquesPage() {
  const [search, setSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>('all');

  const filteredTechniques = useMemo(() => {
    let result = [...techniques];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (tech) =>
          tech.title.toLowerCase().includes(searchLower) ||
          tech.description.toLowerCase().includes(searchLower) ||
          tech.steps.some((s) => s.toLowerCase().includes(searchLower)) ||
          tech.tips.some((t) => t.toLowerCase().includes(searchLower))
      );
    }

    if (difficultyFilter !== 'all') {
      result = result.filter((tech) => tech.difficulty === difficultyFilter);
    }

    if (categoryFilter !== 'all') {
      result = result.filter((tech) => tech.category === categoryFilter);
    }

    return result;
  }, [search, difficultyFilter, categoryFilter]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'intermediate':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'professional':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exposure':
        return 'bg-blue-500';
      case 'composition':
        return 'bg-purple-500';
      case 'lighting':
        return 'bg-amber-500';
      case 'development':
        return 'bg-green-500';
      case 'scanning':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatLabel = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-green-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Techniques & Guides</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Master the art of film photography with our comprehensive guides. From basic exposure to advanced development techniques, learn at your own pace.
          </p>
        </div>
      </Section>

      <Section>
        {/* Filters */}
        <div className="space-y-4 mb-8">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search techniques..."
          />

          <div className="flex flex-wrap gap-4">
            <SegmentedControl
              options={difficultyOptions}
              value={difficultyFilter}
              onChange={(v) => setDifficultyFilter(v as DifficultyFilter)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategoryFilter(cat.value as CategoryFilterType)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  categoryFilter === cat.value
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {filteredTechniques.length} techniques found
          </p>
        </div>

        {/* Grid */}
        {filteredTechniques.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredTechniques.map((technique) => (
              <motion.div key={technique.id} variants={item}>
                <Link href={`/techniques/${technique.id}`}>
                  <Card interactive className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-lg ${getCategoryColor(technique.category)} flex items-center justify-center`}>
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <Badge className={getDifficultyColor(technique.difficulty)}>
                          {formatLabel(technique.difficulty)}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {technique.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {technique.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <ListChecks className="w-4 h-4" />
                          {technique.steps.length} steps
                        </div>
                        <div className="flex items-center gap-1">
                          <BarChart className="w-4 h-4" />
                          {formatLabel(technique.category)}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {technique.tips.slice(0, 2).map((tip, idx) => (
                          <Badge key={idx} variant="secondary" size="sm" className="truncate max-w-[140px]">
                            {tip.slice(0, 25)}...
                          </Badge>
                        ))}
                        {technique.tips.length > 2 && (
                          <Badge variant="secondary" size="sm">
                            +{technique.tips.length - 2} tips
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No techniques found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearch('');
                setDifficultyFilter('all');
                setCategoryFilter('all');
              }}
              className="text-green-600 dark:text-green-400 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>
    </PageContainer>
  );
}
