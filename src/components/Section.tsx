import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  as?: 'section' | 'div' | 'article' | 'aside';
}

export const Section = ({
  children,
  id,
  className = '',
  containerClassName = '',
  fullWidth = false,
  as = 'section'
}: SectionProps) => {
  const Component = motion[as];

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
          {children}
        </div>
      )}
    </Component>
  );
};
