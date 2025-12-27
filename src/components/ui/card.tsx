import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  interactive?: boolean;
}

export function Card({ children, className, href, interactive = false }: CardProps) {
  const baseClasses = cn(
    'bg-white dark:bg-gray-900 rounded-2xl',
    'border border-gray-200 dark:border-gray-800',
    'shadow-sm hover:shadow-md dark:shadow-gray-950/50',
    'transition-all duration-300',
    interactive && 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
    className
  );

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={baseClasses}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800', className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-4 sm:p-6', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('p-4 sm:p-6 border-t border-gray-100 dark:border-gray-800', className)}>
      {children}
    </div>
  );
}
