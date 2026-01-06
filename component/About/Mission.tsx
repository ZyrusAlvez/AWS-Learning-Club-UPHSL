import { IoEyeSharp } from "react-icons/io5";
import { SlTarget } from "react-icons/sl";

const Mission = () => {
  return (
    <div className='flex justify-center items-stretch flex-col lg:flex-row py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-16 gap-6 sm:gap-8 w-full max-w-7xl mx-auto'>

      <div className='flex flex-col items-center border-2 border-[#cc8232] p-4 sm:p-6 md:p-8 rounded-xl w-full lg:w-1/2 bg-white/10 backdrop-blur-3xl min-h-[250px] sm:min-h-[300px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ffa23f]' >
        <SlTarget size={22} className="absolute top-9"/>
        <div
          className="w-[22px] h-0 rounded-full absolute top-12"
          style={{ boxShadow: "0 0 30px 20px rgba(255, 162, 63, 0.4)" }}
        ></div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mt-12 sm:mt-14 mb-3 sm:mb-4">MISSION</h1>
        <h2 className="text-center mx-2 sm:mx-4 text-xs sm:text-sm md:text-base leading-relaxed">
          "Our mission is to foster a friendly and collaborative
          environment where individuals interested in technology,
          especially AWS and cloud computing, can connect, learn, and
          grow. We aim to support members in developing their cloud
          skills, building meaningful connections, and exploring
          innovative solutions in the tech industry."
        </h2>
      </div>

      <div className='flex flex-col items-center border-2 border-[#cc8232] p-4 sm:p-6 md:p-8 rounded-xl w-full lg:w-1/2 bg-white/10 backdrop-blur-3xl min-h-[250px] sm:min-h-[300px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ffa23f]' >
        <IoEyeSharp size={22} className="absolute top-9"/>
        <div
          className="w-[22px] h-0 rounded-full absolute top-12"
          style={{ boxShadow: "0 0 30px 20px rgba(255, 162, 63, 0.4)" }}
        ></div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mt-12 sm:mt-14 mb-3 sm:mb-4">VISION</h1>
        <h2 className="text-center mx-2 sm:mx-4 text-xs sm:text-sm md:text-base leading-relaxed">
         "To create a supportive space at the University of Perpetual Help System Laguna, where students and tech enthusiasts can come together to explore, learn, and share emerging technologies, with a focus on AWS and cloud computing."
        </h2>
      </div>
    </div>
  )
}

export default Mission