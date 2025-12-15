const Title = () => {
  return (  
    <div className="flex flex-col items-center gap-2">

      <div className="flex gap-x-2 px-4 w-full items-center">
        <div className="border border-[#FFA500] w-1/2"/>
          <h1 className="text-5xl font-bold whitespace-nowrap">
            Meet our <span className="text-[#FFA500]">Team</span>
          </h1>  
        <div className="border border-[#FFA500] w-1/2"/>
      </div>

      <h1 className="text-center max-w-[800px] sm:text-lg">
        Our team is made up of cloud experts, experienced trainers, and passionate community builders who are dedicated to helping you succeed in your AWS journey
      </h1>
    </div>
  )
}

export default Title