import { Button } from '@/components/ui/button';
import arrow from "@/public/circled-up-right-arrow.png";
import portrait from "@/public/segun_potrait.png";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-24 pt-6 sm:pt-8 md:pt-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center md:text-left mt-20 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-tight">
              <span className="text-[#AB832B]">Multiply What Matters</span>
              <br />
              <span className="text-[#0E2A45]">Wealth with Purpose.</span>
              <br />
              <span className="text-[#0E2A45]">Leadership with Vision.</span>
            </h1>
            
            <p className="text-base sm:text-[22px] text-[#1E1E1E] max-w-md mx-auto md:mx-0 font-light">
              You&apos;re in the right place if you&apos;re building a legacy, not just a portfolio.
            </p>
            
            <Button size="lg" className="mt-4 w-auto bg-[#0E2A45] rounded-full h-12 text-[15px] md:text-[20px]">
              Start Your 7-Day Wealth Reset
            </Button>
          </div>
          
          <div className="relative order-first md:order-last">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#e8dcc8] rounded-full"></div>
              <div className="relative z-10 flex items-end justify-center h-full top-20">
                <Image src={portrait} alt='Segun Potrait'/>
              </div>
                <div
                className="absolute top-4 sm:top-8 right-4 md:right-0 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#0E2A45] bg-cover bg-center"
                style={{
                    backgroundImage: "url('./book_segun.png')",
                    backgroundSize: "150%",
                }}>
                    <div className="bg-[#AB832B] rounded-full flex items-center justify-center p-2">
                        <Image src={arrow} alt="arrow" className="size-6" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}