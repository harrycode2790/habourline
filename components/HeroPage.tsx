"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaTags, FaArrowRight, FaShip,  FaTruckMoving, FaBoxOpen, FaCar, } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";


const HeroPage = () => {
    
  return (
    <>
    
        <section>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10">
            {/* Title */}
            <div className="md:col-span-8 text-center md:text-left ">
                <p className="text-4xl md:text-6xl font-bold">
                    We provide logistics solution tailor-made <br /> <span className="hidden md:block" >for individual customers!</span>
                </p>
            </div>
        
            
            {/* Description */}
            <div className="md:col-span-4 text-center md:text-left">
                <p className="text-gray-700 mt-4 md:mt-12 text-base md:text-lg">
                    HarbourLine Offstore LTD Express provides customized services for customers around 
                    the world from 50+ leading industries.
                </p>
            </div>
        
        </div>
        
        {/* Hero Image */}
        <div className="flex justify-center mt-15">
            <Image 
            src="/images/heroImage1.png" 
            alt="Shipping Containers"
            width={900}
            height={300}
            className="rounded-lg w-full h-auto "
            />
        </div>
        </section>

        <section className="mt-40 mb-30 ">
        <div className="container mx-auto ">
        <h2 className="text-2xl md:text-6xl text-black text-center md:text-left md:text-gray-700 font-bold mb-20">Why choose us?</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {/* Top Team */}
            <div className="text-center md:text-start">
            <FaUsers className="text-5xl text-[#DA7934] mx-auto md:mx-0" />

            <h3 className="text-lg md:text-xl font-bold mt-4">Top Team</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
                Sometimes features require a short <br /> description. This can be detailed <br />
                description or just a short text.
            </p>
            <Link
                href="#"
                className="text-[#0B91D4] font-semibold mt-4 inline-flex items-center gap-2"
            >
                Learn More <FaArrowRight/>
            </Link>
            </div>

            {/* Customer Support */}
            <div className="text-center md:text-start">
            <MdContactPhone className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
            <h3 className="text-lg md:text-xl font-bold mt-4">Customer Support</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
                Sometimes features require a short <br /> description. This can be detailed <br />
                description or just a short text.
            </p>
            <Link
                href="#"
                className="text-[#0B91D4] font-semibold mt-4 inline-flex items-center gap-2"
            >
                Learn More <FaArrowRight/>
            </Link>
            </div>

            {/* Competitive Rates */}
            <div className="text-center md:text-start">
            <FaTags className="text-5xl text-[#DA7934] mx-auto md:mx-0"  />
            <h3 className="text-lg md:text-xl font-bold mt-4">Competitive Rates</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
                Sometimes features require a short <br /> description. This can be detailed <br />
                description or just a short text.
            </p>
            <Link
                href="#"
                className="text-[#0B91D4] font-semibold mt-4 inline-flex items-center gap-2"
            >
                Learn More <FaArrowRight/>
            </Link>
            </div>
        </div>
        </div>       
        </section>

        <hr className="border-t border-gray-300 hidden md:block" />


        <section className="mt-40 mb-30 ">
        <div className="container mx-auto ">
        <h2 className="text-2xl md:text-6xl text-black text-center md:text-left font-bold mb-20">
            <span className="block md:hidden">The tools you need to <br /> win and keep more <br /> clients </span>
            <span className="hidden md:block">We Transport goods <br /> across the world's ocean <br /> with precision and care</span>

        </h2>

        {/* Grid Layout */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {/* Top Team */}
            <div className="text-center md:text-start">
            <FaShip className="text-5xl text-[#DA7934] mx-auto md:mx-0" />

            <h3 className="text-lg md:text-xl font-bold mt-4">Marine Cargo Service</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
                Sometimes features require a short <br /> description. This can be detailed <br />
                description or just a short text.
            </p>
          
            </div>

            {/* Customer Support */}
            <div className="text-center md:text-start">
            <FaCar className="text-5xl text-[#DA7934] mx-auto md:mx-0" />
            <h3 className="text-lg md:text-xl font-bold mt-4">Car Shipping Services</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
                Sometimes features require a short <br /> description. This can be detailed <br />
                description or just a short text.
            </p>
         
            </div>

            {/* Competitive Rates */}
            <div className="text-center md:text-start">
            <FaTruckMoving className="text-5xl text-[#DA7934] mx-auto md:mx-0"  />
            <h3 className="text-lg md:text-xl font-bold mt-4">Heavy Equipment Services</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
                Sometimes features require a short <br /> description. This can be detailed <br />
                description or just a short text.
            </p>
         
            </div>

            <div className="text-center md:text-start">
            <FaBoxOpen className="text-5xl text-[#DA7934] mx-auto md:mx-0"  />
            <h3 className="text-lg md:text-xl font-bold mt-4">Contanier Sea Cargo</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
                Sometimes features require a short <br /> description. This can be detailed <br />
                description or just a short text.
            </p>
         
            </div>
        </div>
        
        
        </div>       
        </section>

        <section className="bg-blue-900 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-sm uppercase font-semibold opacity-80">
                Industry Knowledge
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">
                Powering innovation across industries, globally.
                </h2>
            </div>

            {/* World Map Image */}
            <div className="flex justify-center mt-8">
                <img
                src="/images/map.png"
                alt="Global Map"
                className="w-full max-w-3xl md:max-w-5xl"
                />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-12">
                {/* Equity Value */}
                <div>
                <h3 className="text-4xl font-bold">$5b+</h3>
                <p className="text-lg font-semibold mt-2">Equity value</p>
                <p className="text-sm opacity-80 mt-2">
                    More than $5b USD in equity value created
                </p>
                </div>

                {/* Ventures */}
                <div>
                <h3 className="text-4xl font-bold">932</h3>
                <p className="text-lg font-semibold mt-2">Ventures</p>
                <p className="text-sm opacity-80 mt-2">
                    We’ve built, invested in, and accelerated hundreds of ventures globally.
                </p>
                </div>

                {/* Successful Pilots */}
                <div>
                <h3 className="text-4xl font-bold">81%</h3>
                <p className="text-lg font-semibold mt-2">Successful pilots</p>
                <p className="text-sm opacity-80 mt-2">
                    Facilitated hundreds of pilots between corporates and startups with an unmatched success rate.
                </p>
                </div>

                {/* Fortune 500 Partners */}
                <div>
                <h3 className="text-4xl font-bold">85+</h3>
                <p className="text-lg font-semibold mt-2">Fortune 500 partners</p>
                <p className="text-sm opacity-80 mt-2">
                    Working with us to solve big challenges.
                </p>
                </div>
            </div>
        </section>

    </>
    
  );
};

export default HeroPage;
