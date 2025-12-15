"use client";

import Image from "next/image";
import Button from "./UI/Button";
import TextButton from "./UI/TextButton";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className='h-[80px] w-full fixed bg-black/20 backdrop-blur-sm z-50 hidden md:block'>
      <div className="flex items-center h-full p-8 justify-between">
        <div className="flex gap-4 items-center text-white font-extrabold text-xl">
          <Image src="/awslc logo.webp" alt="AWS Learning Club" width={64} height={64}/>
          <h1>AWSLC - UPHSL</h1>
        </div>
        <div className="flex gap-4 items-center">
          <TextButton>About Us</TextButton>
          <TextButton>Events</TextButton>
          <TextButton>The Team</TextButton>
          <TextButton>Contact Us</TextButton>
          <Button onClick={() => router.push("/membership")}>Join Us</Button>
        </div>
      </div>
    </header>
  )
}

export default Header