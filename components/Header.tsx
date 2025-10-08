"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";




const Header = ({ backgroundColor = "white", textColor = 'gray-700', hoverColor = 'black', imageUrl = "/images/Habourline - Alternative - Darkg-Transparent-01.png", scrollImg = '/images/Habourline - Grey.png' }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [imageSrc, setImageSrc] = useState("/images/Habourline - Alternative - Darkg-Transparent-01.png");
  const currentPath = usePathname();
  const fixedHeaderPages = ["/about", "/services"];
  const dropdownBg =
    currentPath === "/services"
      ? "[#1019C2]"
      : currentPath === "/about"
        ? "[#1019C2]"
        : "";


  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolling(true);
      }
      else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateImage = () => {
      setImageSrc(window.innerWidth >= 768 ? imageUrl : "/images/Habourline - Alternative - Darkg-Transparent-01.png");
    };

    updateImage(); // Set on initial load
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);



  return (
    <header className={`
  bg-${scrolling ? '[#1019C2]' : backgroundColor} 
  text-${scrolling ? 'white' : textColor} 
  md:py-2 py-4 w-full 
  shadow-sm 
  ${fixedHeaderPages.includes(currentPath) ? 'fixed' : 'sticky'} 
  top-0 z-50 transition-all duration-1000
`}>
      <div className="mx-auto px-4 md:px-7 flex items-center justify-between md:justify-start relative">

        {/* Mobile: Menu button on the LEFT */}
        <button className="md:hidden p-2 absolute left-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile: Logo CENTERED / Desktop: Left */}
        <div className="flex-1 flex justify-center md:justify-start items-center space-x-3">
          <Link href="/" className="flex  items-center space-x-1">

            <Image
              src={scrolling ? scrollImg : imageSrc}
              alt="Logo"
              width={200}
              height={200}
              className={`w-10 md:w-${scrolling ? '30' : '30'} lg:w-20 h-auto`}
            />
            <h2 className="text-xl font-semibold">Habourline</h2>
            <h2 className="text-xl font-semibold">Offshore</h2>
          </Link>
        </div>


        {/* Desktop: Navigation CENTERED */}
        <nav className="hidden md:flex flex-10 justify-center space-x-10">
          <Link href="/about" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>About</Link>
          <Link href="/services" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Services</Link>
          <Link href="/location" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Location</Link>
          <Link href="/customer-care" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Customer Care</Link>
          <Link href="/vessel-catalogue" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Vessel Catalogue </Link>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-md space-y-3 bg-${dropdownBg}`}>
          <Link href="/about" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>About</Link>
          <Link href="/services" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Services</Link>
          <Link href="/location" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Location</Link>         
          <Link href="/customer-care" className={`block hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Customer Care</Link>
          <Link href="/vessel-catalogue" className={`hover:text-${scrolling ? 'blue-400' : hoverColor}`}>Vessel Catalogue </Link>
        </div>
      )}
    </header>

  );
};

export default Header;


