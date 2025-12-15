import HeroSection from "@/component/Hero"
import Team from "@/component/Team"
import About from "@/component/About"
import Contact from "@/component/Contact"

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <About />
      <Team />     
      <Contact />
    </div>
  )
}

export default Page