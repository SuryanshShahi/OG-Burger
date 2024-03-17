import React from "react";
import Img from "../Img";
import { MENU_DATA } from "@/utils/MenuItems";

const Tabs = ({
  data,
  className,
  onClick,
}: {
  data: any;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`shadow border duration-500 cursor-pointer border-gray-100 w-fit rounded-lg px-4 py-1 flex items-center gap-x-2 ${className}`}
    >
      <Img
        src={MENU_DATA[data][0]?.icon}
        alt="veg"
        height={26}
        width={34}
        className="max-h-[26px] max-w-[50px] object-contain"
      />
      <div className="text-xl font-oswald uppercase leading-5 text-nowrap">
        {data}
      </div>
    </div>
  );
};

export default Tabs;
