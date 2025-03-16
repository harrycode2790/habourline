"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = ({ backgroundColor = "white" , textColor = 'gray-700', hoverColor = 'black'}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={
      ` bg-${ scrolling ? '[#1019C2]' : backgroundColor } text-${scrolling ? 'white' : textColor} py-5 px-7 shadow-sm sticky top-0 z-50 transition-all duration-1000 `
      }>
      <div className="container mx-auto flex items-center justify-between md:justify-start relative">
        {/* Mobile: Menu button on the LEFT */}
        <button className="md:hidden p-2 absolute left-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile: Logo CENTERED / Desktop: Left */}
        <div className="flex-2 flex justify-center md:justify-start">
          {scrolling ? (
            <Image 
              src="/images/logoW.png" 
              alt="Logo" 
              width={200} 
              height={200} 
              className="md:w-52 lg:w-64 h-auto"
            />
          ) : (
            <Image 
             
            src="/images/harbourline logo.png" 
            alt="Logo" 
            width={200} 
            height={200} 
            className="md:w-48 lg:w-64 h-auto"
          />
          ) }
         
        </div>


        {/* Desktop: Navigation CENTERED */}
        <nav className="hidden md:flex flex-10  justify-center space-x-10">
          <Link href="#" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>About</Link>
          <Link href="#" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Services</Link>
          <Link href="#" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Location</Link>
          <Link href="#" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Our Strength</Link>
          <Link href="#" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Customer Care</Link>
        </nav>

        {/* Desktop: Track & Login Buttons (Right) */}
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-black font-semibold px-4 py-2 rounded-md">
            Track
          </Link>
          <button className="bg-[#0B91D4] text-white px-4 py-2 rounded-md hover:bg-blue-400">
            <Link href="/">Charter a Vessel</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden mt-4 bg-${backgroundColor} p-4 rounded-md space-y-3`}>
          <Link href="#" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>About</Link>
          <Link href="#" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Services</Link>
          <Link href="#" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Location</Link>
          <Link href="#" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Our Strength</Link>
          <Link href="#" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Customer Care</Link>

          {/* Mobile: Track & Login Buttons */}
          <div className="mt-4 flex flex-col space-y-2">
            <Link href="#" className="text-black font-semibold text-center">Track</Link>
            <button className="bg-[#0B91D4] text-white text-center px-4 py-2 rounded-md hover:bg-blue-400">
              <Link href="/">Charter a Vessel</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
