'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Film, 
  Camera, 
  Circle, 
  BookOpen, 
  Wrench, 
  GraduationCap,
  Home,
  Heart
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/films', label: 'Films', icon: Film },
  { href: '/cameras', label: 'Cameras', icon: Camera },
  { href: '/tools', label: 'Tools', icon: Wrench },
  { href: '/favorites', label: 'Saved', icon: Heart },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center justify-around h-16 pb-safe">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center flex-1 h-full',
                  'transition-colors duration-200'
                )}
              >
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="bottomNavActive"
                      className="absolute inset-0 -m-2 rounded-full bg-gray-100 dark:bg-gray-800"
                      transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                    />
                  )}
                  <Icon 
                    className={cn(
                      'relative w-6 h-6 transition-colors',
                      isActive 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-400 dark:text-gray-500'
                    )} 
                  />
                </div>
                <span 
                  className={cn(
                    'text-xs mt-1 transition-colors',
                    isActive 
                      ? 'text-gray-900 dark:text-white font-medium' 
                      : 'text-gray-500 dark:text-gray-400'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
