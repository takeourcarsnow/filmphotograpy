'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Button, Badge, Card, CardContent, FavoriteButton } from '@/components/ui';
import { CameraCard } from '@/components/features';
import { cameras } from '@/data';
import { 
  ArrowLeft, 
  Camera,
  Calendar,
  Image,
  ExternalLink,
  Share2,
  Check,
  Info,
  Star,
  Award
} from 'lucide-react';

export default function CameraDetailPage() {
  const params = useParams();
  const router = useRouter();
  const camera = cameras.find((c) => c.id === params.id);

  if (!camera) {
    return (
      <PageContainer>
        <Section>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Camera Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The camera you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/cameras">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cameras
              </Button>
            </Link>
          </div>
        </Section>
      </PageContainer>
    );
  }

  const relatedCameras = cameras
    .filter((c) => c.id !== camera.id && (c.type === camera.type || c.brand === camera.brand))
    .slice(0, 3);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'slr':
        return 'bg-blue-500';
      case 'rangefinder':
        return 'bg-green-500';
      case 'point-and-shoot':
        return 'bg-purple-500';
      case 'medium-format':
        return 'bg-amber-500';
      case 'tlr':
        return 'bg-red-500';
      case 'large-format':
        return 'bg-indigo-500';
      case 'instant':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatTypeLabel = (type: string) => {
    switch (type) {
      case 'slr':
        return 'SLR';
      case 'rangefinder':
        return 'Rangefinder';
      case 'point-and-shoot':
        return 'Point & Shoot';
      case 'medium-format':
        return 'Medium Format';
      case 'tlr':
        return 'TLR';
      case 'large-format':
        return 'Large Format';
      case 'instant':
        return 'Instant';
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
          {/* Camera Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <Camera className="w-24 h-24 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <div className="text-gray-500 dark:text-gray-400 text-sm">{camera.brand}</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">{camera.name}</div>
              </div>
              {camera.popular && (
                <div className="absolute top-4 right-4">
                  <Badge variant="warning" className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </Badge>
                </div>
              )}
            </div>
          </motion.div>

          {/* Camera Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/3"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="info">{camera.brand}</Badge>
                  <Badge className={`${getTypeColor(camera.type)} text-white`}>
                    {formatTypeLabel(camera.type)}
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {camera.name}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <FavoriteButton type="camera" id={camera.id} />
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {camera.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {camera.yearIntroduced || 'N/A'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Image className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {camera.format.join(', ')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Format</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                    {camera.skill}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Skill Level</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Camera className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                    {formatTypeLabel(camera.type)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Type</div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {camera.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </div>
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
                      {camera.priceRange}
                    </div>
                  </div>
                  <a
                    href={`https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(camera.brand + ' ' + camera.name)}`}
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

      {/* Pros & Cons */}
      <Section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Pros & Cons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Pros
              </h3>
              <ul className="space-y-2">
                {camera.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 mt-1">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Cons
              </h3>
              <ul className="space-y-2">
                {camera.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-red-500 mt-1">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Related Cameras */}
      {relatedCameras.length > 0 && (
        <Section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Similar Cameras
            </h2>
            <Link href="/cameras">
              <Button variant="ghost" size="sm">
                View All Cameras
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCameras.map((cam) => (
              <CameraCard key={cam.id} camera={cam} />
            ))}
          </div>
        </Section>
      )}
    </PageContainer>
  );
}
