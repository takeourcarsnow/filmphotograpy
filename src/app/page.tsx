'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Card, CardContent, Button, Badge } from '@/components/ui';
import { films } from '@/data';
import { FilmCard } from '@/components/features';
import { 
  Film, 
  Camera, 
  Aperture, 
  BookOpen, 
  Calculator, 
  GraduationCap,
  ArrowRight,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Film,
    title: 'Film Stocks',
    description: 'Explore our comprehensive database of film stocks from Kodak, Fujifilm, Ilford, and more.',
    href: '/films',
    color: 'bg-amber-500'
  },
  {
    icon: Camera,
    title: 'Cameras',
    description: 'Find the perfect camera for your needs, from SLRs to rangefinders to medium format.',
    href: '/cameras',
    color: 'bg-blue-500'
  },
  {
    icon: Aperture,
    title: 'Lenses',
    description: 'Discover legendary glass across different mounts and focal lengths.',
    href: '/lenses',
    color: 'bg-purple-500'
  },
  {
    icon: BookOpen,
    title: 'Techniques',
    description: 'Master exposure, composition, and development with our in-depth guides.',
    href: '/techniques',
    color: 'bg-green-500'
  },
  {
    icon: Calculator,
    title: 'Tools',
    description: 'Exposure calculators, quizzes, and more to help you on your journey.',
    href: '/tools',
    color: 'bg-red-500'
  },
  {
    icon: GraduationCap,
    title: 'Learn',
    description: 'Start from the basics with our beginner-friendly learning resources.',
    href: '/learn',
    color: 'bg-indigo-500'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const featuredFilms = films.slice(0, 3);
  
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="info" size="md" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Your Film Journey Starts Here
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              The Complete Guide to{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Film Photography
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Everything you need to start shooting film. Learn about cameras, film stocks, 
              lenses, and techniques from beginner to advanced.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn">
                <Button size="lg">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
              <Link href="/films">
                <Button variant="secondary" size="lg">
                  <Film className="w-5 h-5 mr-2" />
                  Explore Films
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From choosing your first camera to developing your own film, we&apos;ve got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={item}>
                <Link href={feature.href}>
                  <Card interactive className="h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Featured Films */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Popular Film Stocks
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The most loved films by photographers worldwide
            </p>
          </div>
          <Link href="/films">
            <Button variant="ghost">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFilms.map((film, index) => (
            <FilmCard key={film.id} film={film} index={index} />
          ))}
        </div>
      </Section>

      {/* Why Film Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Shoot Film?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Intentional Photography
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Limited shots force you to slow down and think about each frame.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Unique Aesthetic
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Film&apos;s organic grain and color science can&apos;t be perfectly replicated digitally.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Learn the Fundamentals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Understanding manual exposure becomes second nature when shooting film.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📷</div>
                <p className="text-gray-600 dark:text-gray-400">
                  Join thousands of photographers rediscovering the joy of analog
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 dark:bg-gray-950">
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Take our quiz to find the perfect film and camera for your style, 
            or dive into our beginner&apos;s guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools/quiz">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Take the Quiz
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                Read the Guide
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
