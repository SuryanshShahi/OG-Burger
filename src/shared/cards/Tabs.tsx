import React from "react";
import Img from "../Img";
import { MENU_DATA } from "@/utils/MenuItems";

const Tabs = ({
  data,
  className,
  onClick,
  isActive,
}: {
  data: any;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`shadow border duration-500 cursor-pointer border-gray-100 gap-y-1 w-fit lg:rounded-2xl rounded-lg lg:px-6 lg:py-4 px-4 py-1 flex lg:flex-col items-center gap-x-2 ${className}`}
    >
      <div className="relative flex justify-center items-center">
        <Img
          alt="veg"
          height={82}
          width={82}
          isLocal
          className="lg:block hidden h-[82px] min-w-[82px]"
          src={isActive ? "/icons/tabFrameSelected.png" : "/icons/tabFrame.png"}
        />
        <Img
          src={MENU_DATA[data][0]?.icon}
          alt="veg"
          height={50}
          width={50}
          className="lg:max-h-[35px] max-h-[26px] max-w-[50px] object-contain lg:absolute"
        />
      </div>
      <div className="lg:text-lg text-xl font-oswald uppercase leading-5 text-nowrap">
        {data}
      </div>
    </div>
  );
};

export default Tabs;
