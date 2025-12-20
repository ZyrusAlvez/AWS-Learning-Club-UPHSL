import { IoEyeSharp } from "react-icons/io5";
import { SlTarget } from "react-icons/sl";

const Mission = () => {
  return (
    <div className='flex justify-center items-center sm:flex-col md:flex-row py-8 px-16 gap-8'>

      <div className='flex flex-col items-center border-2 border-[#ffa23f] p-8 rounded-xl sm:w-full md:w-1/2 bg-white/10 backdrop-blur-3xl h-[300px]' >
        <SlTarget size={22} className="absolute top-9"/>
        <div
          className="w-[22px] h-0 rounded-full absolute top-12"
          style={{ boxShadow: "0 0 30px 20px rgba(255, 162, 63, 0.4)" }}
        ></div>
        <h1 className="text-2xl font-semibold mt-14 mb-4">MISSION</h1>
        <h2 className="text-center mx-4">
          "Our mission is to foster a friendly and collaborative
          environment where individuals interested in technology,
          especially AWS and cloud computing, can connect, learn, and
          grow. We aim to support members in developing their cloud
          skills, building meaningful connections, and exploring
          innovative solutions in the tech industry."
        </h2>
      </div>

      <div className='flex flex-col items-center border-2 border-[#ffa23f] p-8 rounded-xl sm:w-full md:w-1/2 bg-white/10 backdrop-blur-3xl h-[300px]'>
        <IoEyeSharp size={22} className="absolute top-9"/>
        <div
          className="w-[22px] h-0 rounded-full absolute top-12"
          style={{ boxShadow: "0 0 30px 20px rgba(255, 162, 63, 0.4)" }}
        ></div>
        <h1 className="text-2xl font-semibold mt-14 mb-4">VISION</h1>
        <h2 className="text-center mx-4">
         "To create a supportive space at the University of Perpetual Help System Laguna, where students and tech enthusiasts can come together to explore, learn, and share emerging technologies, with a focus on AWS and cloud computing."
        </h2>
      </div>




    </div>
  )
}

export default Mission