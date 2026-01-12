import Header from "@/component/Header"
import Hero from "@/component/Hero"
import Team from "@/component/Team"
import About from "@/component/About"
import Contact from "@/component/Contact"
import Event from "@/component/Event"
import UpcomingEvent from "@/component/UpcomingEvent"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'AWS Learning Club at UPHSL - Join our community of cloud computing enthusiasts. Meet our team: Zyrus Alvez (President), Renzo Ramos (Vice President), and dedicated officers. Attend AWS workshops, seminars, and events.',
  openGraph: {
    title: 'AWS Learning Club - UPHSL | Home',
    description: 'Join the AWS Learning Club at University of Perpetual Help System Laguna',
  },
};

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Hero />
      <About />
      <Event />
      <UpcomingEvent />
      <Team />     
      <Contact />
    </div>
  )
}

export default Page