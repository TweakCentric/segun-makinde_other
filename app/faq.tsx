"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const leftColumn = faqs.filter((_, i) => i % 2 === 0)
  const rightColumn = faqs.filter((_, i) => i % 2 === 1)

  const AccordionItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
    const isOpen = openItems.includes(index)
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleItem(index)}
          className="w-full flex items-start gap-4 p-6 bg-white shadow-lg cursor-pointer text-left hover:bg-gray-100 transition-colors"
        >
          <Plus 
            className={`w-6 h-6 text-gray-600 shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-45' : ''}`}
          />
          <div className="flex-1">
            <h3 className="text-[#1B1139] font-medium md:text-[19px] leading-relaxed">
              {faq.question}
            </h3>
            {isOpen && (
              <p className="text-[#1B1139] text-sm leading-relaxed mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        </button>
      </div>
    )
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 container mx-auto px-4 sm:px-24">
        <div className="text-center mb-16">
          <h2 className="text-[25px] md:text-4xl font-bold text-[#1E1E1E]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            {leftColumn.map((faq, i) => (
              <AccordionItem key={i * 2} faq={faq} index={i * 2} />
            ))}
          </div>
          <div>
            {rightColumn.map((faq, i) => (
              <AccordionItem key={i * 2 + 1} faq={faq} index={i * 2 + 1} />
            ))}
          </div>
        </div>
    </section>
  )
}