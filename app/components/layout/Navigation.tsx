'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useContent } from '@/app/content/hooks/useContent';
import { useTheme } from '@/app/theme/hooks/useTheme';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';
import Logo from './Navigation/Logo';
import NavLinks from './Navigation/NavLinks';
import { client } from '@/sanity/lib/client';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await client.fetch(`*[_type == "logo"]{
        logo{
          asset->{
            url
          }
        },
      }`);
      setData(res[0]);
    })();
  }, []);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 lg:px-8 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`
        max-w-7xl mx-auto 
        bg-[#1a1d25]/90
        backdrop-blur-lg 
        rounded-2xl 
        border border-gray-800/50
        transition-all duration-300
        shadow-[0_8px_12px_-1px_rgba(0,0,0,0.7),0_4px_8px_-1px_rgba(0,0,0,0.2),0_0_15px_rgba(59,130,246,0.15)]
        hover:shadow-[0_15px_25px_-3px_rgba(0,0,0,0.7),0_8px_12px_-2px_rgba(0,0,0,0.2),0_0_30px_rgba(59,130,246,0.3)]
        hover:border-blue-600/30
        ${scrolled ? 'bg-[#1a1d25]/95' : ''}
      `}>
        <div className="flex items-center justify-between h-14 px-3">
          <Logo data={data}/>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          {isOpen && (
            <div className="border-t border-gray-800/50 px-3 py-4">
              <NavLinks isMobile onItemClick={() => setIsOpen(false)} />
            </div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
}