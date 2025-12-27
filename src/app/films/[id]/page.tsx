'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, Section } from '@/components/layout';
import { Button, Badge, Card, CardContent, FavoriteButton } from '@/components/ui';
import { FilmCard } from '@/components/features';
import { films } from '@/data';
import { 
  ArrowLeft, 
  Film, 
  Sun, 
  Palette,
  Sparkles,
  Box,
  ExternalLink,
  Share2
} from 'lucide-react';

export default function FilmDetailPage() {
  const params = useParams();
  const router = useRouter();
  const film = films.find((f) => f.id === params.id);

  if (!film) {
    return (
      <PageContainer>
        <Section>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎞️</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Film Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The film you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/films">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Films
              </Button>
            </Link>
          </div>
        </Section>
      </PageContainer>
    );
  }

  const relatedFilms = films
    .filter((f) => f.id !== film.id && (f.type === film.type || f.brand === film.brand))
    .slice(0, 3);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'color-negative':
        return { label: 'Color Negative', color: 'bg-amber-500' };
      case 'black-white':
        return { label: 'Black & White', color: 'bg-gray-500' };
      case 'slide':
        return { label: 'Slide Film', color: 'bg-purple-500' };
      default:
        return { label: type, color: 'bg-gray-500' };
    }
  };

  const typeInfo = getTypeLabel(film.type);
  const mainIso = film.iso[0];

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
          {/* Film Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3"
          >
            <div 
              className="aspect-[3/4] rounded-2xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <div className="text-center relative z-10">
                <Film className="w-16 h-16 text-white/80 mx-auto mb-4" />
                <div className="text-white/90 text-xl font-bold">{film.name}</div>
                <div className="text-white/70">{film.brand}</div>
              </div>
            </div>
          </motion.div>

          {/* Film Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/3"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="info">{film.brand}</Badge>
                  <Badge className={`${typeInfo.color} text-white`}>
                    {typeInfo.label}
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {film.name}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <FavoriteButton type="film" id={film.id} />
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {film.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <Sun className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {film.iso.join('/')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">ISO</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Sparkles className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                    {film.process}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Process</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Palette className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                    {film.price}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Price Tier</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Box className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {film.format.join(', ')}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Formats</div>
                </CardContent>
              </Card>
            </div>

            {/* Characteristics */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Characteristics
              </h3>
              <div className="flex flex-wrap gap-2">
                {film.characteristics.map((char) => (
                  <Badge key={char} variant="secondary">
                    {char}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Best For
              </h3>
              <div className="flex flex-wrap gap-2">
                {film.bestFor.map((use) => (
                  <Badge key={use} variant="outline">
                    {use}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-gray-50 dark:bg-gray-800/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Availability
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                      {film.availability.replace('-', ' ')}
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/search?q=buy+${encodeURIComponent(film.brand + ' ' + film.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="sm">
                      Find Sellers
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Sample Images Section */}
      <Section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Sample Results
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
            >
              <div className="text-gray-400 text-sm">Sample {i}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Sample images coming soon. Feel free to share your shots with this film!
        </p>
      </Section>

      {/* Tips Section */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Tips for Shooting {film.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                📸 Exposure
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {film.type === 'color-negative' 
                  ? `Color negative film is very forgiving. You can safely overexpose by 1-2 stops for richer shadows.`
                  : film.type === 'slide'
                  ? `Slide film requires precise exposure. Meter for highlights to avoid blown-out areas.`
                  : `B&W negative film has excellent latitude. Overexpose for smoother tones, underexpose for more contrast.`
                }
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                🌡️ Development
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {film.process === 'BW'
                  ? `Can be home developed with standard B&W chemistry. Try different developers for different looks.`
                  : film.process === 'E-6'
                  ? `Requires E-6 process. Best sent to a professional lab for consistent results.`
                  : `Requires C-41 process. Available at most labs, or can be done at home with a kit.`
                }
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                🎯 Best Results
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This film excels in {film.bestFor.slice(0, 2).join(' and ').toLowerCase()} situations. 
                Great for capturing {film.characteristics[0]?.toLowerCase() || 'beautiful'} shots.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                💡 Pro Tip
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {mainIso <= 200
                  ? `Low ISO films like this work best on sunny days or with a tripod. Great for landscapes!`
                  : mainIso >= 800
                  ? `High ISO films are perfect for low light and street photography. Embrace the grain!`
                  : `Medium ISO gives you flexibility for both outdoor and indoor shooting conditions.`
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Related Films */}
      {relatedFilms.length > 0 && (
        <Section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Similar Films
            </h2>
            <Link href="/films">
              <Button variant="ghost" size="sm">
                View All Films
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedFilms.map((f, index) => (
              <FilmCard key={f.id} film={f} index={index} />
            ))}
          </div>
        </Section>
      )}
    </PageContainer>
  );
}
