const Title = () => {
  return (  
    <div className="flex flex-col items-center gap-3 sm:gap-4 w-full px-4 sm:px-6">

      <div className="flex gap-x-2 sm:gap-x-4 w-full items-center max-w-6xl">
        <div className="border border-[#ffa23f] flex-1"/>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
            <span className="text-[#ffa23f]">Connect</span> with us
          </h1>  
        <div className="border border-[#ffa23f] flex-1"/>
      </div>

      <h1 className="text-center max-w-[1000px] text-sm sm:text-base md:text-lg px-2">
        We're seeking partnerships, collaborations, and sponsorships to grow our cloud community. Connect with us if your organization wants to support student development in AWS and cloud technologies.
      </h1>
    </div>
  )
}

export default Title