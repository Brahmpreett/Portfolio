import { ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface CardComponentProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  style?: CSSProperties;
}

const CardComponent = ({ 
  children, 
  className, 
  hover = true, 
  gradient = false,
  style
}: CardComponentProps) => {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-2xl p-6 shadow-lg transition-all duration-300',
        hover && 'hover-lift hover:shadow-xl',
        gradient && 'relative overflow-hidden',
        className
      )}
      style={style}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/5 to-gradient-primary-end/5 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CardComponent;