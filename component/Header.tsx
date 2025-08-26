import awslc_logo from "../public/awslc logo.webp"
import Image from "next/image";
import Button from "./ui/Button";
import TextButton from "./ui/TextButton";

const Header = () => {
  return (
    <header className='h-[80px] w-full fixed bg-black/20 backdrop-blur-sm z-50 hidden md:block'>
      <div className="flex items-center h-full p-8 justify-between">
        <div className="flex gap-4 items-center text-white font-extrabold text-xl">
          <Image src={awslc_logo} alt="AWS Learning Club" className="w-16"/>
          <h1>AWSLC - UPHSL</h1>
        </div>
        <div className="flex gap-4 items-center">
          <TextButton>About Us</TextButton>
          <TextButton>Events</TextButton>
          <TextButton>The Team</TextButton>
          <TextButton>Contact Us</TextButton>
          <Button>Join Us</Button>
        </div>
      </div>
    </header>
  )
}

export default Header