import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Lorem ipsum dolor sit amet consectetur.',
      author: 'Anne Benson',
      role: 'CFO Google Inc.',
    },
    {
      quote: 'Lorem ipsum dolor sit amet consectetur.',
      author: 'John Creative',
      role: 'CEO Microsoft',
    },
    {
      quote: 'Lorem ipsum dolor sit amet consectetur.',
      author: 'Jackson Nikolov',
      role: 'CFO Google Inc.',
    },
    {
      quote: 'Lorem ipsum dolor sit amet consectetur.',
      author: 'Samantha Mill',
      role: 'CFO Google Inc.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1a2e44] mb-8 sm:mb-12">
          What My Clients Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-lg relative"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#c8a55c] mb-4" />
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#1a2e44] text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}