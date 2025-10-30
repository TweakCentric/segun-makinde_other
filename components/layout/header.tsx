'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import logo from "@/public/segun_logo.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 sm:px-24 py-4 text-white mt-8">
      <div className="bg-[#0E2A45] px-4 sm:px-8 py-4 rounded-[36px]">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt='logo' width={120}/>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-[#AB832B] transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-[#AB832B] transition-colors">
              Services
            </Link>
            <Link href="#blog" className="hover:text-[#AB832B] transition-colors">
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button size="lg" className="hidden text-[#0E2A45] bg-white rounded-full h-12 font-semibold text-lg cursor-pointer sm:block">
              Book a Meeting
            </Button>
            
            <Button size="sm" className="sm:hidden text-[#0E2A45] bg-white rounded-full">
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