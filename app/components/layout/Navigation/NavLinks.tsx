'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { useRouter } from 'next/navigation';
import { useSite } from '@/app/config/hooks/useSite';

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
  isMobile?: boolean;
}

export default function NavLinks({ className = '', onItemClick, isMobile = false }: NavLinksProps) {
  const router = useRouter();
  const { content } = useSite();
  const { links, cta } = content.navigation;

  return (
    <div className={`${className} ${isMobile ? 'space-y-4' : 'flex items-center space-x-6'}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onItemClick}
          className={`relative group ${isMobile ? 'block py-2' : ''}`}
        >
          <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
            {link.label}
          </span>
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      ))}
      <Button 
        variant="primary"
        className={isMobile ? 'w-full mt-4' : ''}
        onClick={() => {
          if (onItemClick) onItemClick();
          router.push(cta.href);
        }}
      >
        {cta.label}
      </Button>
    </div>
  );
}