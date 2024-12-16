'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.02,
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        px-6 py-3 rounded-xl font-medium 
        backdrop-blur-lg border 
        transition-all duration-300 
        ${variant === 'primary'
          ? 'bg-blue-600/90 hover:bg-blue-700/90 text-white border-blue-500/50 hover:border-blue-400/50'
          : 'bg-gray-800/90 hover:bg-gray-700/90 text-gray-100 border-gray-700/50 hover:border-gray-600/50'
        } 
        shadow-[0_8px_12px_-1px_rgba(0,0,0,0.7),0_4px_8px_-1px_rgba(0,0,0,0.2)]
        hover:shadow-[0_15px_25px_-3px_rgba(0,0,0,0.7),0_8px_12px_-2px_rgba(0,0,0,0.2),0_0_30px_rgba(59,130,246,0.3)]
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}