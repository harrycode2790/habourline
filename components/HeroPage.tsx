"use client";
import Image from "next/image";

const HeroPage = () => {
  return (
    <section className="px-6 py-12 md:py-20 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 md:space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight md:mb-4">
            We provide logistics solution
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            tailor-made for individual customer!
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Shipify Express provides customized services for customers around 
            the world from 50+ leading industries. For more information please
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <Image 
            src="/images/image1.png" 
            alt="Shipping Containers"
            width={900}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;