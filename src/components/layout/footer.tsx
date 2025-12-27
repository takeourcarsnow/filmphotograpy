import Link from 'next/link';
import { Camera, Github, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-black dark:bg-white">
                <Camera className="w-5 h-5 text-white dark:text-black" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Film Guide
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your comprehensive guide to analog photography. Learn about films, cameras, lenses, and techniques.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/films" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Film Stocks
                </Link>
              </li>
              <li>
                <Link href="/cameras" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Cameras
                </Link>
              </li>
              <li>
                <Link href="/lenses" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Lenses
                </Link>
              </li>
              <li>
                <Link href="/techniques" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Techniques
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Learn
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/learn" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/learn/glossary" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/tools/quiz" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Take a Quiz
                </Link>
              </li>
              <li>
                <Link href="/tools/calculator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Exposure Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Film Photography Guide. Made with 📷 for film lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
