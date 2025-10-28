"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "Who is Segun Makinde, and what makes his approach unique?",
      answer: "Segun Makinde is a financial strategist with a unique background combining AI, data science, and faith-based leadership. His approach focuses on aligning your finances with your values and purpose, rather than just maximizing returns. He brings experience from leading a $4M+ cross-border agency and training over 1,000 licensed advisors."
    },
    {
      question: "What does 'Wealth with Purpose' mean?",
      answer: "Wealth with Purpose means building financial success that aligns with your values, family goals, and long-term legacy rather than just accumulating assets. It's about ensuring your money works toward what matters most to you—whether that's generational impact, ministry support, or creating meaningful change in your community."
    },
    {
      question: "How is your approach different from that of traditional financial advisors?",
      answer: "The approach integrates financial planning with personal values, faith, and leadership development, providing holistic guidance beyond traditional investment advice. Rather than focusing solely on portfolio performance, the emphasis is on financial clarity, personal alignment, and long-term impact that reflects your deepest values."
    },
    {
      question: "Do you only work with clients in Canada, the U.S. and internationally?",
      answer: "Yes, services are available to clients in Canada, the United States, and select international markets. The cross-border expertise allows for comprehensive financial strategies that account for the unique challenges faced by international professionals and immigrant families."
    },
    {
      question: "Is this coaching only for people of faith, or can anyone benefit?",
      answer: "While faith principles are integrated into the approach, the financial strategies and leadership guidance benefit anyone seeking purposeful wealth management. The core focus is on aligning your finances with your personal values and long-term vision, regardless of your specific belief system."
    },
    {
      question: "How does the 7-Day Wealth Reset work, and who is it for?",
      answer: "The 7-Day Wealth Reset is a practical guide offering mindset shifts and financial tools to help professionals realign their habits with their goals. It's designed for busy professionals who want to reset their relationship with money and create clarity around their financial priorities in just one week."
    },
    {
      question: "Do you provide investment advice, or just financial coaching?",
      answer: "Services include both investment advice and comprehensive financial coaching, covering wealth creation, protection, and legacy planning. This includes insurance strategies, investment guidance, tax planning, and holistic financial strategy that integrates with your life goals and values."
    },
    {
      question: "How can your mentorship help me align money and mission as a church leader or business owner?",
      answer: "The mentorship provides frameworks to integrate financial stewardship with your organizational mission and personal values. This includes strategic planning for ministry funding, business growth aligned with purpose, and personal financial management that reflects your calling and commitment to service."
    },
    {
      question: "Can young professionals just starting also work with you?",
      answer: "Yes, services are designed for professionals at various career stages, from those just starting to established leaders. Early-career professionals benefit from building strong financial foundations, developing wealth-building habits, and creating a roadmap that aligns with their long-term vision from the beginning."
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1a2e44] mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-[#1a2e44] font-medium text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}