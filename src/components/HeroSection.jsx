import React from "react";
import plane from "../assets/images/plane.png";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col grow items-center justify-center min-[1200px]:justify-start">
        <div className="lg:mt-[40px]">
          <img className="w-full" src={plane} alt="plane" />
        </div>
        <h1 className="lg:mt-[54px] text-[#FFF] text-center font-montserrat text-[35px] sm:text-[48px] not-italic font-bold leading-[150%] tracking-[0.72px] capitalize px-3">
          Travel around the world
        </h1>
        <p className="px-3 mt-2 text-[rgba(255,255,255,0.70)] text-center font-inter text-xs not-italic font-normal leading-normal">
          One of the advantages of being disorganized is that one is always
          having surprising discoveries
        </p>
      </div>
    </>
  );
}

export default HeroSection;
