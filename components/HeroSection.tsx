"use client";

import React from "react";
import Header from "./Header";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, backgroundImage }) => {
  return (
    <>
    
      <section
        className="relative h-[522px] md:h-[750px] bg-cover bg-center text-white text-center md:text-left"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
       
        <div className="absolute inset-0 bg-black/50"></div>

        <Header backgroundColor="transparent" textColor="white" />

        <div className="relative px-6 flex flex-col md:flex-row mt-16 md:mt-108 md:gap-8">
          <p className="text-4xl md:text-6xl font-bold md:max-w-[847px] md:pl-20">
            {title}
          </p>
          <p className="mt-4 text-base md:text-lg max-w-xs md:max-w-3xs mx-auto">
            {description}
          </p>
        </div>
</section>
    </>
  );
};

export default HeroSection;
