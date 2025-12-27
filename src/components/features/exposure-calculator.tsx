'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Button, Select, Badge } from '@/components/ui';
import { motion } from 'framer-motion';
import { Sun, Cloud, CloudRain, Moon, Sunset, ArrowRight, Calculator, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

const shutterSpeeds = [
  '30s', '15s', '8s', '4s', '2s', '1s', '1/2', '1/4', '1/8', '1/15', '1/30',
  '1/60', '1/125', '1/250', '1/500', '1/1000', '1/2000', '1/4000', '1/8000'
];

const apertures = [
  'f/1.0', 'f/1.4', 'f/2', 'f/2.8', 'f/4', 'f/5.6', 'f/8', 'f/11', 'f/16', 'f/22', 'f/32'
];

const isoValues = ['25', '50', '100', '200', '400', '800', '1600', '3200', '6400'];

interface LightCondition {
  name: string;
  icon: React.ReactNode;
  ev: number;
  description: string;
}

const lightConditions: LightCondition[] = [
  { name: 'Bright Sun', icon: <Sun className="w-6 h-6" />, ev: 15, description: 'Direct sunlight, harsh shadows' },
  { name: 'Hazy Sun', icon: <Sun className="w-6 h-6 opacity-70" />, ev: 14, description: 'Thin clouds, soft shadows' },
  { name: 'Cloudy Bright', icon: <Cloud className="w-6 h-6" />, ev: 13, description: 'Overcast, no shadows' },
  { name: 'Cloudy', icon: <Cloud className="w-6 h-6 opacity-70" />, ev: 12, description: 'Heavy overcast' },
  { name: 'Shade', icon: <CloudRain className="w-6 h-6" />, ev: 11, description: 'Open shade, deep overcast' },
  { name: 'Golden Hour', icon: <Sunset className="w-6 h-6" />, ev: 12, description: 'Sunrise/sunset' },
  { name: 'Twilight', icon: <Moon className="w-6 h-6 opacity-70" />, ev: 8, description: 'After sunset' },
  { name: 'Night', icon: <Moon className="w-6 h-6" />, ev: -2, description: 'Street lights, city' },
];

export function ExposureCalculator() {
  const [selectedCondition, setSelectedCondition] = useState<LightCondition>(lightConditions[0]);
  const [iso, setIso] = useState('400');
  const [aperture, setAperture] = useState('f/8');
  const [calculatedShutter, setCalculatedShutter] = useState('1/500');

  useEffect(() => {
    // Calculate shutter speed based on EV, ISO, and aperture
    const isoNum = parseInt(iso);
    const apertureNum = parseFloat(aperture.replace('f/', ''));
    const ev = selectedCondition.ev;
    
    // EV = log2(aperture^2 / shutter) + log2(ISO/100)
    // Solving for shutter: shutter = aperture^2 / (2^(EV - log2(ISO/100)))
    const evAdjusted = ev + Math.log2(isoNum / 100);
    const shutterSeconds = (apertureNum * apertureNum) / Math.pow(2, evAdjusted);
    
    // Find closest shutter speed
    const shutterIndex = shutterSpeeds.findIndex((s) => {
      const sValue = s.includes('/') 
        ? 1 / parseInt(s.split('/')[1])
        : parseInt(s);
      return sValue <= shutterSeconds;
    });
    
    setCalculatedShutter(shutterSpeeds[Math.max(0, Math.min(shutterIndex, shutterSpeeds.length - 1))]);
  }, [selectedCondition, iso, aperture]);

  return (
    <div className="space-y-6">
      {/* Light Conditions */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-gray-900 dark:text-white">Light Conditions</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {lightConditions.map((condition) => (
              <motion.button
                key={condition.name}
                onClick={() => setSelectedCondition(condition)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'p-4 rounded-xl border-2 transition-all text-left',
                  selectedCondition.name === condition.name
                    ? 'border-gray-900 dark:border-white bg-gray-100 dark:bg-gray-800'
                    : 'border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900'
                )}
              >
                <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
                  {condition.icon}
                </div>
                <p className="font-medium text-sm text-gray-900 dark:text-white">
                  {condition.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  EV {condition.ev}
                </p>
              </motion.button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-gray-900 dark:text-white">Film Speed (ISO)</h3>
          </CardHeader>
          <CardContent>
            <Select
              options={isoValues.map(v => ({ value: v, label: `ISO ${v}` }))}
              value={iso}
              onChange={setIso}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Higher ISO = more light sensitivity, more grain
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-semibold text-gray-900 dark:text-white">Aperture</h3>
          </CardHeader>
          <CardContent>
            <Select
              options={apertures.map(v => ({ value: v, label: v }))}
              value={aperture}
              onChange={setAperture}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Lower f-number = wider aperture, shallower depth of field
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Result */}
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="py-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Recommended Shutter Speed
            </p>
            <motion.div
              key={calculatedShutter}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {calculatedShutter}
            </motion.div>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{selectedCondition.name}</span>
              <span>•</span>
              <span>ISO {iso}</span>
              <span>•</span>
              <span>{aperture}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sunny 16 Rule Reference */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-gray-900 dark:text-white">Sunny 16 Quick Reference</h3>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="py-2 text-left text-gray-500 dark:text-gray-400">Condition</th>
                  <th className="py-2 text-left text-gray-500 dark:text-gray-400">Aperture</th>
                  <th className="py-2 text-left text-gray-500 dark:text-gray-400">Shutter (at ISO 100)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 text-gray-700 dark:text-gray-300">Bright Sun</td>
                  <td className="py-2 text-gray-900 dark:text-white font-medium">f/16</td>
                  <td className="py-2 text-gray-900 dark:text-white">1/100s</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 text-gray-700 dark:text-gray-300">Slight Overcast</td>
                  <td className="py-2 text-gray-900 dark:text-white font-medium">f/11</td>
                  <td className="py-2 text-gray-900 dark:text-white">1/100s</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 text-gray-700 dark:text-gray-300">Overcast</td>
                  <td className="py-2 text-gray-900 dark:text-white font-medium">f/8</td>
                  <td className="py-2 text-gray-900 dark:text-white">1/100s</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 text-gray-700 dark:text-gray-300">Heavy Overcast</td>
                  <td className="py-2 text-gray-900 dark:text-white font-medium">f/5.6</td>
                  <td className="py-2 text-gray-900 dark:text-white">1/100s</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-700 dark:text-gray-300">Shade</td>
                  <td className="py-2 text-gray-900 dark:text-white font-medium">f/4</td>
                  <td className="py-2 text-gray-900 dark:text-white">1/100s</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Tip: For different ISOs, adjust shutter speed proportionally. ISO 400 = 1/400s at f/16 in bright sun.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
