import Button from "./UI/Button"
import SlideShow from "./Hero/SlideShow"
import CloudDivider from "./Hero/CloudDivider"

const HeroSection = () => {
  return (
    <div className="flex flex-col">
        <div className='h-screen flex flex-col-reverse md:flex-row md:items-center md:justify-between md:gap-4 md:px-8 md:py-2'>
          <main className='flex flex-col text-white ml-4 gap-2'>
            <h1 className='text-5xl font-bold'><span className='text-[#ffa23f] font-extrabold'>AWS</span> Learning Club</h1>
            <h2 className='text-lg  font-bold'>University of Perpetual Help System Laguna - Biñan</h2>
            <Button variant="purple" className="w-[250px] mt-4">Join Our Community</Button>
          </main>
          {/* slide show */}
          <div className="md:w-[50%] w-full h-[100%] min-h-[240px] flex flex-col justify-center items-center ">
            <h2 className="text-5xl text-center hi-melody mb-2 text-[#ffa23f]">It's Always Day 1</h2>
            <SlideShow />
          </div>
        </div>
        {/* cloud */}
        <div className="-mt-[20%] relative z-10">
          <CloudDivider></CloudDivider>
        </div>
    </div>
  
  )
}

export default HeroSection