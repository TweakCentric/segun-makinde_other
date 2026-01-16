"use client";

export default function ValuesBanner() {
  return (
    <>
      <style jsx>{`
        @keyframes move-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling {
          display: flex;
          width: max-content;
          animation: move-left 25s linear infinite;
        }

        @media (max-width: 768px) {
          .scrolling {
            animation-duration: 15s;
          }
        }
      `}</style>

      {/* Gold Banner */}
      <div className="bg-[#c8a55c] text-white mb-26 mt-28 overflow-hidden relative z-10">
        <div className="py-3 sm:py-10">
          <div className="flex items-center justify-center whitespace-nowrap">
            <div className="scrolling space-x-8 sm:space-x-16 text-[18px] sm:text-[26px] font-medium">
              {/* duplicate spans twice for smooth infinite scroll */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex space-x-8 sm:space-x-16">
                  <p><span className="mr-6">●</span>Faith</p>
                  <p><span className="mr-6">●</span>Excellence</p>
                  <p><span className="mr-6">●</span>Generational Impact</p>
                  <p><span className="mr-6">●</span>Leadership</p>
                  <p><span className="mr-6">●</span>Stewardship</p>
                  <p><span className="mr-6">●</span>Service</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blue Background Section with Image */}
      <div 
        className="-mt-45 sm:-mt-75 bg-cover bg-center bg-no-repeat h-25 sm:h-70"
        style={{
          backgroundImage: "url('/blue_skew.png')"
        }}
      >
      </div>
    </>
  );
}