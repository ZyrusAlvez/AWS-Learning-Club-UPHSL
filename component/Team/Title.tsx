const Title = () => {
  return (  
    <div className="flex flex-col items-center gap-2 sm:gap-3 w-full px-4 sm:px-6 mb-4">

      <div className="flex gap-x-2 sm:gap-x-3 w-full items-center max-w-6xl">
        <div className="border border-[#FFA500] flex-1"/>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
            Meet our <span className="text-[#FFA500]">Team</span>
          </h1>  
        <div className="border border-[#FFA500] flex-1"/>
      </div>

      <h1 className="text-center max-w-[800px] text-xs sm:text-sm md:text-base lg:text-lg px-2">
        Our team is made up of cloud experts, experienced trainers, and passionate community builders who are dedicated to helping you succeed in your AWS journey
      </h1>
    </div>
  )
}

export default Title