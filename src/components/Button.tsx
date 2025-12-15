import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { hoverScale, tapScale } from '../utils/animations';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30',
  secondary: 'bg-slate-800 text-white hover:bg-slate-900',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  as = 'button',
  href,
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={hoverScale}
        whileTap={tapScale}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={hoverScale}
      whileTap={tapScale}
      {...props}
    >
      {children}
    </motion.button>
  );
};
