import Header from "@/component/Header"
import Hero from "@/component/Hero"
import Team from "@/component/Team"
import About from "@/component/About"
import Contact from "@/component/Contact"
import Event from "@/component/Event"

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Hero />
      <About />
      <Event />
      <Team />     
      <Contact />
    </div>
  )
}

export default Page