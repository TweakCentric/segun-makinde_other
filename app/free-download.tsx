import { Button } from '@/components/ui/button'

export default function FreeDownload() {
  return (
    <section className="text-white py-12 sm:py-16 md:py-20 container mx-auto px-4 sm:px-24">
      <div className="bg-[#F1F4F6] px-4 md:px-8 rounded-xl py-12 md:py-16 text-center flex justify-center">
        <div className='max-w-3xl flex flex-col items-center'>
            <h2 className='text-[29px] md:text-[48px] font-semibold text-[#0E2A45] leading-tight md:leading-relaxed mb-2 md:mb-0'><span className='text-[#AB832B]'>Free Download:</span> 7-Day Wealth Reset for Professionals</h2>
            <p className='text-[#1E1E1E] font-light text-[16px] md:text-[20px] max-w-2xl'>Practical mindset shifts and financial tools to help you reset your habits and design your life with clarity.</p>
            <Button size="lg" className="mt-4 w-auto bg-[#0E2A45] rounded-full h-12 text-[15px] md:text-[20px]">
                Download The Free Guide
            </Button>
        </div>
      </div>
    </section>
  )
}
