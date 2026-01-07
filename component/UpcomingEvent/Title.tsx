const Title = () => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 w-full px-4 sm:px-6 mb-4">
      <div className="flex gap-x-2 sm:gap-x-3 w-full items-center max-w-6xl">
        <div className="border border-[#ffa23f] flex-1"/>
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center sm:whitespace-nowrap">
          Upcoming <span className="text-[#ffa23f]">Events</span>
        </h1>  
        <div className="border border-[#ffa23f] flex-1"/>
      </div>
      <h2 className="text-center max-w-[1000px] text-xs sm:text-sm md:text-base lg:text-lg px-2">
        Join us for exciting events designed to enhance your AWS skills and connect with fellow cloud enthusiasts
      </h2>
    </div>
  )
}

export default Title