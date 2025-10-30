import Link from 'next/link';
import image1 from "@/public/sg_r1.png";
import image2 from "@/public/sg_r2.png";
import image3 from "@/public/sg_r3.png"
import Image from 'next/image';

export default function ResourcesSection() {
  const resources = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur. Mauris Egest.',
      description: 'Lorem ipsum dolor sit amet consectetur. At est posuere mauris id arcu. Nunc pres.',
      image: image1,
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur. Eget Turpis Enim.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut urna cursus ut tortor lorem turpis faci.',
      image: image2,
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Consectetur. Vel Lacus Morbi.',
      description: 'Lorem ipsum dolor sit amet consectetur. Elementum eros erat neque sit purus pren.',
      image: image3,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold text-[#1a2e44]">Resources</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div></div>
          <Link 
            href="/blog" 
            className="text-[#1a2e44] hover:text-[#c8a55c] transition-colors font-medium text-xs md:text-sm"
          >
            Read More
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="overflow-hidden hover:scale-105 transition-all"
            >
              <Image src={resource.image} alt="blog_image" />
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