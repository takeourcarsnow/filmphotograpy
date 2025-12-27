'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Card, CardContent, Button, Badge } from '@/components/ui';
import { 
  GraduationCap, 
  BookOpen,
  Film,
  Camera,
  Settings,
  Beaker,
  ChevronRight,
  Play
} from 'lucide-react';

const learningPaths = [
  {
    id: 'getting-started',
    title: 'Getting Started with Film',
    description: 'Complete beginner? Start here. Learn what film photography is, why people shoot it, and what you need to get started.',
    icon: Play,
    color: 'bg-green-500',
    modules: ['What is Film Photography?', 'Choosing Your First Camera', 'Your First Roll of Film'],
    time: '30 min',
    level: 'Beginner',
  },
  {
    id: 'understanding-exposure',
    title: 'Understanding Exposure',
    description: 'Master the exposure triangle - ISO, aperture, and shutter speed. Learn to shoot in manual mode with confidence.',
    icon: Settings,
    color: 'bg-blue-500',
    modules: ['The Exposure Triangle', 'Reading Light', 'Manual Exposure'],
    time: '45 min',
    level: 'Beginner',
  },
  {
    id: 'film-stocks',
    title: 'Guide to Film Stocks',
    description: 'Understand the differences between film types, brands, and how to choose the right film for your needs.',
    icon: Film,
    color: 'bg-amber-500',
    modules: ['Color vs B&W', 'Film Speeds', 'Popular Film Stocks'],
    time: '40 min',
    level: 'Beginner',
  },
  {
    id: 'cameras-lenses',
    title: 'Cameras & Lenses',
    description: 'Dive deep into camera types, lens selection, and how to maintain your gear for years of shooting.',
    icon: Camera,
    color: 'bg-purple-500',
    modules: ['SLR vs Rangefinder', 'Understanding Lenses', 'Camera Maintenance'],
    time: '50 min',
    level: 'Intermediate',
  },
  {
    id: 'development',
    title: 'Film Development',
    description: 'Learn how film is developed, scanning basics, and even how to develop black and white film at home.',
    icon: Beaker,
    color: 'bg-red-500',
    modules: ['Lab vs Home Development', 'B&W Home Dev Basics', 'Scanning Your Film'],
    time: '60 min',
    level: 'Intermediate',
  },
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

export default function LearnPage() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-indigo-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learn Film Photography</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Whether you&apos;re picking up a film camera for the first time or looking to refine your skills, our learning resources will guide you every step of the way.
          </p>
        </div>
      </Section>

      {/* Quick Start CTA */}
      <Section>
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">New to Film Photography?</h2>
                <p className="text-white/80 max-w-lg">
                  Start with our beginner-friendly guide and you&apos;ll be shooting film in no time. 
                  No prior experience needed!
                </p>
              </div>
              <Link href="/learn/glossary">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Glossary
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Learning Paths */}
      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Learning Paths
          </h2>
          <Link href="/techniques">
            <Button variant="ghost" size="sm">
              View All Techniques
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {learningPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <motion.div key={path.id} variants={item}>
                <Card interactive>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className={`w-14 h-14 rounded-xl ${path.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {path.title}
                          </h3>
                          <Badge className={getLevelColor(path.level)} size="sm">
                            {path.level}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {path.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-gray-500 dark:text-gray-400">
                            ⏱️ {path.time}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            📚 {path.modules.length} modules
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {path.modules.map((module) => (
                            <Badge key={module} variant="secondary" size="sm">
                              {module}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <Button variant="ghost" size="sm">
                          Start
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Quick Resources */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Quick Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/films">
            <Card interactive className="h-full">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🎞️</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Film Database</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Browse all film stocks</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/cameras">
            <Card interactive className="h-full">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">📷</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Camera Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find your perfect camera</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/calculator">
            <Card interactive className="h-full">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">🔢</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Exposure Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate settings</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/quiz">
            <Card interactive className="h-full">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">❓</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Knowledge Quiz</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Test your skills</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </Section>
    </PageContainer>
  );
}
