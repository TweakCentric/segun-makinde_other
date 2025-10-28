import { Button } from '@/components/ui/button';
import { Wallet, Users, Heart } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Wallet,
      title: 'Wealth with Purpose',
      description: 'Tailored insurance, investments, and financial strategies are grounded in what matters most: your values, family, and future.',
    },
    {
      icon: Users,
      title: 'Leadership with Vision',
      description: "I mentor professionals, aspiring advisors, and executives ready to scale with clarity. You'll grow your mindset, your business, and your impact.",
    },
    {
      icon: Heart,
      title: 'Faith as Foundation',
      description: 'Your money, mission, and leadership should align with your beliefs. I help you live and lead from a place of conviction.',
    },
  ];

  return (
    <section id="services" className="bg-[#1a2e44] text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-[#c8a55c] mb-4">
            <span className="text-xl sm:text-2xl">●</span>
            <span className="text-sm font-medium">Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">How I Help</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-[#1e3a52] p-6 sm:p-8 rounded-lg hover:bg-[#234259] transition-colors"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#c8a55c]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="w-full sm:w-auto">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}