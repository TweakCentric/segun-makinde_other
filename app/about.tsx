export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-[#c8a55c] mb-4">
            <span className="text-xl sm:text-2xl">✓</span>
            <span className="text-sm font-medium">About</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2e44] px-4">
            A Financial Strategist with a Mission, and a Track Record
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-linear-to-b from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Professional Photo</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                My name is <strong>Segun Makinde</strong>, and I work at the intersection of financial strategy, leadership development, and faith. With a background in AI and data science and years leading a <strong>$4M+ cross-border agency</strong>, I help professionals like you build wealth with intention.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                My work isn&apos;t about quick wins. It&apos;s about financial clarity, personal alignment, and long-term impact. I&apos;ve trained 1,000+ licensed advisors, guided hundreds of clients through wealth creation, and mentored leaders in business and ministry.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-[#c8a55c] p-4 sm:p-6 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[#1a2e44] mb-2">$4M+</div>
                <div className="text-xs sm:text-sm text-gray-600">Cross-border agency</div>
              </div>

              <div className="bg-white border-l-4 border-[#c8a55c] p-4 sm:p-6 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[#1a2e44] mb-2">1,000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Trained licensed advisors</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                <h3 className="font-bold text-[#1a2e44] mb-3 text-base sm:text-lg">Mission</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Wealth isn&apos;t just numbers. It&apos;s Meaning. You&apos;re successful on paper, but are your finances aligned with your purpose?
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-2">
                  I help immigrant professionals, HNW families, and goal-driven leaders manage their money, lead with clarity, and design a life that reflects their deepest values. The goal isn&apos;t just financial freedom; it&apos;s financial legacy.
                </p>
              </div>

              <div className="bg-[#c8a55c] text-white p-4 sm:p-6 rounded-lg">
                <h3 className="font-bold mb-3 text-base sm:text-lg">Vision</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Wealth isn&apos;t just numbers. It&apos;s Meaning. You&apos;re successful on paper, but are your finances aligned with your purpose?
                </p>
                <p className="text-xs sm:text-sm leading-relaxed mt-2">
                  I help immigrant professionals, HNW families, and leaders manage their money, lead with clarity, and design a life that reflects their deepest values. The goal isn&apos;t just financial freedom; it&apos;s financial legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}