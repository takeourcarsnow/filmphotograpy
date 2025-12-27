'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Card, CardContent, Button } from '@/components/ui';
import { 
  Calculator, 
  HelpCircle, 
  Sun,
  Moon,
  Target,
  Zap,
  ChevronRight
} from 'lucide-react';

const tools = [
  {
    id: 'exposure-calculator',
    title: 'Exposure Calculator',
    description: 'Calculate the right exposure settings based on light conditions, film ISO, and your desired aperture or shutter speed.',
    icon: Calculator,
    color: 'bg-amber-500',
    href: '/tools/calculator',
  },
  {
    id: 'quiz',
    title: 'Film Photography Quiz',
    description: 'Test your knowledge of film photography concepts, from basic exposure to advanced techniques.',
    icon: HelpCircle,
    color: 'bg-purple-500',
    href: '/tools/quiz',
  },
];

const quickReferences = [
  {
    title: 'Sunny 16 Rule',
    description: 'On a sunny day, set aperture to f/16 and shutter speed to 1/ISO.',
    icon: Sun,
    color: 'text-amber-500',
  },
  {
    title: 'Night Photography',
    description: 'Use a tripod, set aperture wide open, and use longer exposures.',
    icon: Moon,
    color: 'text-blue-500',
  },
  {
    title: 'Depth of Field',
    description: 'Smaller aperture (higher f-number) = more in focus. Larger aperture = blurrier background.',
    icon: Target,
    color: 'text-green-500',
  },
  {
    title: 'Motion Blur',
    description: 'Faster shutter speeds freeze motion. 1/500s for sports, 1/125s for walking.',
    icon: Zap,
    color: 'text-purple-500',
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

export default function ToolsPage() {
  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tools</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Interactive tools to help you master film photography. Calculate exposures, test your knowledge, and reference essential rules.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Interactive Tools
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div key={tool.id} variants={item}>
                <Link href={tool.href}>
                  <Card interactive className="h-full">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl ${tool.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {tool.description}
                      </p>
                      <Button variant="ghost" size="sm">
                        Open Tool
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Quick Reference
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickReferences.map((ref, index) => {
            const Icon = ref.icon;
            return (
              <motion.div
                key={ref.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon className={`w-6 h-6 ${ref.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {ref.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {ref.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Exposure Triangle */}
      <Section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          The Exposure Triangle
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ISO
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Film sensitivity to light. Higher ISO = more sensitive = more grain. Lower ISO = less sensitive = finer grain.
                </p>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  Common: 100, 200, 400, 800, 1600, 3200
                </div>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Aperture
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Controls depth of field and light. Smaller f-number = more light, shallower focus. Larger f-number = less light, deeper focus.
                </p>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  Common: f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16
                </div>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Shutter Speed
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Controls motion blur and light. Faster = freeze motion, less light. Slower = more blur, more light.
                </p>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  Common: 1/1000, 1/500, 1/250, 1/125, 1/60, 1/30, 1/15
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                <strong>Remember:</strong> These three elements work together. If you change one, you&apos;ll need to adjust at least one of the others to maintain proper exposure. This is the foundation of manual photography!
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>
    </PageContainer>
  );
}
