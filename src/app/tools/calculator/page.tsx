'use client';

import { PageContainer, Section } from '@/components/layout';
import { ExposureCalculator } from '@/components/features';
import { Calculator } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <PageContainer>
      <Section className="pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-amber-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Exposure Calculator</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Calculate the right exposure settings for your film photography. Adjust ISO, aperture, and shutter speed to get the perfect exposure.
          </p>
        </div>
      </Section>

      <Section>
        <ExposureCalculator />
      </Section>
    </PageContainer>
  );
}
