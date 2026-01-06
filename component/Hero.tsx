"use client";

import Button from "./UI/Button"
import SlideShow from "./Hero/SlideShow"
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex h-[70px] md:hidden"/>
      <div className='md:h-screen md:max-h-[600px] mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-16 px-4 py-8 md:py-0 max-w-7xl'>
        <main className='flex flex-col text-white gap-3 md:gap-4'>
          <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold'><span className='text-[#ffa23f] font-extrabold'>AWS</span> Learning Club</h1>
          <h2 className='text-sm sm:text-base md:text-base font-bold'>University of Perpetual Help System Laguna - Biñan</h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2">
            <Button variant="purple" className="w-full sm:w-[200px]" onClick={() => router.push("/membership")}>Join Our Community</Button>
            <Button variant="orange" className="w-full sm:w-[160px]" onClick={() => router.push("/verify")}>Verify</Button>
          </div>
        </main>
        {/* slide show */}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-center hi-melody text-[#ffa23f]">It's Always Day 1</h2>
          <SlideShow />
        </div>
      </div>
    </>
  )
}

export default Hero