"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import arrow from "@/public/arrowdown.png";
import CEO from "@/public/segun_short.png";
import handshake from "@/public/handshake.png";

export default function ProfessionalSection() {
  const whoIServe = [
    "Immigration professionals navigating wealth in a new country",
    "Finance, tech, healthcare, or law professionals ready for more meaning",
    "Church leader or business owner looking for alignment",
    "Aspiring financial advisor who wants mentorship that works",
  ];

  const whyTrustMe = [
    "CEO of a $4M+ WFG agency with clients in Canada and the U.S.",
    "Former data scientist at ExxonMobil and CMHC",
    "Trained over 1,000 licensed financial advisors",
    "Speaker, mentor, and strategist across industries",
  ];

  return (
    <section className="container mx-auto px-4 sm:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <Image
            src={CEO}
            alt="Professional portrait"
            className="object-cover"
          />
        </div>

        <Card className="bg-[#AB832B] text-white flex flex-col justify-center p-6 items-center rounded-2xl">
          <CardContent className="space-y-8">
            <h2 className="text-[24px] md:text-[36px] font-bold mb-4 text-white">Who I Serve</h2>

            <ul className="space-y-4">
              {whoIServe.map((item, index) => (
                <li key={index} className="flex items-start gap-6">
                  <div className="bg-[#0E2A45] rounded-full flex justify-center items-center p-1 shrink-0 w-7 h-7 md:w-10 md:h-10">
                      <Image src={arrow} alt="arrow" className="w-4 h-4 md:w-6 md:h-6"/>
                  </div>
                  <span className="text-[15px] md:text-[20px]">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg"
              className="mt-4 w-auto cursor-pointer bg-[#0E2A45] rounded-full h-12 text-[15px] md:text-[20px] px-8"
            >
              Follow the movement
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <Card className="bg-[#1a2e44] text-white flex flex-col order-2 md:order-1 justify-center p-6 md:p-10 items-center rounded-2xl">
          <CardContent className="space-y-5 md:space-y-8">
            <h2 className="text-[24px] md:text-[36px] font-bold mb-6 md:mb-10 text-white">Why Professionals Trust Me</h2>

            <ul className="space-y-4 md:space-y-10">
              {whyTrustMe.map((item, index) => (
                <li key={index} className="flex items-start gap-6">
                  <div className="bg-[#AB832B] rounded-full flex justify-center items-center p-1 shrink-0 w-7 h-7 md:w-10 md:h-10">
                    <Image src={arrow} alt="arrow" className="w-4 h-4 md:w-6 md:h-6"/>
                  </div>
                  <span className="text-[15px] md:text-[20px]">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src={handshake}
            alt="Handshake"
            className="object-cover"
          />
        </div>
      </div>

    </section>
  );
}