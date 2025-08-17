import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

const Tag = ({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className,
  onClick,
  active = false
}: TagProps) => {
  const variants = {
    default: 'bg-secondary text-secondary-foreground',
    gradient: 'gradient-primary text-white',
    outline: 'border border-border bg-transparent hover:bg-surface-elevated'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-all duration-200',
        variants[variant],
        sizes[size],
        onClick && 'cursor-pointer hover:scale-105',
        active && variant === 'outline' && 'bg-surface-elevated border-gradient-primary-start',
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tag;