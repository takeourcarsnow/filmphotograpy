'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Button, Badge, Card, CardContent } from '@/components/ui';
import { techniques } from '@/data';
import { 
  ArrowLeft, 
  BookOpen,
  BarChart,
  Share2,
  ChevronRight,
  Lightbulb,
  AlertCircle,
  ListChecks
} from 'lucide-react';

export default function TechniqueDetailPage() {
  const params = useParams();
  const router = useRouter();
  const technique = techniques.find((t) => t.id === params.id);

  if (!technique) {
    return (
      <PageContainer>
        <Section>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technique Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The technique you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/techniques">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Techniques
              </Button>
            </Link>
          </div>
        </Section>
      </PageContainer>
    );
  }

  const relatedTechniques = techniques
    .filter((t) => t.id !== technique.id && (t.category === technique.category || t.difficulty === technique.difficulty))
    .slice(0, 3);

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
      {/* Back Button */}
      <Section className="pt-4 pb-0">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </Section>

      {/* Header */}
      <Section className="pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Badge className={getCategoryColor(technique.category) + ' text-white'}>
              {formatLabel(technique.category)}
            </Badge>
            <Badge className={getDifficultyColor(technique.difficulty)}>
              {formatLabel(technique.difficulty)}
            </Badge>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {technique.title}
            </h1>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {technique.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <ListChecks className="w-4 h-4" />
              {technique.steps.length} steps
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              {formatLabel(technique.difficulty)} level
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl">
          {/* Steps */}
          <div className="space-y-8">
            {technique.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-600 dark:text-gray-400">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tips & Warnings */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tips */}
            <Card className="border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Pro Tips
                </h3>
                <ul className="space-y-3">
                  {technique.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="text-blue-500 mt-1">💡</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Common Mistakes
                </h3>
                <ul className="space-y-3">
                  {technique.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="text-amber-500 mt-1">⚠️</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Equipment Recommendations */}
      <Section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Recommended Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl mb-2">📷</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Any Film Camera
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Works with SLRs, rangefinders, or point-and-shoots
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl mb-2">🎞️</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Practice Film
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Start with affordable stocks like Kodak Gold or Fuji C200
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Notebook
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track your shots, settings, and learn from results
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Related Techniques */}
      {relatedTechniques.length > 0 && (
        <Section className="bg-gray-50 dark:bg-gray-900/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Related Techniques
            </h2>
            <Link href="/techniques">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedTechniques.map((tech) => (
              <Link key={tech.id} href={`/techniques/${tech.id}`}>
                <Card interactive className="h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getDifficultyColor(tech.difficulty)}>
                        {formatLabel(tech.difficulty)}
                      </Badge>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </PageContainer>
  );
}
