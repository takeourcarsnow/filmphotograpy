'use client';

import { PageContainer, Section } from '@/components/layout';
import { GlossaryList } from '@/components/features';
import { BookOpen } from 'lucide-react';
import { glossary } from '@/data';

export default function GlossaryPage() {
  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Photography Glossary</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A comprehensive glossary of film photography terms. Learn the language of analog photography from aperture to zone focusing.
          </p>
        </div>
      </Section>

      <Section>
        <GlossaryList terms={glossary} />
      </Section>
    </PageContainer>
  );
}
