import Img from "@/shared/Img";
import Heading from "@/shared/Modal/Heading";
import OriginalTasteCard from "@/shared/cards/OriginalTasteCard";
import React, { useEffect, useRef, useState } from "react";
const OriginalTaste = () => {
  const images = [
    {
      image: "/images/burgerP1.png",
      height: "105",
      width: "203",
      className: "relative z-10",
    },
    {
      image: "/images/burgerP2.png",
      height: "61",
      width: "197",
    },
    {
      image: "/images/burgerP3.png",
      height: "82",
      width: "195",
      className: "relative",
    },
    {
      image: "/images/burgerP4.png",
      height: "51",
      width: "202",
      className: "z-10 relative",
    },
    {
      image: "/images/burgerP5.png",
      height: "51",
      width: "195",
      className: "relative",
    },
    {
      image: "/images/burgerP6.png",
      height: "64",
      width: "225",
      className: "",
    },
    {
      image: "/images/burgerP7.png",
      height: "57",
      width: "195",
      className: "relative z-10",
    },
    {
      image: "/images/burgerP8.png",
      height: "91",
      width: "229",
      className: "-mt-[52px] ml-2",
    },
  ];
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  console.log({ adsdsad: window?.innerWidth > 768 ? 0.5 : 0.25 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) {
            setVisible(isIntersecting);
          }
        });
      },
      {
        threshold: window?.innerWidth > 768 ? 0.5 : 0.25,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref.current]);
  useEffect(() => {
    visible && setIsActive(visible);
  }, [visible]);

  return (
    <div className="bg-[#222] py-28 px-5 relative" ref={ref}>
      <Img
        src={"/icons/white_bottom2.png"}
        isLocal
        alt="phone"
        width={1440}
        height={85}
        className="w-full absolute -top-1 left-0"
      />
      <div className="container mx-auto space-y-10">
        <Heading
          title="The Original Taste"
          subTitle="WHat Makes “OG” BURGERS THE BEST"
          styleSubTitle="text-white"
          className="text-center sm:mb-0 mb-20"
        />
        <div className="relative lg:hidden sm:flex hidden items-center justify-center max-w-[432px] w-full mx-auto">
          <Img
            src="/icons/originalTestBg.png"
            isLocal
            alt="original"
            height={432}
            width={432}
            className="mx-auto h-[432px] w-fit"
          />
          <div className="absolute group cursor-grab mt-6">
            {images?.map((item: any, idx: number) => (
              <Img
                key={idx}
                src={item?.image}
                alt="original"
                height={item?.height}
                width={item?.width}
                className={`mx-auto group-hover:-mt-12 -mt-12 ease-linear duration-500 ${
                  isActive ? "-mt-4" : visible ? "-mt-4" : "-mt-12"
                } ${item?.className}`}
              />
            ))}
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:justify-between gap-10">
          <div className="flex flex-col justify-between space-y-20">
            <OriginalTasteCard
              count="01"
              title="Original Taste Legacy"
              description="Experience the enduring appeal of our classic flavors, a taste that remains exceptional over time."
            />
            <OriginalTasteCard
              count="02"
              title="Longtime Tradition"
              description="Our dishes are steeped in rich history, delivering a taste of the past on every plate."
            />
          </div>
          <div className="relative md:scale-[1.2] justify-center items-center max-w-[432px] w-full lg:flex sm:hidden flex mt-10">
            <Img
              src="/icons/originalTestBg.png"
              isLocal
              alt="original"
              height={432}
              width={432}
              className="mx-auto lg:!h-[432px] lg:!w-[432px]"
            />
            <div className="absolute group cursor-grab mt-6">
              {images?.map((item: any, idx: number) => (
                <Img
                  key={idx}
                  src={item?.image}
                  alt="original"
                  height={item?.height}
                  width={item?.width}
                  className={`mx-auto group-hover:-mt-12 ease-linear -mt-12 duration-500 ${
                    isActive ? "-mt-4" : visible ? "-mt-4" : "-mt-12"
                  } ${item?.className}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-20 sm:mt-0 mt-20">
            <OriginalTasteCard
              count="03"
              title="Real Ingredients Always"
              description="We insist on using only genuine ingredients, ensuring each bite is an authentic representation of our heritage."
              rightAligned
            />
            <OriginalTasteCard
              count="04"
              title="Unchanging Quality"
              description="With each bite, you can count on the consistent, top-notch quality that has become our trademark."
              rightAligned
            />
          </div>
        </div>
      </div>
      <Img
        src={"/icons/white_bottom.png"}
        isLocal
        alt="phone"
        width={1440}
        height={85}
        className="w-full absolute bottom-0 left-0"
      />
    </div>
  );
};

export default OriginalTaste;
