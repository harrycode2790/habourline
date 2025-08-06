"use client";

import React from "react";
import Header from "./Header";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, backgroundImage, backgroundColor }) => {
  return (
    <>
    
      <section
        className={`relative min-h-[522px] md:min-h-[750px] bg-cover bg-center text-white md:text-left bg-[${backgroundColor}]`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
       
        {backgroundImage && (
          <div className="absolute inset-0 bg-black/50"></div>
          )
        }


        <div className="relative px-6 flex flex-col md:flex-row pt-28 md:pt-[492px] md:gap-8">
          <p className="text-4xl md:text-6xl font-bold md:max-w-[847px] md:pl-20">
            {title}
          </p>
          <p className="mt-4 mb-8 text-base md:text-lg max-w-xs md:max-w-3xs mx-auto">
            {description}
          </p>
        </div>
</section>
    </>
  );
};

export default HeroSection;
