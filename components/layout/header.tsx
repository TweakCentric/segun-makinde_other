'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a2e44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold">OMM</div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-[#c8a55c] transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-[#c8a55c] transition-colors">
              Services
            </Link>
            <Link href="#blog" className="hover:text-[#c8a55c] transition-colors">
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button size="default" className="hidden sm:block">
              Book a Meeting
            </Button>
            
            <Button size="sm" className="sm:hidden">
              Book
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              href="#about" 
              className="block hover:text-[#c8a55c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="block hover:text-[#c8a55c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#blog" 
              className="block hover:text-[#c8a55c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}