const Title = () => {
  return (  
    <div className="flex flex-col items-center gap-2 w-full">

      <div className="flex gap-x-2 px-4 w-full items-center">
        <div className="border border-[#ffa23f] w-1/2"/>
          <h1 className="text-5xl font-bold whitespace-nowrap">
            <span className="text-[#ffa23f]">Connect</span> with us
          </h1>  
        <div className="border border-[#ffa23f] w-1/2"/>
      </div>

      <h1 className="text-center max-w-[1000px] sm:text-lg">
        We're seeking partnerships, collaborations, and sponsorships to grow our cloud community. Connect with us if your organization wants to support student development in AWS and cloud technologies.
      </h1>
    </div>
  )
}

export default Title