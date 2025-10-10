import { FaInstagram, FaTwitter, FaDribbble, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import breakLineText from "../utils/breakText";
import Link from "next/link";

const text = 'Habourline offshore ltd provides customized services for customers around the world from 50+ leading industries. For more information, please contact us.'

const FooterPage = () => {

  return (
    <footer className="text-gray-800 mt-20  ">
      <div className=" mx-auto px-6 md:px-0 py-12">

        <div className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left mb-20 md:mb-35 gap-8">
          <h2 className="text-2xl md:text-5xl font-bold text-black">Your Needs are our <br /> priority</h2>
          <div className="mt-4 md:mt-5">
            <a href="mailto:sales@habourlineoffshore.com">
              <button className="bg-[#0B91D4] text-white px-6 py-4 flex items-center gap-8 hover:bg-[#1019C2] transition">
                Contact Us
                <FaArrowRight className="ml-4 md:ml-9" />
              </button>
            </a>

          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Bottom Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 py-5 md:py-10">

          {/* Company Info - Left column */}
          <div className="justify-self-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/Habourline - Alternative - Darkg-Transparent-01.png"
                width={50}
                height={50}
                alt="fav"
              />
              <h3 className="text-xl font-bold">
                <span className="hidden md:block">Habourline Offshore Ltd</span>
                <span className="md:hidden">Habourline</span>
              </h3>
            </div>
            <p className="text-sm mt-2 hidden md:block text-[#606060]">{breakLineText(text, 4)}</p>
            <p className="text-sm mt-2 md:hidden text-[#606060]">{text}</p>
          </div>

          {/* Contact Info - Right column */}
          <div className="justify-self-end ">
            <h4 className="font-semibold text-lg mt-4 md:mt-0">Contact</h4>
            <a className="mt-2 text-sm block" href="mailto:sales@habourlineoffshore.com">
              sales@habourlineoffshore.com
            </a>
            <a className="mt-2 text-sm block" href="mailto:partnerships@habourlineoffshore.com">
              partnerships@habourlineoffshore.com
            </a>
          </div>

        </div>


        {/* Footer Bottom */}
        <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-start justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">

          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage


