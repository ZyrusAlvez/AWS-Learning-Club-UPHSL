const Title = () => {
  return (  
    <div className="flex flex-col items-center gap-2 sm:gap-3 w-full px-4 sm:px-6 mb-4">

      <div className="flex gap-x-2 sm:gap-x-3 w-full items-center max-w-6xl">
        <div className="border border-[#ffa23f] flex-1"/>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:whitespace-nowrap">
            Major <span className="text-[#ffa23f]">Events</span> & <span className="text-[#ffa23f]">Community</span> Participation
          </h1>  
        <div className="border border-[#ffa23f] flex-1"/>
      </div>
      <h2 className="text-center max-w-[800px] text-xs sm:text-sm md:text-base lg:text-lg px-2">
        Some of our hosted events and community participation where we're invited to share knowledge and connect with fellow tech enthusiasts
      </h2>
    </div>
  )
}

export default Title