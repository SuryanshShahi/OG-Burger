import Img from "@/shared/Img";
import React from "react";
const HeroSection = () => {
  return (
    <div className="bg-primary font-oswald text-white !h-[calc(100vh-100px)] 2xl:!h-[800px] xl:flex flex-col justify-center relative">
      <div className="lg:flex max-w-[1200px] mx-auto w-full items-end h-full lg:pt-0 pt-20">
        <div className="relative my-auto z-10 ml-10 mx-auto lg:mx-0 lg:max-w-full sm:max-w-[480px]">
          <Img
            src={"/icons/ogTag.png"}
            isLocal
            alt="phone"
            width={254}
            height={254}
            className="absolute lg:h-[254px] animate-pulse lg:w-[254px] md:h-[180px] md:w-[180px] h-[120px] w-[120px] lg:-top-32 lg:-left-28 md:-left-20 md:-top-[100px] -left-12 -top-16"
          />
          <div className="max-w-[416px] font-hyberBlaster">
            <div className="flex lg:text-[140px] sm:text-[100px] text-[60px] leading-[60px] lg:leading-[140px] sm:leading-[100px]">
              JOIN <div>THE</div>
            </div>
            <div className="lg:text-[180px] sm:text-[140px] text-[100px] leading-[50px] lg:leading-[120px] sm:leading-[80px]">
              BURGER
            </div>
            <div className="lg:text-[105px] sm:text-[65px] text-[25px] leading-[46px] lg:leading-[106px] sm:leading-[66px]">
              REVOLUTION
            </div>
          </div>
          <h4 className="lg:text-[56px] sm:text-4xl text-2xl sm:leading-[56px] lg:mt-[54px] pr-4 mt-5 sm:mt-10 font-oswald">
            COME FOR THE BURGERS, STAY FOR THE VIBE
          </h4>
        </div>
        <div className="flex justify-end h-ful">
          <Img
            src={"/images/heroImage.png"}
            alt="phone"
            width={720}
            height={740}
            className="max-h-[520px] max-w-[505px] lg:max-h-[720px] lg:max-w-[740px] !object-cover absolute right-0 bottom-0"
          />
          <Img
            src={"/images/fries.png"}
            alt="phone"
            width={319}
            height={552}
            className="absolute lg:bottom[5%] bottom-0 sm:right-[10%] right-[15%] h[200px] lg:w-[400px] w-[319px] object-bottom"
          />
        </div>
      </div>
      <Img
        src={"/icons/white_bottom.png"}
        isLocal
        alt="phone"
        width={1440}
        height={85}
        className="w-full absolute bottom-0 h-[85px]"
      />
    </div>
  );
};

export default HeroSection;
