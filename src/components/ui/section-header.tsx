import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  children, 
  className,
  center = true 
}: SectionHeaderProps) => {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
      {/* Animated gradient line */}
      <div className="flex justify-center mt-6">
        <div className="w-24 h-1 gradient-primary rounded-full animate-pulse-slow" />
      </div>
    </div>
  );
};

export default SectionHeader;