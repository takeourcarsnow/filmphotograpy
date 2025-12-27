'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Button, Badge, Card, CardContent, FavoriteButton } from '@/components/ui';
import { LensCard } from '@/components/features';
import { lenses } from '@/data';
import { 
  ArrowLeft, 
  Aperture,
  Ruler,
  Circle,
  Layers,
  ExternalLink,
  Share2,
  Target,
  Tag
} from 'lucide-react';

export default function LensDetailPage() {
  const params = useParams();
  const router = useRouter();
  const lens = lenses.find((l) => l.id === params.id);

  if (!lens) {
    return (
      <PageContainer>
        <Section>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Lens Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The lens you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/lenses">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Lenses
              </Button>
            </Link>
          </div>
        </Section>
      </PageContainer>
    );
  }

  const relatedLenses = lenses
    .filter((l) => l.id !== lens.id && (l.mount === lens.mount || l.type === lens.type))
    .slice(0, 3);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'prime':
        return 'bg-purple-500';
      case 'zoom':
        return 'bg-blue-500';
      case 'macro':
        return 'bg-green-500';
      case 'telephoto':
        return 'bg-amber-500';
      case 'wide-angle':
        return 'bg-red-500';
      case 'standard':
        return 'bg-indigo-500';
      case 'fisheye':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatTypeLabel = (type: string) => {
    switch (type) {
      case 'prime':
        return 'Prime';
      case 'zoom':
        return 'Zoom';
      case 'macro':
        return 'Macro';
      case 'telephoto':
        return 'Telephoto';
      case 'wide-angle':
        return 'Wide Angle';
      case 'standard':
        return 'Standard';
      case 'fisheye':
        return 'Fisheye';
      default:
        return type;
    }
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lens Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <Aperture className="w-24 h-24 text-purple-400 dark:text-purple-600 mx-auto mb-4" />
                <div className="text-purple-600 dark:text-purple-400 text-sm">{lens.brand}</div>
                <div className="text-purple-800 dark:text-purple-300 font-semibold">{lens.focalLength}</div>
                <div className="text-purple-700 dark:text-purple-400">{lens.maxAperture}</div>
              </div>
            </div>
          </motion.div>

          {/* Lens Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/3"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="info">{lens.brand}</Badge>
                  <Badge className={`${getTypeColor(lens.type)} text-white`}>
                    {formatTypeLabel(lens.type)}
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {lens.name}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <FavoriteButton type="lens" id={lens.id} />
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {lens.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <Ruler className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {lens.focalLength}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Focal Length</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Circle className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {lens.maxAperture}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Max Aperture</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Layers className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {lens.mount}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Mount</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Tag className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                    {lens.priceRange}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Price Range</div>
                </CardContent>
              </Card>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-500" />
                Best For
              </h3>
              <div className="flex flex-wrap gap-2">
                {lens.bestFor.map((use) => (
                  <Badge key={use} variant="secondary">
                    {use}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Characteristics */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Characteristics
              </h3>
              <div className="flex flex-wrap gap-2">
                {lens.characteristics.map((char) => (
                  <Badge key={char} variant="outline">
                    {char}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <Card className="bg-gray-50 dark:bg-gray-800/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Typical Price Range
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                      {lens.priceRange}
                    </div>
                  </div>
                  <a
                    href={`https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(lens.brand + ' ' + lens.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="sm">
                      Find on eBay
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Sample Images */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Sample Images
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
            >
              <div className="text-gray-400 text-sm">Sample {i}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Sample images taken with this lens coming soon!
        </p>
      </Section>

      {/* Related Lenses */}
      {relatedLenses.length > 0 && (
        <Section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Similar Lenses
            </h2>
            <Link href="/lenses">
              <Button variant="ghost" size="sm">
                View All Lenses
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedLenses.map((relLens) => (
              <LensCard key={relLens.id} lens={relLens} />
            ))}
          </div>
        </Section>
      )}
    </PageContainer>
  );
}
