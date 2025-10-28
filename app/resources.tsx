import Link from 'next/link';

export default function ResourcesSection() {
  const resources = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur. Mauris Egest.',
      description: 'Lorem ipsum dolor sit amet consectetur. At est posuere mauris id arcu. Nunc pres.',
      image: '/placeholder-resource-1.jpg',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur. Eget Turpis Enim.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut urna cursus ut tortor lorem turpis faci.',
      image: '/placeholder-resource-2.jpg',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur. Vel Lacus Morbi.',
      description: 'Lorem ipsum dolor sit amet consectetur. Elementum eros erat neque sit purus pren.',
      image: '/placeholder-resource-3.jpg',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2e44]">Resources</h2>
          <Link 
            href="/blog" 
            className="text-[#1a2e44] hover:text-[#c8a55c] transition-colors font-medium text-sm sm:text-base"
          >
            Read More →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-xs sm:text-sm">Resource Image {index + 1}</span>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-[#1a2e44] mb-3 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}