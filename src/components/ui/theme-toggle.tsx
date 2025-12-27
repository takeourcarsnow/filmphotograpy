'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' }
  ];

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.name === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].name);
  };

  const currentTheme = themes.find(t => t.name === theme) || themes[2];
  const Icon = currentTheme.icon;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={cycleTheme}
      className="relative p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 
                 backdrop-blur-sm border border-gray-200 dark:border-gray-700
                 hover:bg-gray-100 dark:hover:bg-gray-700 
                 transition-all duration-200 shadow-sm"
      aria-label={`Current theme: ${currentTheme.label}. Click to change.`}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.8, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Icon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </motion.div>
    </motion.button>
  );
}
