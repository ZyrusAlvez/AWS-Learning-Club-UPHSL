import HeroSection from "@/component/Hero"
import Team from "@/component/Team";
import About from "@/component/About"

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <About />
      <Team />     
    </div>
  )
}

export default Page