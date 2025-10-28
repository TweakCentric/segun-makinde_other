import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Links */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-3xl sm:text-4xl font-bold">OMM</div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm">
              OLUWASEGUN MICHAEL MAKINDE
            </p>
            
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <Link href="/" className="hover:text-[#c8a55c] transition-colors text-sm sm:text-base">
                Home
              </Link>
              <Link href="#about" className="hover:text-[#c8a55c] transition-colors text-sm sm:text-base">
                About
              </Link>
              <Link href="#services" className="hover:text-[#c8a55c] transition-colors text-sm sm:text-base">
                Services
              </Link>
              <Link href="#blog" className="hover:text-[#c8a55c] transition-colors text-sm sm:text-base">
                Blog
              </Link>
            </nav>

            <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="hover:text-[#c8a55c] transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="hover:text-[#c8a55c] transition-colors"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link 
                href="https://youtube.com" 
                target="_blank"
                className="hover:text-[#c8a55c] transition-colors"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[#234259] p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Makinde on Money Weekly Digest
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">
              Get weekly insights on wealth, leadership, and faith-driven success.
            </p>
            
            <form className="space-y-3 sm:space-y-4">
              <Input 
                type="text" 
                placeholder="Name" 
                className="bg-white text-gray-900"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-white text-gray-900"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>© 2025 Segun Makinde. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}