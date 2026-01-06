const Title = () => {
  return (  
    <div className="flex flex-col items-center gap-2 sm:gap-3 w-full px-4 sm:px-6 mb-4">

      <div className="flex gap-x-2 sm:gap-x-3 w-full items-center max-w-6xl">
        <div className="border border-[#ffa23f] flex-1"/>
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center sm:whitespace-nowrap">
            Major <span className="text-[#ffa23f]">Events</span> & Community Participation
          </h1>  
        <div className="border border-[#ffa23f] flex-1"/>
      </div>
    </div>
  )
}

export default Title