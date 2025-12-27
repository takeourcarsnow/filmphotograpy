'use client';

import { PageContainer, Section } from '@/components/layout';
import { QuizComponent } from '@/components/features';
import { HelpCircle } from 'lucide-react';
import { quizQuestions } from '@/data';

export default function QuizPage() {
  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Film Photography Quiz</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Test your knowledge of film photography! From basic concepts to advanced techniques, see how much you know about shooting film.
          </p>
        </div>
      </Section>

      <Section>
        <QuizComponent questions={quizQuestions} />
      </Section>
    </PageContainer>
  );
}
