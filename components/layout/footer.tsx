import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import facebook from "@/public/mdi_facebook.png";
import linkedin from "@/public/mdi_linkedin.png";
import youtube from "@/public/mdi_youtube.png";
import logo from "@/public/segun_logo.png";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0E2A45] text-white py-12 sm:py-16 md:py-20">
      <div className='container mx-auto px-4 sm:px-24'>
        <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-12 mb-8">
          <div className="flex flex-col justify-between gap-16 md:gap-0">
            {/* Logo and Links */}
            <div className='grid md:grid-cols-2 items-start gap-10 md:gap-40'>
              <Link href="/" className="flex items-center">
                <Image src={logo} alt='logo' width={240}/>
              </Link>
              
              <nav className="flex flex-col space-y-6">
                <Link href="/" className="hover:text-[#c8a55c] transition-colors text-base">
                  Home
                </Link>
                <Link href="#about" className="hover:text-[#c8a55c] transition-colors text-base">
                  About
                </Link>
                <Link href="#services" className="hover:text-[#c8a55c] transition-colors text-base">
                  Services
                </Link>
                <Link href="#blog" className="hover:text-[#c8a55c] transition-colors text-base">
                  Blog
                </Link>
              </nav>
            </div>

            <div className='flex flex-col gap-10'>
              <div className="flex items-center space-x-8">
                <Link 
                  href="https://www.linkedin.com/in/oluwasegun-michael-makinde-8a975b60" 
                  target="_blank"
                  className="hover:text-[#c8a55c] transition-colors size-9 hover:scale-105"
                >
                  <Image src={linkedin} alt='linkedin' />
                </Link>
                <Link 
                  href="https://facebook.com" 
                  target="_blank"
                  className="hover:text-[#c8a55c] transition-colors size-8 hover:scale-105"
                >
                  <Image src={facebook} alt='facebook' />
                </Link>
                <Link 
                  href="https://youtube.com" 
                  target="_blank"
                  className="hover:text-[#c8a55c] transition-colors size-9 hover:scale-105"
                >
                  <Image src={youtube} alt='youtube' />
                </Link>
              </div>
              <div>
                <p>© 2025 Segun Makinde. All Rights Reserved.</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border border-gray-300 p-6 sm:p-8 flex items-center justify-center flex-col rounded-lg max-w-md">
            <div className='max-w-75 mb-8'>
              <h3 className="text-xl sm:text-2xl text-center font-bold">
                Makinde on Money Weekly Digest
              </h3>
            </div>
            
            <form className="space-y-3 sm:space-y-4">
              <Input 
                type="text" 
                placeholder="Name" 
                className="bg-white text-gray-900 py-6"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-white text-gray-900 py-6"
              />
              <Button className="w-full bg-[#AB832B] py-6 cursor-pointer">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>  
    </footer>
  );
}