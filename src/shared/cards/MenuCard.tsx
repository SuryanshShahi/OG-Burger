import React from "react";
import Img from "../Img";

const MenuCard = ({
  data,
}: {
  data: { title: string; description: string; price: number };
}) => {
  return (
    <div className="flex gap-x-5 max-w-[564px] justify-between">
      <div className="space-y-2">
        <Img src="/icons/veg.png" alt="veg" height={16} width={16} isLocal />
        <div className="text-[18px] font-semibold">{data?.title}</div>
        <div className="font-medium">₹ {data?.price}</div>
        <p className="text-xs text-gray-600">{data?.description}</p>
      </div>
      <Img
        src="/images/unleash1.png"
        alt="veg"
        height={130}
        width={130}
        isLocal
        className="rounded-2xl"
      />
    </div>
  );
};

export default MenuCard;
