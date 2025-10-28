import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#c8a55c]">Multiply What Matters</span>
              <br />
              <span className="text-[#1a2e44]">Wealth with Purpose.</span>
              <br />
              <span className="text-[#1a2e44]">Leadership with Vision.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              You&apos;re in the right place if you&apos;re building a legacy, not just a portfolio.
            </p>
            
            <Button size="lg" className="mt-4 w-full sm:w-auto">
              Start Your 7-Day Wealth Reset
            </Button>
          </div>
          
          <div className="relative order-first md:order-last">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#e8dcc8] rounded-full"></div>
              <div className="relative z-10 flex items-end justify-center h-full">
                {/* Placeholder for professional image */}
                <div className="w-full h-5/6 bg-linear-to-b from-gray-300 to-gray-400 rounded-t-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs sm:text-sm">Professional Photo</span>
                </div>
              </div>
              <div className="absolute top-4 sm:top-8 right-0 bg-[#1a2e44] text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <div className="text-center text-xs">
                  <div className="text-[#c8a55c]">●</div>
                  <div className="text-[10px]">Est 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values banner */}
      <div className="bg-[#c8a55c] text-white py-3 sm:py-4 overflow-x-auto">
        <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-xs sm:text-sm font-medium whitespace-nowrap px-4">
          <span>● Faith</span>
          <span>● Excellence</span>
          <span>● Generational Impact</span>
          <span>● Leadership</span>
          <span>● Stewardship</span>
          <span>● Service</span>
        </div>
      </div>
    </section>
  );
}