"use client";

import Image from "next/image";
import Button from "./UI/Button";
import TextButton from "./UI/TextButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className='h-[70px] w-full fixed bg-black/20 backdrop-blur-sm z-49 flex items-center px-4 md:px-8 justify-between'>
        <div className="flex gap-2 md:gap-4 items-center text-white font-extrabold text-lg md:text-xl">
          <Image src="/awslc logo.webp" alt="AWS Learning Club" width={45} height={45} className="md:w-14 md:h-14"/>
          <h1>AWSLC - UPHSL</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 items-center">
          <TextButton onClick={() => scrollToSection('about')}>About Us</TextButton>
          <TextButton onClick={() => scrollToSection('events')}>Events</TextButton>
          <TextButton onClick={() => scrollToSection('upcoming')}>Upcoming</TextButton>
          <TextButton onClick={() => scrollToSection('team')}>The Team</TextButton>
          <TextButton onClick={() => scrollToSection('contact')}>Contact Us</TextButton>
          <Button onClick={() => router.push("/membership")}>Join Us</Button>
        </div>

        {/* Burger Menu Button */}
        <button
          className="lg:hidden text-white relative cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 " onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`bg-black/20 backdrop-blur-xs lg:hidden fixed top-0 right-0 h-screen w-64 transition-transform duration-300 ease-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col pt-16 px-6 gap-6">
          <TextButton onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}>About Us</TextButton>
          <TextButton onClick={() => { scrollToSection('events'); setIsMenuOpen(false); }}>Events</TextButton>
          <TextButton onClick={() => { scrollToSection('upcoming'); setIsMenuOpen(false); }}>Upcoming</TextButton>
          <TextButton onClick={() => { scrollToSection('team'); setIsMenuOpen(false); }}>The Team</TextButton>
          <TextButton onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>Contact Us</TextButton>
          <Button className="mt-4" onClick={() => { router.push("/membership"); setIsMenuOpen(false); }}>Join Us</Button>
        </div>
      </div>
    </>
  )
}

export default Header