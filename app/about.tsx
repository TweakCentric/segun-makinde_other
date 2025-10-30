import arrow from "@/public/arrowdown.png";
import Image from "next/image";
import segun from "@/public/segun_white.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-24">
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#F1F4F6] mb-4 rounded-full pr-6">
            <div className="bg-[#0E2A45] rounded-full flex justify-center items-center p-1">
                <Image src={arrow} alt="arrow" className="size-7"/>
            </div>
            <span className="text-sm font-light text-[20px]">About</span>
          </div>
          <h2 className="text-2xl sm:text-[32px] md:text-[34px] font-bold text-[#1a2e44] max-w-[500px]">
            A Financial Strategist with a Mission, and a Track Record
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <div className="md:col-span-1">
            <Image src={segun} alt="Segun's photo" className="md:h-126"/>
          </div>

            <div className="md:col-span-2">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-[#F1F4F6] p-6 rounded-lg md:h-126">
                        <p className="text-sm sm:text-[19px] text-[#0E2A45] leading-relaxed mb-4">
                            My name is <strong>Segun Makinde</strong>, and I work at the intersection of financial strategy, leadership development, and faith. With a background in AI and data science and years leading a <strong>$4M+ cross-border agency</strong>, I help professionals like you build wealth with intention.
                        </p>
                        <p className="text-sm sm:text-[19px] text-[#0E2A45] leading-relaxed mt-6">
                            My work isn&apos;t about quick wins. It&apos;s about financial clarity, personal alignment, and long-term impact. I&apos;ve trained 1,000+ licensed advisors, guided hundreds of clients through wealth creation, and mentored leaders in business and ministry.
                        </p>
                    </div>

                    <div className="flex flex-row md:flex-col gap-2 md:space-y-4">
                        <div className="bg-white border-2 border-[#0E2A45] p-4 sm:p-6 shadow-sm rounded-xl text-center">
                            <div className="text-2xl sm:text-[50px] font-bold text-[#0E2A45] mb-2">$4M+</div>
                            <div className="text-base sm:text-[21px] text-[#0E2A45]">Cross-border agency</div>
                        </div>

                        <div className="bg-white border-2 border-[#0E2A45] p-4 sm:p-6 shadow-sm rounded-xl text-center">
                            <div className="text-2xl sm:text-[50px] font-bold text-[#0E2A45] mb-2">1,000+</div>
                            <div className="text-base sm:text-[21px] text-[#0E2A45]">Trained licensed advisors</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}