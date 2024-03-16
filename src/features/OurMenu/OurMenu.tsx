import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import MenuCard from "@/shared/cards/MenuCard";
import Tabs from "@/shared/cards/Tabs";
import { MENU_DATA } from "@/utils/MenuItems";
import React, { useEffect, useState } from "react";

const OurMenu = () => {
  const [isActive, setIsActive] = useState<any>(Object.keys(MENU_DATA)?.[0]);
  const [menuItem, setMenuItem] = useState<any>(Object.keys(MENU_DATA));
  useEffect(() => {
    setMenuItem([isActive]);
  }, [isActive]);

  return (
    <div>
      <div className='relative bg-[url("/images/ourMenu.png")] h-[320px] bg-cover flex justify-center items-center'>
        <div className="h-[320px] w-full bg-[rgb(0,0,0,0.2)] absolute"></div>
        <div className="text-white text-[58px] font-bold z-10">Our Menu</div>
        <Img
          src={"/icons/white_bottom.png"}
          alt="phone"
          width={1440}
          height={85}
          isLocal
          className="w-full absolute bottom-0"
        />
      </div>

      <div className="container mx-auto py-24 px-5">
        <div className="flex gap-x-6 overflow-x-scroll mb-10 p-2">
          {Object.keys(MENU_DATA)?.map((item: any, idx: number) => (
            <Tabs
              data={item}
              key={idx}
              onClick={() => setIsActive(item)}
              className={
                isActive === item ? "bg-primary text-white border-primary" : ""
              }
            />
          ))}
        </div>
        <div className="md:space-y-8 space-y-12 lg:columns-2 gap-x-10 place-items-center">
          {menuItem?.map((item: any, idx: number) => (
            <div className="flex flex-col items-center gap-y-8" key={idx}>
              {MENU_DATA[item]?.map((item1: any, idx1: number) => (
                <div
                  className="space-y-8 lg:w-full max-[640px]:w-full"
                  key={idx1}
                >
                  <div className="text-[32px] font-BebasNeue self-start mb-8 leading-8">
                    {item1?.title}
                  </div>
                  {item1?.varients?.map((item2: any, idx2: number) => (
                    <MenuCard data={item2} key={idx2} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Button className="font-semibold !bg-[#121212] hover:!bg-[#121212]/80 flex items-center gap-x-2 h-12 rounded-3xl px-6 mx-auto mt-10">
          <Img
            src="/icons/dineIn.png"
            alt="phone"
            width={18}
            height={18}
            isLocal
          />
          See Dine-In Menu
        </Button>
      </div>
    </div>
  );
};

export default OurMenu;
