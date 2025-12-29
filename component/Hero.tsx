"use client";

import Button from "./UI/Button"
import SlideShow from "./Hero/SlideShow"
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter();

  return (
    <div className='h-screen flex flex-col-reverse md:flex-row md:items-center md:justify-between md:gap-4 md:px-8 md:py-2'>
      <main className='flex flex-col text-white ml-4 gap-2'>
        <h1 className='text-5xl font-bold'><span className='text-[#ffa23f] font-extrabold'>AWS</span> Learning Club</h1>
        <h2 className='text-lg  font-bold'>University of Perpetual Help System Laguna - Biñan</h2>
        <div className="flex gap-4">
          <Button variant="purple" className="w-[250px] mt-4" onClick={() => router.push("/membership")}>Join Our Community</Button>
          <Button variant="orange" className="w-[200px] mt-4" onClick={() => router.push("/verify")}>Verify</Button>
        </div>
      </main>
      {/* slide show */}
      <div className="md:w-[50%] w-full h-[100%] min-h-[240px] flex flex-col justify-center items-center ">
        <h2 className="text-5xl text-center hi-melody mb-2 text-[#ffa23f]">It's Always Day 1</h2>
        <SlideShow />
      </div>
    </div>
  )
}

export default Hero