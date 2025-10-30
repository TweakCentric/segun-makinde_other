import { Button } from '@/components/ui/button';
import arrow from "@/public/arrowdown.png";
import faith from "@/public/faith_icon.png";
import leadership from "@/public/leadership_icon.png";
import wealth from "@/public/wealth_icon.png";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: wealth,
      title: 'Wealth with Purpose',
      description: 'Tailored insurance, investments, and financial strategies are grounded in what matters most: your values, family, and future.',
    },
    {
      icon: leadership,
      title: 'Leadership with Vision',
      description: "I mentor professionals, aspiring advisors, and executives ready to scale with clarity. You'll grow your mindset, your business, and your impact.",
    },
    {
      icon: faith,
      title: 'Faith as Foundation',
      description: 'Your money, mission, and leadership should align with your beliefs. I help you live and lead from a place of conviction.',
    },
  ];

  return (
    <section id="services" className="text-white py-12 sm:py-16 md:py-20 container mx-auto px-4 sm:px-24">
      <div className="bg-[#0E2A45] px-4 md:px-8 rounded-xl py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-white mb-4 rounded-full pr-6">
            <div className="bg-[#AB832B] rounded-full flex justify-center items-center p-1">
                <Image src={arrow} alt="arrow" className="size-7"/>
            </div>
            <span className="text-sm font-light text-[20px] text-[#1E1E1E]">Services</span>
        </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold py-6">How I Help</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            return (
              <div 
                key={index} 
                className="bg-[#113960] p-6 sm:p-8 rounded-lg"
              >
                <div className="mb-4">
                  <Image src={service.icon} alt={service.title} className='size-9'/>
                </div>
                <h3 className="text-lg sm:text-[30px] font-bold mb-3 py-2">{service.title}</h3>
                <p className="text-gray-300 text-base sm:text-[18px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#AB832B] w-auto rounded-full h-12 text-[15px] md:text-[20px]">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}