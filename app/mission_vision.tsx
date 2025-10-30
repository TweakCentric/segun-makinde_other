import React from 'react'

export default function MissionVision() {
  return (
    <section className='container mx-auto px-4 sm:px-24 pb-18'>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-14">
            <div className="bg-[#F1F4F6] p-4 sm:p-12 rounded-lg text-[#1E1E1E]">
                <h3 className="font-semibold mb-3 text-[25px] sm:text-[35px]">Mission</h3>
                <p className="text-base sm:text-[19px] leading-relaxed">
                    Wealth isn&apos;t just numbers. It&apos;s Meaning. You&apos;re successful on paper, but are your finances aligned with your purpose?
                </p>
                <p className="text-base sm:text-[19px] leading-relaxed mt-2 md:mt-5">
                    I help immigrant professionals, HNW families, and goal-driven leaders manage their money, lead with clarity, and design a life that reflects their deepest values. The goal isn&apos;t just financial freedom; it&apos;s financial legacy.
                </p>
            </div>

            <div className="bg-[#AB832B] text-white p-4 sm:p-8 rounded-lg">
                <h3 className="font-semibold mb-3 text-[25px] sm:text-[35px]">Vision</h3>
                <p className="text-base sm:text-[19px] leading-relaxed mt-2 md:mt-5">
                    Wealth isn&apos;t just numbers. It&apos;s Meaning. You&apos;re successful on paper, but are your finances aligned with your purpose?
                </p>
                <p className="text-base sm:text-[19px] leading-relaxed mt-2 md:mt-5">
                    I help immigrant professionals, HNW families, and leaders manage their money, lead with clarity, and design a life that reflects their deepest values. The goal isn&apos;t just financial freedom; it&apos;s financial legacy.
                </p>
            </div>
        </div>
    </section>
  )
}
