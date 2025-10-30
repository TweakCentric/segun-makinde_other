"use client";

import { Card } from "@/components/ui/card";
import quotes from "@/public/quotes.png";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    { text: "Lorem ipsum dolor sit amet consectetur.", author: "Peter, Belgium", role: "Pro Financials" },
    { text: "Lorem ipsum dolor sit amet consectetur.", author: "Alicia, Canada", role: "Pro Financials" },
    { text: "Lorem ipsum dolor sit amet consectetur.", author: "Nadien, New Mexico", role: "Pro Financials" },
    { text: "Lorem ipsum dolor sit amet consectetur.", author: "Rachael, UK", role: "Pro Financials" },
    { text: "Lorem ipsum dolor sit amet consectetur.", author: "Keith, Australia", role: "Pro Financials" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .scroll {
            animation-duration: 24s;
          }
        }
      `}</style>

      <section className="py-12 sm:py-16 md:py-20 container mx-auto px-4 sm:px-24">
        <div className="text-center mb-16">
          <h2 className="text-[25px] md:text-4xl font-bold text-[#1E1E1E]">What My Clients Say</h2>
        </div>

        <div className="overflow-hidden relative [mask:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Continuous scroll container */}
          <div
            className={`scroll ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate testimonials twice for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card
                key={i}
                className="shrink-0 w-80 p-8 mx-3 bg-[#F1F4F6] shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
              >
                <Image src={quotes} alt="quote" className="size-10 md:size-13" />
                <p className="text-gray-600 mb-8 text-[17px] md:text-[21px] leading-relaxed">
                  {t.text}
                </p>
                <div className="mt-8">
                  <p className="text-[#67646A] text-xs leading-relaxed">{t.author}</p>
                  <p className="text-[#67646A] text-xs leading-relaxed">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
