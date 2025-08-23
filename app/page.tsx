import Button from "../component/ui/Button"
import SlideShow from "../component/SlideShow"
import CloudDivider from "@/component/CloudDivider"


const HeroSection = () => {
  return (
    <div>
        <div className='h-screen w-full flex items-center justify-between gap-4 px-8 pt-8 pb-2'>
          <main className='flex flex-col text-white ml-4 gap-2'>
            <h1 className='text-5xl font-bold'><span className='text-[#ffa23f] font-extrabold'>AWS</span> Learning Club</h1>
            <h2 className='text-lg  font-bold'>University of Perpetual Help System Laguna - Biñan</h2>
            <Button variant="purple" className="w-[250px] mt-4">Join Our Community</Button>
          </main>

          <div>
            <h2 className="text-5xl text-center hi-melody mb-2 text-[#ffa23f]">It's Always Day 1</h2>
            <SlideShow />
          </div>
        </div>
        <div>
          <CloudDivider></CloudDivider>
        </div>
        <div className="h-64"><br /><br /></div>
    </div>
  
  )
}

export default HeroSection